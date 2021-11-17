<template>
<v-row>
    <v-col v-for="(image, i) in files" :key="i" class="d-flex child-flex" cols="4">
        <v-img src="http://192.168.56.101:8081/api/v1/file/1" @click="index = i" aspect-ratio="1" class="image grey lighten-2">
            <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
            </template>
        </v-img>
    </v-col>
    <v-col class="d-flex child-flex">
                    <GalleryAddImagePopup :snailId="snailId"></GalleryAddImagePopup>
    </v-col>
    <v-col>
    <vue-gallery-slideshow class="mt-16" :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
    </v-col>
</v-row>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow'
import GalleryAddImagePopup from "@/components/Gallery/GalleryAddImagePopup.vue"

export default {
    props: {
        galleryId: Number,
        snailId: Number,
    },
    created() {
        this.$store.dispatch("getFiles", this.galleryId)
    },
    components: {
        VueGallerySlideshow,
        GalleryAddImagePopup
    },
    data() {
        return { images: [
      'https://placekitten.com/801/800',
      'https://placekitten.com/802/800',
      'https://placekitten.com/803/800',
      'https://placekitten.com/804/800',
      'https://placekitten.com/805/800',
      'https://placekitten.com/806/800',
      'https://placekitten.com/807/800',
      'https://placekitten.com/808/800',
      'https://placekitten.com/809/800',
      'https://placekitten.com/810/800'
    ],
    testUrl: 'http://192.168.56.101:8081',
    index: null,
    }
    },
    computed: {
        files() {
            return this.$store.state.files
        }
    }
};
</script>
