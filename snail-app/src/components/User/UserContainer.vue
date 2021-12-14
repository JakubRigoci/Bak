<template lang="">
<v-container fluid class="primary">
    <v-card>
    <v-card-title>
            <v-checkbox color="secondary" v-model="inactive" label="Neaktivní"></v-checkbox>
            <v-spacer></v-spacer>
      <v-text-field
        color="secondary"
        v-model="search"
        append-icon="mdi-magnify"
        label="Hledat"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
        <v-data-table :headers="headers" :search="search" :items="inactive ? inactiveUsers : users" class="elevation-1">

        <template v-slot:item.roles="{ item }">
            <div>
                {{ item.roles.map(u => u.name).join(' , ') }}
            </div>
        </template>
        <template v-slot:item.actions="{ item }">
            <UserEditPopup :userId="item.userId"></UserEditPopup>
        </template>
        </v-data-table>
  </v-card>
</v-container>
</template>

<script>
import UserEditPopup from "@/components/User/UserEditPopup.vue"

export default {
    created() {
        this.$store.dispatch("getUsersAdmin")
    },
    data() {
        return {
            inactive: false,
            search: '',
            headers: [{
                    text: "Username",
                    value: "name",
                },
                {
                    text: "E-mail",
                    value: "email",
                },
                {
                    text: "Aktivní do",
                    value: "activeUntil",
                },
                {
                    text: "Tel. číslo",
                    value: "phone",
                },
                {
                    text: "Facebook",
                    value: "facebook",
                },
                {
                    text: "Role",
                    value: "roles"
                },
                {
                    text: "Akce",
                    value: "actions"
                }
            ],
        }
    },
    computed: {
        users() {
            return this.$store.state.users
        },
        inactiveUsers() {
            const today = new Date()
            return this.$store.state.users.filter(u => {
                return Date.parse(u.activeUntil) < today.getTime()
            })
        },
    },
    components: {
        UserEditPopup
    }
}
</script>

<style lang="">

</style>
