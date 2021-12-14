<template lang="">
<v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" text color="info"> Upravit </v-btn>
    </template>
    <v-form ref="form" v-model="valid">
        <v-card>
            <v-card-title>
                <span class="text-h5">Upravit událost</span>
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
</template>

<script>
import {
    selectRules,
    commentRules
} from "@/components/Shared/Validation.js"
import {
    format
} from "@/components/Shared/DateFormater"

export default {
    props: {
        eventId: Number,
        type: String,
        eventProp: Object,
        id: Number
    },
    data() {
        return {
            dialog: false,
            valid: false,
            menu: false,
            event: this.eventProp,
            commentRules: commentRules,
            selectRules: selectRules,
        }
    },
    computed: {
        eventTypes() {
            return this.$store.state.events
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
                this.$store.dispatch("editEvent", {
                    event: this.event,
                    id: this.id,
                    type: this.type
                })
            }
        },
        format: format
    }
};
</script>

<style lang="">
</style>
