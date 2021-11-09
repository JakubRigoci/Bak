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
                <span class="text-h5">Přidat Skupinu</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="group.jmeno" label="Jméno*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="group.komentar" label="Komentář" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*Povinní</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Zavřít
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                    Uložit
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    props: {
        boxId: Number,
    },
    data: () => ({
        dialog: false,
        group: {
            skupinaId: 0,
            jmeno: "",
            komentar: "",
        }

    }),
    methods: {
        save() {
            this.dialog = false
            this.$store.dispatch("addGroup",{ group: this.group, boxId: this.boxId})
        }
    }
};
</script>

<style lang="">
</style>
