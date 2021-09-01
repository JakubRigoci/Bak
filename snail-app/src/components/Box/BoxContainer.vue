<template lang="">
<v-container class="primary" fluid>
        <v-row>
          <v-col
            v-for="box in boxes"
            :key="box.name"
            :cols='12'
            :md='6'
            :lg="4"
          >           
              <Box></Box>
          </v-col>
        </v-row>
      </v-container>
</template>
<script>
import Box from '@/components/Box/Box.vue'
export default {
    components: {Box},
    data() {
        return {
             boxes: [
          {name: "box1" , dlzka: "120cm", sirka: "50cm"},
          {name: "box2" , dlzka: "150cm", sirka: "540cm"},
          {name: "box3" , dlzka: "20cm", sirka: "250cm"},
          {name: "box3" , dlzka: "20cm", sirka: "250cm"},
          {name: "box3" , dlzka: "20cm", sirka: "250cm"}
        ]
        }
    },
    computed: {
      height () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 22
          case 'sm': return 40
          case 'md': return 50
          case 'lg': return 60
          case 'xl': return 80
          default: return 40
        }
      },
    },
}
</script>
<style lang="">
    
</style>