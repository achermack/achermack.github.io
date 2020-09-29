<template>
  <v-container id="home">
    <v-layout wrap>
      <v-container id="about">
        <v-layout wrap>
          <v-flex>
            <span class="display-1 font-weight-thin">About Me</span>
          </v-flex>
          <v-flex xs12 mt-5>
            <span class="title font-weight-light grey--text text--lighten-1">{{aboutText}}</span>
          </v-flex>
          <v-flex mt-3>
            <v-btn target="_blank" link :href="resumeLink">
              <v-icon left>mdi-file</v-icon>
              My Resume
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container id="projects" mt-5>
        <v-layout wrap>
          <span class="display-1 font-weight-thin">Projects</span>
          <v-flex xs12 class="mt-5">
            <v-layout wrap>
              <template v-for="(app, i) in apps">
                <v-flex :key="i" xs12 sm6 md4>
                  <project :app="app" />
                </v-flex>
              </template>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container id="contact">
        <v-layout wrap>
          <v-flex xs12>
            <span class="display-1 font-weight-thin">Contact</span>
          </v-flex>
          <v-flex mt-2>
            <template v-for="(contact, i) in contactLinks">
              <v-flex :key="i">
                <contact :contact="contact" />
              </v-flex>
            </template>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Project from "@/components/Project.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    Project,
    Contact,
  },
  data() {
    return {
      aboutText: "I'm a computer science student at the Univeristy of Wisconsin and enjoy writing software. Check out some of what I've worked on below!",
      //aboutText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      resumeLink: "https://github.com/achermack",

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
        },
        {
          name: "ABaN",
          logo: "header.png",
          link: "https://cherm.io",
          role: "Maintainer",
          description: "Developed an AlpineLinux-based secure erase utility. It runs completely in RAM and integrates with a database system for asset management. In addition, I created a build and deploy pipelines leveraging kubernetes and docker in Gitlab CI.",
          technologies: [
            {
              name: "AlpineLinux",
              icon: "mdi-linux",
              link: "https://alpinelinux.org/",
            },
            {
              name: "Docker",
              icon: "mdi-docker",
              link: "https://www.docker.com/"
            }, 
            {
              name: "Kubernetes",
              icon: "mdi-kubernetes",
              link: "https://kubernetes.io/"
            },
            {
              name: "GitLab",
              icon: "mdi-gitlab",
              link: "https://about.gitlab.com/"
            }

          ],
          code: {},
        },
      ],

      contactLinks: [
        {
          name: "Email",
          value: "austinchermack@gmail.com",
          link: "mailto:austinchermack@gmail.com",
          icon: "mdi-email",
        },
        {
          name: "LinkedIn",
          value: "Austin Chermack",
          link: "https://www.linkedin.com/in/austin-chermack-964522187/",
          icon: "mdi-linkedin",
        },
        {
          name: "Github",
          value: "achermack",
          link: "https://github.com/achermack/",
          icon: "mdi-github",
        },
      ],
    };
  },
  methods: {
     embed(text, textLink) {
      var a = document.createElement('a');
      var link = document.createTextNode(text);
      a.appendChild(link);
      a.title(text);
      a.href = textLink;
      return a;
    }
  }
};
</script>
