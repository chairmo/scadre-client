<template>
  <div class="main">
    <h5>Edit Education</h5>
    <div class="align-content-center">
      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.stop.prevent="handleSubmit(updateEducation)">
          <div class="row form-group">
            <div class="col-xl-5">
              <validation-provider name="Qualification" :rules="{required: true}" v-slot="validationContext">
                <label>Qualification</label>
                <select v-model="education.qualification" id="typeId" class="form-control">
                  <option v-for="qual in qualifications" v-bind:value="qual.id" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="qual.name">{{ qual.name }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-5">
              <validation-provider name="Course" :rules="{required: true}" v-slot="validationContext">
                <label>Courses</label>
                <select v-model="education.course" id="cosId" class="form-control">
                  <option v-for="cos in courses" v-bind:value="cos.id" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="cos.name">{{ cos.name }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-5">
              <validation-provider name="School" :rules="{required: true, min: 3}"
                                   v-slot="validationContext">
                <label>School</label>
                <input name="School" type="text" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="education.school" placeholder="Enter school name" class="form-control"/>

                {{ validationContext.errors[0] }}

              </validation-provider>
            </div>

            <div class="col-xl-5">
              <validation-provider name="Grade" :rules="{required: true}" v-slot="validationContext">
                <label>Grade</label>
                <select v-model="education.grade" id="gradeId" class="form-control">
                  <option v-for="grad in grades" v-bind:value="grad.text" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="grad.value">{{ grad.value }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-5">
              <validation-provider name="Start Date"  :rules="{required: true}" v-slot="validationContext">
                <label>Start Date</label>
                <input name="Start Date" type="date" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="education.startDate" placeholder=" Enter start date" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-5">
              <validation-provider name="Finish Date"  :rules="{required: true}" v-slot="validationContext">
                <label>Finish Date</label>
                <input name="Finish Date" type="date" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="education.finishDate" placeholder=" Enter finish date" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <button class="btn btn-success" type="submit" >Update</button>
        </form>
      </validation-observer>
    </div>
  </div>

</template>

<script>
import EducationService from "@/services/EducationService";

export default {
  name: "editEducation",
  data() {
    return {
      education: {
        qualification: "",
        course: "",
        school: "",
        grade: "2.1",
        startDate: "",
        finishDate: ""
      },
      grades: [
        {text: '2.1', value: '2.1'},
        {text: '1st Class', value: '1st Class'},
        {text: '2.2', value: '2.2'},
        {text: 'Distinction', value: 'Distinction'},
        {text: '3rd Class', value: '3rd Class'},
        {text: 'Pass', value: 'Pass'},
        {text: 'Upper Credit', value: 'Upper Credit'},
        {text: 'Lower Credit', value: 'Lower Credit'},
        {text: 'Excellent', value: 'Excellent'},
      ],
      qualifications: [],
      courses: []
    }
  },

  created: function () {
    this.getEducation();
    this.fetchQualifications();
    this.fetchCourses();
  },
  methods: {
    getValidateState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },
    getEducation: function () {
      EducationService.retrieveEducation(this.$route.params.id).then(res => {
        this.education = res.data;
      });
    },
    updateEducation: function () {
      EducationService.updateEducation(this.$route.params.id, this.education).then(() => {
        this.$router.push({name: 'educationInfo'});
      });
    },
    fetchQualifications: function () {
      EducationService.getQualifications().then((res) => {
        this.qualifications = res.data;
      });
    },
    fetchCourses: function () {
      EducationService.getCourses().then(res => {
        this.courses = res.data;
      })
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
