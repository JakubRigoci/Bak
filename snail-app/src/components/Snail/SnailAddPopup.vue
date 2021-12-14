<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="secondary" class="mt-4"> Přidat šneka</v-btn>
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
                                <v-text-field color="secondary" :rules="commentRules" v-model="snail.komentar" label="Komentář*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="lengthRules" v-model="snail.barvaUlita" label="Barva ulity"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="lengthRules" v-model="snail.barvaTelo" label="Barva tela"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="lengthRules" v-model="snail.vzorecUlita" label="Vzor ulity"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-menu transition="scale-transition" v-model="menu" :close-on-content-click="false" offset-y min-width="auto">
                                    <template v-slot:activator="{on}">
                                        <v-text-field :value="formatedDate" v-on="on" label="Narozen"></v-text-field>
                                    </template>
                                    <v-date-picker @input="menu = false" color="secondary" v-model="snail.narozen"></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12">
                                <v-checkbox color="secondary" v-model="snuskaSelected" label="Určit snúšku"></v-checkbox>
                                <v-select @change="modifyBirth" v-if="snuskaSelected" item-color="secondary" :rules="selectRules" color="secondary" v-model="snail.snuskaId" :items="snuskas" item-text="komentar" item-value="snuskaId" label="Snúška*" required></v-select>
                            </v-col>
                            <v-col cols="12">
                                <v-checkbox color="secondary" v-model="taxonomySelected" label="Určit taxonomii"></v-checkbox>
                                <TaxonomyTreeView v-on:change="(v) => {snail.taxonomyId = v[0]}" v-if="taxonomySelected"></TaxonomyTreeView>
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
                    <v-btn color="info" text @click="dialog = false">
                        Zavřít
                    </v-btn>
                    <v-btn color="info" text @click="save">
                        Uložit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
</div>
</template>

<script>
import {
    selectRules,
    textRules,
    nameRules,
    commentRules,
    lengthRules
} from "@/components/Shared/Validation.js"
import {
    format
} from "@/components/Shared/DateFormater"
import TaxonomyTreeView from "@/components/Taxonomy/TaxonomyTreeView.vue"

export default {
    props: {
        groupId: Number,
    },
    created() {
        this.$store.dispatch("getSnuskas")
        this.$store.dispatch("getTaxonomies")
    },
    components: {
        TaxonomyTreeView
    },
    data: () => ({
        dialog: false,
        valid: false,
        snuskaSelected: false,
        taxonomySelected: false,
        menu: false,
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
        textRules: textRules,
        commentRules: commentRules,
        lengthRules: lengthRules,

    }),
    computed: {
        snuskas() {
            return this.$store.state.snuskas
        },
        taxonomies() {
            return this.$store.state.taxonomies
        },
        formatedDate() {
            return this.snail.narozen ? this.format(this.snail.narozen) : ''
        }
    },
    watch: {
        taxonomySelected: function (val) {
            if (!val)
                this.snail.taxonomyId = null
        },
        snuskaSelected: function (val) {
            if (!val)
                this.snail.snuskaId = null
        }
    },
    methods: {
        save() {
            if (this.$refs.form.validate()) {
                this.dialog = false
                this.$store.dispatch("addSnail", {
                    id: this.groupId,
                    snail: this.snail
                }).then(() => {
                    this.$refs.form.resetValidation()
                    this.taxonomySelected = false
                    this.snuskaSelected = false
                    this.snail = {
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
                    }
                })
            }
        },
        modifyBirth() {
            const snuska = this.$store.state.snuskas.find(s => s.snuskaId === this.snail.snuskaId)
            this.snail.narozen = snuska.periodaVylihnutiStart
        },
        format: format
    }
};
</script>

<style lang="">
</style>
