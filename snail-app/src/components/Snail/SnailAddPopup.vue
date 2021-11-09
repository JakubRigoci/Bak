<template lang="">
<div>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" outlined block width="150px" text depressed class="mt-4 info"> Přidat šneka</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Přidat šneka</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field color="secondary" v-model="snail.jmeno" label="Jméno*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field color="secondary" v-model="snail.komentar" label="Komentář*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field color="secondary" v-model="snail.barvaUlita" label="Barva ulity*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field color="secondary" v-model="snail.barvaTelo" label="Barva tela*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field color="secondary" v-model="snail.vzorecUlita" label="Vzor ulity*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-menu transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{on}">
                                    <v-text-field v-model="snail.narozen" v-on="on" label="Narozen"></v-text-field>
                                </template>
                                <v-date-picker color="secondary" v-model="snail.narozen"></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12">
                            <v-select v-model="snail.snuskaId" :items="snuskas" item-text="komentar" item-value="snuskaId" label="Snúška*" required></v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-select v-model="snail.taxonomyId" :items="taxonomies" item-text="jmeno" item-value="taxonomyId" label="Taxonomie*" required></v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field color="secondary" v-model="snail.puvodSneka" label="Púvod šneka*" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*Povinní</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Zavřít
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                    Uložit
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    props: {
        groupId: Number,
    },
    created() {
        this.$store.dispatch("getSnuskas")
        this.$store.dispatch("getTaxonomies")
    },
    data: () => ({
        dialog: false,
        snail: {
            snekId: 0,
            jmeno: "",
            komentar: "",
            barvaUlita: "",
            barvaTelo: "",
            vzorecUlita: "",
            narozen: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            zemrel: "",
            prodan: "",
            puvodSneka: "",
            zverejnit: true,
            aktivni: true,
            taxonomyId: 0,
            snuskaId: 0,
            galerieId: 0
        }

    }),
    computed: {
        snuskas() {
            return this.$store.state.snuskas
        },
        taxonomies() {
            return this.$store.state.taxonomies
        }
    },
    methods: {
        save() {
            this.dialog = false
            this.$store.dispatch("addSnail", {
                id: this.groupId,
                snail: this.snail
            })
        }
    }
};
</script>

<style lang="">
</style>
