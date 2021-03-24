<template>
  <v-container id="home">
    <v-layout wrap>
      <v-container id="about">
        <v-layout wrap>
          <v-flex>
            <transition name="projects-view">
              <span class="display-1 font-weight-thin" v-if="aboutme"
                >About Me</span
              >
            </transition>
          </v-flex>
          <v-flex xs12 mt-5>
            <transition name="projects-view">
              <span
                v-if="aboutme"
                class="title font-weight-light grey--text text--lighten-1"
                >{{ aboutText }}</span
              >
            </transition>
          </v-flex>
          <v-flex mt-3>
            <transition name="projects-view">
              <v-btn v-if="aboutme" target="_blank" link :href="resumeLink">
                <v-icon left>mdi-file</v-icon>
                My Resume
              </v-btn>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container id="projects" mt-5>
        <v-layout wrap>
          <transition name="projects-view">
            <span class="display-1 font-weight-thin" v-if="apps[0].active"
              >Projects</span
            >
          </transition>
          <v-flex xs12 class="mt-5">
            <v-layout wrap>
              <template v-for="(app, i) in apps">
                <v-flex :key="i" xs12 sm6 md4>
                  <transition name="projects-view">
                    <project v-if="app.active" :app="app" />
                  </transition>
                </v-flex>
              </template>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container id="contact">
        <v-layout wrap>
          <v-flex xs12>
            <transition name="projects-view">
              <span
                class="display-1 font-weight-thin"
                v-if="contactLinks[0].active"
                >Contact</span
              >
            </transition>
          </v-flex>
          <v-flex mt-2>
            <template v-for="(contact, i) in contactLinks">
              <v-flex :key="i">
                <transition name="projects-view">
                  <contact v-if="contact.active" :contact="contact" />
                </transition>
              </v-flex>
            </template>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script src="./Home.ts" lang="ts" />
<style scoped>
.projects-view-enter-active,
.projects-view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}
.projects-view-enter,
.projects-view-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.projects-view-enter-to,
.projects-view-leave {
  opacity: 1;
  transform: translateX(0px);
}

.projects-view-enter-active {
  transition-delay: 0.5s;
}
</style>