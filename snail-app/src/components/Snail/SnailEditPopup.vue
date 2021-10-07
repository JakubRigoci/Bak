<template lang="">
    <div>
        <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
        >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" outlined block width="150px" text depressed class="mt-4 info"> Pridat sneka </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Pridat sneka</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    v-model="snail.jmeno"
                    label="Jmeno*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    v-model="snail.komentar"
                    label="Komentar"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    v-model="snail.barvaUlita"
                    label="Barva ulity*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="snail.barvaTelo"
                    label="Barva tela*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="snail.vzorecUlita"
                    label="vzor ulity*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="snail.narozen"
                    label="Datum porizeni*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                >
                <v-select
                  v-model="snail.snuskaId"
                  :items="snuskas"
                  item-text="komentar"
                  item-value="snuskaId"
                  label="Snuska*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                >
                <v-select
                  v-model="snail.taxonomyId"
                  :items="taxonomies"
                  item-text="jmeno"
                  item-value="taxonomyId"
                  label="Taxonomie*"
                  required
                ></v-select>
              </v-col>
                <v-col cols="12">
                <v-text-field
                    v-model="snail.puvodSneka"
                    label="Puvod sneka*"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="save"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</template>
<script>
export default {
  props: {
    id: Number,
  },
  created() {
    this.$store.dispatch("getSnuskas")
    this.$store.dispatch("getTaxonomies")
  },
  data: () => ({
    dialog: false,
    snail: {
        snekId: 0,
        jmeno: "",
        komentar: "",
        barvaUlita: "",
        barvaTelo: "",
        vzorecUlita: "",
        narozen: "",
        zemrel: "",
        prodan: "",
        puvodSneka: "",
        zverejnit: true,
        aktivni: true,
        taxonomyId: 0,
        snuskaId: 0,
        galerieId: 0
    }

  }),
  computed: {
    snuskas() {
      return this.$store.state.snuskas
    },
    taxonomies() {
      return this.$store.state.taxonomies
    }
  },
  methods:{
      save() {
          this.dialog = false
          this.$store.dispatch("addSnail", {id: this.id, snail: this.snail})
      }
  }
};
</script>
<style lang="">
</style>