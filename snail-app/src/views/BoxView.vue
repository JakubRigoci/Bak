<template lang="">
    <div >
        <v-btn @click="log" outlined rounded text depressed class="info"> Uprav </v-btn>
        BOXVIEW
        {{this.$route.params.id}}
        <div v-for="group in groups" :key="group.skupinaId">
            <Group :id="group.skupinaId"></Group>
        </div>
    </div>
</template>
<script>
import Group from '@/components/Group/Group.vue'
export default {
    components: {Group},
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