<template lang="">
<v-container fluid>
    <v-row allign="center">
        <v-col v-for="box in boxes" :key="box.boxId" :cols='12' :md='6' :lg="4">
            <div>
                <Box :id="box.boxId"></Box>
            </div>
        </v-col>
        <v-col>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on">
                        <BoxAddPopup></BoxAddPopup>
                    </div>
                </template>
                <span>Přidat box</span>
            </v-tooltip>
        </v-col>

    </v-row>
</v-container>
</template>

<script>
import Box from "@/components/Box/Box.vue";
import BoxAddPopup from '@/components/Box/BoxAddPopup.vue';
export default {
    components: {
        Box,
        BoxAddPopup
    },
    computed: {
        boxes() {
            return this.$store.state.boxes;
        },
    },
    created() {
        this.$store.dispatch("getBoxes");
    },
};
</script>

<style lang="">
</style>
