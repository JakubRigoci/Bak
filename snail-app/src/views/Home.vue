<template>
  <v-app class='primary'>
    <v-app-bar
      app
      class='secondary'
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Snail App</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <SnailContainer></SnailContainer>
    </v-main>
  </v-app>
</template>

<script>
//import BoxContainer from '@/components/Box/BoxContainer.vue'
import SnailContainer from '@/components/Snail/SnailContainer.vue'
//const axios = require('axios');
  export default {
    data() {
      return {
        boxes: [
          {name: "box1" , dlzka: "120cm", sirka: "50cm"},
          {name: "box2" , dlzka: "150cm", sirka: "540cm"},
          {name: "box3" , dlzka: "20cm", sirka: "250cm"},
          {name: "box4" , dlzka: "20cm", sirka: "250cm"}
        ]
      }
    },
    components: {SnailContainer},
    // created: function() {
    //   axios.get(/)
    // }
  }
</script>
