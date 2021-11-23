<template>
<v-card class=" primary" outlined>
    <v-card-actions>
        <v-btn color="secondary" @click="showTable = !showTable" text> Měření </v-btn>

        <v-spacer></v-spacer>
        <v-btn icon @click="showTable = !showTable">
            <v-icon>{{ showTable ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
    </v-card-actions>

    <v-expand-transition>
        <div v-show="showTable">
            <v-divider></v-divider>
            <Measures :snailId="snailId"></Measures>
        </div>
    </v-expand-transition>

    <v-card-title> Jméno: {{snail.jmeno}}</v-card-title>

    <v-card-subtitle class="mx-auto" max-width='100'>Komentář: {{snail.komentar}} </v-card-subtitle>

    <div class="container">
        <v-row>
            <v-col>
                <b>Barva ulity:</b> {{snail.barvaUlita}}
            </v-col>
            <v-col>
                <b>Barva tela:</b> {{snail.barvaTelo}}
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <b>Vzor ulity:</b> {{snail.vzorecUlita}}
            </v-col>
            <v-col>
                <b>Narozen: </b> {{format(snail.narozen)}}
            </v-col>
        </v-row>
        <v-row>
            <v-col v-if="snail.zemrel !== null">
                <b>Zemřel: </b> {{format(snail.zemrel)}}
            </v-col>
            <v-col v-if="snail.puvodSneka">
                <b>Původ: </b> {{snail.puvodSneka}}
            </v-col>
        </v-row>
        <v-row>
            <v-col v-if="snail.snuskaId">
                <b>Snůška: </b> {{snuska.komentar}}
            </v-col>
            <v-col v-if="snail.taxonomyId">
                <b>Taxonomie: </b> {{taxonomy.jmeno}}
            </v-col>
        </v-row>

        <div class="aaa"></div>
    </div>
    <div class="snail-info">
        <v-card-subtitle class="allign-right"> </v-card-subtitle>
        <v-card-subtitle flex> </v-card-subtitle>
    </div>

    <div class="ml-4 buttons">
        <v-row no-gutters>
            <v-col cols="6">
                <SnailRemovePopup :groupId="groupId" :snailId="snailId"></SnailRemovePopup>

            </v-col>
            <v-col cols="6">
                <SnailEditPopup :groupId="groupId" :snailProp="Object.assign({}, snail)"></SnailEditPopup>
            </v-col>
            <v-col cols="12">
                <SnailGroupChangePopup class="mt-2" :groupId="groupId" :snailId="snailId"></SnailGroupChangePopup>
            </v-col>
        </v-row>
    </div>

    <v-card-actions>
        <v-btn color="secondary" @click="showEvents = !showEvents" text> Události </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="showEvents = !showEvents">
            <v-icon>{{ showEvents ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
    </v-card-actions>

    <v-expand-transition>
        <div v-show="showEvents">
            <v-divider></v-divider>
            <SnailEvents :snailId="snailId"></SnailEvents>
        </div>
    </v-expand-transition>

    <v-card-actions>
        <v-btn color="secondary" @click="showGallery = !showGallery" text> Galerie </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="showGallery = !showGallery">
            <v-icon>{{ showGallery ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
    </v-card-actions>

    <v-expand-transition>
        <div v-show="showGallery">
            <v-divider></v-divider>
            <Gallery :snailId="snailId" :galleryId="snail.galerieId"></Gallery>
        </div>
    </v-expand-transition>
</v-card>
</template>

<script>
import Gallery from "@/components/Gallery/Gallery.vue"
import SnailRemovePopup from "@/components/Snail/SnailRemovePopup.vue"
import Measures from "@/components/Snail/Measures/Measures.vue"
import SnailEvents from "@/components/Snail/SnailEvents.vue"
import SnailEditPopup from "@/components/Snail/SnailEditPopup.vue"
import SnailGroupChangePopup from "@/components/Snail/SnailGroupChangePopup.vue"
import {
    format
} from "@/components/Shared/DateFormater"

export default {
    props: {
        snailId: Number,
        groupId: Number
    },
    data() {
        return {
            showGallery: false,
            showTable: false,
            showEvents: false,
        }
    },
    components: {
        Gallery,
        SnailRemovePopup,
        Measures,
        SnailEvents,
        SnailEditPopup,
        SnailGroupChangePopup
    },
    created() {
        this.$store.dispatch("getSnuskas")
        this.$store.dispatch("getTaxonomies")
    },
    computed: {
        snail() {
            return this.$store.getters.snailById(this.snailId)
        },
        snuska() {
            if (this.snail.snuskaId) {
                return this.$store.state.snuskas.find(s => s.snuskaId === this.snail.snuskaId)
            }
            return {}
        },
        taxonomy() {
            if (this.snail.taxonomyId) {
                return this.$store.state.taxonomies.find(t => t.taxonomyId === this.snail.taxonomyId)
            }
            return {}
        }
    },
    methods: {
        format: format
    }
};
</script>

<style lang="">
</style>
