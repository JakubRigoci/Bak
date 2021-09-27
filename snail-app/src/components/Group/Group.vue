<template lang="">
<div>
    <SnailContainer></SnailContainer>
</div>
</template>
<script>
import SnailContainer from '@/components/Snail/SnailContainer.vue'
export default {
    props: {
        id: Number,
    },
    created() {
        this.$store.dispatch('getSnailsForGroup')
    },
    computed: {
        snails() {
            return this.$store.state.snailsForGroup
        }
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