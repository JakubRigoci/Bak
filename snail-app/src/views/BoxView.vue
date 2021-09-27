<template lang="">
    <div >
        <GroupContainer :ids="groups.map(g => g.skupinaId)"></GroupContainer>
    </div>
</template>
<script>
import GroupContainer from '@/components/Group/GroupContainer.vue'
export default {
    components: {GroupContainer},
    async created(){
        await this.$store.dispatch('getGroupsForBox', this.$route.params.id)
    },
    computed: {
        groups() {
            //return this.$store.getters.getGroupsForBox[this.$route.params.id].filter(g => g.datumDo === null);
            return this.$store.state.groupsForBox;
        }
    },
    methods: {
        log() {
            console.log(this.groups)
        }
    }
}
</script>
<style lang="">
    
</style>