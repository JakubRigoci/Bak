<template lang="">
<v-container fluid>
    <h1 class="subheading grey--text">Typy udalosti</h1>
    <v-col cols="12">
        <v-select color="secondary" item-color="secondary" v-model="eventType" :items="targets" item-text="jmeno" label="Typ*" required></v-select>
    </v-col>
    <v-divider></v-divider>
    <EventTypeContainer :eventType="eventType"></EventTypeContainer>
</v-container>
</template>

<script>
import EventTypeContainer from "@/components/EventType/EventTypeContainer.vue"
export default {
    data() {
        return {
            targets: ["BOX", "SNUSKA", "SNEK", "SKUPINA"],
            eventType: "BOX"
        }
    },
    components: {
        EventTypeContainer,
    },
    computed: {
        event() {
            return this.$route.params.groupId || 0
        }
    }
}
</script>

<style lang="">

</style>
