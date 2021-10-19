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
                    text: "Komentar",
                    value: "komentar",
                },
                {
                    text: "Datum",
                    value: "datum",
                },
                {
                    text: "Vaha",
                    value: "vaha",
                },
                {
                    text: "Ulita",
                    value: "ulita",
                }
            ],
            aa: [{
                    mereniId: 0,
                    komentar: "mereno rano",
                    datum: "2021-01-01",
                    vaha: "10.2",
                    ulita: "7.5",
                },
                {
                    mereniId: 1,
                    komentar: "mereno na obed",
                    datum: "2021-01-01",
                    vaha: "10.2",
                    ulita: "70.5",
                },
                {
                    mereniId: 2,
                    komentar: "mereno vecer",
                    datum: "2021-01-01",
                    vaha: "1.2",
                    ulita: "7.5",
                },
                {
                    mereniId: 3,
                    komentar: "mereno v noc",
                    datum: "2021-01-01",
                    vaha: "10",
                    ulita: "8",
                },
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
