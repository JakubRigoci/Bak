<template lang="">
<div>
    <h1 class="subheading grey--text">Snuska</h1>
    <v-divider></v-divider>
    <v-container class="my-5">
        <div class="params">
            <v-row>
                <v-col>
                    <p> <b>Komentář:</b> {{snuska.komentar}}</p>
                </v-col>
                <v-col>
                    <p> <b>Velikost:</b> {{snuska.velikost}}</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p> <b>Datum snesení:</b> {{format(snuska.datumSneseni)}}</p>
                </v-col>
                <v-col>
                    <p> <b>Skupina:</b> {{group.komentar}}</p>
                </v-col>

            </v-row>
            <v-row>
                <v-col>
                    <p v-if="snuska.periodaVylihnutiKonec"> <b>Perioda vylíhnutí:</b>
                        {{format(snuska.periodaVylihnutiStart)}} - {{format(snuska.periodaVylihnutiKonec)}}</p>
                    <p v-if="!snuska.periodaVylihnutiKonec">
                        <b>Vylíhnutí:</b> {{format(snuska.periodaVylihnutiStart)}}</p>
                </v-col>
                <v-col>
                    <p v-if="snail"> <b>Matka:</b> {{snail.jmeno}}</p>
                </v-col>
            </v-row>
        </div>
        <div class="buttons">
            <v-row>
                <SnuskaEditPopup :snuskaProp="Object.assign({}, snuska)"></SnuskaEditPopup>
                <SnuskaRemovePopup class="ml-2" :id="Number.parseInt(this.$route.params.id)" :reroute="true"></SnuskaRemovePopup>
            </v-row>
        </div>
    </v-container>
    <h1 class="pt-8 subheading grey--text">Události</h1>
    <v-btn class="secondary" @click="showEvents = !showEvents">
        <v-icon>{{ showEvents ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
    </v-btn>
    <v-expand-transition>
        <div v-show="showEvents">
            <v-divider></v-divider>
            <SnuskaEvents :snuskaId="Number.parseInt(this.$route.params.id)"></SnuskaEvents>
        </div>
    </v-expand-transition>
</div>
</template>

<script>
import SnuskaRemovePopup from "@/components/Snuska/SnuskaRemovePopup"
import SnuskaEvents from "@/components/Snuska/SnuskaEvents.vue"
import SnuskaEditPopup from "@/components/Snuska/SnuskaEditPopup.vue"
import {
    format
} from "@/components/Shared/DateFormater"

export default {
    created() {
        this.$store.dispatch("getSnuskas")
        this.$store.dispatch("getSnails")
        this.$store.dispatch("getGroups")
    },
    data() {
        return {
            showEvents: false
        }
    },
    components: {
        SnuskaRemovePopup,
        SnuskaEvents,
        SnuskaEditPopup
    },
    computed: {
        snuska() {
            return this.$store.state.snuskas.find(s => {
                return s.snuskaId === Number.parseInt(this.$route.params.id);
            }) || {};
        },
        group() {
            return this.$store.state.groups.find(g => {
                return g.skupinaId === this.snuska.skupinaId
            }) || "";
        },
        snail() {
            return this.$store.state.snails.find(s => {
                return s.snekId === this.snuska.matkaId
            }) || "";
        }
    },
    methods: {
        format: format
    }
}
</script>

<style lang="">

</style>
