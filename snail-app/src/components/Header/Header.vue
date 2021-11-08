<template>
<div class="nav">
    <v-app-bar class="secondary" app flat>
        <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase">
            <span class="primary--text">
                Snail app
            </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <span v-if="isLoggedIn"><a @click="logout">Logout</a></span>
        <span v-if="!isLoggedIn"><a @click="login">Login</a></span>
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
        snuskas() {
            this.$router.push("/snuskas")
        },
        boxes() {
            this.$router.push("/home");
        },
        taxonomies() {
            this.$router.push("/taxonomies")
        },
        events() {
            this.$router.push("/events")
        }
    },
    mounted() {
        console.log(this.isLoggedIn)
    }
}
</script>
