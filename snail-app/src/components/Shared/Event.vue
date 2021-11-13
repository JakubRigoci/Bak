<template lang="">
<v-card>
    <v-card-title class="secondary text-h6">
        {{event.datum}} {{eventType.popis}}
    </v-card-title>
    <v-card-text class="white text--primary">
        <p>{{event.komentar}}</p>
        <EventRemovePopup :eventId="event.udalostId" :type="type"></EventRemovePopup>
    </v-card-text>
</v-card>
</template>

<script>
import EventRemovePopup from "@/components/Shared/EventRemovePopup.vue"

export default {
    props: {
        type: String,
        id: Number,
    },
    components: {
        EventRemovePopup
    },
    created() {
        this.$store.dispatch("getEventTypes")
    },
    computed: {
        event() {
            switch (this.type) {
                case "box":
                    return this.$store.state.eventsForBox.find(e => e.udalostId === this.id);
                case "snuska":
                    return this.$store.state.eventsForSnuska.find(e => e.udalostId === this.id);
                case "snail":
                    return this.$store.state.eventsForSnail.find(e => e.udalostId === this.id);
            }

            return {}
        },
        eventType() {
            return this.$store.state.events.find(e => e.udalostTypId === this.event.udalostTypId);
        }
    }
}
</script>

<style lang="">

</style>
