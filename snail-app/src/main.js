import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Axios.defaults.baseURL = 'http://192.168.0.106:8081/api/v1/'
Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
