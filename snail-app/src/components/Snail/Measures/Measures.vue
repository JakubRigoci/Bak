<template>
<div>
    <v-data-table :headers="headers" :items="mereni" class="elevation-1">
        <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Měření</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
           <MeasuresAddPopup class="ml-4" :snailId="snailId"></MeasuresAddPopup>
      </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <MeasuresDeletePopup :measureId="item.mereniSnekId"></MeasuresDeletePopup>
            <MeasuresEditPopup :measure="Object.assign({}, item)"></MeasuresEditPopup>
        </template>
    </v-data-table>
 
</div>
</template>

<script>
import MeasuresAddPopup from "@/components/Snail/Measures/MeasuresAddPopup.vue"
import MeasuresDeletePopup from "@/components/Snail/Measures/MeasuresDeletePopup.vue"
import MeasuresEditPopup from "@/components/Snail/Measures/MeasuresEditPopup.vue"

export default {
    props: {
        snailId: Number,
    },
    created() {
        this.$store.dispatch("getMeasuresForSnail", this.snailId)
    },
    components: {
        MeasuresAddPopup,
        MeasuresDeletePopup,
        MeasuresEditPopup
    },
    data() {
        return {
            show: false,
            showTable: false,
            dialogDelete: false,
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
                },
                {
                    text: "Akce",
                    value: "actions"
                }
            ],
        };
    },
    computed: {
        mereni() {
            return this.$store.state.measuresForSnail
        }
    },
    methods: {
        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
        }
    },
}

</script>

<style lang="">

</style>
