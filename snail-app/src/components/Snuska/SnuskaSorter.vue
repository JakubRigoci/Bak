<template>
<div class="text-center">
    <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="info" dark v-bind="attrs" v-on="on">
                Seřadit
            </v-btn>
        </template>
        <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
                <v-btn text width="100%" @click="emitValue(item.value)">{{ item.title }}</v-btn>
            </v-list-item>
        </v-list>
    </v-menu>
</div>
</template>

<script>
export default {
    data: () => ({
        items: [{
                title: 'Komentář vzestupně',
                value: "CommentaryUp"
            },
            {
                title: 'Komentář sestupně',
                value: "CommentaryDown"
            },
            {
                title: 'Perioda vylíhnutí vzestupně',
                value: "PeriodUp"
            },
            {
                title: 'Perioda vylíhnutí sestupně',
                value: "PeriodDown"
            },
            {
                title: 'Velikost vzestupně',
                value: "SizeUp"
            },
            {
                title: 'Velikost sestupně',
                value: "SizeDown"
            },
        ],
    }),
    methods: {
        emitValue(value) {
            this.$emit("sort", value)
        }
    }
}
</script>

<style lang="">

</style>
