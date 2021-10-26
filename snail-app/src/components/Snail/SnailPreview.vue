<template lang="">
<div>
<v-card>
<v-card-title>
    {{snail.jmeno}}
</v-card-title>
<v-card-subtitle>
    {{snail.komentar}}
</v-card-subtitle>
<v-card-text>
    volaco o snekovi
</v-card-text>
<v-card-actions>
    <v-btn @click="details" width="100px" outlined text depressed class="ma-2  width:100px info"> Detaily </v-btn>
</v-card-actions>
</v-card>
</div>
</template>

<script>
export default {
    props: {
        snailId: Number,
        groupId: Number
    },
    computed: {
        snail() {
            return this.$store.getters.snailById(this.snailId)
        }
    },
    methods: {
        details(){
            this.$router.push(`/group/${this.groupId}/snail/${this.snailId}`)
        }
    }
}
</script>

<style lang="">

</style>
