<template>
  <v-card
    elevation="5"
    class="ml-2 mb-2"
    max-width="350"
    height="192px"
    min-width="200"
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h5" v-text="name"></v-card-title>

        <v-card-subtitle
          >{{ desigination }}{{ company ? "," : "" }}</v-card-subtitle
        >
        <v-card-subtitle v-if="company">{{ company }}</v-card-subtitle>

        <v-card-actions>
          <v-btn
            icon
            fab
            small
            :href="'Tel:' + phone"
            target="_blank"
            v-if="phone"
          >
            <v-icon>mdi-phone</v-icon>
          </v-btn>
          <v-btn
            icon
            fab
            small
            :href="'mailto:' + hotmail"
            target="_blank"
            v-if="hotmail"
          >
            <v-icon>mdi-microsoft-outlook</v-icon>
          </v-btn>
          <v-btn
            icon
            fab
            small
            :href="'mailto:' + gmail"
            target="_blank"
            v-if="gmail"
          >
            <v-icon>mdi-gmail</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions>
          <v-btn icon fab small :href="github" target="_blank" v-if="github">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn
            icon
            fab
            small
            :href="linkedin"
            target="_blank"
            v-if="linkedin"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn
            icon
            fab
            small
            :href="facebook"
            target="_blank"
            v-if="facebook"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon fab small :href="twitter" target="_blank" v-if="twitter">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </v-card-actions>
      </div>

      <v-avatar class="ma-3 mt-auto" size="125" tile>
        <v-img
          src="../assets/profile-pic.jpg"
          aspect-ratio="1/1"
          lazy-src="../assets/profile-pic.jpg"
          class="pic"
        ></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script>
export default {
  name: "visiting-card",
  props: {
    name: { required: true },
    desigination: { required: true },
    company: { default: "" },
    phone: { default: "" },
    hotmail: { default: "" },
    gmail: { default: "" },
    github: { default: "" },
    linkedin: { default: "" },
    twitter: { default: "" },
    facebook: { default: "" },
  },
  data: () => ({}),
};
</script>


<style lang="scss" scoped>
@import url(https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css);

.header {
  width: 100%;
  height: 40px;
  background-color: #2c3034;
}
.v-image.v-responsive.pic {
  border-radius: 100%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.v-card__subtitle,
.v-card__actions {
  padding-top: 0;
  padding-bottom: 0;
}
</style>