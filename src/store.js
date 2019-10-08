import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   weather: "",
  },
  mutations: {
    getWeather(state, data){
      state.weather = data
    }
  },
  actions: {
    async getWeather(context){
      let res = await Vue.axios.get("http://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=1fadda89ebba87920cec56a76d72abcd")
      let data  =  res.data
      context.commit("getWeather", data)
    }
  }
})
