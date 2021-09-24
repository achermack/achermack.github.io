<template>
  <v-container id="home">
    <v-layout wrap>
      <v-container id="about">
        <v-layout wrap>
          <v-flex>
            <transition name="projects-view">
              <span
                v-if="aboutMe"
                class="display-1 font-weight-thin"
              >About Me</span>
            </transition>
          </v-flex>
          <v-flex xs12 mt-5>
            <transition name="projects-view">
              <span
                v-if="aboutMe"
                class="title font-weight-light grey--text text--lighten-1"
              >{{ aboutText }}</span>
            </transition>
          </v-flex>
          <v-flex mt-3>
            <transition name="projects-view">
              <v-btn v-if="aboutMe" target="_blank" link :href="resumeLink">
                <v-icon left>
                  mdi-file
                </v-icon>
                My Resume
              </v-btn>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container id="projects" mt-5>
        <v-layout wrap>
          <transition name="projects-view">
            <span
              v-if="projects[0].active"
              class="display-1 font-weight-thin"
            >Projects</span>
          </transition>
          <v-flex xs12 class="mt-5">
            <v-layout wrap>
              <template v-for="(app, i) in projects">
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
                v-if="contactLinks[0].active"
                class="display-1 font-weight-thin"
              >Contact</span>
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

<script lang="ts">
export default {
  data () {
    return {
      aboutText: "Hi, I'm Austin and I like to write code from time to time.",
      resumeLink: 'https://github.com/achermack',
      aboutMe: false,
      contactLinks: [],
      projects: []
    }
  },
  async fetch () {
    const content = await this.$content('projects').fetch()
    this.projects = content.projects
    this.contactLinks = content.contactLinks
  },
  mounted () {
    // Cascade load projects
    this.aboutMe = true
    setTimeout(() => {
      let i = 0
      this.projects.forEach((element) => {
        setTimeout(() => (element.active = true), i * 250)
        i = i + 1
      })
    }, 500)
    setTimeout(() => {
      let i = 0
      this.contactLinks.forEach((element) => {
        setTimeout(() => (element.active = true), i * 100)
        i = i + 1
      })
    }, 1000)
  }
}
</script>
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
