<template>
  <v-card max-width="350" elevation="5" class="ml-2 mb-2">
    <v-responsive>
      <v-card-title>
        <!-- <v-icon large left> mdi-twitter </v-icon> -->
        <span class="text-h6 font-weight-bold primary--text">Skills</span>
      </v-card-title>

      <v-card-text class="text-h5 font-weight-light text--secondary">
        {{ skills }}
      </v-card-text>
      <v-card-text>
        <v-row no-gutters>
          <!-- Template for full screen -->
          <template v-if="!showExpand">
            <v-col
              :key="'normal_' + index"
              v-for="(Language, key, index) in languages"
            >
              <v-divider></v-divider>
              <span class="text--secondary">{{ key }}</span>
              <v-rating
                color="primary"
                half-increments
                length="5"
                :value="Language"
                readonly
                x-small
              ></v-rating>
            </v-col>
          </template>
          <!-- Template for full screen END -->
          <!-- Template for mobile screen -->

          <template v-if="showExpand">
            <v-col
              :key="'mobile' + index"
              v-for="(Language, key, index) in languages"
            >
              <template v-if="index < 6">
                <span class="text--secondary">{{ key }}</span>
                <v-rating
                  color="primary"
                  half-increments
                  length="5"
                  :value="Language"
                  readonly
                  x-small
                ></v-rating>
                <v-divider></v-divider>
              </template>
              <template v-else
                ><v-expand-transition>
                  <div v-show="show">
                    <span class="text--secondary">{{ key }}</span>
                    <v-rating
                      color="primary"
                      half-increments
                      length="5"
                      :value="Language"
                      readonly
                      x-small
                    ></v-rating>
                    <v-divider></v-divider>
                  </div>
                </v-expand-transition>
              </template>
            </v-col>
          </template>
          <!-- Template for mobile screen end -->
        </v-row>
      </v-card-text>
      <v-card-actions v-if="showExpand">
        <v-btn text color="primary accent-4" @click="show = !show">
          Projects
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-responsive>
  </v-card>
</template>

<script>
export default {
  name: "skillsCard",
  props: {
    skills: { required: true },
    languages: { required: true },
  },
  data: () => ({ showExpand: false, show: false }),

  beforeDestroy() {
    if (typeof window === "undefined") return;
    window.removeEventListener("resize", this.onResize, { passive: true });
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      this.showExpand =
        window.innerWidth < 600 ||
        (window.innerWidth > 960 && window.innerWidth < 1264);
    },
  },
};
</script>


<style lang="scss" scoped>
.v-card__text > div {
  display: flex;
  align-items: center;
  ::v-deep {
    span {
      width: 20%;
    }
  }
}
</style>