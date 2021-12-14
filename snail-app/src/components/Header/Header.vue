<template>
<div class="nav">
    <v-app-bar class="secondary" app flat>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase">
            <span @click="home" class="primary--text">
                Snail app
            </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <span v-if="isLoggedIn">
            <v-btn color="primary" text @click="logout">Logout</v-btn>
        </span>
        <span v-if="!isLoggedIn">
            <v-btn color="primary" text router to="/login">Login</v-btn>
        </span>
        <span v-if="!isLoggedIn">|<v-btn color="primary" text router to="/register">Registrovat</v-btn></span>
    </v-app-bar>
    <v-navigation-drawer v-if="this.$store.getters.isLoggedIn" app v-model="drawer" class="secondary">
        <RouteLinksList></RouteLinksList>
    </v-navigation-drawer>
</div>
</template>

<script>
import RouteLinksList from '@/components/Header/RouteLinksList.vue';
export default {
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn
        }
    },
    components: {
        RouteLinksList,
    },
    data() {
        return {
            drawer: false,
        };
    },
    methods: {
        logout() {
            this.$store.dispatch("logout")
                .then(() => {
                    this.$router.push("/login")
                })
        },
        login() {
            this.$router.push("/login")
        },
        home() {
            const path = `/home`
            if (this.$route.path !== path) this.$router.push(path)
        },
    },
}
</script>
