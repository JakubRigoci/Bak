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

    <v-card-title> {{snail.jmeno}}</v-card-title>

    <v-card-subtitle class="mx-auto" max-width='100'> {{snail.komentar}} </v-card-subtitle>

    <div class="container">
        <div class="name"></div>
        <div class="komentar"></div>
        <div class="barva-ulita"></div>
        <div class="barva-rtelo"></div>
        <div class="aaa"></div>
    </div>
    <div class="snail-info">
        <v-card-subtitle class="allign-right"> <b>Barva ulity:</b> {{snail.barvaUlita}} </v-card-subtitle>
        <v-card-subtitle flex> <b>Barva tela:</b> {{snail.barvaTelo}} </v-card-subtitle>
    </div>

    <SnailRemovePopup :groupId="groupId" :snailId="snailId"></SnailRemovePopup>

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
            <Gallery></Gallery>
        </div>
    </v-expand-transition>
</v-card>
</template>

<script>
import Gallery from "@/components/Gallery/Gallery.vue"
import SnailRemovePopup from "@/components/Snail/SnailRemovePopup.vue"
import Measures from "@/components/Snail/Measures/Measures.vue"
import SnailEvents from "@/components/Snail/SnailEvents.vue"

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
        SnailEvents
    },
    computed: {
        snail() {
            return this.$store.getters.snailById(this.snailId)
        }
    }
};
</script>

<style lang="">
</style>
