<template>
<v-app>
    <Header></Header>
    <v-main class="primary">
      <ErrorMessage></ErrorMessage>
        <v-container fluid class="mx-4">
            <router-view></router-view>
        </v-container>
        <Footer></Footer>
    </v-main>
</v-app>
</template>

<script>
import Header from "@/components/Header/Header.vue"
import Footer from "@/components/Footer/Footer.vue"
import ErrorMessage from "@/components/Shared/ErrorMessage.vue"

export default {
    name: "App",
    components: {
        Header,
        Footer,
        ErrorMessage
    },
}
</script>

<style>

.v-alert {
    position: fixed;

}
</style>
