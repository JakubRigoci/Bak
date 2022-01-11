<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="info">Změnit skupinu</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Změnit skupinu šneka</span>
            </v-card-title>
            <v-card-text>
                <v-select item-color="secondary" color="secondary" v-model="selectedGroup" :items="groups" item-text="jmeno" item-value="skupinaId" label="Skupiny*" required></v-select>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="info" text @click="dialog = false">
                    Zavřít
                </v-btn>
                <v-btn color="info" text @click="save">
                    Potvrdit
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    props: {
        snailId: Number,
        groupId: Number,
    },
    data() {
        return {
            dialog: false,
            selectedGroup: this.groupId,
        }
    },
    created() {
        this.$store.dispatch("getGroups")
    },
    computed: {
        groups() {
            return this.$store.state.groups
        }
    },
    methods: {
        save() {
            this.dialog = false
            this.$store.dispatch("changeGroup", {
                snailId: this.snailId,
                groupId: this.selectedGroup,
                oldGroupId: this.groupId
            })
            this.$router.go()
        }
    }
};
</script>

<style lang="">
</style>
