<template lang="">
<div>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" color="secondary">Uprav</v-btn>
        </template>
        <v-form ref="form" v-model="valid">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Upravit Taxonomii</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="nameRules" v-model="taxonomy.jmeno" label="Jméno*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="textRules" v-model="taxonomy.popis" label="Popis" required></v-text-field>
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
import {
    nameRules,
    textRules
} from "@/components/Shared/Validation.js"

export default {
    props: {
        taxonomy: Object
    },
    data: () => ({
        dialog: false,
        valid: false,
        nameRules: nameRules,
        textRules: textRules,

    }),
    methods: {
        save() {
            if (this.$refs.form.validate()) {
                this.dialog = false
                this.$store.dispatch("editTaxonomy", this.taxonomy)
            }
        }
    }
};
</script>

<style lang="">
</style>
