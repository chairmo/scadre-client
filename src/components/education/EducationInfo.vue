<template>
  <div class="main">
    <h5>Educational Record</h5>
    <div class="align-content-center">
      <table class="table">
        <thead>
        <tr>
          <th>Id</th>
          <th>qualification</th>
          <th>course</th>
          <th>school</th>
          <th>grade obtained</th>
          <th>start date</th>
          <th>finish date</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="(education, index) in educations" v-bind:key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ education.qualification.name }}</td>
          <td>{{ education.course.name }}</td>
          <td>{{ education.school.toUpperCase() }}</td>
          <td>{{ education.grade }}</td>
          <td>{{ education.startDate }}</td>
          <td>{{ education.finishDate }}</td>
          <td>
            <div class="btn btn-group">
              <router-link :to="{name:'editEducation', params:{id:education.id}}" class="btn btn-success">Update
              </router-link>
              <button class="btn btn-warning" v-on:click="deleteEducation(education.id)">Delete</button>
            </div>
          </td>

        </tr>
        </tbody>
      </table>
      <div>
        <router-link :to="{name:'addEducation'}" class="btn btn-success ">Add</router-link>
        <router-link :to="{name:'certificationInfo'}"
                     class="i btn btn-success" v-if="educations.length">Next
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import EducationService from "@/services/EducationService";

export default {
  name: "educationInfo",
  data() {
    return {
      educations: [],
    }
  },
  methods: {
    refreshEducation() {
      EducationService.getAllByIppis(this.$store.state.ippis).then(res => {
        this.educations = res.data;
      });
    },
    deleteEducation(id) {
      this.$dialog.confirm("If you delete this record, it'll be gone forever.", {
        loader: true
      })
          .then((dialog) => {
            EducationService.deleteEducationById(id).then(() => {
              this.educations = this.educations.filter(result => result.id !== id);
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
    this.refreshEducation();
  }
}
</script>

<style scoped>
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding-left: 55px;
  padding-right: 30px;
}

.i {
  margin-left: 150px;
}
</style>