<template lang="">
<div>
    <h1 class="subheading grey--text">Box</h1>
    <v-divider></v-divider>
    <v-container>
        <div class="params">
            <v-row>
                <v-col>
                    <b>Jméno:</b> {{box.jmeno}}</v-col>
                <v-col> <b>Komentář:</b> {{box.komentar}}</v-col>
            </v-row>
            <v-row>
                <v-col> <b>Prodejce:</b> {{box.prodejce}} </v-col>
                <v-col><b>Datum pořízení:</b> {{box.datumPorizeni}}</v-col>
            </v-row>
            <v-row>
                <v-col> <b>Výška:</b> {{box.vyska}}</v-col>
                <v-col><b>Šírka:</b> {{box.sirka}}</v-col>

            </v-row>
            <v-row>
                <v-col><b>Hloubka:</b> {{box.hloubka}}</v-col>
            </v-row>

        </div>
        <div class="buttons">
            <v-row>
                <BoxRemovePopup :id="boxId" :name="box.jmeno" :reroute="true"></BoxRemovePopup>
                <BoxEditPopup :box="Object.assign({},box)"></BoxEditPopup>
            </v-row>
        </div>
    </v-container>
</div>
</template>

<script>
import BoxRemovePopup from "@/components/Box/BoxRemovePopup.vue"
import BoxEditPopup from "@/components/Box/BoxEditPopup.vue"

export default {
    components: {
        BoxRemovePopup,
        BoxEditPopup
    },
    props: {
        boxId: Number
    },
    computed: {
        box() {
            return this.$store.getters.boxById(this.boxId)
        }
    }

}
</script>

<style lang="">

</style>
