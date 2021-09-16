import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://192.168.1.110:8081/api/v1/'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
//axios.defaults.headers.common['Authorization'] = 'Bearer: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6IjEiLCJyb2xlcyI6W3siYXV0aG9yaXR5IjoiVVNFUiJ9LHsiYXV0aG9yaXR5IjoiQURNSU4ifV0sImlhdCI6MTYzMTAzOTM4MywiZXhwIjoxNjMxMzk5MzgzfQ.uo24fB63tpdG48J9l1yFM3GP0tgfHUgC8AOct8dTOV3ss0YqlkOfhd8J2FPnx-1AhWfNcq6FOkNEkJAfJU45bg'


const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
