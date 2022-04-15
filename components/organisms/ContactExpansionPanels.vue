<template>
  <v-expansion-panels v-model="panel">
    <v-expansion-panel>
      <v-expansion-panel-header>
        <h3 class="font-weight-thin mb-2">
          <v-icon>mdi-android-messages</v-icon> Send me a message
        </h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-card class="pa-3 mt-2" outlined rounded>
          <ContactForm />
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script lang="ts">
export default {
  props: {
    contactLinks: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      panel: [0]
    };
  }
};
</script>
