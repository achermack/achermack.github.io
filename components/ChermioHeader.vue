<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row align="center" justify="center">
      <ChermioLogo />
    </v-row>
    <v-divider />
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      buttons: [
        { text: 'About', page: '#about' },
        { text: 'Projects', page: '#projects' },
        { text: 'Contact', page: '#contact' }
      ],
      options: {
        duration: 500,
        offset: -275,
        easing: 'easeInOutCubic'
      }
    }
  },
  head () {}
}
</script>

<style scoped>
.v-btn {
  color: paleturquoise;
}
</style>
