<template>
  <v-card flat color="transparent" max-width="350px">
    <v-card-title>
        <v-row align="center" dense>
            <v-col cols="4">
                <v-card
                :href="app.link"
                target="_blank"
                elevation="5"
                style="border-radius: 20px"
                width="85px"
                height="85px"
                >
                    <v-img contain :src="logo(app.logo)"/>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-btn 
                :href="app.link"
                target="_blank"
                text
                outlined
                class="title">
                {{app.name}}</v-btn>
            </v-col>
        </v-row>
    </v-card-title>
    <v-card-text>
      <div>{{app.description}}</div>
      <div class="title mt-2 font-weight-bold white--text">Involved Technologies</div>
      <v-layout>
        <template v-for="(tech, i) in app.technologies">
          <v-flex xs3 :key="i">
            <div class="text-center">
              <v-btn icon :href="tech.link" target="_blank">
                <v-icon>{{tech.icon}}</v-icon>
              </v-btn>
              <div class="caption">{{tech.name}}</div>
            </div>
          </v-flex>
        </template>
      </v-layout>
      <div v-if="app.code.link">
        <div class="title mt-2 font-weight-bold white--text">Source Code</div>
        <v-btn icon :href="app.code.link" target="_blank">
          <v-icon>{{app.code.icon}}</v-icon>
        </v-btn>
        <div class="caption">{{app.code.name}}</div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    app: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    logo(name) {
      return require("../assets/" + name);
    }
  }
};
</script>

<style>
</style>