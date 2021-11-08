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
        <v-form v-model="valid">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Pridat box</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="nameRules" :counter="15" v-model="box.jmeno" label="Jmeno*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="commentRules" :counter="60" v-model="box.komentar" label="Komentar"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="numberRules" type="number" v-model="box.vyska" label="Vyska*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="secondary" v-model="box.sirka" type="number" label="Sirka*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="secondary" v-model="box.depth" type="number" label="Hlbka*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-menu transition="scale-transition" offset-y min-width="auto">
                                    <template v-slot:activator="{on}">
                                        <v-text-field v-model="box.datumPorizeni" v-on="on" label="Datum porizeni"></v-text-field>
                                    </template>
                                    <v-date-picker color="secondary" v-model="box.datumPorizeni"></v-date-picker>
                                </v-menu>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field color="secondary" v-model="box.prodejce" label="prodejce*" required></v-text-field>
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
        </v-form>
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
        menu: false,
        valid: false,
        nameRules: [
        v => !!v || 'Jméno je povinné',
        v => v.length <= 15 || 'Jméno musí být méně než 15 znaků',
        ],
        commentRules: [
        v => !!v || 'Kometář je povinný',
        v => v.length <= 60 || 'Komentář musí být méně než 15 znaků',
        ],
        numberRules: [
        v => v < 1000000 || 'Velikost musí být méně než 7 cifer'
        ],
        box: {
            id: 0,
            jmeno: "",
            komentar: "",
            vyska: "",
            sirka: "",
            hlbka: "",
            datumPorizeni: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            prodejce: "",
        }

    }),
    methods: {
        save() {
            this.dialog = false
            this.$store.dispatch("addBox", this.box)
            this.$store.dispatch("getBoxes")
        }
    }
};
</script>

<style lang="">
</style>
