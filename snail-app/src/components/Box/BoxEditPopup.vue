<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="secondary"> Upravit </v-btn>
        </template>
        <v-form ref="form" v-model="valid">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Upravit box</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="nameRules" :counter="15" v-model="box.jmeno" label="Jméno*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="commentRules" :counter="60" v-model="box.komentar" label="Komentář*"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="numberRules" type="number" v-model="box.vyska" label="Výška*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="numberRules" v-model="box.sirka" type="number" label="Šírka*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="numberRules" v-model="box.hloubka" type="number" label="Hloubka*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-menu transition="scale-transition" offset-y min-width="auto">
                                    <template v-slot:activator="{on}">
                                        <v-text-field readonly :value="formatedDate" v-on="on" label="Datum pořízení"></v-text-field>
                                    </template>
                                    <v-date-picker color="secondary" v-model="box.datumPorizeni"></v-date-picker>
                                </v-menu>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field color="secondary" v-model="box.prodejce" label="Prodejce"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*Povinný</small>
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
import * as rules from "@/components/Shared/Validation.js"
import {
    format
} from "@/components/Shared/DateFormater"

export default {
    props: {
        boxProp: Object,
    },
    data() {
        return {
            dialog: false,
            menu: false,
            valid: false,
            nameRules: rules.nameRules,
            commentRules: rules.commentRules,
            numberRules: rules.numberRules,
            box: this.boxProp
        }
    },
    computed: {
        formatedDate() {
            return  this.box.datumPorizeni ? this.format(this.box.datumPorizeni) : ''
        }
    },
    methods: {
        save() {
            if (this.$refs.form.validate()) {
                this.dialog = false
                this.$store.dispatch("editBox", this.box)
                //this.$store.dispatch("getBoxes")
            }
        },
        format: format
    }
};
</script>

<style lang="">
</style>
