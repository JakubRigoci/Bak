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
                            <v-text-field v-model="snuska.komentar" label="Komentar*" required></v-text-field>
                        </v-col>
                                                <v-col cols="12">
                            <v-menu transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{on}">
                                    <v-text-field v-model="snuska.datumSneseni" v-on="on" label="Datum sneseni"></v-text-field>
                                </template>
                                <v-date-picker color="secondary" v-model="snuska.datumSneseni"></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="snuska.velikost" label="velikost" hint="example of helper text only on focus"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="snuska.periodaVylihnutiStart" label="Perioda vylihnuti start*" hint="example of persistent helper text" persistent-hint required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="snuska.periodaVylihnutiKonec" label="Perioda vylihnuti konec*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="snuska.skupinaId" label="Skupina*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="snuska.matkaId" label="Matka*" required></v-text-field>
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
export default {
    props: {
        id: Number,
    },
    data: () => ({
        dialog: false,
        snuska: {
            snuskaId: 0,
            komentar: "",
            datumSneseni: "",
            ponechana: true,
            velikost: 0,
            periodaVylihnutiStart: "",
            periodaVylihnutiKonec: "",
            skupinaId: 0,
            matkaId: ""
        }

    }),
    methods: {
        save() {
            this.dialog = false
            this.$store.dispatch("addSnuska", this.snuska)
        }
    }
};
</script>

<style lang="">
</style>
