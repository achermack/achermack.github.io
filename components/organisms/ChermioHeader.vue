<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row>
      <v-col cols="9" align-self="center">
        <v-tabs background-color="transparent">
          <v-tabs-slider color="primary" />
          <v-tab
            class="black--text text-lowercase"
            v-for="button in buttons"
            :key="button.text"
            :to="button.page"
            :ripple="false"
          >
            <v-img
              :src="require('@/static/cherm_io.svg')"
              :lazy-src="require('@/static/cherm_io.svg')"
              v-if="button.text == 'Home'"
              class="logo"
            />
            <div v-else>{{ button.text }}</div>
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import cherm_io from "@/static/cherm_io.svg";
export default {
  data() {
    return {
      buttons: [
        { text: "Home", page: "/" },
        { text: "Projects", page: "/projects" },
        { text: "Blog", page: "/blog" }
      ],
      options: {
        duration: 500,
        offset: -275,
        easing: "easeInOutCubic"
      },
      notOnHome: false,
      shields: [
        "https://img.shields.io/github/package-json/v/achermack/achermack.github.io",
        "https://travis-ci.com/achermack/achermack.github.io.svg?token=KSsakyxMzFprq5MSBDff&branch=develop",
        "https://www.codefactor.io/repository/github/achermack/achermack.github.io/badge"
      ],
      icon: cherm_io
    };
  },
  head() {}
};
</script>

<style scoped>
.container {
  background: url("@/static/subtle-prism.svg") no-repeat center center fixed;
}
.logo {
  height: auto;
  max-width: 5rem;
}
</style>
