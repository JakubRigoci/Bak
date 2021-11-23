<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-card allign="center" class="mx-auto primary justify-center d-flex" max-width="344" outlined>

                <v-avatar v-bind="attrs" v-on="on" class="d-flex " color="secondary" size='120'>
                    <v-icon x-large> mdi-plus-thick </v-icon>
                </v-avatar>
            </v-card>
        </template>
        <v-form ref="form" v-model="valid">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Přidat typ události</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field color="secondary" :rules="textRules" v-model="eventType.popis" label="Popis*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-select v-model="eventType.typ" :rules="selectRules" item-color="secondary" color="secondary" :items="targets" item-text="Typ" label="Typ*" required></v-select>
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
    selectRules,
    textRules
} from "@/components/Shared/Validation.js"

export default {
    data: () => ({
        dialog: false,
        valid: false,
        targets: ["BOX", "SNUSKA", "SNEK", "SKUPINA"],
        eventType: {
            udalostTypId: 0,
            popis: "",
            typ: "BOX"
        },
        selectRules: selectRules,
        textRules: textRules

    }),
    methods: {
        save() {
            if (this.$refs.form.validate()) {
                this.dialog = false
                this.$store.dispatch("addEventType", this.eventType).then(() => {
                    this.$refs.form.resetValidation()
                    this.eventType = {
                        udalostTypId: 0,
                        popis: "",
                        typ: "BOX"
                    }
                })
            }
        }
    }
};
</script>

<style lang="">
</style>
