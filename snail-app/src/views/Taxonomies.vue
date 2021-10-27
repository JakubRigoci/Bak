<template lang="">
<v-container fluid>
    <h1 class="subheading grey--text">Taxonomie</h1>
    <v-divider></v-divider>
    <TaxonomiesContainer></TaxonomiesContainer>
</v-container>
</template>

<script>
import TaxonomiesContainer from "@/components/Taxonomy/TaxonomiesContainer.vue"
export default {
    components: {
        TaxonomiesContainer
    }
}
</script>

<style lang="">

</style>
