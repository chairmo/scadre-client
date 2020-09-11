<template>
  <div class="main">
    <h6 class="align-content-center">Note: Name your required documents accordingly</h6>
    <div>
      <ul>
        <li>Passport</li>
        <li>First Appointment Letter</li>
        <li>First Degree</li>
      </ul>
    </div>


    <h6 class="align-content-center">Add file max size = 200kb (accepted format: *jpeg, png and pdf)</h6>
    <div v-if="currentFile" class="progress">
      <div
          class="progress-bar progress-bar-info progress-bar-striped"
          role="progressbar"
          :aria-valuenow="progress"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="{ width: progress + '%' }">{{ progress }}%</div>
    </div>

    <label class="btn btn-default">
      <input type="file" ref="file" accept=".jpeg, .jpg, .png, .pdf" @change="selectFile"/>
    </label>

    <button class="btn btn-success" :disabled="!selectedFiles" @click="upload">
      Upload
    </button>

    <div class="alert alert-light" role="alert">{{ message }}</div>

    <div v-if="fileInfos.length" class="card">
      <div class="card-header">Uploaded Files</div>
      <ul class="list-group list-group-flush">
        <li
            class="list-group-item"
            v-for="(file, index) in fileInfos"
            :key="index">
          <a :href="file.url">{{ file.filename }} <i class="fa fa-minus-circle a" aria-hidden="true"
                                                     v-on:click="deleteDocument(file.id)"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DocumentService from "@/services/DocumentService";

export default {
  name: "addDocument",
  data() {
    return {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",

      fileInfos: []
    }
  },
  methods: {
    selectFile() {
      this.selectedFiles = this.$refs.file.files;
    },
    upload() {
      this.progress = 0;
      this.currentFile = this.selectedFiles.item(0);
      DocumentService.uploadDocumentByIppis(this.$store.state.ippis, this.currentFile,
          event => {
            this.progress = Math.round((100 * event.loaded) / event.total);
          })
          .then(response => {
            this.message = response.data.message;
            return DocumentService.retrieveDocumentsByIppis(this.$store.state.ippis);
          })
          .then(files => {
            this.fileInfos = files.data;
          })
          .catch(() => {
            this.progress = 0;
            this.message = "Couldn't upload the file! please ensure the size isn't more than 200kb";
            this.currentFile = undefined;
          });
      this.selectedFiles = undefined;
    },
    deleteDocument(id) {
      DocumentService.deleteDocumentById(id).then(() => {
        this.fileInfos = this.fileInfos.filter(file => file.id !== id);
      })
    }
  },
  mounted() {
    DocumentService.retrieveDocumentsByIppis(this.$store.state.ippis).then(response => {
      this.fileInfos = response.data;
    });
  }
}
</script>

<style scoped>
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding-left: 55px;
  padding-right: 30px;
}

.card {
  width: 450px;
  flex: 2px;
}

i {
  float: right;
  cursor: pointer;
}
</style>