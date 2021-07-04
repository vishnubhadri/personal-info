<template>
  <v-app-bar app elevation="5">
    <v-btn
      style="margin-left: auto"
      inset
      icon
      persistent-hint
      @click="swithTheme"
    >
      <v-icon>{{ icon }} </v-icon>
    </v-btn></v-app-bar
  >
</template>

<script>
export default {
  name: "profileMenu",
  computed: {
    icon() {
      return this.$vuetify.theme.options.themeCache.get("dark") === "dark"
        ? "mdi-brightness-1"
        : "mdi-brightness-5";
    },
  },
  methods: {
    swithTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark", this.$vuetify.theme.dark.toString());
    },
  },
};
</script>