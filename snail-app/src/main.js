import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import axios from "axios"
import vuetify from "./plugins/vuetify"
import config from "./config/config.json"

var VueAuthImage = require('vue-auth-image');
Vue.config.productionTip = false
Vue.use(VueAuthImage)

axios.defaults.baseURL = config.url + "/api/v1"
const token = localStorage.getItem("token")
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

axios.interceptors.response.use(undefined, function (err) {
  return new Promise(function () {
      if (err.status === 401 ) {
          this.$store.reset()
          this.$store.dispatch("logout")
      }
      throw err;
  });
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
