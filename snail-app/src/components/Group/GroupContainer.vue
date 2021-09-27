<template lang="">
<v-container fluid class="pt-12">
<v-row justify="center" class="mx-auto">
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="group in groups"
        :key="group.skupinaId"
      >
      <v-expansion-panel-header class="secondary">
        <v-row >
          <v-col cols="12" >
            {{group.jmeno}}
          </v-col>
          <v-col cols="4" class="text--secondary">
            {{group.komentar}}
          </v-col>
          <v-col cols="4" class="text--secondary">
            Velikost: {{group.velikost}}
          </v-col>
          <v-col cols="4">
            <v-btn outlined rounded text depressed class="info"> Detaily </v-btn>
            <v-btn outlined rounded text depressed class="info"> Uprav </v-btn>
          </v-col>
          
        </v-row>
      </v-expansion-panel-header>
        <v-expansion-panel-content class="secondary">
            <Group :id="group.skupinaId"></Group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
  </v-container>
</template>
<script>
import Group from '@/components/Group/Group.vue'

export default {
    props: {
        ids: []
    },
    async mounted() {
        await this.$store.dispatch('getGroups')
    },
    computed: {
        groups() {
            const activeGroups = this.$store.getters.activeGroups
            return activeGroups.filter(ag => !this.ids.includes(ag.skupinaId) )
        }
    },
    components: {Group}
}
</script>
<style lang="">
    
</style>