<template>
  <v-container fill-height fluid>
    <Sidebar v-if="$device.isDesktop" :project="project" />
    <v-row justify="center">
      <article class="ml-3">
        <nuxt-content :document="project" />
      </article>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return { project }
  },
  data () {
    return {
      currentlyActiveToc: '',
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0
      }
    }
  },
  mounted () {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id
        }
      })
    }, this.observerOptions)

    // Track all sections that have an `id` applied
    document
      .querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]')
      .forEach((section) => {
        this.observer.observe(section)
      })
  },
  beforeDestroy () {
    this.observer.disconnect()
  }
}
</script>
<style>
aside {
  float: left;
}
</style>
