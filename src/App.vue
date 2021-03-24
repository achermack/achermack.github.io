<template>
  <v-app class="grey darken-4">
    <Header />

    <v-content>
      <router-view></router-view>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
body {
  background-color: #131316;
}
</style>