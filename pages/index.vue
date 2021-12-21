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
              >Welcome to cherm.io</span>
            </transition>
          </v-flex>
          <v-flex xs12 mt-5>
            <transition name="projects-view">
              <v-flex v-if="aboutMe" fluid>
                <v-row class="mt-2 mb-2">
                  <v-img
                    v-for="shield in shields"
                    :key="shield"
                    :src="shield"
                    max-height="50"
                    max-width="100"
                    class="ml-3"
                  />
                </v-row>
                <span
                  v-if="aboutMe"
                  class="title font-weight-light grey--text text--lighten-1"
                >{{ aboutText }}</span>
              </v-flex>
            </transition>
          </v-flex>
          <v-flex mt-3>
            <transition name="projects-view">
              <v-btn v-if="aboutMe" target="_blank" link :href="repoLink">
                <v-icon left>
                  mdi-file
                </v-icon>
                cherm.io Repository
              </v-btn>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container id="projects" mt-5>
        <v-layout wrap>
          <transition name="projects-view">
            <span
              v-if="projects[0] != undefined && projects[0].active"
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
                v-if="contactLinks[0] != undefined && contactLinks[0].active"
                class="display-1 font-weight-thin"
              >Get in touch</span>
            </transition>
          </v-flex>
          <v-flex mt-3>
            <transition name="projects-view">
              <ContactLinkHover
                v-if="
                  contactLinks[0] != null && contactLinks[0].active === true
                "
                :contact-links="contactLinks"
              />
            </transition>

            <transition name="projects-view">
              <ContactExpansionPanels
                v-if="
                  contactLinks[0] != null && contactLinks[0].active === true
                "
                :contact-links="contactLinks"
              />
            </transition>
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
      aboutText:
        "My name is Austin, and this is my personal portfolio website written in Nuxt + Vuetify + TypeScript & deployed to Github Pages with Travis CI. Depandabot and Codefactor are handled via Github Actions. Feel free to take a look at some of what I've worked on below.",
      repoLink: 'https://github.com/achermack/achermack.github.iok',
      aboutMe: false,
      contactLinks: [],
      projects: [],
      shields: [
        'https://img.shields.io/github/package-json/v/achermack/achermack.github.io',
        'https://travis-ci.com/achermack/achermack.github.io.svg?token=KSsakyxMzFprq5MSBDff&branch=develop',
        'https://www.codefactor.io/repository/github/achermack/achermack.github.io/badge'
      ],
      panel: [0]
    }
  },
  async fetch () {
    const content = await this.$content('index').fetch()
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
  },
  beforeDestroy () {
    this.aboutMe = false
    this.projects.forEach((element) => {
      element.active = false
    })
    this.contactLinks.forEach((element) => {
      element.active = false
    })
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
