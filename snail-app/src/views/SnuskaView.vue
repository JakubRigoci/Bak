<template lang="">
<div>
    <h1 class="subheading grey--text">Snuska</h1>
    <v-divider></v-divider>
    <v-container class="my-5">
        <div class="params">
            <p> <b>Komentář:</b> {{snuska.komentar}}</p>
            <p> <b>Velikost:</b> {{snuska.velikost}}</p>
            <p> <b>Datum snesené:</b> {{snuska.datumSneseni}}</p>
            <p v-if="snuska.periodaVylihnutiKonec"> <b>Perioda vylíhnutí:</b> {{snuska.periodaVylihnutiStart}} - {{snuska.periodaVylihnutiKonec}}</p>
            <p> <b>Skupina:</b> {{group.komentar}}</p>
            <p v-if="snail"> <b>Matka:</b> {{snail.komentar}}</p>
        </div>
        <div class="buttons">
            <v-btn width="100px" outlined text depressed class="ma-2  width:100px info"> Uprav </v-btn>
            <SnuskaEditPopup :snuska="Object.assign({}, snuska)"></SnuskaEditPopup>
            <SnuskaRemovePopup :id="Number.parseInt(this.$route.params.id)" :reroute="true"></SnuskaRemovePopup>
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
    }
}
</script>

<style lang="">

</style>
