<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-card allign="center" class="mt-6 mx-auto primary justify-center d-flex" max-width="344" outlined>

                <v-avatar v-bind="attrs" v-on="on" class="d-flex " color="secondary" size='120'>
                    <v-icon x-large> mdi-plus-thick </v-icon>
                </v-avatar>
            </v-card>
        </template>
        <v-form ref="form" v-model="valid">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Přidat obrázek</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-file-input accept="image/png, image/jpeg, image/bmp" prepend-icon="mdi-camera" :rules="fileRules" v-model="file.data" truncate-length="15"></v-file-input>
                            </v-col>
                        </v-row>
                    </v-container>
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
    fileRules
} from "@/components/Shared/Validation.js"

export default {
    props: {
        snailId: Number,
        galleryId: Number,
    },
    data() {
        return {
            dialog: false,
            valid: false,
            file: {
                snekId: this.snailId,
                data: []
            },
            fileRules: fileRules
        }

    },
    methods: {
        save() {
            console.log(this.file)
            if (this.$refs.form.validate()) {
                this.dialog = false
                this.$store.dispatch("addFile", {
                    file: this.file,
                    galleryId: this.galleryId
                }).then(() => {
                    this.$refs.form.resetValidation()
                    this.file = {
                        snekId: this.snailId,
                        data: []
                    }
                })
            }
        }
    }
};
</script>

<style lang="">
</style>
