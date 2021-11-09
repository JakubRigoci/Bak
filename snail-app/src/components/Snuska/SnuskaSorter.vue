<template>
<div class="text-center">
    <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="secondary" dark v-bind="attrs" v-on="on">
                Zoraď
            </v-btn>
        </template>
        <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title @click="emitValue(item.value)">{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</div>
</template>

<script>
export default {
    data: () => ({
        items: [{
                title: 'Komentar vzostupne',
                value: "CommentaryUp"
            },
            {
                title: 'Komentar zostupne',
                value: "CommentaryDown"
            },
            {
                title: 'Perioda vylihnut vzostupne',
                value: "PeriodUp"
            },
            {
                title: 'Perioda vylihnuti zostupne',
                value: "PeriodDown"
            },
             {
                title: 'Velikost vzostupne',
                value: "SizeUp"
            },
            {
                title: 'Velikost zostupne',
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
