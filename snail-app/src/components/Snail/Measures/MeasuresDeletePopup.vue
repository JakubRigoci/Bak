<template lang="">
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on" small class="mr-2" >
                mdi-delete
            </v-icon>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Odebrat měření</span>
            </v-card-title>
            <v-card-text>
                <span>
                    Naozaj si přejete odebrat měření?
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
</template>

<script>
export default {
    props: {
        measureId: Number
    },
    data: () => ({
        dialog: false,
    }),
    methods: {
        save() {
            this.dialog = false
            this.$store.dispatch("removeMeasure", this.measureId)
        }
    }
};
</script>

<style lang="">
</style>
