<template>
<v-card>
    <v-card-actions>
        <v-btn color="orange lighten-2" text> Mereni </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="showTable = !showTable">
            <v-icon>{{ showTable ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
    </v-card-actions>

    
    <v-expand-transition>
        <div v-show="showTable">
            <v-divider></v-divider>
                <v-data-table :headers="headers" :items="mereni" :items-per-page="5" class="elevation-1"></v-data-table>
            <v-card-text>
                TEXT?
            </v-card-text>
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
        <v-btn color="orange lighten-2" text> Galeria </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
    </v-card-actions>

    <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>
            <Gallery></Gallery>
            <v-card-text>
                TEXT?
            </v-card-text>
        </div>
    </v-expand-transition>
</v-card>
</template>

<script>
import Gallery from "@/components/Gallery/Gallery.vue"
import SnailRemovePopup from "@/components/Snail/SnailRemovePopup.vue"
export default {
    props: {
        snailId: Number,
        groupId: Number
    },
    components: {
        Gallery,
        SnailRemovePopup
    },
    computed: {
        snail() {
            return this.$store.getters.snailById(this.snailId)
        }
    },
    data() {
        return {
            show: false,
            showTable: false,
            headers: [{
                    text: "Komentar",
                    value: "komentar",
                },
                {
                    text: "Datum",
                    value: "datum",
                },
                {
                    text: "Vaha",
                    value: "vaha",
                },
                {
                    text: "Ulita",
                    value: "ulita",
                }
            ],
            mereni: [{
                    mereniId: 0,
                    komentar: "mereno rano",
                    datum: "2021-01-01",
                    vaha: "10.2",
                    ulita: "7.5",
                },
                {
                    mereniId: 1,
                    komentar: "mereno na obed",
                    datum: "2021-01-01",
                    vaha: "10.2",
                    ulita: "70.5",
                },
                {
                    mereniId: 2,
                    komentar: "mereno vecer",
                    datum: "2021-01-01",
                    vaha: "1.2",
                    ulita: "7.5",
                },
                {
                    mereniId: 3,
                    komentar: "mereno v noc",
                    datum: "2021-01-01",
                    vaha: "10",
                    ulita: "8",
                },
            ],
        };
    },
};
</script>

<style lang="">
</style>
