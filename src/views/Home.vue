<template>
    <v-container id="home">
      <v-layout wrap>
        <v-container id="about">
          <v-layout wrap>
            <v-flex>
              <span class="display-1 font-weight-thin">About Me</span>
            </v-flex>
            <v-flex xs12 mt-5>
              <span class="body-1 font-weight-light grey--text text--lighten-1">{{aboutText}}</span>   
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
            <v-flex xs3 mt-2>
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
  name: 'Home',
  components: {
    Project,
    Contact
  },
 data() {
    return {
      aboutText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      resumeLink: "https://github.com/achermack",
      
      apps: [
        {
          name: "Portfolio Site",
          logo: "logo.png",
          link: "https://achermack.github.io",
          role: "Maintainer",

          description:
            "I created this website to showcase some of my work as a Software Developer. This website is built using the Vue.js and Vuetify and leverages Travis CI and Github Pages for automatic building and deployment. Check out the Github Repository below!",
          technologies: [
            {
              name: "Vue",
              icon: "mdi-vuejs",
              link: "https://vuejs.org"
            },
            {
              name: "Vuetify",
              icon: "mdi-vuetify",
              link: "https://vuetifyjs.com/en/"
            },
            {
              name: "Travis-CI",
              icon: "mdi-wrench",
              link: "https://travis-ci.org/"
            },
            {
              name: "Github Pages",
              icon: "mdi-github",
              link: "https://pages.github.com"
            }
          ],
          code: {
            name: "Github",
            icon: "mdi-github",
            link: "https://www.github.com/achermack"
          }
        },
        {
          name: "WebService Consumer",
          logo: "service-consumer.png",
          link: "https://achermack.github.io",
          role: "Maintainer",
          description: "I created a C# library that interfaces with the SOAP web services of a computer database and inventory management system allowing you to make service calls with just two lines of code. The library is setup in a Gitlab repository that automatically builds the library into a nuget package, and then deploys to jFrog Artifactory repository.",
          technologies: [
            {
              name: "C#",
              icon: "mdi-dot-net",
              link: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
            },
            {
              name: "SOAP",
              icon: "mdi-web",
              link: "https://en.wikipedia.org/wiki/SOAP"
            },
            {
              name: "Gitlab",
              icon: "mdi-gitlab",
              link: "https://gitlab.com"
            },
            {
              name: "Artifactory",
              icon: "mdi-package",
              link: "https://jfrog.com/artifactory"
            }
          ],
          code: {}
        }
      ],
      
      contactLinks: [
        {
          name: "Email",
          value: "austinchermack@gmail.com",
          link: "mailto:austinchermack@gmail.com",
          icon: "mdi-email"
        },
        {
          name: "LinkedIn",
          value: "Austin Chermack",
          link: "https://www.linkedin.com/in/austin-chermack-964522187/",
          icon: "mdi-linkedin"
        },
        {
          name: "Github",
          value: "achermack",
          link: "https://github.com/achermack/",
          icon: "mdi-github"
        },
      ]

    };
  }
};

</script> 


