<template lang="">
    <div>
        <v-row>
            <v-text-field label="komentar" clearable v-model="commentaryFilter"></v-text-field>
        </v-row>
    </div>
</template>
<script>
export default {
    data() {
        return{
            commentaryFilter: ""
        }
    }
}
</script>
<style lang="">
    
</style>