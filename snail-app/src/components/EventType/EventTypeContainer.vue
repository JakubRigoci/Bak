<template lang="">
<v-container fluid>
    <v-row allign="center">
        <v-col v-for="eventType in eventTypes" :key="eventType.udalostTypId" :cols='12' :md='6' :lg="4">
            <div>
                <EventType :eventTypeId="eventType.udalostTypId"></EventType>
            </div>
        </v-col>

        <v-col>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on">
                        <EventTypeAddPopup></EventTypeAddPopup>
                    </div>
                </template>
                <span>Přidat typ události</span>
            </v-tooltip>
        </v-col>

    </v-row>
</v-container>
</template>

<script>
import EventTypeAddPopup from '@/components/EventType/EventTypeAddPopup.vue'
import EventType from "@/components/EventType/EventType.vue"
export default {
    props: {
        eventType: String
    },
    components: {
        EventTypeAddPopup,
        EventType
    },
    computed: {
        eventTypes() {
            return this.$store.state.eventTypes.filter(e => e.typ === this.eventType);
        },
    },
    created() {
        this.$store.dispatch("getEventTypes");
    },
};
</script>

<style lang="">
</style>
