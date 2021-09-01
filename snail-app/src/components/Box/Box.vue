<template>
  <v-card class="mx-auto secondary" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content class="pa-8">
        <div class="text-overline mb-4">Box</div>
        <v-list-item-title class="text-h5 mb-1">
          {{box.jmeno}}
        </v-list-item-title>
        <v-list-item-subtitle>
          Vyska: {{box.vyska}}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          Sirka: {{box.sirka}}
        </v-list-item-subtitle>
      </v-list-item-content>

     <v-icon x-large class="pr-8"> mdi-archive </v-icon>
    </v-list-item>
    <v-card-actions class="d-flex justify-space-around mb-6">
      <v-btn outlined rounded text depressed class="info"> Detaily </v-btn>
      <v-btn outlined rounded text depressed class="info"> Uprav </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    id: Number,
  },
  data() {
    return {
      box: {
        boxId: 0,
        komentar: "cerveny box",
        jmeno: "muj box 1",
        vyska: "12.2",
        sirka: "12.2",
        hloubka: "12.2",
        datumPorizeni: "2021-01-01",
        prodejce: "alza",
      },
    };
  },
};
</script>

<style lang="">

</style>