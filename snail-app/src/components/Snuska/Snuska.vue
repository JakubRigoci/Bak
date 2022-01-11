<template>
<v-card class="mx-auto secondary" max-width="344" outlined>
    <v-list-item three-line>
        <v-list-item-content class="pa-8">
            <div class="text-overline mb-4">{{snuska.komentar}}</div>
            <v-list-item-title class="mb-1">
                Velikost: {{snuska.velikost}}
            </v-list-item-title>
            <v-list-item-subtitle>
                Datum snesení: {{format(snuska.datumSneseni)}}
            </v-list-item-subtitle>
            <v-list-item-subtitle v-if="snuska.periodaVylihnutiKonec">
                Perioda vylíhnutí: {{format(snuska.periodaVylihnutiStart)}} ~ {{format(snuska.periodaVylihnutiKonec)}}
            </v-list-item-subtitle>
            <v-list-item-subtitle v-if="!snuska.periodaVylihnutiKonec">
                Vylíhnutí: {{format(snuska.periodaVylihnutiStart)}}
            </v-list-item-subtitle>
        </v-list-item-content>

        <v-icon x-large class="pr-8"> mdi-egg </v-icon>
    </v-list-item>
    <v-card-actions class="d-flex justify-space-around mb-6">
        <v-btn @click="details" color="info"> Detaily </v-btn>
        <SnuskaRemovePopup :id="snuskaId" :reroute="false"></SnuskaRemovePopup>
    </v-card-actions>
</v-card>
</template>

<script>
import SnuskaRemovePopup from "@/components/Snuska/SnuskaRemovePopup.vue"
import {
    format
} from "@/components/Shared/DateFormater"

export default {
    props: {
        snuskaId: Number,
    },
    components: {
        SnuskaRemovePopup,
    },
    methods: {
        details() {
            this.$router.push(`/snuska/${this.snuskaId}`)
        },
        format: format
    },
    computed: {
        snuska() {
            return this.$store.state.snuskas.find(s => {
                return s.snuskaId === this.snuskaId;
            });
        }
    },
};
</script>

<style lang="">

</style>
