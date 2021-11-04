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
            <GroupContainer v-if="!showSnails" :ids="groups.map(g => g.skupinaId)"></GroupContainer>
            <SnailContainer v-if="showSnails" :groupId="groups[0].skupinaId"></SnailContainer>
            <GroupAddPopup v-if="showSnails" :boxId="Number.parseInt(this.$route.params.id)"></GroupAddPopup>
        </div>
    </v-expand-transition>
</v-container>
</template>

<script>
import GroupContainer from "@/components/Group/GroupContainer.vue"
import GroupAddPopup from "@/components/Group/GroupAddPopup.vue"
import SnailContainer from "@/components/Snail/SnailContainer.vue"
import BoxInfo from "@/components/Box/BoxInfo.vue"
export default {
    data() {
        return {
            showGroups: false
        }
    },
    components: {
        GroupContainer,
        GroupAddPopup,
        SnailContainer,
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
        },
        showSnails() {
            return this.$store.state.groupsForBox.length <= 1
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
