<template lang="">
<div>
    <v-data-table :headers="headers" :items="mereni" :items-per-page="5" class="elevation-1"></v-data-table>
</div>
</template>

<script>
export default {
    props: {
        snailId: Number,
    },
    created() {
        this.$store.dispatch("getMeasuresForSnail", this.snailId)
    },
    data() {
        return {
            show: false,
            showTable: false,
            headers: [{
                    text: "Komentář",
                    value: "komentar",
                },
                {
                    text: "Datum",
                    value: "datum",
                },
                {
                    text: "Váha",
                    value: "vaha",
                },
                {
                    text: "Ulita",
                    value: "ulita",
                }
            ],
        };
    },
    computed: {
        mereni() {
            return this.$store.measuresForSnail
        }
    }

}
</script>

<style lang="">

</style>
