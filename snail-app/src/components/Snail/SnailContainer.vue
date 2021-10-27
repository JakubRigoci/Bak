<template>
<v-container fluid class="pt-4">
    <v-row justify="center">
        <v-expansion-panels accordion tile popout>
            <v-expansion-panel v-for="snail in snails" :key="snail.snekId">
                <v-expansion-panel-header class="info" v-slot="{ open }">
                    <v-row no-gutters>
                        <v-col cols="4">
                            {{snail.jmeno}}
                        </v-col>
                        <v-col cols="8" class="text--secondary">
                            <v-fade-transition leave-absolute>
                                <v-row v-if="!open" no-gutters style="width: 100%">
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
                <v-expansion-panel-content class="info">
                    <Snail :groupId="groupId" :snailId="snail.snekId"></Snail>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <SnailAddPopup :groupId="groupId"></SnailAddPopup>
    </v-row>
</v-container>
</template>

<script>
import Snail from "@/components/Snail/Snail.vue"
import SnailAddPopup from "@/components/Snail/SnailAddPopup.vue"
export default {
    created() {
      this.$store.dispatch("getSnailsForGroup", this.groupId)
    },
    computed: {
      snails() {
        return this.$store.getters.snailsByGroup(this.groupId)
      }
    },
    components: {
        Snail,
        SnailAddPopup
    },
    props: {
        groupId: Number
    },

}
</script>

<style lang="">

</style>
