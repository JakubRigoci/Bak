<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="info" v-bind="attrs" v-on="on">uprav</v-btn>
        </template>
        <v-form ref="form" v-model="valid">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Upravit snúšku</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field color="info" :rules="commentRules" v-model="snuska.komentar" label="Komentář*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-menu transition="scale-transition" v-model="menu" :close-on-content-click="false" offset-y min-width="auto">
                                    <template v-slot:activator="{on}">
                                        <v-text-field readonly color="info" :value="formatedDate" v-on="on" label="Datum snesení*" required></v-text-field>
                                    </template>
                                    <v-date-picker :max="new Date().toISOString()" color="info" @input="menu = false" v-model="snuska.datumSneseni"></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12">
                                <v-menu :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                    <template v-slot:activator="{on}">
                                        <v-text-field readonly color="info" :value="formatedHatchingPeriodDate" v-on="on" label="Perioda vylíhnutí*"></v-text-field>
                                    </template>
                                    <v-date-picker :max="new Date().toISOString()" color="info" range v-model="hatchingPeriod"></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12">
                                <v-select @change="getSnailsForGroup" item-color="info" color="info" v-model="snuska.skupinaId" :rules="selectRules" :items="groups" item-text="jmeno" item-value="skupinaId" label="Skupina*" required></v-select>
                            </v-col>
                            <v-col cols="12">
                                <v-checkbox color="info" v-model="motherSelected" label="Určit matku"></v-checkbox>
                                <v-select v-if="motherSelected" :rules="selectRules" item-color="info" color="info" v-model="snuska.matkaId" :items="snailsForGroup" item-text="jmeno" item-value="snekId" label="Matka" clearable></v-select>
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
import * as rules from "@/components/Shared/Validation.js"
import {
    format
} from "@/components/Shared/DateFormater"

const currDate = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
export default {
    props: {
        id: Number,
        snuskaProp: Object,
    },
    created() {
        this.$store.dispatch("getGroups")
        this.$store.dispatch("getSnailsForGroup", this.snuska.skupinaId)
    },
    data() {
        return {
            dialog: false,
            hatchingPeriod: [currDate, currDate],
            valid: false,
            menu: false,
            motherSelected: this.snuskaProp.matkaId !== null,
            snuska: this.snuskaProp,
            nameRules: rules.nameRules,
            commentRules: rules.commentRules,
            numberRules: rules.numberRules,
            selectRules: rules.selectRules,
        }
    },
    computed: {
        groups() {
            return this.$store.state.groups
        },
        snailsForGroup() {
            return this.$store.getters.snailsByGroup(this.snuska.skupinaId)
        },
        formatedDate() {
            return this.snuska.datumSneseni ? this.format(this.snuska.datumSneseni) : ''
        },
        formatedHatchingPeriodDate() {
            return [...this.hatchingPeriod].sort((a, b) => {
                const left = new Date(a)
                const right = new Date(b)
                return left - right
            }).map(d => format(d)).join(" ~ ")
        },
    },
    watch: {
        motherSelected: function (val) {
            if (!val)
                this.snuska.matkaId = null
        }
    },
    methods: {
        save() {
            if (this.$refs.form.validate()) {
                this.dialog = false
                this.hatchingPeriod.sort((a, b) => {
                    const left = new Date(a)
                    const right = new Date(b)
                    return left - right
                })
                this.snuska.periodaVylihnutiStart = this.hatchingPeriod[0]
                this.snuska.periodaVylihnutiKonec = this.hatchingPeriod[1]
                this.snuska.velikost = Number.parseInt(this.snuska.velikost)
                this.$store.dispatch("editSnuska", this.snuska)
            }
        },
        getSnailsForGroup() {
            this.$store.dispatch("getSnailsForGroup", this.snuska.skupinaId)
        },
        format: format
    }
};
</script>

<style lang="">
</style>
