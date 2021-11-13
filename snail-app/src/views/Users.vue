<template lang="">
<v-container fluid>
    <h1 class="subheading grey--text">Uživatelé</h1>
    <v-divider></v-divider>
    <UserContainer></UserContainer>
</v-container>
</template>

<script>
import UserContainer from "@/components/User/UserContainer.vue"
export default {
    components: {
        UserContainer
    }
}
</script>

<style lang="">

</style>
