<template lang="">
<div>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-card allign="center" class="mx-auto primary justify-center d-flex" max-width="344" outlined>

                <v-avatar v-bind="attrs" v-on="on" class="d-flex " color="secondary" size='120'>
                    <v-icon x-large> mdi-archive-plus </v-icon>
                </v-avatar>
            </v-card>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Pridat Skupinu</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="group.jmeno" label="Jmeno*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="group.komentar" label="Komentar" hint="example of helper text only on focus"></v-text-field>
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
    props: {
        id: Number,
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
            this.$store.dispatch("addGroup",{ group: this.group, boxId: this.$route.params.id})
        }
    }
};
</script>

<style lang="">
</style>
