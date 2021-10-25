<template lang="">
<div>
    <h1 class="subheading grey--text">Box</h1>
    <v-divider></v-divider>
    <v-container class="my-5">
        <div class="params">
            <p> <b>Jmeno:</b> {{box.jmeno}}</p>
            <p> <b>Komentar:</b> {{box.komentar}}</p>
            <p> <b>Vyska:</b> {{box.vyska}}</p>
            <p> <b>Sirka:</b> {{box.sirka}}</p>
            <p> <b>Hlbka:</b> {{box.hlbka}}</p>
            <p> <b>Datum porizeni</b> {{box.datumPorizeni}}</p>
            <p> <b>Prodejce:</b> {{box.prodejce}}</p>
        </div>
        <div class="buttons">
            <v-btn  width="100px" outlined text depressed class="ma-2  width:100px info"> Uprav </v-btn>
            <BoxRemovePopup :id="boxId" :name="box.jmeno" :reroute="true"></BoxRemovePopup>
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