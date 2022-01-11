<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-card allign="center" class="mt-6 mx-auto primary justify-center d-flex" max-width="344" outlined>

                <v-btn v-bind="attrs" v-on="on" color="info" class="mt-4"> Přidat skupinu</v-btn>
            </v-card>
        </template>
        <v-form ref="form" v-model="valid">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Přidat Skupinu</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="group.jmeno" :rules="nameRules" label="Jméno*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="group.komentar" :rules="commentNotRequired" label="Komentář" required></v-text-field>
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
    nameRules,
    commentNotRequired
} from "@/components/Shared/Validation.js"

export default {
    props: {
        boxId: Number,
    },
    data: () => ({
        dialog: false,
        valid: false,
        group: {
            skupinaId: 0,
            jmeno: "",
            komentar: "",
        },
        nameRules: nameRules,
        commentNotRequired: commentNotRequired

    }),
    methods: {
        save() {
            if (this.$refs.form.validate()) {
                this.dialog = false
                this.$store.dispatch("addGroup", {
                    group: this.group,
                    boxId: this.boxId
                }).then(() => {
                    this.$refs.form.resetValidation()
                    this.group = {
                        skupinaId: 0,
                        jmeno: "",
                        komentar: "",
                    }
                })
            }
        }
    }
};
</script>

<style lang="">
</style>
