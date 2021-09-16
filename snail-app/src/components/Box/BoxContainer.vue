<template lang="">
<v-container fluid>
        <v-row allign="center">
          <v-col
            v-for="box in box"
            :key="box.name"
            :cols='12'
            :md='6'
            :lg="4"
          > 
          <div @click="printId">
              <Box  :id="box.boxId"></Box>
          </div>          

          </v-col>
          <v-col>
          <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
          <v-card allign="center" class="mx-auto primary justify-center d-flex" max-width="344" outlined>
          <v-avatar v-bind="attrs"
          v-on="on" :click="showBoxPopup" class="d-flex " color="secondary" size='120'>
              <v-icon x-large> mdi-archive-plus </v-icon>
          </v-avatar>
          </v-card>
          </template>
          <span>Pridat box</span>
          </v-tooltip>  
          </v-col>

        </v-row>
</v-container>
</template>
<script>
import Box from "@/components/Box/Box.vue";
export default {
  components: { Box },
  data() {
    return {
      boxes: [
        { name: "box1", dlzka: "120cm", sirka: "50cm" },
        { name: "box2", dlzka: "150cm", sirka: "540cm" },
        { name: "box3", dlzka: "20cm", sirka: "250cm" },
        { name: "box3", dlzka: "20cm", sirka: "250cm" },
        { name: "box3", dlzka: "20cm", sirka: "250cm" },
      ],
    };
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 22;
        case "sm":
          return 40;
        case "md":
          return 50;
        case "lg":
          return 60;
        case "xl":
          return 80;
        default:
          return 40;
      }
    },
    box() {
      return this.$store.state.boxes;
    },
  },
  mounted() {
    this.$store.dispatch("getBoxes");
    console.log(this.box);
  },
  methods: {
    printId() {
      console.log(this.box[0].boxId);
    },
    showBoxPopup() {
      
    }
  },
};
</script>
<style lang="">
</style>