<template lang="">
<v-container fluid class="primary">
    <v-checkbox color="secondary" v-model="inactive" label="Neaktivní"></v-checkbox>
    <v-list class="primary" v-if="inactive">
        <v-list-item color="primary" v-for="user in inactiveUsers" :key="user.userId">
                <User :userId="user.userId"></User>
        </v-list-item>
    </v-list>
    <v-list class="primary" v-else>
        <v-list-item color="primary" v-for="user in users" :key="user.userId">
                <User :userId="user.userId"></User>
        </v-list-item>
    </v-list>
</v-container>
</template>

<script>
import User from "@/components/User/User.vue"

export default {
    created() {
        this.$store.dispatch("getUsersAdmin")
    },
    data() {
        return {
            inactive: false
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
        }
    },
    components: {
        User
    }
}
</script>

<style lang="">

</style>
