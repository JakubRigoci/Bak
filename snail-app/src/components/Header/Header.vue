<template>
<v-app-bar class="secondary" app>
    <v-toolbar-title @click="boxes">Snail App</v-toolbar-title>

    <v-spacer></v-spacer>
    <div v-if="isLoggedIn">
        <span><a @click="taxonomies">Taxonomie</a></span>
        <span>|<a @click="events">Udalosti</a></span>
        <span>|<a @click="snuskas">Snusky</a></span>
        <span>|<a @click="boxes">Boxy</a></span>
        <span v-if="isLoggedIn">|<a @click="logout">Logout</a></span>
    </div>

    <span v-if="!isLoggedIn">|<a @click="login">Login</a></span>
</v-app-bar>
</template>

<script>
export default {
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn
        }
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
