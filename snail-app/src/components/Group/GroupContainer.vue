<template lang="">
<v-container fluid class="pt-12">
    <v-row justify="center" class="mx-auto">
        <v-expansion-panels popout>
            <v-expansion-panel v-for="group in groups" :key="group.skupinaId">
                <v-expansion-panel-header class="secondary">
                    <v-row>
                        <v-col cols="12">
                            {{group.jmeno}}
                        </v-col>
                        <v-col cols="4" class="text--secondary">
                            {{group.komentar}}
                        </v-col>
                        <v-col cols="4" class="text--secondary">
                            Velikost: {{group.velikost}}
                        </v-col>
                    </v-row>
                    <v-spacer></v-spacer>
                    <v-row>
                        <v-col cols="12">
                            <GroupRemovePopup :id="group.skupinaId" :name="group.jmeno"></GroupRemovePopup>
                            <v-btn outlined width="100px" depressed class="ma-2 info"> Uprav</v-btn>
                        </v-col>


                    </v-row>
                    
                        <v-col cols="12">
                             <v-btn outlined width="150px" @click="showSnuskas(group.skupinaId)" depressed class="ma-2 info"> Zobraz snusky</v-btn>
                        </v-col>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="secondary">
                    <Group :id="group.skupinaId"></Group>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <div>
            <GroupAddPopup></GroupAddPopup>
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

<style lang="">

</style>
