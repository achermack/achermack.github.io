<template>
  <v-container id="home">
    <v-layout wrap>
      <v-container id="about">
        <v-layout wrap>
          <v-flex>
            <transition name="projects-view">
              <span class="display-1 font-weight-thin" v-if="aboutMe"
                >About Me</span
              >
            </transition>
          </v-flex>
          <v-flex xs12 mt-5>
            <transition name="projects-view">
              <span
                v-if="aboutMe"
                class="title font-weight-light grey--text text--lighten-1"
                >{{ aboutText }}</span
              >
            </transition>
          </v-flex>
          <v-flex mt-3>
            <transition name="projects-view">
              <v-btn v-if="aboutMe" target="_blank" link :href="resumeLink">
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

<script lang="ts">
export default {
    data() {
      return { 
      aboutText: "Hi, I'm Austin and I like to write code from time to time.",
      resumeLink: "https://github.com/achermack",
      aboutMe: false,

      contactLinks: [
        {
            name: "Email",
            value: "austinchermack@gmail.com",
            link: "mailto:austinchermack@gmail.com",
            icon: "mdi-email",
            active: false,
        },
        {
            name: "LinkedIn",
            value: "Austin Chermack",
            link: "https://www.linkedin.com/in/austin-chermack-964522187/",
            icon: "mdi-linkedin",
            active: false,
        },
        {
            name: "Github",
            value: "achermack",
            link: "https://github.com/achermack/",
            icon: "mdi-github",
            active: false,
        },
    ],
    apps: [
        {
            name: "Portfolio Site",
            logo: "cherm_io.png",
            link: "https://cherm.io",
            role: "Maintainer",

            description:
                "I created this website to showcase some of my work as a Software Developer. This website is built using the Vue.js and Vuetify and leverages Travis CI and Github Pages for automatic building and deployment. Check out the Github Repository below!",
            technologies: [
                {
                    name: "Vue",
                    icon: "mdi-vuejs",
                    link: "https://vuejs.org",
                },
                {
                    name: "Vuetify",
                    icon: "mdi-vuetify",
                    link: "https://vuetifyjs.com/en/",
                },
                {
                    name: "Travis-CI",
                    icon: "mdi-wrench",
                    link: "https://travis-ci.org/",
                },
                {
                    name: "Github Pages",
                    icon: "mdi-github",
                    link: "https://pages.github.com",
                },
            ],
            code: {
                name: "Github",
                icon: "mdi-github",
                link: "https://www.github.com/achermack",
            },
            active: false,
        },
        {
            name: "WebService Consumer",
            logo: "service-consumer.png",
            link: "https://cherm.io",
            role: "Maintainer",
            description:
                "I developed a C# Library for interacting with a database's SOAP webservice API. In addition, I created a development pipeline to automate it's build and deployment to an artifactory repository",
            technologies: [
                {
                    name: "C#",
                    icon: "mdi-dot-net",
                    link:
                        "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
                },
                {
                    name: "SOAP",
                    icon: "mdi-web",
                    link: "https://en.wikipedia.org/wiki/SOAP",
                },
                {
                    name: "Gitlab",
                    icon: "mdi-gitlab",
                    link: "https://gitlab.com",
                },
                {
                    name: "Artifactory",
                    icon: "mdi-package",
                    link: "https://jfrog.com/artifactory",
                },
            ],
            code: {},
            active: false,
        },
        {
            name: "ABaN",
            logo: "header.png",
            link: "https://cherm.io",
            role: "Maintainer",
            description:
                "Developed an AlpineLinux-based secure erase utility. It runs completely in RAM and integrates with a database system for asset management. In addition, I created a build and deploy pipelines leveraging kubernetes and docker in Gitlab CI.",
            technologies: [
                {
                    name: "AlpineLinux",
                    icon: "mdi-linux",
                    link: "https://alpinelinux.org/",
                },
                {
                    name: "Docker",
                    icon: "mdi-docker",
                    link: "https://www.docker.com/",
                },
                {
                    name: "Kubernetes",
                    icon: "mdi-kubernetes",
                    link: "https://kubernetes.io/",
                },
                {
                    name: "GitLab",
                    icon: "mdi-gitlab",
                    link: "https://about.gitlab.com/",
                },
            ],
            code: {},
            active: false,
        },
    ]
      }
      
    },
        mounted() {
        // Cascade load projects
        this.$data.aboutMe = true;
        setTimeout(() => {
            let i = 0;
            this.$data.apps.forEach(element => {
                setTimeout(() => element.active = true, i * 250);
                i = i + 1;
            });
        }, 500)
        setTimeout(() => {
            let i = 0;
            this.$data.contactLinks.forEach(element => {
                setTimeout(() => element.active = true, i * 100);
                i = i + 1;
            });
        }, 1000) 

    },
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