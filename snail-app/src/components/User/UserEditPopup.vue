<template lang="">
<div>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on" small class="mr-2">
                mdi-pencil
            </v-icon>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5"> Upravit užívatele {{user.name}} </span>
                <v-col cols="12">
                    <v-select item-color="info" color="info" v-model="selectedType" :items="type" required></v-select>
                </v-col>
            </v-card-title>
            <v-card-subtitle>
                <UserRoleChanger v-on:change="(value) => this.roleChange(value)" :userId="userId" v-if="selectedType === 'ROLE'"></UserRoleChanger>
                <UserActivation v-on:change="(value) => this.activeUntilChange(value)" v-if="selectedType === 'AKTIVOVAT'"></UserActivation>
                <UserDeactivation v-if="selectedType === 'DEAKTIVOVAT'"></UserDeactivation>
            </v-card-subtitle>
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
    computed: {
        user() {
            return this.$store.state.users.find(u => u.userId === this.userId)
        }
    },
    methods: {
        save() {
            switch (this.selectedType) {
                case "ROLE":
                    this.$store.dispatch("editUserRoles", {
                        userId: this.userId,
                        roles: this.selectedRoles
                    })
                    break;
                case "AKTIVOVAT":
                    this.$store.dispatch("activateUser", {
                        userId: this.userId,
                        activeUntil: this.activeUntil
                    })
                    break;
                case "DEAKTIVOVAT":
                    this.$store.dispatch("activateUser", {
                        userId: this.userId,
                        activeUntil: "1970-01-19"
                    })
                    break;

            }
            this.dialog = false
        },
        roleChange(value) {
            this.selectedRoles = value
        },
        activeUntilChange(value) {
            this.activeUntil = value
        }
    }
};
</script>

<style lang="">
</style>
