<template lang="">
<div>
    <div v-if="events.length > 0">
        <EventAddPopup type="box" :id="boxId"></EventAddPopup>
        <v-timeline dense>
            <v-timeline-item color="secondary" fill-dot v-for="event in events" :key="event.udalostId">
                <Event type="box" :eventId="event.udalostId" :id="boxId"></Event>
            </v-timeline-item>
        </v-timeline>
    </div>
    <div v-if="events.length === 0">
        <span>Zatím nejsou žádné udalosti</span>
        <EventAddPopup type="box" :id="boxId"></EventAddPopup>
    </div>
</div>
</template>

<script>
import Event from "@/components/Shared/Event.vue"
import EventAddPopup from "@/components/Shared/EventAddPopup.vue"

export default {
    props: {
        boxId: Number
    },
    components: {
        Event,
        EventAddPopup
    },
    created() {
        this.$store.dispatch("getBoxEvents", this.boxId)
    },
    computed: {
        events() {
            return this.$store.state.eventsForBox
        }
    }
}
</script>

<style lang="">

</style>
