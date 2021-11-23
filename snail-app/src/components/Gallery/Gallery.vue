<template>
<v-row>
    <v-col v-for="(image, i) in images" :key="i" class="d-flex child-flex" cols="4">
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <img v-on="on" v-bind="attrs" v-auth-image="image.url">
            </template>
            <v-card class="primary">
                <DeleteImagePopup :imageId="image.fileId"></DeleteImagePopup>
            </v-card>
        </v-menu>

    </v-col>
    <v-col class="d-flex child-flex">
        <GalleryAddImagePopup :galleryId="galleryId" :snailId="snailId"></GalleryAddImagePopup>
    </v-col>
</v-row>
</template>

<script>
import GalleryAddImagePopup from "@/components/Gallery/GalleryAddImagePopup.vue"
import DeleteImagePopup from "@/components/Gallery/DeleteImagePopup.vue"

export default {
    props: {
        galleryId: Number,
        snailId: Number,
    },
    created() {
        this.$store.dispatch("getFiles", this.galleryId)
    },
    components: {
        GalleryAddImagePopup,
        DeleteImagePopup
    },
    computed: {
        images() {
            return this.$store.state.files
        }
    },
};
</script>
