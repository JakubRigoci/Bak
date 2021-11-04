<template lang="">
<div>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" width="100px" outlined text depressed class="ma-2  width:100px info"> Vymazat </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Odobrat typ udalosti</span>
            </v-card-title>
            <v-card-text>
                <span>
                    Naozaj si prajete odobrat tento typ udalosti?
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
        eventTypeId: Number
    },
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
        save() {
            this.dialog = false
            this.$store.dispatch("removeEventType", this.eventTypeId)
        }
    }
};
</script>

<style lang="">
</style>
