<template lang="">
<v-container fluid>
    <v-row class="d-flex justify-end ma-8 pa-2">
        <SnuskaFilter v-on:filter="(value) => this.filter(value)"></SnuskaFilter>
        <v-spacer></v-spacer>
        <SnuskaSorter v-on:sort="(value) => this.sort(value)"></SnuskaSorter>
    </v-row>
    <v-row allign="center">
        <v-col v-for="snuska in snuskas" :key="snuska.snuskaId" :cols='12' :md='6' :lg="4">
            <div>
                <Snuska :snuskaId="snuska.snuskaId"></Snuska>
            </div>
        </v-col>
        <v-col>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on">
                        <SnuskaAddPopup></SnuskaAddPopup>
                    </div>
                </template>
                <span>Přidat snúšku</span>
            </v-tooltip>
        </v-col>

    </v-row>
</v-container>
</template>

<script>
import SnuskaAddPopup from "@/components/Snuska/SnuskaAddPopup.vue"
import Snuska from "@/components/Snuska/Snuska.vue"
import SnuskaSorter from "@/components/Snuska/SnuskaSorter.vue"
import SnuskaFilter from "@/components/Snuska/SnuskaFilter.vue"
export default {
    data() {
        return {
            commentaryFilter: "",
            sortType: ""
        }
    },
    components: {
        SnuskaAddPopup,
        SnuskaSorter,
        SnuskaFilter,
        Snuska
    },
    props: {
        groupId: Number
    },
    created() {
        this.$store.dispatch("getSnuskas")
    },
    computed: {
        snuskas() {
            let unsorted = []
            if (this.groupId && Number.isInteger(this.groupId)) {
                unsorted = this.$store.state.snuskas.filter(s => s.komentar.includes(this.commentaryFilter) && s.skupinaId === this.groupId)
            } else {
                unsorted = this.$store.state.snuskas.filter(s => s.komentar.includes(this.commentaryFilter));
            }

            switch (this.sortType) {
                case "":
                    return unsorted;
                case "CommentaryUp":
                    return unsorted.sort((a, b) => a.komentar.localeCompare(b.komentar))
                case "CommentaryDown":
                    return unsorted.sort((a, b) => b.komentar.localeCompare(a.komentar))
                case "PeriodUp":
                    return unsorted.sort((a, b) => {
                        const left = new Date(a.periodaVylihnutiStart)
                        const right = new Date(b.periodaVylihnutiStart)
                        return left - right
                    })
                case "PeriodDown":
                    return unsorted.sort((a, b) => {
                        const left = new Date(a.periodaVylihnutiStart)
                        const right = new Date(b.periodaVylihnutiStart)
                        return right - left
                    })
                case "SizeUp":
                    return unsorted.sort((a, b) => a.velikost - b.velikost)
                case "SizeDown":
                    return unsorted.sort((a, b) => b.velikost - a.velikost)

            }

            return unsorted
        }
    },
    methods: {
        sort(value) {
            console.log(value)
            this.sortType = value
        },
        filter(value) {
            this.commentaryFilter = value
        }
    }
}
</script>

<style lang="">

</style>
