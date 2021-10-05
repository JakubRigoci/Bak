<template>
    <v-app-bar
      class="secondary"
      app
    >
      <v-toolbar-title @click="home" >Snail App</v-toolbar-title>
      
     
      
      <v-spacer></v-spacer>
        <span><a @click="home">Home</a></span>
        <span v-if="isLoggedIn">|<a @click="logout">Logout</a></span>
        <span v-if="!isLoggedIn">|<a @click="login">Login</a></span>
    </v-app-bar>
</template>

<script>
  export default {
    computed : {
      isLoggedIn(){ 
        return this.$store.getters.isLoggedIn}
      },
    methods: {
      logout() {
        this.$store.dispatch("logout")
        .then(() => {
          this.$router.push("/login")
        })
      },
      login() {
        this.$router.push("/login")
      },
      home() {
        this.$router.push("/home");
      }
    },
    mounted() {
        console.log(this.isLoggedIn)
    }
  }
</script>
