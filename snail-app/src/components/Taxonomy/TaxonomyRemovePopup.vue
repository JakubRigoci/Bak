<template lang="">
<div>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="secondary"> Vymazat </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Odebrat Taxonomii</span>
            </v-card-title>
            <v-card-text>
                <span>
                    Naozaj si přejete odebrat tuto taxonomii?
                </span>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="secondary" text @click="dialog = false">
                    Zavřít
                </v-btn>
                <v-btn color="secondary" text @click="save">
                    Vymazat
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    props: {
        taxonomyId: Number
    },
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
        save() {
            this.dialog = false
            this.$store.dispatch("removeTaxonomy", this.taxonomyId)
        }
    }
};
</script>

<style lang="">
</style>
