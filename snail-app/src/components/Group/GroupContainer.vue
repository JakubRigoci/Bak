<template lang="">
<v-container fluid class="pt-12">
    <v-row justify="center" class="pa-0">
        <v-expansion-panels popout>
            <v-expansion-panel v-for="group in groups" :key="group.skupinaId">
                <v-expansion-panel-header class="secondary">
                    <div style="width: 100%" class="secondary d-flex justify-space-between">
                        <v-row>
                            <v-col cols="12">
                                {{group.jmeno}}
                            </v-col>
                            <v-col cols='12' md='6' lg="4" class="text--secondary">
                                {{group.komentar}}
                            </v-col>
                            <v-col cols='12' md='6' lg="4" class="text--secondary">
                                Velikost: {{group.velikost}}
                            </v-col>
                        </v-row>
                        <v-spacer></v-spacer>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn icon v-bind="attrs" v-on="on">
                                    <v-icon>
                                        mdi-dots-vertical
                                    </v-icon>
                                </v-btn>
                            </template>
                            <v-card class="primary">
                                <GroupRemovePopup :id="group.skupinaId"></GroupRemovePopup>
                                <GroupEditPopup :group="Object.assign({}, group)"></GroupEditPopup>
                                <v-btn text width="100%" @click="showSnuskas(group.skupinaId)">Zobrazit snúšky</v-btn>
                            </v-card>
                        </v-menu>
                    </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content id="innerExPan" class="secondary">
                    <Group :id="group.skupinaId"></Group>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <div>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on">
                        <GroupAddPopup :boxId="boxId"></GroupAddPopup>
                    </div>
                </template>
                <span>Přidat skupinu</span>
            </v-tooltip>
        </div>

    </v-row>
</v-container>
</template>

<script>
import Group from "@/components/Group/Group.vue"
import GroupAddPopup from "@/components/Group/GroupAddPopup.vue"
import GroupRemovePopup from "@/components/Group/GroupRemovePopup.vue"
import GroupEditPopup from "@/components/Group/GroupEditPopup.vue"

export default {
    props: {
        ids: []
    },
    data() {
        return {
            boxId: Number.parseInt(this.$route.params.id)
        }
    },
    computed: {
        groups() {
            return this.$store.state.groupsForBox
        }
    },
    components: {
        Group,
        GroupAddPopup,
        GroupRemovePopup,
        GroupEditPopup
    },
    methods: {
        showSnuskas(skupinaId) {
            this.$router.push(`/snuskas/${skupinaId}`)
        }
    }
}
</script>

<style lang="scss">
#innerExPan>* {
    padding: 5px
}
</style>
