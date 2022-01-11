<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" color="info" v-on="on" class="mt-4"> Přidat měření</v-btn>
        </template>
        <v-form ref="form" v-model="valid">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Přidat měření</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="lengthRules" v-model="measure.komentar" label="Komentář"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-menu transition="scale-transition" offset-y min-width="auto">
                                    <template v-slot:activator="{on}">
                                        <v-text-field :value="formatedDate" v-on="on" label="Datum"></v-text-field>
                                    </template>
                                    <v-date-picker color="secondary" v-model="measure.datum"></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="secondary" type="number" :rules="numberRules" v-model="measure.vaha" label="Váha*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="secondary" type="number" :rules="numberRules" v-model="measure.ulita" label="Ulita*" required></v-text-field>
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
    format
} from "@/components/Shared/DateFormater"
import {
    numberRules,
    lengthRules
} from "@/components/Shared/Validation.js"

export default {
    props: {
        snailId: Number,
    },
    data: () => ({
        dialog: false,
        valid: false,
        measure: {
            mereniId: 0,
            vaha: "",
            ulita: "",
            komentar: "",
            datum: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        },
        numberRules: numberRules,
        lengthRules: lengthRules

    }),
    computed: {
        formatedDate() {
            return this.measure.datum ? this.format(this.measure.datum) : ''
        }
    },
    methods: {
        save() {
            if (this.$refs.form.validate()) {
                this.dialog = false
                this.$store.dispatch("addMeasure", {
                    snailId: this.snailId,
                    measure: this.measure
                })
            }
        },
        format: format
    }
};
</script>

<style lang="">
</style>
