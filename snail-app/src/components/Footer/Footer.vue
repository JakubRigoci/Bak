<template>
  <v-card height="200px" class="primary" flat>
    <v-footer
      fixed
      padless
    >
      <v-card
        flat
        tile
        width="100%"
        class="secondary text-center"
      >
        <v-card-text>
            <span> Počet šnekov: {{snails}}</span>
            <span> Počet skupin: {{groups}}</span>
            <span> Počet boxov: {{boxes}}</span>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
  export default {
    created() {
        this.$store.dispatch("getSnails")
        this.$store.dispatch("getBoxes")
        this.$store.dispatch("getGroups")
    },
    computed: {
      boxes(){
          return this.$store.state.boxes.length;
      },
      groups(){
          return this.$store.state.groups.length;
      },
      snails(){
          return this.$store.state.snails.length;
      }
    },
  }
</script>