<template>
  <v-expansion-panels v-model="panel" multiple>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <h3 class="font-weight-thin">
          <v-icon>mdi-arrow-right</v-icon> Social Media
        </h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-card class="pa-3" outlined ripple rounded>
          <template v-for="(contact, i) in contactLinks">
            <v-flex :key="i">
              <transition name="projects-view">
                <contact v-if="contact.active" :contact="contact" />
              </transition>
            </v-flex>
          </template>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <h3 class="font-weight-thin mb-2">
          <v-icon>mdi-arrow-right</v-icon> Send me a message
        </h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-card class="pa-3 mt-2" outlined ripple rounded>
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
      default () {
        return []
      }
    }
  },
  data () {
    return {
      panel: [0]
    }
  }
}
</script>
