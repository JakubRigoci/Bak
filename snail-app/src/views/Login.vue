<template>
<v-app>
    <Header></Header>
  <v-main>
  <div class="login">
    <input v-model="name"/>
    <br/>
    <input v-model="password"/>
    <button v-on:click="login">Login</button>
  </div>
  </v-main>
  </v-app>

</template>

<script>
// @ is an alias to /src
const axios = require('axios');
import Header from '@/components/Header/Header.vue'

export default {
  name: 'Login',
  components: {Header},
  data() {
      return {
                name: 'name',
      password: 'password'
      }
  },
  methods: {
      login: function () {
        let name = this.name
        let password = this.password
        this.$store.dispatch('login', {name, password})
       .then(() => this.$router.push('/home'))
       .catch(err => console.log(err))
      },
    onClick() {
      axios.post('/auth/signin', {
        username: this.name,
        password: this.password
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>