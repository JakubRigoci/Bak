<template lang="">
<v-container fluid>
    <BoxInfo :boxId="Number.parseInt(this.$route.params.id)"></BoxInfo>
    <h1 class="subheading grey--text">Skupiny/Šneci</h1>
    <v-btn class="secondary" @click="showGroups = !showGroups">
        <v-icon>{{ showGroups ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
    </v-btn>

    <v-expand-transition>
        <div v-show="showGroups">
            <v-divider></v-divider>
            <GroupContainer v-if="!showSnails" :ids="groups.map(g => g.skupinaId)"></GroupContainer>
            <SnailContainer v-if="showSnails && groups[0]" :groupId="groups[0].skupinaId"></SnailContainer>
            <v-tooltip v-if="showSnails" bottom>
                <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on">
                        <GroupAddPopup :boxId="boxId"></GroupAddPopup>
                    </div>
                </template>
                <span>Přidat skupinu</span>
            </v-tooltip>
        </div>
    </v-expand-transition>
    <h1 class="pt-8 subheading grey--text">Události</h1>
    <v-btn class="secondary" @click="showEvents = !showEvents">
        <v-icon>{{ showEvents ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
    </v-btn>
    <v-expand-transition>
        <div v-show="showEvents">
            <v-divider></v-divider>
            <BoxEvents :boxId="boxId"></BoxEvents>
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
            boxId: Number.parseInt(this.$route.params.id)
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
            return this.$store.state.groupsForBox;
        },
        showSnails() {
            if (this.groups)
                return this.groups.length <= 1

            return false
        }
    },
}
</script>

<style lang="scss">
</style>
