<template>
  <v-card flat color="transparent" max-width="350px">
    <v-card-title>
      <v-row align="center" dense>
        <v-col cols="4">
          <v-card
            :to="app.link"
            elevation="5"
            style="border-radius: 20px"
            width="85px"
            height="85px"
          >
            <v-img contain :src="logo(app.logo)" />
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-btn :to="app.link" text outlined class="title">
            <span> {{ app.name }} </span>
            <v-icon class="mx-0 px-0 ml-1" small>
              mdi-arrow-right-box
            </v-icon>
          </v-btn>
          <v-flex mt-2>
            <v-chip small pill color="dark-grey" dark>
              {{ app.role }}
            </v-chip>
          </v-flex>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <div>{{ app.description }}</div>
      <div class="title mt-2 font-weight-bold white--text">
        Involved Technologies
      </div>
      <v-layout>
        <template v-for="(tech, i) in app.technologies">
          <v-flex :key="i" xs3>
            <div class="text-center">
              <v-btn icon :href="tech.link" target="_blank">
                <v-icon>{{ tech.icon }}</v-icon>
              </v-btn>
              <div class="caption">
                {{ tech.name }}
              </div>
            </div>
          </v-flex>
        </template>
      </v-layout>
      <div v-if="app.code.link">
        <div class="title mt-2 font-weight-bold white--text">
          Source Code
        </div>
        <v-btn icon :href="app.code.link" target="_blank">
          <v-icon>{{ app.code.icon }}</v-icon>
        </v-btn>
        <div class="caption">
          {{ app.code.name }}
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
export default {
  props: {
    app: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    logo (name: string) {
      return '/' + name
    }
  }
}
</script>
