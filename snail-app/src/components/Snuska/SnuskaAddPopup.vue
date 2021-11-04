<template lang="">
<div>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-card v-bind="attrs" v-on="on" allign="center" class="mx-auto primary justify-center d-flex" max-width="344" outlined>

                <v-avatar class="d-flex " color="secondary" size='120'>
                    <v-icon x-large> mdi-plus-thick </v-icon>
                </v-avatar>
            </v-card>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Pridat Snusku</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field color="secondary" v-model="snuska.komentar" label="Komentar*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-menu transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{on}">
                                    <v-text-field color="secondary" v-model="snuska.datumSneseni" v-on="on" label="Datum sneseni"></v-text-field>
                                </template>
                                <v-date-picker color="secondary" v-model="snuska.datumSneseni"></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field color="secondary" v-model="snuska.velikost" label="velikost" hint="example of helper text only on focus"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-menu :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{on}">
                                    <v-text-field color="secondary" v-model="hatchingPeriodText" v-on="on" label="Datum sneseni"></v-text-field>
                                </template>
                                <v-date-picker color="secondary" range v-model="hatchingPeriod"></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field color="secondary" v-model="snuska.skupinaId" label="Skupina*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field color="secondary" v-model="snuska.matkaId" label="Matka*" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
const currDate =  (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
export default {
    props: {
        id: Number,
    },
    data() {
        return {
            dialog: false,
            hatchingPeriod: [currDate, currDate],
            snuska: {
                snuskaId: 0,
                komentar: "",
                datumSneseni: currDate,
                ponechana: true,
                velikost: 0,
                periodaVylihnutiStart:  currDate,
                periodaVylihnutiKonec: currDate,
                skupinaId: 0,
                matkaId: ""
            }
        }
    },
    computed: {
        hatchingPeriodText() {
            return this.hatchingPeriod.join(" - ")
        }
    },
    methods: {
        save() {
            this.dialog = false
            this.snuska.periodaVylihnutiStart = this.hatchingPeriod[0]
            this.snuska.periodaVylihnutiKonec = this.hatchingPeriod[1]
            this.$store.dispatch("addSnuska", this.snuska)
        }
    }
};
</script>

<style lang="">
</style>
