<template lang="">
<v-container fluid>
    <p>Vyberte role:</p>
    <v-checkbox
      @change="emitValue"
      color="secondary"
      v-model="selected"
      label="ADMIN"
      value="ADMIN"
    ></v-checkbox>
    <v-checkbox
      disabled
      color="secondary"
      v-model="selected"
      label="USER"
      value="USER"
    ></v-checkbox>
  </v-container>
</template>
<script>
export default {
    props: {
        userId: Number
    },
    data() {
        return {
            selected: ["USER"]
        }
    },
    computed: {
        user() {
            return this.$store.state.users.find(u => u.userId === this.userId)
        }
    },
    methods: {
        emitValue() {
            this.$emit("change", this.selected)
        }
    }
}
</script>
<style lang="">
    
</style>