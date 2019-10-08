<template>
    <div id="weather-display">
        <h3>Weather forecast for {{weather.city.name}}</h3>
        <b-button-group>
            <b-button @click="selectTemp">Temperature</b-button>
            <b-button @click="selectRain">Rainfall</b-button>
        </b-button-group>
        <BarChart
                v-if="selectedMetric === 'rain'"
                :chart-data="rainData"
                :height="200"/>
        <LineChart
                v-if="selectedMetric === 'temp'"
                :chart-data="tempData"
                :height="200"/>
    </div>
</template>

<script>
    import LineChart from './LineChart.js'
    import BarChart from "./BarChart";
    export default {
        name: "DisplayWeather",
        components: {BarChart, LineChart},
        data(){
            return{
                weather: {},
                tempData: null,
                rainData: null,
                temperatures: [0,1,4,],
                timestamps: ['dsf', 'sf', 'wfsf'],
                graphLabel: 'Degrees Celcius',
                selectedMetric: 'temp'
            }
        },
        created(){
            this.loadWeather()
        },
        methods:{
          async loadWeather(){
              await this.$store.dispatch("getWeather", this.locationID)
              this.weather = this.$store.state.weather
              this.temperatures = this.weather.list.map(x => x.main.temp)
              this.rain = this.weather.list.map(x => {
                  if(x.rain){
                      return x.rain['3h']
                  } else return 0
              })
              this.timestamps = this.weather.list.map(x => x.dt_txt)
              this.fillData()
          },
            fillData () {
                this.tempData = {
                    datasets: [{
                        label: 'Degrees Celcius',
                        data: this.temperatures,
                        borderColor: '#e83a75'
                    }],
                    labels: this.timestamps,

                }
                this.rainData = {
                    datasets: [{
                        label: 'Rainfall (mm)',
                        data: this.rain,
                        backgroundColor: '#e83a75'
                    }],
                    labels: this.timestamps
                }
            },
            selectTemp(){
              this.selectedMetric = 'temp'
            },
            selectRain(){
              this.selectedMetric = 'rain'
            }
        },
        computed:{
          locationID(){
              return this.$store.state.selectedLocationID
          },

        },
        watch:{
            locationID(){
                this.loadWeather();
            },
        }
    }
</script>

<style scoped>
    #weather-display{

    }
</style>