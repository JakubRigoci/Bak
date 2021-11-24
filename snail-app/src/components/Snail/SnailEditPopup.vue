<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="secondary">upravit</v-btn>
        </template>
        <v-form ref="form" v-model="valid">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Upravit šneka</span>
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
                                <v-text-field color="secondary" :rules="textRules" v-model="snail.barvaUlita" label="Barva ulity*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="textRules" v-model="snail.barvaTelo" label="Barva tela*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="textRules" v-model="snail.vzorecUlita" label="Vzor ulity*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-menu transition="scale-transition" v-model="menu" :close-on-content-click="false" offset-y min-width="auto">
                                    <template v-slot:activator="{on}">
                                        <v-text-field :value="formatedBornDate" v-on="on" label="Narozen"></v-text-field>
                                    </template>
                                    <v-date-picker color="secondary" @input="menu = false" v-model="snail.narozen"></v-date-picker>
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
    commentRules
} from "@/components/Shared/Validation.js"
import {
    format
} from "@/components/Shared/DateFormater"

export default {
    props: {
        groupId: Number,
        snailProp: Object
    },
    created() {
        this.$store.dispatch("getSnuskas")
        this.$store.dispatch("getTaxonomies")
    },
    data() {
        return {
            snail: this.snailProp,
            dialog: false,
            valid: false,
            menu: false, 
            snuskaSelected: (this.snailProp.snuskaId !== null),
            taxonomySelected: (this.snailProp.taxonomyId !== null),
            nameRules: nameRules,
            selectRules: selectRules,
            textRules: textRules,
            commentRules: commentRules,
        }

    },
    computed: {
        snuskas() {
            return this.$store.state.snuskas
        },
        taxonomies() {
            return this.$store.state.taxonomies
        },
        formatedBornDate() {
            return  this.snail.narozen ? this.format(this.snail.narozen) : ''
        },
        formatedDiedDate() {
            return  this.snail.zemrel ? this.format(this.snail.zemrel) : ''
        }
    },
    methods: {
        save() {
            if (this.$refs.form.validate()) {
                if (!this.snuskaSelected) {
                    this.snail.snuskaId = null
                }
                if (!this.taxonomySelected) {
                    this.snail.taxonomyId = null
                }
                this.dialog = false
                this.$store.dispatch("editSnail", {snail: this.snail, groupId: this.groupId})
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
