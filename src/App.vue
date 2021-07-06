<template>
  <v-app>
    <profile-menu></profile-menu>

    <v-main>
      <v-responsive>
        <v-container class="lighten-5">
          <v-row no-gutters>
            <v-col lg="4" md="4" sm="6" order="1">
              <profile-card
                :companies="this.$t('experiences')"
                :picture="this.$t('picture')"
                :introduction="this.$t('introduction')"
                :education="this.$t('education')"
                :name="this.$t('name')"
                :headline="this.$t('headline')"
                :desigination="this.$t('desigination')"
            /></v-col>

            <!-- <v-col cols="3">
              <visiting-card
                :name="this.$t('name')"
                :desigination="this.$t('desigination')"
                :company="this.$t('company')"
                :phone="this.$t('phone')"
                :gmail="this.$t('gmail')"
                :hotmail="this.$t('hotmail')"
                :github="this.$t('github')"
                :linkedin="this.$t('linkedin')"
              />
            </v-col> -->
            <v-col lg="4" md="4" sm="6" order="2">
              <skills-card
                :skills="this.$t('skills')"
                :languages="this.$t('languages')"
            /></v-col>

            <v-col lg="4" md="4" sm="6" order="4">
              <files-card
                v-if="
                  this.$t('files') !== 'files' && this.$t('files').length > 0
                "
                :files="this.$t('files')"
              ></files-card>
            </v-col>

            <v-col lg="4" md="3" sm="6" order="3">
              <experience-card
                v-for="(experience, index) of reverseExperiences"
                :key="'experience_' + index"
                :data="experience"
              ></experience-card>
            </v-col>
            <v-col lg="4" md="4" sm="6" order="5">
              <achivements-card :achivements="this.$t('achivements')" />
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </v-main>
  </v-app>
</template>

<script>
import ProfileCard from "./components/profileCard.vue";
import SkillsCard from "./components/skillsCard.vue";
import ExperienceCard from "./components/experienceCard.vue";
import AchivementsCard from "./components/achivementsCard.vue";
import FilesCard from "./components/filesCard.vue";
import ProfileMenu from "./components/profileMenu.vue";

import locals from "./locales/en.json";

// import VisitingCard from "./components/visitingCard.vue";
export default {
  name: "App",
  title: locals.title,
  components: {
    ProfileCard,
    SkillsCard,
    ExperienceCard,
    AchivementsCard,
    FilesCard,
    ProfileMenu,
    // VisitingCard,
  },
  computed: {
    reverseExperiences() {
      return Array.prototype.reverse.apply(this.$t("experiences"));
    },
  },
  mounted() {
    const theme = localStorage.getItem("dark");
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }
  },
};
</script>

<style lang="scss">
html {
  overflow-y: auto !important;
}
.v-main {
  background-color: rgb(0 0 0 / 7%);
  max-width: 100vw;
}
</style>