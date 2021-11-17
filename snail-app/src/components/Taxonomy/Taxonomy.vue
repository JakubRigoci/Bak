<template lang="">
<v-card class="mx-auto secondary" max-width="344" outlined>
    <v-list-item three-line>
        <v-list-item-content class="pa-8">
            <div class="text-overline mb-4">{{taxonomy.jmeno}}</div>
            <v-list-item-title class="mb-1">
                {{taxonomy.popis}}
            </v-list-item-title>
        </v-list-item-content>

        <v-icon x-large class="pr-8"> mdi-bacteria </v-icon>
    </v-list-item>
    <v-card-actions class="d-flex justify-space-around mb-6">
        <TaxonomyEditPopup :taxonomy="Object.assign({}, taxonomy)"></TaxonomyEditPopup>
        <TaxonomyRemovePopup :taxonomyId="taxonomyId"></TaxonomyRemovePopup>
    </v-card-actions>
</v-card>
</template>
<script>
import TaxonomyRemovePopup from "@/components/Taxonomy/TaxonomyRemovePopup.vue"
import TaxonomyEditPopup from "@/components/Taxonomy/TaxonomyEditPopup.vue"

export default {
    components: {
        TaxonomyRemovePopup,
        TaxonomyEditPopup
    },
   props: {
       taxonomyId: Number
   },
   computed: {
       taxonomy() {
           return this.$store.state.taxonomies.find(t => t.taxonomyId === this.taxonomyId) || {}
       }
   } 
}
</script>
<style lang="">
    
</style>