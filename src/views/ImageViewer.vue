<template>
  <v-flex >
    <img :src="'https://i.gyazo.com/' + this.$props.imageId + '.png'" />
  </v-flex>

</template>


<script>
export default {
  name: "ImageViewer",
  props: {
    imageId: {
      type: String,
      required: true,
      default: "test"
    }
  }
}


</script>
