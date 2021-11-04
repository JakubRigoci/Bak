<template lang="">
<v-container fluid>
    <v-row allign="center">
        <v-col v-for="taxonomy in taxonomies" :key="taxonomy.taxonomyId" :cols='12' :md='6' :lg="4">
            <div>
                <Taxonomy :taxonomyId="taxonomy.taxonomyId"></Taxonomy>
            </div>
        </v-col>
        <v-col>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on">
                        <TaxonomyAddPopup></TaxonomyAddPopup>
                    </div>
                </template>
                <span>Pridat Taxonomii</span>
            </v-tooltip>
        </v-col>

    </v-row>
</v-container>
</template>

<script>
import TaxonomyAddPopup from "@/components/Taxonomy/TaxonomyAddPopup.vue"
import Taxonomy from "@/components/Taxonomy/Taxonomy.vue"
export default {
    components: {
        TaxonomyAddPopup,
        Taxonomy
    },
    props: {
        taxonomyId: Number
    },
    created() {
        this.$store.dispatch("getTaxonomies")
    },
    computed: {
        taxonomies() {
            return this.$store.state.taxonomies;
        }
    },
    methods: {
        log() {
            console.log(this.groups)
        }
    }
}
</script>

<style lang="">

</style>
