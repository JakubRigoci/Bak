<template lang="">
<div>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" width="100px" outlined text depressed class="ma-2  width:100px info"> Vymaz </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Odobrat Udalost</span>
            </v-card-title>
            <v-card-text>
                <span>
                    Naozaj si prajete odobrat tuto udalost??
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
        eventId: Number,
        type: String,
    },
    data: () => ({
        dialog: false,
    }),
    methods: {
        save() {
            this.dialog = false
            this.$store.dispatch("removeEvent", {id: this.eventId,
                                                 type: this.type})
        }
    }
};
</script>

<style lang="">
</style>
