<template lang="">
<div>
    <h1 class="subheading grey--text">Box</h1>
    <v-divider></v-divider>
    <v-container>
        <div class="params">
            <v-row>
                <v-col>
                    <b>Jmeno:</b> {{box.jmeno}}</v-col>
                <v-col> <b>Komentar:</b> {{box.komentar}}</v-col>
            </v-row>
            <v-row>
                <v-col> <b>Prodejce:</b> {{box.prodejce}} </v-col>
                <v-col><b>Datum porizeni</b> {{box.datumPorizeni}}</v-col>
            </v-row>
            <v-row>
                <v-col> <b>Vyska:</b> {{box.vyska}}</v-col>
                <v-col><b>Sirka:</b> {{box.sirka}}</v-col>
                
            </v-row>
            <v-row>
                <v-col><b>Hlbka:</b> {{box.hlbka}}</v-col>
            </v-row>

        </div>
        <div class="buttons">
            <v-row>
            <v-btn width="100px" outlined text depressed class="mr-8 ma-2 width:100px info"> Uprav </v-btn>
            <BoxRemovePopup :id="boxId" :name="box.jmeno" :reroute="true"></BoxRemovePopup>
            </v-row>
        </div>
    </v-container>
</div>
</template>

<script>
import BoxRemovePopup from "@/components/Box/BoxRemovePopup.vue"
export default {
    components: {
        BoxRemovePopup
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
