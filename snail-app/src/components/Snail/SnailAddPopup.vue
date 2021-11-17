<template lang="">
<div>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" text class="mt-4"> Přidat šneka</v-btn>
        </template>
        <v-form ref="form" v-model="valid">
        <v-card>
            <v-card-title>
                <span class="text-h5">Přidat šneka</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field color="secondary" :rules="nameRules" v-model="snail.jmeno" label="Jméno*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field color="secondary" :rules="textRules" v-model="snail.komentar" label="Komentář*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field color="secondary" :rules="textRules" v-model="snail.barvaUlita" label="Barva ulity*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field color="secondary" :rules="textRules" v-model="snail.barvaTelo" label="Barva tela*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field color="secondary" :rules="textRules" v-model="snail.vzorecUlita" label="Vzor ulity*" required></v-text-field>
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
                            <v-checkbox color="secondary" v-model="snuskaSelected" label="Určit snúšku"></v-checkbox>
                            <v-select @change="modifyBirth" v-if="snuskaSelected" item-color="secondary" :rules="selectRules" color="secondary" v-model="snail.snuskaId" :items="snuskas" item-text="komentar" item-value="snuskaId" label="Snúška*" required></v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-checkbox color="secondary" v-model="taxonomySelected" label="Určit taxonomii"></v-checkbox>
                            <v-select v-if="taxonomySelected" item-color="secondary" :rules="selectRules" color="secondary" v-model="snail.taxonomyId" :items="taxonomies" item-text="jmeno" item-value="taxonomyId" label="Taxonomie*" required></v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field color="secondary" v-model="snail.puvodSneka" label="Púvod šneka"></v-text-field>
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
        </v-form>
    </v-dialog>
</div>
</template>

<script>
import { selectRules, textRules, nameRules} from "@/components/Shared/Validation.js"

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
        valid: false,
        snuskaSelected: false,
        taxonomySelected: false,
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
            taxonomyId: null,
            snuskaId: null,
            galerieId: 0
        },
        nameRules: nameRules,
        selectRules: selectRules,
        textRules: textRules

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
            if (this.$refs.form.validate()) {
            this.dialog = false
            this.$store.dispatch("addSnail", {
                id: this.groupId,
                snail: this.snail
            })}
        },
        modifyBirth() {
            const snuska = this.$store.state.snuskas.find(s => s.snuskaId === this.snail.snuskaId)
            this.snail.narozen = snuska.periodaVylihnutiStart
        }
    }
};
</script>

<style lang="">
</style>
