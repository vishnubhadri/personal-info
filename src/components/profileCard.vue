<template>
  <v-card max-width="350" elevation="5" class="ml-2 mb-2">
    <v-responsive>
      <v-img src="../assets/profile-pic.jpg" height="200px"></v-img>

      <v-card-title class="primary--text"> {{ name }} </v-card-title>

      <v-card-subtitle v-if="headline">
        {{ headline }}
      </v-card-subtitle>

      <v-card-subtitle
        v-if="!headline && desigination"
        class="font-weight-light"
      >
        {{ desigination }}
      </v-card-subtitle>
      <v-card-actions>
        <v-btn
          icon
          fab
          small
          :href="'Tel:' + $t('phone')"
          target="_blank"
          v-if="$t('phone') != 'phone'"
        >
          <v-icon>mdi-phone</v-icon>
        </v-btn>
        <v-btn
          icon
          fab
          small
          :href="'mailto:' + $t('hotmail')"
          target="_blank"
          v-if="$t('hotmail') != 'hotmail'"
        >
          <v-icon>mdi-microsoft-outlook</v-icon>
        </v-btn>
        <v-btn
          icon
          fab
          small
          :href="'mailto:' + $t('gmail')"
          target="_blank"
          v-if="$t('gmail') != 'gmail'"
        >
          <v-icon>mdi-gmail</v-icon>
        </v-btn>
        <v-divider vertical inset></v-divider>
        <v-card-actions>
          <v-btn
            icon
            fab
            small
            :href="$t('github')"
            target="_blank"
            v-if="$t('github') != 'github'"
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn
            icon
            fab
            small
            :href="$t('linkedin')"
            target="_blank"
            v-if="$t('linkedin') != 'linkedin'"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn
            icon
            fab
            small
            :href="$t('facebook')"
            target="_blank"
            v-if="$t('facebook') != 'facebook'"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            icon
            fab
            small
            :href="$t('twitter')"
            target="_blank"
            v-if="$t('twitter') != 'twitter'"
          >
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </v-card-actions>
        <v-divider vertical inset></v-divider>
      </v-card-actions>
      <v-divider></v-divider>

      <v-card-subtitle
        :style="education ? 'padding-bottom: 1px' : ''"
        v-if="companies"
      >
        <v-chip
          v-for="item of companies"
          v-bind:key="item.company"
          :color="item.present === true ? 'company' : 'company lighten-1'"
          link
          outlined
          class="mr-1"
          :href="item.url"
          target="_blank"
          small
          >{{ item.company }}</v-chip
        >
      </v-card-subtitle>

      <v-card-subtitle v-if="education">
        <v-chip
          v-for="item of education"
          v-bind:key="item.name"
          color="college lighten-1"
          link
          outlined
          :class="companies ? 'mr-1' : ''"
          :href="item.url"
          target="_blank"
          x-small
          >{{ item.name }}</v-chip
        >
      </v-card-subtitle>
      <v-divider></v-divider>
      <v-card-actions v-if="introduction">
        <v-btn color="primary" text @click="show = !show"> INTRO </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text class="text--secondary font-weight-light">
            {{ introduction }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-responsive>
  </v-card>
</template>

<script>
export default {
  name: "profile-card",
  props: {
    companies: { default: false },
    education: { default: false },
    introduction: { default: false },
    name: { required: true },
    desigination: { default: false },
    headline: { default: false },
  },
  data: () => ({
    show: false,
  }),
};
</script>



<style lang="scss" scoped>
.fill-height {
  height: 100vh;
}
.v-card__subtitle {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>