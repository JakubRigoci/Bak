<template lang="">
<div>
<div v-if="events.length > 0">
<v-timeline dense>
    <v-timeline-item color="secondary" fill-dot v-for="event in events" :key="event.udalostId">
        <Event type="snail" :id="event.udalostId"></Event>
    </v-timeline-item>
  </v-timeline>
  <EventAddPopup type="snail" :id="snailId"></EventAddPopup>
</div>
<div v-if="events.length === 0">
    <span> Zatím nejsou žádné události</span>
    <EventAddPopup type="snail" :id="snailId"></EventAddPopup>
</div>
</div>

</template>
<script>
import Event from "@/components/Shared/Event.vue"
import EventAddPopup from "@/components/Shared/EventAddPopup.vue"

export default {
    props: {
        snailId: Number
    },
    components: {
        Event,
        EventAddPopup
    },
    created() {
        this.$store.dispatch("getSnailEvents", this.snailId)
    },
    computed: {
        events() {
            return this.$store.state.eventsForSnail
        }
    }
}
</script>
<style lang="">
    
</style>