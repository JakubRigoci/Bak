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
}
</script>
