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
                        <SnuskaAddPopup></SnuskaAddPopup>
                    </div>
                </template>
                <span>Pridat snusku</span>
            </v-tooltip>
        </v-col>

    </v-row>
</v-container>
</template>

<script>
import SnuskaAddPopup from "@/components/Snuska/SnuskaAddPopup.vue"
import Taxonomy from "@/components/Taxonomy/Taxonomy.vue"
export default {
    components: {
        SnuskaAddPopup,
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
