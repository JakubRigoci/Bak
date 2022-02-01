<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="info"> Uprav </v-btn>
        </template>
        <v-form ref="form" v-model="valid">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Upravit typ události</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field color="info" :rules="textRules" v-model="eventType.popis" label="Popis*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-select v-model="eventType.typ" :rules="selectRules" item-color="info" color="info" :items="targets" item-text="Typ" label="Typ*" required></v-select>
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
    props: {
        eventType: Object
    },
    data: () => ({
        dialog: false,
        valid: false,
        targets: ["BOX", "SNUSKA", "SNEK", "SKUPINA"],
        selectRules: selectRules,
        textRules: textRules

    }),
    methods: {
        save() {
            if (this.$refs.form.validate()) {
                this.dialog = false
                this.$store.dispatch("editEventType", this.eventType)
            }
        }
    }
};
</script>

<style lang="">
</style>
