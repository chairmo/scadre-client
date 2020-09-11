<template>
  <div class="main">
    <h5>Update Certification</h5>
    <div class="align-content-center">
      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.stop.prevent="handleSubmit(updateCertificate)">
          <div class="row form-group">
            <div class="col-xl-5">
              <validation-provider name="Institution" :rules="{required: true, min:3}" v-slot="validationContext">
                <label>Institution</label>
                <input name="Institution" type="text" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="certification.institution" placeholder="Enter Institution" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-5">
              <validation-provider name="Certificate Name" :rules="{required: true, min:3}" v-slot="validationContext">
                <label>Certificate Name</label>
                <input name="Certificate Name" type="text" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="certification.certificateName" placeholder="Enter certificate name"
                       class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-5">
              <validation-provider name="Certificate Number" :rules="{required: true}" v-slot="validationContext">
                <label>Certificate Number</label>
                <input name="Certificate Number" type="text" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="certification.certificateNumber" placeholder="Enter certificate number"
                       class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-5">
              <validation-provider name="Date Obtained" :rules="{required: true}" v-slot="validationContext">
                <label>Date Obtained</label>
                <input name="Date Obtained" type="date" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="certification.dateObtained" placeholder="Enter date obtained" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <button class="btn btn-success" type="submit">Update</button>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import CertificationService from "@/services/CertificationService";

export default {
  name: "editCertification",
  data() {
    return {
      certification: {
        institution: "",
        certificateName: "",
        certificateNumber: "",
        dateObtained: "",
        ippis: ""
      }
    }
  },
  created() {
    this.getCertification();
  },
  methods: {
    getValidateState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },
    getCertification() {
      CertificationService.retrieveCertificationById(this.$route.params.id).then((res) => {
        this.certification = res.data;
      })
    },
    updateCertificate() {
      CertificationService.updateCertification(this.$route.params.id, this.certification).then(() => {
        this.$router.push({name: 'certificationInfo'})
            .catch(error => console.log(error));
      });
    }
  }
}
</script>

<style scoped>
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding-left: 55px;
  padding-right: 30px;
}

</style>