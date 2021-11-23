<template lang="">
<div style="width: 100%" class="primary d-flex justify-space-between">
    <v-row>
        <v-col>
                <v-list-item-content >
        <v-list-item-title> <b>Username:</b> {{user.username}}</v-list-item-title>
        <v-list-item-subtitle> <b>E-mail:</b> {{user.email}}</v-list-item-subtitle>
        <v-list-item-subtitle> <b>Aktivní do:</b> {{format(user.activeUntil)}}</v-list-item-subtitle>
        <v-list-item-subtitle > <b>Role:</b> <span v-for="role in user.roles" :key="role.rolesId"> {{role.name}}</span></v-list-item-subtitle>
    </v-list-item-content>
        </v-col>
            <v-spacer></v-spacer>
            <v-col>
                    <v-list-item-content>
        <UserEditPopup :userId="userId"></UserEditPopup>
    </v-list-item-content>
            </v-col>

    </v-row>


</div>
</template>
<script>
import UserEditPopup from "@/components/User/UserEditPopup.vue"
import {
    format
} from "@/components/Shared/DateFormater"

export default {
    props: {
        userId: Number
    },
    components: {
        UserEditPopup
    },
    computed: {
        user() {
            return this.$store.state.users.find(u =>  u.userId === this.userId )
        }
    },
    methods: {
        format: format
    }
}
</script>
<style lang="">
    
</style>