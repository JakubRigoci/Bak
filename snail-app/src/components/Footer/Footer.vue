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
            <span> Pocet snekov: {{snails}}</span>
            <span> Pocet skupin: {{groups}}</span>
            <span> Pocet boxov: {{boxes}}</span>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
        'mdi-delete',
      ]
    }),
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