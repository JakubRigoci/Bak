<template lang="">
<div>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
           <v-btn color="secondary" v-bind="attrs" v-on="on">uprav</v-btn>
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
                                <v-text-field color="secondary" :rules="commentRules" v-model="snuska.komentar" label="Komentář*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-menu transition="scale-transition" offset-y min-width="auto">
                                    <template v-slot:activator="{on}">
                                        <v-text-field readonly color="secondary" v-model="snuska.datumSneseni" v-on="on" label="Datum snesení*" required></v-text-field>
                                    </template>
                                    <v-date-picker color="secondary" v-model="snuska.datumSneseni"></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="numberRules" type="number" v-model="snuska.velikost" label="Velikost*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-menu :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                    <template v-slot:activator="{on}">
                                        <v-text-field readonly color="secondary" v-model="hatchingPeriodText" v-on="on" label="Perioda vylíhnutí*"></v-text-field>
                                    </template>
                                    <v-date-picker color="secondary" range v-model="hatchingPeriod"></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12">
                                <v-select @change="getSnailsForGroup" item-color="secondary" color="secondary" v-model="snuska.skupinaId" :rules="selectRules" :items="groups" item-text="jmeno" item-value="skupinaId" label="Skupina*" required></v-select>
                            </v-col>
                            <v-col cols="12">
                                <v-checkbox color="secondary" v-model="motherSelected" label="Určit matku"></v-checkbox>
                                <v-select v-if="motherSelected" item-color="secondary" color="secondary" v-model="snuska.matkaId" :items="snailsForGroup" item-text="jmeno" item-value="snekId" label="Matka" clearable></v-select>
                            </v-col>           
                        </v-row>
                    </v-container>
                    <small>*Povinní</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="secondary" text @click="dialog = false">
                        Zavřít
                    </v-btn>
                    <v-btn color="secondary" text @click="save">
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

const currDate = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
export default {
    props: {
        id: Number,
        snuska: Object,
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
            motherSelected: false,
            // snuska: {
            //     snuskaId: 0,
            //     komentar: "",
            //     datumSneseni: currDate,
            //     ponechana: true,
            //     velikost: "",
            //     periodaVylihnutiStart: currDate,
            //     periodaVylihnutiKonec: currDate,
            //     skupinaId: "",
            //     matkaId: ""
            // },
            nameRules: rules.nameRules,
            commentRules: rules.commentRules,
            numberRules: rules.numberRules,
            selectRules: rules.selectRules,
        }
    },
    computed: {
        hatchingPeriodText() {
            return this.hatchingPeriod.join(" - ")
        },
        groups() {
            return this.$store.state.groups
        },
        snailsForGroup() {
            return this.$store.getters.snailsByGroup(this.snuska.skupinaId)
        }
    },
    methods: {
        save() {
            if (this.$refs.form.validate()) {
                this.dialog = false
                this.snuska.periodaVylihnutiStart = this.hatchingPeriod[0]
                this.snuska.periodaVylihnutiKonec = this.hatchingPeriod[1]
                this.snuska.velikost = Number.parseInt(this.snuska.velikost)
                this.$store.dispatch("editSnuska", this.snuska)
            }
        },
        getSnailsForGroup() {
            this.$store.dispatch("getSnailsForGroup", this.snuska.skupinaId)
        }
    }
};
</script>

<style lang="">
</style>
