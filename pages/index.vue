<template>
  <v-container id="home" style="height: 100vh">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,261.3C672,256,768,224,864,213.3C960,203,1056,213,1152,218.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      aboutText:
        "My name is Austin, and this is my personal portfolio website written in Nuxt + Vuetify + TypeScript & deployed to Github Pages with Travis CI. Depandabot and Codefactor are handled via Github Actions. Feel free to take a look at some of what I've worked on below.",
      repoLink: "https://github.com/achermack/achermack.github.iok",
      aboutMe: false,
      contactLinks: [],
      projects: [],
      panel: [0]
    };
  },
  async fetch() {
    const content = await this.$content("index").fetch();
    this.projects = content.projects;
    this.contactLinks = content.contactLinks;
  },
  mounted() {
    // Cascade load projects
    this.aboutMe = true;
    setTimeout(() => {
      let i = 0;
      this.projects.forEach(element => {
        setTimeout(() => (element.active = true), i * 250);
        i = i + 1;
      });
    }, 500);
    setTimeout(() => {
      let i = 0;
      this.contactLinks.forEach(element => {
        setTimeout(() => (element.active = true), i * 100);
        i = i + 1;
      });
    }, 1000);
  },
  beforeDestroy() {
    this.aboutMe = false;
    this.projects.forEach(element => {
      element.active = false;
    });
    this.contactLinks.forEach(element => {
      element.active = false;
    });
  }
};
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
