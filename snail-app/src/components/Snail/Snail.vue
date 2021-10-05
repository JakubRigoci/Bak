<template>
<v-card>
    <v-data-table :headers="headers" :items="mereni" :items-per-page="5" class="elevation-1"></v-data-table>

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
export default {
    props: {
        id: Number,
    },
    components: {
        Gallery
    },
    computed: {
        snail() {
            return this.$store.getters.snailById(this.id)
        }
    },
    data() {
        return {
            show: false,
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
            // snail: {
            //   snekId: 0,
            //   jmeno: "Snek",
            //   komentar: "Snek mi tu snekuje",
            //   barvaUlita: "Cervena",
            //   barvaTelo: "Cierna",
            //   vzorecUlita: "Kruh",
            //   narozen: "2021-01-04",
            //   zemrel: "2021-01-04",
            //   prodan: "2021-01-04",
            //   puvodSneka: "od kamosa",
            //   zverejnit: true,
            //   aktivni: true,
            //   taxonomyId: 0,
            //   snuskaId: 0,
            //   galerieId: 0,
            // },
        };
    },
};
</script>

<style lang="">
</style>
