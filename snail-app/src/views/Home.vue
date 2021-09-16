<template>
<v-container fluid>
      <BoxContainer></BoxContainer>

</v-container>
</template>

<script>
import BoxContainer from '@/components/Box/BoxContainer.vue'
//import SnailContainer from '@/components/Snail/SnailContainer.vue'
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
    components: {BoxContainer},
    created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
        }
        throw err;
      });
    });}
  }
</script>
