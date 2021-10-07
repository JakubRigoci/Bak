<template lang="">
<div>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" outlined rounded text depressed class="info"> Vymazat </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Odobrat Box</span>
            </v-card-title>
            <v-card-text>
                <span>
                    Naozaj si prajete odobrat box s nazvom {{name}}?
                </span>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Zavriet
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
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
        id: Number,
        name: String
    },
        data: () => ({
        dialog: false,
    }),
    methods: {
        save() {
            this.dialog = false
            this.$store.dispatch("removeBox", this.id)
            this.$store.dispatch("getBoxes")
        }
    }
};
</script>

<style lang="">
</style>
