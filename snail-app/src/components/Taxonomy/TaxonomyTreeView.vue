<template>
<v-container>
    <v-row>
        <v-col>
            <v-treeview v-model="selection" :items="taxonomiesTree" hoverable shaped activatable color="info" @update:active="getActiveValue"></v-treeview>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    data: () => ({
        selectionType: 'leaf',
        selection: [],
    }),
    computed: {
        taxonomiesTree() {
            return this.$store.state.taxonomiesTreeView
        }
    },
    methods: {
        getActiveValue(value) {
            this.$emit("change", value)
        }
    }
}
</script>
