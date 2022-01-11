<template>
<v-card height="200px" class="primary" flat>
    <v-footer fixed padless>
        <v-card flat tile width="100%" class="secondary text-center">
            <v-card-text v-if="this.$store.getters.isLoggedIn">
                <span> Počet šnekov: {{snails}}</span>
                <span> Počet skupin: {{groups}}</span>
                <span> Počet boxov: {{boxes}}</span>
            </v-card-text>
        </v-card>
    </v-footer>
</v-card>
</template>

<script>
export default {
    created() {
        if (this.isLoggedIn) {
            this.$store.dispatch("getSnails")
            this.$store.dispatch("getBoxes")
            this.$store.dispatch("getGroups")
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn
        },
        boxes() {
            if (this.isLoggedIn) {
                return this.$store.state.boxes.length;
            }
            return []
        },
        groups() {
            if (this.isLoggedIn) {
                return this.$store.state.groups.length;
            }
            return []
        },
        snails() {
            if (this.isLoggedIn) {
                return this.$store.state.snails.length;
            }
            return []
        }
    },
}
</script>
