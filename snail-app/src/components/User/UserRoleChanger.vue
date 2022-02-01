<template lang="">
<v-container fluid>
    <p>Vyberte role:</p>
    <v-checkbox color="info" v-model="selected" label="ADMIN" value="ADMIN"></v-checkbox>
    <v-checkbox disabled color="info" v-model="selected" label="USER" value="USER"></v-checkbox>
</v-container>
</template>

<script>
export default {
    props: {
        userId: Number
    },
    computed: {
        roles() {
            return this.$store.state.users.find(u => u.userId === this.userId).roles.map(r => r.name)
        },
        selected: {
            get() {
                return this.roles
            },
            set(val) {
                this.$emit("change", val)
            }
        }
    },
}
</script>

<style lang="">

</style>
