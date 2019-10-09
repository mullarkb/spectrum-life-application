<template>
    <div class="home">
      <b-container >
        <b-row>
          <h1>Weather App</h1>
        </b-row>
        <b-row>
          <p>Select a city to view the weather:</p>
        </b-row>
        <b-row>
          <b-button-group lg="12">
            <LocationButton v-for="location in locations"
                    :key="location.id"
                    :location="location" />
          </b-button-group>
        </b-row>
        <DisplayWeather v-if="locationSelected"/>
      </b-container>
    </div>
</template>

<script>
// @ is an alias to /src

import DisplayWeather from "../components/DisplayWeather";
import LocationButton from "../components/LocationButton";

export default {
  name: 'home',
  components: {
    LocationButton,
    DisplayWeather,
  },
  data(){
    return{

    }
  },
  computed:{
    locations(){
      return this.$store.state.locations
    },
    locationSelected(){
      return (this.$store.state.selectedLocationID != null)
    }
  }
}
</script>
<style lang="less">
  .btn-group{
    margin: 15px auto;
  }
</style>