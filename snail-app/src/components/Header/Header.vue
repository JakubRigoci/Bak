<template>
    <v-app-bar
      class="secondary"
      app
    >
      <v-toolbar-title @click="boxes" >Snail App</v-toolbar-title>
      
     
      
      <v-spacer></v-spacer>
        <span><a @click="snuskas">Snusky</a></span>
        <span>|<a @click="boxes">Boxy</a></span>
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
      snuskas() {
        this.$router.push("/snuskas")
      },
      boxes() {
        this.$router.push("/home");
      }
    },
    mounted() {
        console.log(this.isLoggedIn)
    }
  }
</script>
