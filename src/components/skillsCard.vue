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
          <template v-for="(Language, key, index) in languages">
            <v-col :key="index">
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
            </v-col>
          </template>
        </v-row>
      </v-card-text>
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