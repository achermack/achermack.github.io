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
        <vue-typer
        :text='["> cherm.io"]'
        :repeat='Infinity'
        :shuffle='false'
        initial-action='typing'
        :pre-type-delay='70'
        :type-delay='70'
        :pre-erase-delay='6000'
        :erase-delay='150'
         erase-style='select-all'
        :erase-on-complete='false'
        caret-animation='smooth'
        ></vue-typer>
        <v-row style="font-size: 24px; text-shadow: 1px 1px 6px #000000">Austin Chermack's Official Portfolio</v-row>
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
      },

    };
  }
  
};

</script>
<style>
.vue-typer {
  font-size: 40px; 
  
}
.vue-typer .custom.char {
  color: white;
  text-shadow: 1px 1px 6px #000000;
}
</style>