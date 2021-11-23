<template lang="">
<v-container fluid>
    <p>Vyberte čas do kdy aktivace platí:</p>
    <v-col cols="12">
        <v-menu transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{on}">
                <v-text-field readonly :value="formatedDate" v-on="on"></v-text-field>
            </template>
            <v-date-picker  @input="emitValue" color="secondary" v-model="activeUntil"></v-date-picker>
        </v-menu>
    </v-col>
</v-container>
</template>

<script>
import {
    format
} from "@/components/Shared/DateFormater"

export default {
    props: {
        userId: Number
    },
    data() {
        return {
            activeUntil: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        }
    },
    computed: {
        user() {
            return this.$store.state.users.find(u => u.userId === this.userId)
        },
        formatedDate() {
            return  this.activeUntil ? this.format(this.activeUntil) : ''
        }
    },
    methods: {
        emitValue() {
            this.$emit("change", this.activeUntil)
        },
        format: format
    }
}
</script>

<style lang="">

</style>
