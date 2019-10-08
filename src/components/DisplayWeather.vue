<template>
    <div id="weather-display">
        {{weather}}
    </div>
</template>

<script>
    export default {
        name: "DisplayWeather",
        data(){
            return{
                weather: "",
            }
        },
        created(){
            this.loadWeather()
        },
        methods:{
          async loadWeather(){
              await this.$store.dispatch("getWeather")
              this.weather = this.$store.state.weather
          }
        },
    }
</script>

<style scoped>

</style>