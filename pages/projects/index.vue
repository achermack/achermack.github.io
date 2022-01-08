<template>
  <v-container>
    <v-expansion-panels v-model="panel" multiple popout>
      <transition-group name="projects-view">
        <v-expansion-panel v-for="(project, i) in projects" :key="i">
          <v-expansion-panel-header ripple>
            <v-flex>
              <span class="display-1"
                >{{ project.name }}
                <v-chip small pill color="dark-grey" dark class="mr-2">
                  Role: {{ project.role }}
                </v-chip>
              </span>
            </v-flex>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat color="transparent" max-width="auto">
              <v-card-title>
                <v-row align="center" justify="center" dense>
                  <v-col cols="auto">
                    <v-card
                      :to="project.link"
                      elevation="5"
                      style="border-radius: 20px"
                      max-width="250px"
                      max-height="250px"
                    >
                      <v-img contain :src="`/${project.logo}`" />
                    </v-card>
                    <v-divider class="mt-2" />
                  </v-col>
                  <v-col align-self="end">
                    <v-flex />
                    <v-flex mt-2>
                      <v-btn :to="project.link" text outlined>
                        <span v-if="$device.isDesktop"> Project Page </span>
                        <v-icon class="mx-0 px-0 ml-1" small>
                          mdi-arrow-right-box
                        </v-icon>
                      </v-btn>
                      <v-btn
                        v-if="project.code.link"
                        :href="project.code.link"
                        target="_blank"
                        text
                        outlined
                      >
                        <span v-if="$device.isDesktop">{{
                          project.code.name
                        }}</span>
                        <v-icon>{{ project.code.icon }}</v-icon>
                      </v-btn>
                    </v-flex>
                    <v-divider class="mt-2" />
                  </v-col>
                </v-row>
              </v-card-title>
              <v-card-text>
                <div class="headline font-weight-light">
                  {{ project.description }}
                </div>
                <v-divider class="mt-2" />
                <div class="title mt-2 mb-2 font-weight-bold white--text">
                  Involved Technologies
                </div>
                <v-row class="tech" wrap>
                  <template v-for="(tech, i) in project.technologies">
                    <v-flex :key="i" xs3>
                      <div class="tech">
                        <v-btn x-large icon :href="tech.link" target="_blank">
                          <v-icon>{{ tech.icon }}</v-icon>
                        </v-btn>
                        <div v-if="$device.isDesktop" class="caption">
                          {{ tech.name }}
                        </div>
                      </div>
                    </v-flex>
                  </template>
                </v-row>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </transition-group>
    </v-expansion-panels>
  </v-container>
</template>
<script lang="ts">
export default {
  data() {
    return {
      projects: [],
      panel: []
    };
  },
  async fetch() {
    const content = await this.$content("index").fetch();
    this.projects = content.projects;
    for (let i = 0; i < this.projects.length; i++) {
      this.panel.push(i);
    }
  },
  methods: {}
};
</script>
<style>
.tech {
  text-align: center;
  max-width: 50%;
}
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
