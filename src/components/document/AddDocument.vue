<template>
  <div class="main">
    <div class="card">
    <h5 class="align-content-center">Note: Name your required documents accordingly</h5>
    <div>
      <h6>Passport</h6>
      <h6>First Appointment Letter</h6>
      <h6>First Degree</h6>
      <h6>Promotion Letter</h6>
    </div>


    <h6 class="align-content-center">Add file max size = 200kb (accepted format: *jpeg, png and pdf)</h6>
    <div v-if="currentFile" class="progress">
      <div
          class="progress-bar progress-bar-info progress-bar-striped"
          role="progressbar"
          :aria-valuenow="progress"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="{ width: progress + '%' }">{{ progress }}%
      </div>
    </div>

    <label class="btn btn-default">
      <input type="file" ref="file" accept=".jpeg, .jpg, .png, .pdf" @change="selectFile"/>
    </label>

    <button class="btn btn-success" :disabled="!selectedFiles" @click="upload">
      Upload
    </button>

    <div class="alert alert-light" role="alert">{{ message }}</div>

    <div v-if="fileInfos.length" class="card a">
      <table class="table table-responsive">
        <thead>

        <tr v-for="(file, index) in fileInfos" v-bind:key="index">
          <td>{{ file.filename }}</td>
          <td>
            <i class="fa fa-minus-circle a" aria-hidden="true" v-on:click="deleteDocument(file.id)"></i>
          </td>
        </tr>
        </thead>
      </table>
    </div>
      <div v-if="fileInfos.length" class="space">
        <input type="checkbox" id="checkbox" v-model="submit">
        <label for="checkbox"> <h5>Submit and Print</h5> </label>
        <span v-if="submit"><router-link :to="{name:'summaryReport'}" class="btn btn-success">Submit
        </router-link></span>
      </div>
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
      submit: false,
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
  max-width: 750px;
  /*flex: 2px;*/
  margin: auto;
}
.card a {
  max-width: 450px;
  /*flex: 2px;*/
  margin: auto;
}

i {
  float: right;
  cursor: pointer;
  margin: auto;
}

h6 {
  font-size: medium;
  font-family: sans-serif, Arial;
  margin: 15px;
}
.space{
  margin: 80px;
  align-content: center;
}

.btn-success{
  background:#007d53;
}

/* On screens that are less than 700px wide, make the view area flexible */
@media screen and (max-width: 700px) {
  .main {
    margin: auto;
    padding-right: 10px;
    padding-left: 10px;
  }
}
/* On screens that are less than 400px wide, make the view area below the sidebar */
@media screen and (max-width: 400px) {
  .main {
    margin: auto;
    padding-right: 5px;
    padding-left: 5px;
  }
}
</style>