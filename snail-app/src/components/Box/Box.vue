<template>
<v-card class="mx-auto secondary" max-width="344" outlined>
    <v-list-item three-line>
        <v-list-item-content class="pa-8">
            <div class="text-overline mb-4">{{box.jmeno}}</div>
            <v-list-item-title class="mb-1">
                {{box.komentar}}
            </v-list-item-title>
            <v-list-item-subtitle>
                Vyska: {{box.vyska}}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
                Sirka: {{box.sirka}}
            </v-list-item-subtitle>
        </v-list-item-content>

        <v-icon x-large class="pr-8"> mdi-archive </v-icon>
    </v-list-item>
    <v-card-actions class="d-flex justify-space-around mb-6">
        <v-btn @click="details" outlined rounded text depressed class="info"> Detaily </v-btn>
        <BoxRemovePopup :id="box.boxId" :name="box.jmeno"></BoxRemovePopup>
    </v-card-actions>
</v-card>
</template>

<script>
import BoxRemovePopup from "@/components/Box/BoxRemovePopup.vue"
export default {
    props: {
        id: Number,
    },
    methods: {
        details() {
            this.$store.dispatch("setActiveBox", this.box.boxId)
            this.$router.push(`/box/${this.id}`)
        }
    },
    computed: {
        box() {
            return this.$store.state.boxes.find(b => {
                return b.boxId === this.id;
            });
        }
    },
    components: {BoxRemovePopup}
};
</script>

<style lang="">

</style>
