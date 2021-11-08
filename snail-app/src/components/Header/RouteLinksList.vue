<template lang="">
<v-list>
    <v-subheader>Snail app</v-subheader>
    <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" router :to="item.route">
            <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list-item-group>
    <div class="admin">
        <v-subheader>Admin</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in adminItems" :key="i" router :to="item.route">
                <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </div>
</v-list>
</template>

<script>
export default {
    data() {
        return {
            selectedItem: 1,
            items: [{
                    text: "Boxy",
                    icon: 'mdi-archive',
                    route: '/home',
                },
                {
                    text: "Snúšky",
                    icon: 'mdi-egg',
                    route: '/snuskas',
                },
            ],
            adminItems: [{
                    text: "Události",
                    icon: 'mdi-calendar',
                    route: '/events',
                },
                {
                    text: "Taxonomie",
                    icon: 'mdi-bacteria',
                    route: '/taxonomies',
                },
                {
                    text: "Uživatelé",
                    icon: 'mdi-account',
                    route: '/users',
                },
            ],
        };
    },
};
</script>

<style lang="">

</style>
