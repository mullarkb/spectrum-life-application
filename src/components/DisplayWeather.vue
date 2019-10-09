<template>
    <div id="weather-display">
        <h3 v-if="weather.city">{{selectedMetric}} forecast for {{weather.city.name}}</h3>
        <b-button-group>
            <b-button @click="selectTemp">Temperature</b-button>
            <b-button @click="selectRain">Rainfall</b-button>
        </b-button-group>
        <BarChart
                v-if="selectedMetric === 'Rainfall'"
                :chart-data="rainData"
                :height="200"/>
        <LineChart
                v-if="selectedMetric === 'Temperature'"
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
                temperatures: [],
                timestamps: [],
                graphLabel: 'Degrees Celcius',
                selectedMetric: 'Temperature'
            }
        },
        created(){
            this.loadWeather()
        },
        methods:{
            async loadWeather(){
              await this.$store.dispatch("getWeather", this.locationID)
              this.weather = this.$store.state.weather
                //get the temperature data
              this.temperatures = this.weather.list.map(x => x.main.temp)
                //get the rain data
              this.rain = this.weather.list.map(x => {
                  // if there is no rain forecast list.rain doesn't exist
                  if(x.rain){
                      return x.rain['3h']
                  } else return 0
              })
                //get the corresponding timestamps
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
              this.selectedMetric = 'Temperature'
            },
            selectRain(){
              this.selectedMetric = 'Rainfall'
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