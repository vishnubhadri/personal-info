<template>
  <v-app>
    <!-- <profile-menu /> -->
    <v-main>
      <v-container class="lighten-5">
        <v-row>
          <v-col>
            <profile-card
              :companies="this.$t('experiences')"
              :picture="this.$t('picture')"
              :introduction="this.$t('introduction')"
              :education="this.$t('education')"
              :name="this.$t('name')"
              :headline="this.$t('headline')"
              :desigination="this.$t('desigination')"
            />
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
          </v-col>
          <v-col>
            <skills-card
              :skills="this.$t('skills')"
              :languages="this.$t('languages')"
            />
            <files-card
              v-if="this.$t('files') !== 'files' && this.$t('files').length > 0"
              :files="this.$t('files')"
            ></files-card>
          </v-col>

          <v-col>
            <experience-card
              v-for="(experience, index) of reverseExperiences"
              :key="'experience_' + index"
              :data="experience"
            ></experience-card>
            <achivements-card :achivements="this.$t('achivements')" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ProfileCard from "./components/profileCard.vue";
import SkillsCard from "./components/skillsCard.vue";
import ExperienceCard from "./components/experienceCard.vue";
import AchivementsCard from "./components/achivementsCard.vue";
import FilesCard from "./components/filesCard.vue";
import VisitingCard from './components/visitingCard.vue';

export default {
  name: "App",

  components: {
    ProfileCard,
    SkillsCard,
    ExperienceCard,
    AchivementsCard,
    FilesCard,
    VisitingCard,
  },
  computed: {
    reverseExperiences() {
      return Array.prototype.reverse.apply(this.$t("experiences"));
    },
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