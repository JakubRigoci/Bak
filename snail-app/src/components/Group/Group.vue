<template lang="">
<div>
    <SnailContainer :groupId="id"></SnailContainer>
</div>
</template>
<script>
import SnailContainer from "@/components/Snail/SnailContainer.vue"
export default {
    props: {
        id: Number,
    },
    created() {
        this.$store.dispatch("getSnails")
    },
    methods: {
        log(){
            console.log(this.snails)
        }
    },
    components: {SnailContainer}
}
</script>
<style lang="">
    
</style>