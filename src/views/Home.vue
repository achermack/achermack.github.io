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
          </v-layout>
        </v-container>
      </v-layout>
    </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
 data() {
    return {
      aboutText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      resumeLink: "https://github.com/achermack",
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


