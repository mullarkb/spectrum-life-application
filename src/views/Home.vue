<template>
  <div class="home">
    <b-button-group>
      <b-button>Dublin</b-button>
      <b-button>Cork</b-button>
      <b-button>Galway</b-button>
    </b-button-group>
    <DisplayWeather />
  </div>
</template>

<script>
// @ is an alias to /src

import DisplayWeather from "../components/DisplayWeather";

export default {
  name: 'home',
  components: {
    DisplayWeather,
  }
}
</script>
