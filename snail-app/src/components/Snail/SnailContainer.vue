<template>
  <v-row justify="center">
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="item in dummy"
        :key="item.id"
      >
      <v-expansion-panel-header v-slot="{ open }">
        <v-row no-gutters>
          <v-col cols="4" v-if="!open">
            {{item.name}}
          </v-col>
          <v-col
            cols="8"
            class="text--secondary"
          >
            <v-fade-transition leave-absolute>
              <v-row
                v-if="!open"
                no-gutters
                style="width: 100%"
              >
                <v-col cols="4">
                  Komentar: {{snail.komentar || "Not Set"}}
                </v-col>
                <v-col cols="4">
                  Barva ulity: {{ snail.barvaUlita || 'Not set' }}
                </v-col>
                <v-col cols="4">
                  Barva tela: {{ snail.barvaTelo || 'Not set' }}
                </v-col>
              </v-row>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-header>
        <v-expansion-panel-content>
            <Snail></Snail>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
import Snail from '@/components/Snail/Snail.vue'
export default {
    components: {Snail},
    data() {
        return {
            dummy: [
                {id: 1, name: 'aaa'},
                {id: 2, name: 'bbb'},
                {id: 3, name: 'ccc'},
                {id: 4, name: 'ddd'}
            ],
            snail: {
      "snekId": 0,
      "jmeno": "string",
      "komentar": "snek mi tu snekuje",
      "barvaUlita": "cervena",
      "barvaTelo": "cierna",
      "vzorecUlita": "string",
      "narozen": "2021-01-04",
      "zemrel": "2021-01-04",
      "prodan": "2021-01-04",
      "puvodSneka": "string",
      "zverejnit": true,
      "aktivni": true,
      "taxonomyId": 0,
      "snuskaId": 0,
      "galerieId": 0
    },
        }
    }
}
</script>
<style lang="">
    
</style>