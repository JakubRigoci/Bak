<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="info"> Vymazat </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Odebrat Box</span>
            </v-card-title>
            <v-card-text>
                <span>
                    Skutečně si přejete odebrat box?
                </span>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="info" text @click="dialog = false">
                    Zavřít
                </v-btn>
                <v-btn color="info" text @click="save">
                    Vymazat
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    props: {
        id: Number,
        reroute: Boolean
    },
    data: () => ({
        dialog: false,
    }),
    methods: {
        async save() {
            this.dialog = false
            if (await this.checkDependenciesOrRemoveGroup()) {
                await this.$store.dispatch("removeBox", this.id)
            } else {
                await this.$store.dispatch("error", "Box má závislosti!")
            }

            if (this.reroute) {
                this.$router.push("/home")
            }
        },
        async checkDependenciesOrRemoveGroup() {
            await this.$store.dispatch("getGroups")
            await this.$store.dispatch("getGroupsForBox", this.id)
            const groupsInBox = this.$store.state.groupsForBox

            for (let group of groupsInBox) {
                if (group.velikost > 0) {
                    return false
                }
            }

            for (let group of groupsInBox) {
                await this.$store.dispatch("removeGroup", group.skupinaId)
            }

            return true

        }
    }
};
</script>

<style lang="">
</style>
