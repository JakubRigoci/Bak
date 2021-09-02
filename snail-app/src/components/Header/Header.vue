<template>
    <v-app-bar
      app
      class='secondary'
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Snail App</v-toolbar-title>
      
      <router-link to="/login">login</router-link> |
      <router-link to="/home">home</router-link>
      
      <v-spacer></v-spacer>
        <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
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
      }
    },
    mounted : function () {
        console.log(this.isLoggedIn)
    }
  }
</script>
