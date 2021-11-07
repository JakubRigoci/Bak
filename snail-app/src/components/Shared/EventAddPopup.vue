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
                <span class="text-h5">Pridat Udalost</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="event.komentar" label="Komentar" hint="example of helper text only on focus"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-menu transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{on}">
                                    <v-text-field color="secondary" v-model="event.datum" v-on="on" label="Datum"></v-text-field>
                                </template>
                                <v-date-picker color="secondary" v-model="event.datum"></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12">
                            <v-select v-model="event.udalostTypId" :items="eventTypes" item-text="popis" item-value="udalostTypId" label="typ udalosti*" required></v-select>
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
        type: String,
        id: Number,
    },
    data() {
        return {
            dialog: false,
            event: {
                udalostId: 0,
                komentar: "",
                datum: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                udalostTypId: 0,
            }
        }
    },
    computed: {
        eventTypes() {
            return this.$store.state.events
        }
    },
    methods: {
        save() {
            this.dialog = false
            switch(this.type) {
                case("box"):
                    this.event.boxId = this.id
                    break
                case("snuska"):
                    this.event.snuskaId = this.id
                    break
                case("snail"):
                    this.event.snekId = this.id
                    break
                case("group"):
                    this.event.skupinaId = this.id
                    break
            }
            this.$store.dispatch("addEvent", this.event)
        }
    }
};
</script>

<style lang="">
</style>
