<template lang="">
<v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on" small class="mr-2">
            mdi-pencil
        </v-icon>
    </template>
    <v-form ref="form" v-model="valid">
        <v-card>
            <v-card-title>
                <span class="text-h5">Upravit měření</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field color="info" :rules="lengthRules" v-model="measure.komentar" label="Komentář"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-menu transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{on}">
                                    <v-text-field :value="formatedDate" v-on="on" label="Datum"></v-text-field>
                                </template>
                                <v-date-picker :max="new Date().toISOString()" color="info" v-model="measure.datum"></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field color="info" type="number" :rules="numberRules" v-model="measure.vaha" label="Váha*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field color="info" type="number" :rules="numberRules" v-model="measure.ulita" label="Ulita*" required></v-text-field>
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
        measureProp: Object,
    },
    data() {
        return {
            dialog: false,
            valid: false,
            measure: this.measureProp,
            numberRules: numberRules,
            lengthRules: lengthRules
        }
    },
    computed: {
        formatedDate() {
            return this.measure.datum ? this.format(this.measure.datum) : ''
        }
    },
    methods: {
        save() {
            if (this.$refs.form.validate()) {
                this.dialog = false
                this.$store.dispatch("editMeasure", this.measure)
            }
        },
        format: format
    }
};
</script>

<style lang="">
</style>
