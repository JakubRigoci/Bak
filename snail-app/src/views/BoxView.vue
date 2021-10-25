<template lang="">
<v-container fluid>
    <BoxInfo :boxId="Number.parseInt(this.$route.params.id)"></BoxInfo>
    <h1 class="subheading grey--text">Skupiny</h1>
    <v-spacer></v-spacer>
    <v-btn @click="showGroups = !showGroups">
        <v-icon>{{ showGroups ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
    </v-btn>

    <v-expand-transition>
        <div v-show="showGroups">
            <v-divider></v-divider>
            <GroupContainer :ids="groups.map(g => g.skupinaId)"></GroupContainer>
        </div>
    </v-expand-transition>
</v-container>
</template>

<script>
import GroupContainer from "@/components/Group/GroupContainer.vue"
import BoxInfo from "@/components/Box/BoxInfo.vue"
export default {
    data() {
        return {
            showGroups: false
        }
    },
    components: {
        GroupContainer,
        BoxInfo
    },
    created() {
        this.$store.dispatch("getGroups").then(() => {
            this.$store.dispatch("getGroupsForBox", this.$route.params.id)
        })
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
