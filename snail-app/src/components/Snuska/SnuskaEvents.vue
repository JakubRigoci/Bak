<template lang="">
<div>
    <EventAddPopup type="snuska" :id="snuskaId"></EventAddPopup>
    <v-timeline dense>
        <v-timeline-item color="secondary" fill-dot v-for="event in events" :key="event.udalostId">
            <Event type="snuska" :id="snuskaId" :eventId="event.udalostId"></Event>
        </v-timeline-item>
    </v-timeline>
</div>
</template>

<script>
import Event from "@/components/Shared/Event.vue"
import EventAddPopup from "@/components/Shared/EventAddPopup.vue"

export default {
    props: {
        snuskaId: Number
    },
    components: {
        Event,
        EventAddPopup
    },
    created() {
        this.$store.dispatch("getSnuskaEvents", this.snuskaId)
    },
    computed: {
        events() {
            return this.$store.state.eventsForSnuska
        }
    }
}
</script>

<style lang="">

</style>
