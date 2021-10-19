<template lang="">
<v-container fluid>
    <v-row allign="center">
        <v-col v-for="snuska in snuskas" :key="snuska.snuskaId" :cols='12' :md='6' :lg="4">
            <div>
                <Snuska :snuskaId="snuska.snuskaId"></Snuska>
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
import Snuska from "@/components/Snuska/Snuska.vue"
export default {
    components: {
        SnuskaAddPopup,
        Snuska
    },
    created() {
        this.$store.dispatch("getSnuskas")
    },
    computed: {
        snuskas() {
            return this.$store.state.snuskas;
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
