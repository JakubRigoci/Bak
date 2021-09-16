<template lang="">
    <div @click="log">
        GROUP {{id}}
    </div>
</template>
<script>
export default {
    props: {
        id: Number,
    },
    mounted() {
        this.$store.dispatch('getSnails')
    },
    computed: {
        snails() {
            return this.$store.state.snails
        }
    },
    methods: {
        log(){
            console.log(this.snails)
        }
    }
}
</script>
<style lang="">
    
</style>