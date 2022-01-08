<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row align="center" justify="center">
      <ChermioLogo />
    </v-row>
    <v-row class="mt-0 mb-2" align="center" justify="center">
      <v-tabs centered background-color="transparent">
        <v-tabs-slider color="primary" />
        <v-tab v-for="button in buttons" :key="button.text" :to="button.page">
          {{ button.text }}
        </v-tab>
      </v-tabs>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      buttons: [
        { text: 'Home', page: '/' },
        { text: 'Projects', page: '/projects' }
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
