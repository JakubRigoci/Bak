<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="secondary"> Vymazat </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Odebrat typ události</span>
            </v-card-title>
            <v-card-text>
                <span>
                    Skutečně si přejete odebrat tento typ události?
                </span>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="info" text @click="dialog = false">
                    Zavřít
                </v-btn>
                <v-btn color="info" text @click="save">
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
