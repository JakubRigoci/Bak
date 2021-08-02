<template>
  <div class="login">
    <input v-model="name"/>
    <br/>
    <input v-model="password"/>
    <button v-on:click="onClick">Login</button>
  </div>
</template>

<script>
// @ is an alias to /src
const axios = require('axios');


export default {
  name: 'Login',
  data() {
      return {
                name: 'name',
      password: 'password'
      }
  },
  methods: {
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