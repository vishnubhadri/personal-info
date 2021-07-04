<template>
  <v-card max-width="350" min-width="200" elevation="5" class="ml-2 mb-2">
    <v-responsive>
      <v-card-title>
        <!-- <v-icon large left> mdi-twitter </v-icon> -->
        <span class="text-h6 font-weight-bold primary--text">Achivements</span>
      </v-card-title>
      <ul>
        <template>
          <achivement-card-list
            :achivements="achivements.slice(0, defaultItemShowLength)"
          ></achivement-card-list
        ></template>
        <template v-if="achivements.length > defaultItemShowLength">
          <v-card-actions>
            <v-btn color="primary" text @click="show = !show">
              Show More
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
              <achivement-card-list
                :achivements="achivements.slice(defaultItemShowLength)"
              ></achivement-card-list>
            </div>
          </v-expand-transition>
        </template>
      </ul>
    </v-responsive>
  </v-card>
</template>

<script>
import achivementCardList from "./_achivementCardList.vue";
export default {
  components: { achivementCardList },
  name: "achivementsCard",
  props: {
    achivements: { required: true },
  },
  data: () => ({
    show: false,
    defaultItemShowLength: 3,
  }),
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