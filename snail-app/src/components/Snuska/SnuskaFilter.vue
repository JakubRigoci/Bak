<template lang="">
<div>
    <v-btn color="info" @click="showFilter = !showFilter">
        Filter
    </v-btn>
    <v-expand-transition>
        <div v-if="showFilter">
            Filter
            <v-text-field @change="emitValue" color="info" label="Komentář" v-model="commentaryFilter"></v-text-field>
        </div>
    </v-expand-transition>
</div>
</template>

<script>
export default {
    data() {
        return {
            commentaryFilter: "",
            showFilter: false
        }
    },
    methods: {
        emitValue() {
            this.$emit("filter", this.commentaryFilter)
        }
    }
}
</script>

<style lang="">

</style>
