<template>
    <v-app-bar
      class='secondary'
      app
    >
      <v-toolbar-title>Snail App</v-toolbar-title>
      
     
      
      <v-spacer></v-spacer>
       <router-link to="/home">home</router-link>
        <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
        <span v-if="!isLoggedIn"> | <a @click="login">Login</a></span>
    </v-app-bar>
</template>

<script>
  export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      },
      login: function () {
        this.$router.push('/login')
      }
    },
    mounted : function () {
        console.log(this.isLoggedIn)
    }
  }
</script>
