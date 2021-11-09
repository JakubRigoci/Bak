<template lang="">
<v-container fluid>
    <BoxInfo :boxId="Number.parseInt(this.$route.params.id)"></BoxInfo>
    <h1 v-if="!showSnails" class="subheading grey--text">Skupiny</h1>
    <h1 v-if="showSnails" class="subheading grey--text">Sneci</h1>
    <v-btn class="secondary" @click="showGroups = !showGroups">
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
    <h1 class="pt-8 subheading grey--text">Udalosti</h1>
    <v-btn class="secondary" @click="showEvents = !showEvents">
        <v-icon>{{ showEvents ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
    </v-btn>
    <v-expand-transition>
        <div v-show="showEvents">
            <v-divider></v-divider>
            <BoxEvents :boxId="Number.parseInt(this.$route.params.id)"></BoxEvents>
        </div>
    </v-expand-transition>
</v-container>
</template>

<script>
import GroupContainer from "@/components/Group/GroupContainer.vue"
import GroupAddPopup from "@/components/Group/GroupAddPopup.vue"
import SnailContainer from "@/components/Snail/SnailContainer.vue"
import BoxInfo from "@/components/Box/BoxInfo.vue"
import BoxEvents from "@/components/Box/BoxEvents.vue"

export default {
    data() {
        return {
            showGroups: false,
            showEvents: false,
        }
    },
    components: {
        GroupContainer,
        GroupAddPopup,
        SnailContainer,
        BoxInfo,
        BoxEvents,
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
            if(this.groups)
                return this.groups.length <= 1
            
            return false
        }
    },
    methods: {
        log() {
            console.log(this.groups)
        }
    }
}
</script>

<style lang="scss">
</style>
