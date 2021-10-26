<template lang="">
<div>
    <h1 class="subheading grey--text">Snek</h1>
    <v-divider></v-divider>
    <v-container class="my-5">
        <div v-if="snail" class="params">
            <p> <b>Jmeno:</b> {{snail.jmeno}}</p>
            <p> <b>Komentar:</b> {{snail.komentar}}</p>
            <p> <b>Barva ulity:</b> {{snail.barvaUlita}}</p>
            <p> <b>Barva telo:</b> {{snail.barvaTelo}}</p>
            <p v-if="snuska.periodaVylihnutiKonec"> <b>Perioda Vylihnuti:</b> {{snuska.periodaVylihnutiStart}} - {{snuska.periodaVylihnutiKonec}}</p>
            <p> <b>Vzor ulity:</b> {{snail.vzorecUlita}}</p>
            <p v-if="snail"> <b>Narozen:</b> {{snail.narozen}}</p>
        </div>
        <div class="buttons">
            <v-btn  width="100px" outlined text depressed class="ma-2  width:100px info"> Uprav </v-btn>
            <SnailRemovePopup :snailId="Number.parseInt(this.$route.params.snailId)" :groupId="Number.parseInt(this.$route.params.groupId)" :reroute="true"></SnailRemovePopup>
        </div>
    </v-container>
</div>
</template>

<script>
import SnailRemovePopup from "@/components/Snail/SnailRemovePopup.vue"

export default {
    created() {
        this.$store.dispatch("getSnuskas")
        this.$store.dispatch("getSnails")
        this.$store.dispatch("getGroups")
    },
    components: {
        SnailRemovePopup
    },
    computed: {
        snuska() {
            return this.$store.state.snuskas.find(s => {
                return s.snuskaId === Number.parseInt(this.$route.params.id);
            }) || {};
        },
        group(){
            return this.$store.state.groups.find(g => {
                return g.skupinaId === this.snuska.skupinaId
            }) || "";
        },
        snail() {
            return this.$store.getters.snailById(Number.parseInt(this.$route.params.snailId))
        }
    }
}
</script>

<style lang="">

</style>
