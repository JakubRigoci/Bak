<template lang="">
<v-card v-if="event">
    <v-card-title class="secondary text-h6">
        {{format(event.datum)}} {{eventType.popis}}
    </v-card-title>
    <v-card-text class="white text--primary">
        <p>{{event.komentar}}</p>
    </v-card-text>
    <v-card-actions>
        <EventRemovePopup :eventId="event.udalostId" :type="type"></EventRemovePopup>
        <EventEditPopup :id="id" :eventId="event.udalostId" :eventProp="Object.assign({}, event)" :type="type"></EventEditPopup>
    </v-card-actions>
</v-card>
</template>

<script>
import EventRemovePopup from "@/components/Shared/EventRemovePopup.vue"
import EventEditPopup from "@/components/Shared/EventEditPopup.vue"
import {
    format
} from "@/components/Shared/DateFormater"

export default {
    props: {
        type: String,
        eventId: Number,
        id: Number
    },
    components: {
        EventRemovePopup,
        EventEditPopup
    },
    created() {
        this.$store.dispatch("getEventTypes")
    },
    computed: {
        event() {
            switch (this.type) {
                case "box":
                    return this.$store.state.eventsForBox.find(e => e.udalostId === this.eventId);
                case "snuska":
                    return this.$store.state.eventsForSnuska.find(e => e.udalostId === this.eventId);
                case "snail":
                    return this.$store.state.eventsForSnail.find(e => e.udalostId === this.eventId);
            }
            return {}
        },
        eventType() {
            return this.$store.state.eventTypes.find(e => e.udalostTypId === this.event.udalostTypId);
        }
    },
    methods: {
        format: format
    }
}
</script>

<style lang="">

</style>
