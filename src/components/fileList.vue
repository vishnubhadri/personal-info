<template>
  <v-card
    elevation="3"
    dense
    outlined
    @click="openFile()"
    class="text-center"
    height="100"
    width="200"
  >
    <v-icon>{{ fileIcon }}</v-icon>
    <v-card-text>{{ file.name }}</v-card-text>
    <v-card-text class="font-weight-light">{{ file.AdditionalInfo }}</v-card-text>
  </v-card>
</template>


<script>
export default {
  name: "fileList",
  props: {
    file: { required: true },
  },
  data: () => ({
    show: false,
  }),
  methods: {
    openFile() {
      window.open(this.file.path, "_blank");
    },
  },
  computed: {
    fileIcon() {
      let type = this.file.path.split(".").pop();
      switch (type.toLowerCase()) {
        case "pdf":
          return "mdi-file-pdf-outline";
        case "doc":
        case "docx":
          return "mdi-file-word-outline";
        case "7z":
        case "zip":
        case "rar":
          return "mdi-file-zip-outline";
        case "ppt":
        case "pptx":
          return "mdi-file-powerpoint-outline";
        case "html":
          return "mdi-file-link-outline";
        case "mp3":
        case "wav":
        case "flac":
          return "mdi-file-music-outline";
        case "xls":
        case "xlxs":
          return "mdi-file-excel-outline";
        case "mp4":
        case "mov":
        case "wmv":
        case "avi":
        case "flv":
        case "webm":
        case "mkv":
          return "mdi-file-video-outline";
        case "jpg":
        case "jpeg":
        case "png":
        case "gif":
          return "mdi-file-image-outline";
        default:
          return "mdi-file-outline";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card__text,
.v-card__subtitle {
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 12px;
}
</style>