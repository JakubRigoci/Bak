<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
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
                                <v-text-field color="secondary" :rules="textRules" v-model="taxonomy.popis" label="Popis*" required></v-text-field>
                            </v-col>
                            <v-col>
                                <v-checkbox color="secondary" v-model="levelSelected" label="Určit naddruh"></v-checkbox>
                                <v-select v-if="levelSelected" item-color="secondary" color="secondary" v-model="taxonomy.fkTaxonomyTaxonomy" :items="taxonomies" item-text="jmeno" item-value="taxonomyId" label="Taxonomie" clearable></v-select>
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
    textRules
} from "@/components/Shared/Validation.js"

export default {
    props: {
        taxonomy: Object
    },
    data() {
        return {
                    dialog: false,
        valid: false,
        levelSelected: this.taxonomy.fkTaxonomyTaxonomy !== null,
        nameRules: nameRules,
        textRules: textRules,

        }
    },
    computed: {
        taxonomies() {
            return this.$store.state.taxonomies
        }
    },
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
