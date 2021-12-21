<template>
  <kinesis-container>
    <v-hover v-slot="{ hover }" class="mb-3">
      <v-row>
        <v-btn plain @click="enable">
          <v-icon :class="activeColor">
            {{ enabled ? "mdi-check" : "mdi-account-plus" }}
          </v-icon>
          Social media
        </v-btn>

        <transition name="projects-view" hide-on-leave>
          <v-col v-if="hover || enabled" class="ma-0 pa-0">
            <v-layout>
              <kinesis-element
                v-for="(contactLink, i) in contactLinks"
                :key="contactLink"
                type="translate"
                axis="x"
                origin-x="0"
                :strength="25 * (i + 1)"
              >
                <v-btn target="_blank" plain :href="contactLink.link">
                  <v-icon>{{ contactLink.icon }} </v-icon>
                  {{ contactLink.name }}
                </v-btn>
              </kinesis-element>
            </v-layout>
          </v-col>
        </transition>
      </v-row>
    </v-hover>
  </kinesis-container>
</template>
<script>
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
      enabled: false,
      activeColor: 'white--text'
    }
  },
  methods: {
    enable () {
      this.enabled = !this.enabled
      this.activeColor = this.enabled ? 'success--text' : 'white--text'
    }
  }
}
</script>
<style scoped>
.projects-view-enter-active,
.projects-view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}
.projects-view-enter,
.projects-view-leave-to {
  opacity: 0;
  transform: translateX(-25px);
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
