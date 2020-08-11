<template>
      <v-app-bar
      app
      absolute
      dark
      prominent
      src="@/assets/header.png"
      fade-img-on-scroll
      height="275px"
    >
    <v-layout wrap>
      <v-container>
        <v-layout>
          <v-spacer></v-spacer>
          <v-toolbar-items class="text-right" style="height: 50px">
            <v-btn
              :x-small="$vuetify.breakpoint.smAndDown"
              @click="$vuetify.goTo('#about',options )"
              text
            >About</v-btn>
            <v-btn
              :x-small="$vuetify.breakpoint.smAndDown"
              @click="$vuetify.goTo('#projects', options )"
              text
            >Projects</v-btn>
            <v-btn
              :x-small="$vuetify.breakpoint.smAndDown"
              @click="$vuetify.goTo('#contact',options )"
              text
            >Contact</v-btn>
          </v-toolbar-items>
        </v-layout>
      </v-container>
      <v-container>
          <v-row style="font-size: 40px; text-shadow: 1px 1px 6px #000000"> > cherm.io</v-row>
          <v-row style="font-size: 28px; text-shadow: 1px 1px 6px #000000">Austin Chermack's Official Portfolio</v-row>
      </v-container>
    </v-layout>
  </v-app-bar>
</template>

<script>
// import * as easings from "vuetify/es5/services/goto/easing-patterns";
export default {

  data() {
    return {
      options: {
        duration: 500,
        offset: -275,
        easing: "easeInOutCubic"
      }

    };
  }
};
</script>
<style>

</style>