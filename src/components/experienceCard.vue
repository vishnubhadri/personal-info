<template>
  <v-card elevation="5" class="ml-2 mb-2" max-width="350" min-width="200">
    <v-responsive>
      <v-card-text>
        <div class="text-end font-weight-light text--secondary">
          {{ data.from }} /
          {{ !data.to ? "present" : data.to }}
        </div>
        <p class="text-h5 primary--text">{{ data.grade }}</p>
        <p class="text--secondary">
          at <a v-if="data.url" :href="data.url">{{ data.company }}</a
          ><span v-else>{{ data.company }}</span>
        </p>
        <div class="font-weight-light">
          {{ data.description }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary accent-4" @click="show = !show">
          Projects
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <template v-for="(project, index) of data.projects">
            <v-card-text :key="'title_' + index">
              <p class="text-h6 primary--text">{{ project.projectName }}</p>
              <p
                :key="'desc_' + index"
                class="text--secondary font-weight-light"
              >
                {{ project.projectDesc }}
              </p>
            </v-card-text>
            <v-divider inset :key="'divider_' + index"></v-divider>
          </template>
        </div>
      </v-expand-transition>
    </v-responsive>
  </v-card>
</template>

<script>
export default {
  name: "experience-card",
  props: {
    data: { required: true },
  },
  data: () => ({
    show: false,
  }),
};
</script>


<style lang="scss" scoped>
.v-application p a {
  color: inherit;
}
.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical) {
  margin-left: 0;
}
p {
  text-align: justify;
}
</style>