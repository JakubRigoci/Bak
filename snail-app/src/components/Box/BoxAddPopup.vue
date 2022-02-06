<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-card width="100%" v-bind="attrs" v-on="on" allign="center" class="mx-auto primary justify-center d-flex" outlined>

                <v-avatar color="secondary" size='120'>
                    <v-icon x-large> mdi-plus-thick </v-icon>
                </v-avatar>
            </v-card>

        </template>
        <v-form ref="form" v-model="valid">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Přidat box</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field color="info" :rules="nameRules" v-model="box.jmeno" label="Jméno*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="info" :rules="commentRules" v-model="box.komentar" label="Komentář*"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="info" :rules="numberRules" type="number" v-model="box.vyska" label="Výška*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="info" :rules="numberRules" v-model="box.sirka" type="number" label="Šírka*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="info" :rules="numberRules" v-model="box.hloubka" type="number" label="Hloubka*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-menu transition="scale-transition" v-model="menu" :close-on-content-click="false" offset-y min-width="auto">
                                    <template v-slot:activator="{on}">
                                        <v-text-field readonly :value="formatedDate" v-on="on" label="Datum pořízení"></v-text-field>
                                    </template>
                                    <v-date-picker :max="new Date().toISOString()" @input="menu = false" color="info" v-model="box.datumPorizeni"></v-date-picker>
                                </v-menu>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field color="info" v-model="box.prodejce" label="Prodejce"></v-text-field>
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
    data: () => ({
        dialog: false,
        menu: false,
        valid: false,
        nameRules: rules.nameRules,
        commentRules: rules.commentRules,
        numberRules: rules.numberRules,
        box: {
            id: 0,
            jmeno: "",
            komentar: "",
            vyska: "",
            sirka: "",
            hloubka: "",
            datumPorizeni: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            prodejce: "",
        }

    }),
    computed: {
        formatedDate() {
            return this.box.datumPorizeni ? this.format(this.box.datumPorizeni) : ''
        }
    },
    methods: {
        save() {
            if (this.$refs.form.validate()) {
                this.dialog = false
                this.$store.dispatch("addBox", this.box).then(() => {
                    this.$refs.form.resetValidation()
                    this.box = {
                        id: 0,
                        jmeno: "",
                        komentar: "",
                        vyska: "",
                        sirka: "",
                        hloubka: "",
                        datumPorizeni: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                        prodejce: "",
                    }
                })
            }
        },
        format: format
    }
};
</script>

<style lang="">
</style>
