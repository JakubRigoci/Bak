<template lang="">
<div>
    <v-btn  color="secondary" @click="showFilter = !showFilter">
        Filter
    </v-btn>
    <v-expand-transition>
        <div v-if="showFilter">
            Filter
            <v-text-field @change="emitValue" color="secondary" label="Komentar" v-model="commentaryFilter"></v-text-field>
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
