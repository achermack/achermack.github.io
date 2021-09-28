<template>
  <v-container>
    <article>
      <nuxt-content :document="project" />
    </article>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return { project }
  }
}
</script>
