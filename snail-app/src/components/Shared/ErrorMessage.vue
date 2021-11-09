<template lang="">
            <v-snackbar color="error" top v-model="snackbarOpen" type="error">
                {{errorMessage}}
            </v-snackbar>
</template>
<script>
export default {
        computed: {
        errorMessage() {
            return this.$store.state.errorMessage
        },
        snackbarOpen: {
            get() {
                return this.errorMessage !== ''
            },
            set(value) {
                this.counter = value;
            }
        },
    }
}
</script>
<style lang="">
    
</style>