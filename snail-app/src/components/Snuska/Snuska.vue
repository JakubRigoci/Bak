<template>
<v-card class="mx-auto secondary" max-width="344" outlined>
    <v-list-item three-line>
        <v-list-item-content class="pa-8">
            <div class="text-overline mb-4">{{snuska.komentar}}</div>
            <v-list-item-title class="mb-1">
                {{snuska.velikost}}
            </v-list-item-title>
            <v-list-item-subtitle>
                Datum sneseni: {{snuska.datumSneseni}}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
                Perioda vylihnuti: {{snuska.periodaVylihnutiStart}} - {{snuska.periodaVylihnutiKones}} 
            </v-list-item-subtitle>
        </v-list-item-content>

        <v-icon x-large class="pr-8"> mdi-archive </v-icon>
    </v-list-item>
    <v-card-actions class="d-flex justify-space-around mb-6">
        <v-btn @click="details" outlined rounded text depressed class="info"> Detaily </v-btn>
        <SnuskaRemovePopup :id="snuskaId" :reroute="false"></SnuskaRemovePopup>
    </v-card-actions>
</v-card>
</template>

<script>
import SnuskaRemovePopup from "@/components/Snuska/SnuskaRemovePopup.vue"
export default {
    props: {
        snuskaId: Number,
    },
    components: {
        SnuskaRemovePopup
    },
    methods: {
         details() {
            this.$router.push(`/snuska/${this.snuskaId}`)
        }
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
