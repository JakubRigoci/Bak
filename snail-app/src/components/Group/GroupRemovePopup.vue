<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn width="100%" v-bind="attrs" v-on="on" text> Vymazat </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Odebrat Skupinu</span>
            </v-card-title>
            <v-card-text>
                <span>
                    Skutečně si přejete odebrat skupinu?
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
        id: Number
    },
    data: () => ({
        dialog: false,
    }),
    methods: {
        save() {
            this.dialog = false
            this.$store.dispatch("removeGroup", this.id)
        }
    }
};
</script>

<style lang="">
</style>
