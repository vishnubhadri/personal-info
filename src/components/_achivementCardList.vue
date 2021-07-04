<template>
  <div>
    <v-list-item
      v-for="(achivement, index) of achivements"
      :key="'achivement_' + index"
    >
      <v-list-item-content>
        <v-list-item-title v-if="achivement.title">{{
          achivement.title
        }}</v-list-item-title>
        <v-list-item-subtitle class="font-weight-light">
          <li>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }" class="text-truncate">
                <span v-bind="attrs" v-on="on">
                  {{ achivement.description }}</span
                >
              </template>
              <span>{{ achivement.description }}</span>
            </v-tooltip>
          </li>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
export default {
  name: "achivementsCardList",
  props: {
    achivements: { required: true },
    defaultItemShowLength: { default: "3" },
  },
  data: () => ({
    show: false,
  }),
};
</script>


<style lang="scss" scoped>
ul li {
  list-style: inside;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>