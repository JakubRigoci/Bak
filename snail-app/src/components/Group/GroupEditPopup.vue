<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn text width="100%" v-on="on" v-bind="attrs"> Uprav</v-btn>
        </template>
        <v-form ref="form" v-model="valid">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Upravit Skupinu</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field color="info" v-model="group.jmeno" :rules="nameRules" label="Jméno*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="info" v-model="group.komentar" :rules="commentNotRequired" label="Komentář" required></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*Povinný</small>
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
        group: Object,
    },
    data: () => ({
        dialog: false,
        valid: false,
        nameRules: nameRules,
        commentNotRequired: commentNotRequired

    }),
    methods: {
        save() {
            if (this.$refs.form.validate()) {
                this.dialog = false
                this.$store.dispatch("editGroup", this.group)
            }
        }
    }
};
</script>

<style lang="">
</style>
