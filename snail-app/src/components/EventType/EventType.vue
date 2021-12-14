<template lang="">
<v-card class="mx-auto secondary" max-width="344" outlined>
    <v-list-item three-line>
        <v-list-item-content class="pa-8">
            <div class="text-overline mb-4">{{eventType.popis}}</div>
            <v-list-item-title class="mb-1">
                Typ: {{eventType.typ}}
            </v-list-item-title>
        </v-list-item-content>

        <v-icon x-large class="pr-8"> mdi-calendar </v-icon>
    </v-list-item>
    <v-card-actions class="d-flex justify-space-around mb-6">
        <EventTypeEditPopup :eventType="Object.assign({}, eventType)"></EventTypeEditPopup>
        <EventTypeRemovePopup :eventTypeId="eventTypeId"></EventTypeRemovePopup>
    </v-card-actions>
</v-card>
</template>

<script>
import EventTypeRemovePopup from "@/components/EventType/EventTypeRemovePopup.vue"
import EventTypeEditPopup from "@/components/EventType/EventTypeEditPopup.vue"

export default {
    props: {
        eventTypeId: Number
    },
    components: {
        EventTypeRemovePopup,
        EventTypeEditPopup
    },
    computed: {
        eventType() {
            return this.$store.state.eventTypes.find(e => e.udalostTypId === this.eventTypeId)
        }
    }
}
</script>

<style lang="">

</style>
