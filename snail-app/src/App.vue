<template>
  <v-app>
    <Header></Header>
    <v-main class="primary">
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
export default {
  name: "App",
  components: {Header, Footer},
  data: () => ({
    //
  }),
};
</script>

<style>
.primary {
  padding-top: 56px !important;
}
</style>
