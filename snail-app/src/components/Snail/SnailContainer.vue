<template>
<v-container fluid class="pt-4">
    <v-row justify="center">
        <v-expansion-panels tile popout>
            <v-expansion-panel v-for="snail in snails" :key="snail.snekId">
                <v-expansion-panel-header class="info" v-slot="{ open }">
                    <v-card color="info" elevation=0>
                        <v-row no-gutters>
                            <v-col cols='12'>
                                <p>{{snail.jmeno}}</p>
                            </v-col>
                            <v-col cols="12" class="text--secondary">
                                <v-fade-transition leave-absolute>
                                    <v-row v-if="!open" no-gutters style="width: 100%">
                                        <v-col cols='12' md='6' lg="4">
                                            <b>Komentář:</b>
                                            <p>{{snail.komentar}}</p>
                                        </v-col>
                                        <v-col v-if="snail.barvaUlita" cols='12' md='6' lg="4">
                                            <b>Barva ulity:</b> {{ snail.barvaUlita }}
                                        </v-col>
                                        <v-col v-if="snail.barvaTelo" cols='12' md='6' lg="4">
                                            <b>Barva těla:</b> {{ snail.barvaTelo }}
                                        </v-col>
                                    </v-row>
                                </v-fade-transition>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-expansion-panel-header>
                <v-expansion-panel-content id="innerExPan" class="info">
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

<style lang="scss">
#innerExPan>* {
    padding: 2px
}

.v-tabs__item {
    text-transform: none !important;
}
</style>
