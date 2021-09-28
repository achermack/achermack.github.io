<template>
  <v-container>
    <v-expansion-panels v-model="panel" multiple popout>
      <v-expansion-panel v-for="(project, i) in projects" :key="i">
        <v-expansion-panel-header>
          {{ project.name }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <Project :app="project" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>
<script lang="ts">
export default {
  data () {
    return {
      projects: [],
      panel: []
    }
  },
  async fetch () {
    const content = await this.$content('index').fetch()
    this.projects = content.projects
    for (let i = 0; i < this.projects.length; i++) {
      this.panel.push(i)
    }
  }
}
</script>
