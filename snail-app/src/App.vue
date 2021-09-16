<template>
  <v-app>
    <Header></Header>
    <v-main class="primary">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header/Header.vue'
export default {
  name: 'App',
  components: {Header},
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
