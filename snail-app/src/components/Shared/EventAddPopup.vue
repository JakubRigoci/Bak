<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-card allign="center" class="mx-auto primary justify-center d-flex" max-width="344" outlined>

                <v-btn v-bind="attrs" v-on="on" color="secondary" class="mt-4"> Přidat událost</v-btn>
            </v-card>
        </template>
        <v-form ref="form" v-model="valid">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Přidat událost</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="event.komentar" :rules="commentRules" label="Komentář"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-menu transition="scale-transition" v-model="menu" :close-on-content-click="false" offset-y min-width="auto">
                                    <template v-slot:activator="{on}">
                                        <v-text-field color="secondary" :value="formatedDate" v-on="on" label="Datum"></v-text-field>
                                    </template>
                                    <v-date-picker @input="menu = false" color="secondary" v-model="event.datum"></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12">
                                <v-select v-model="event.udalostTypId" :rules="selectRules" :items="eventTypes" item-text="popis" item-value="udalostTypId" label="Typ události*" required></v-select>
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
    commentRules
} from "@/components/Shared/Validation.js"
import {
    format
} from "@/components/Shared/DateFormater"
import {
    translate
} from "@/components/Shared/Translator.js"

export default {
    props: {
        type: String,
        id: Number,
    },
    data() {
        return {
            dialog: false,
            valid: false,
            menu: false,
            event: {
                udalostId: 0,
                komentar: "",
                datum: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                udalostTypId: 0,
            },
            commentRules: commentRules,
            selectRules: selectRules,
        }
    },
    computed: {
        eventTypes() {
            return this.$store.state.eventTypes.filter(e => e.typ === translate(this.type))
        },
        formatedDate() {
            return this.event.datum ? this.format(this.event.datum) : ''
        }
    },
    methods: {
        save() {
            if (this.$refs.form.validate()) {
                this.dialog = false
                switch (this.type) {
                    case ("box"):
                        this.event.boxId = this.id
                        break
                    case ("snuska"):
                        this.event.snuskaId = this.id
                        break
                    case ("snail"):
                        this.event.snekId = this.id
                        break
                    case ("group"):
                        this.event.skupinaId = this.id
                        break
                }
                this.$store.dispatch("addEvent", this.event).then(() => {
                    this.$refs.form.resetValidation()
                    this.event = {
                        udalostId: 0,
                        komentar: "",
                        datum: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                        udalostTypId: 0,
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
