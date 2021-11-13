<template lang="">
<div>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="secondary" v-bind="attrs" v-on="on" class="ma-2"> Uprav </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5"> Upravit: </span>
                <v-col cols="12">
                <v-select item-color="secondary" color="secondary" v-model="selectedType" :items="type" required></v-select>
                </v-col>
            </v-card-title>
            <UserRoleChanger v-on:change="(value) => this.roleChange(value)" :userId="userId" v-if="selectedType === 'ROLE'"></UserRoleChanger>
            <UserActivation v-on:change="(value) => this.activeUntilChange(value)" v-if="selectedType === 'AKTIVOVAT'"></UserActivation>
            <UserDeactivation v-if="selectedType === 'DEAKTIVOVAT'"></UserDeactivation>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="secondary" text @click="dialog = false">
                    Zavřít
                </v-btn>
                <v-btn color="secondary" text @click="save">
                    Potvrdit
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import UserRoleChanger from "@/components/User/UserRoleChanger.vue"
import UserActivation from "@/components/User/UserActivation.vue"
import UserDeactivation from "@/components/User/UserDeactivation.vue"

export default {
    props: {
        userId: Number,
    },
    components: {
        UserRoleChanger,
        UserActivation,
        UserDeactivation
    },
    data: () => ({
        dialog: false,
        type: ["ROLE", "AKTIVOVAT", "DEAKTIVOVAT"],
        selectedType: "AKTIVOVAT",
        selectedRoles: [],
        activeUntil: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }),
    methods: {
        save() {
            switch (this.selectedType) {
                case "ROLE":
                    this.$store.dispatch("editUserRoles", {userId: this.userId, roles: this.selectedRoles})
                    break;
                case "AKTIVOVAT":
                    this.$store.dispatch("activateUser", {userId: this.userId, activeUntil: this.activeUntil})
                    break;
                case "DEAKTIVOVAT":
                    this.$store.dispatch("activateUser", {userId: this.userId, activeUntil: "1970-01-19"})
                    break;
                
            }
            this.dialog = false
        },
        roleChange(value) {
            console.log(value)
            this.selectedRoles = value
        },
        activeUntilChange(value) {
            console.log(value)
            this.activeUntil = value
        }
    }
};
</script>

<style lang="">
</style>
