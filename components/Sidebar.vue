<template>
  <v-navigation-drawer absolute permanent left color="transparent">
    <v-list>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Table of Contents
          </v-list-item-title>
          <v-list-item-subtitle />
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider />
      <v-list-item
        v-for="link of project.toc"
        :key="link.id"
        link
        :class="{ 'ml-4': link.depth === 3 }"
        class="toc-list"
        :to="`#${link.id}`"
      >
        <v-list-item-content> {{ link.text }} </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
export default {
  props: {
    project: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
