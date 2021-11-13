<template lang="">
<v-container fluid class="pt-12">
    <v-row justify="center" class="pa-0">
        <v-expansion-panels popout>
            <v-expansion-panel v-for="group in groups" :key="group.skupinaId">
                <v-expansion-panel-header class="secondary">
                    <v-row class="mx-auto">
                        <v-col cols="12">
                            {{group.jmeno}}
                        </v-col>
                        <v-col cols="4" class="mx-auto text--secondary">
                            {{group.komentar}}
                        </v-col>
                        <v-col cols="4" class="mx-auto text--secondary">
                            Velikost: {{group.velikost}}
                        </v-col>
                    </v-row>
                    <v-spacer></v-spacer>
                    <v-row class="mx-auto">
                        <v-col cols="12">
                            <GroupRemovePopup :id="group.skupinaId"></GroupRemovePopup>
                            <v-btn outlined width="100px" depressed class="ma-2 info"> Uprav</v-btn>
                        </v-col>
                    </v-row>
                    <v-col cols="12">
                        <v-btn outlined width="150px" @click="showSnuskas(group.skupinaId)" depressed class="ma-2 info">Zobrazit snúšky</v-btn>
                    </v-col>
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

export default {
    props: {
        ids: []
    },
    data () {
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
        GroupRemovePopup
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
