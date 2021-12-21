<template>
  <v-list-item class="text-center" :href="contact.link">
    <v-list-item-content>
      <v-icon>{{ contact.icon }}</v-icon>
      <v-list-item-title>{{ contact.value }}</v-list-item-title>
      <v-list-item-subtitle>{{ contact.name }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
export default {
  props: {
    contact: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
