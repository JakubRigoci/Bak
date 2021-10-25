<template>
<v-container fluid>
    <h1 class="subheading grey--text">Boxy</h1>
    <v-divider></v-divider>
    <BoxContainer></BoxContainer>
</v-container>
</template>

<script>
import BoxContainer from "@/components/Box/BoxContainer.vue"
export default {
    components: {
        BoxContainer
    },
    created: function () {
        this.$http.interceptors.response.use(undefined, function (err) {
            return new Promise(function () {
                if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
                    this.$store.dispatch("logout")
                }
                throw err;
            });
        });
    }
}
</script>
