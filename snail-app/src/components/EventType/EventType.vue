<template lang="">
<v-card class="mx-auto secondary" max-width="344" outlined>
    <v-list-item three-line>
        <v-list-item-content class="pa-8">
            <div class="text-overline mb-4">{{eventType.popis}}</div>
            <v-list-item-title class="mb-1">
                {{eventType.typ}}
            </v-list-item-title>
        </v-list-item-content>

        <v-icon x-large class="pr-8"> mdi-calendar </v-icon>
    </v-list-item>
    <v-card-actions class="d-flex justify-space-around mb-6">
        <v-btn width="100px" outlined text depressed class="ma-2  width:100px info"> Uprav </v-btn>
        <EventTypeRemovePopup :eventTypeId="eventTypeId"></EventTypeRemovePopup>
    </v-card-actions>
</v-card>
</template>
<script>
import EventTypeRemovePopup from "@/components/EventType/EventTypeRemovePopup.vue"
export default {
    props: {
        eventTypeId: Number
    },
    components: {
        EventTypeRemovePopup
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