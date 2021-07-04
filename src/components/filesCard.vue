<template>
  <v-card max-width="350" elevation="5" class="ml-2 mb-2">
    <v-responsive>
      <v-card-title>Files</v-card-title>
      <v-sheet class="mx-auto" max-width="700">
        <v-slide-group multiple show-arrows>
          <v-slide-item v-for="(file, i) in files" :key="'file_' + i">
            <file-list :file="file"> </file-list> </v-slide-item
        ></v-slide-group>
      </v-sheet>
    </v-responsive>
  </v-card>
</template>

<script>
import FileList from "./fileList.vue";
export default {
  components: { FileList },
  name: "fileCard",
  props: {
    files: { default: "" },
  },
  data: () => ({
    show: false,
  }),
  computed: {
    fileIcon(file) {
      let type = file.path.split(".").pop();
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