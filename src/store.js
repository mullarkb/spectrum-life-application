import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Constants from './constants'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locations:[
      {
        "id": 7778677,
        "name": "Dublin",
        "country": "IE",
        "coord": {
          "lon": -6.24922,
          "lat": 53.355122
        }
      },
      {
        "id": 2965140,
        "name": "Cork",
        "country": "IE",
        "coord": {
          "lon": -8.47061,
          "lat": 51.897968
        }
      },
      {
        "id": 2964179,
        "name": "Galway",
        "country": "IE",
        "coord": {
          "lon": -9,
          "lat": 53.333328
        }
      },

    ],
    selectedLocationID:"",
   weather: "",
  },
  mutations: {
    selectLocation(state, locationID){
      state.selectedLocationID = locationID
    },
    getWeather(state, data){
      state.weather = data
    }
  },
  actions: {
    selectLocation(context, locationID){
      context.commit("selectLocation", locationID)
    },
    async getWeather(context, locationID){
      let res = await Vue.axios.post(Constants.API_URL + locationID +"&units=metric&APPID=" + Constants.API_KEY)
      let data  =  res.data
      context.commit("getWeather", data)
    }
  }
})
