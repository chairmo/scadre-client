<template>
  <div class="main">
    <h5> Professional Certifications</h5>
    <div v-if="message" class="alert-success"/>
    <div class="align-content-center">
      <table class="table table-responsive">
        <thead>
        <tr>
          <th>Id</th>
          <th>Institution</th>
          <th>Certificate Name</th>
          <th>Certification Number</th>
          <th>Date Obtained</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="(certification, index) in certifications" v-bind:key="index">
          <td>{{index + 1}}</td>
          <td>{{ certification.institution.toUpperCase() }}</td>
          <td>{{ certification.certificateName.toUpperCase() }}</td>
          <td>{{ certification.certificateNumber.toUpperCase() }}</td>
          <td>{{ certification.dateObtained | moment("DD/MM/YYYY") }}</td>
          <td>
            <div class="btn btn-group">
              <router-link :to="{name:'editCertification', params:{id:certification.id}}" class="btn btn-success">Update
              </router-link>
              <button class="btn btn-warning" v-on:click="deleteCertificate(certification.id)">Delete</button>
            </div>
          </td>

        </tr>
        </tbody>
      </table>
      <div >
        <router-link :to="{name:'addCertification'}" class="btn btn-success ">Add </router-link>
        <router-link :to="{name:'addSkills'}"
                     class="i btn btn-success" v-if="certifications.length">Next
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CertificationService from "@/services/CertificationService";

export default {
  name: "certificationInfo",
  data() {
    return {
      certifications: [],
      message: ""
    };
  },
  methods: {
    refreshCertifications() {
      CertificationService.retrieveCertificationByIppis(this.$store.state.auth.user.ippis).then(res => {
        this.certifications = res.data;
      });
    },
    deleteCertificate(id) {
      this.$dialog.confirm("If you delete this record, it'll be gone forever.", {
        loader: true
      })
          .then((dialog) => {
      CertificationService.deleteCertificationById(id).then(() => {
        this.certifications = this.certifications.filter(cert => cert.id !== id);
      });
            setTimeout(() => {
              console.log('Delete action completed ');
              dialog.close();
            }, 2500);
          })
          .catch(() => {
            // Triggered when cancel button is clicked

            console.log('Delete aborted');
          });
    }
  },
  created() {
    this.refreshCertifications();
  }
}
</script>

<style scoped>
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding-left: 55px;
  padding-right: 30px;
}

.i{
  float: right;
  margin: auto;
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