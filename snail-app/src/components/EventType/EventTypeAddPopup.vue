<template lang="">
<div>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-card allign="center" class="mx-auto primary justify-center d-flex" max-width="344" outlined>

                <v-avatar v-bind="attrs" v-on="on" class="d-flex " color="secondary" size='120'>
                    <v-icon x-large> mdi-plus-thick </v-icon>
                </v-avatar>
            </v-card>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Pridat typ udalosti</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field color="secondary" v-model="eventType.popis" label="Popis*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-select v-model="eventType.typ" item-color="secondary" color="secondary" :items="targets" item-text="Typ" label="Typ*" required></v-select>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        targets: ["BOX", "SNUSKA", "SNEK", "SKUPINA"],
        eventType: {
            udalostTypId: 0,
            popis: "",
            typ: "BOX"
        }

    }),
    methods: {
        save() {
            this.dialog = false
            this.$store.dispatch("addEventType", this.eventType)
        }
    }
};
</script>

<style lang="">
</style>
