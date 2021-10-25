<template lang="">
<v-container fluid>
    <h1 class="subheading grey--text">Snusky</h1>
    <v-divider></v-divider>
    <SnuskaContainer :groupId="Number.parseInt(groupId)"></SnuskaContainer>
</v-container>
</template>

<script>
import SnuskaContainer from "@/components/Snuska/SnuskaContainer.vue"
export default {
    components: {
        SnuskaContainer
    },
    computed: {
        groupId() {
            return this.$route.params.groupId || 0
        }
    }
}
</script>

<style lang="">

</style>
