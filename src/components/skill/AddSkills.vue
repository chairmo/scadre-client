<template>
  <div class="main">
    <h5>Add a skill</h5>
    <div class="align-content-center">

      <form @submit.prevent="addSkill">
        <div class="row form-group ">
          <div class="col-xl-4">

            <select v-model="skills" id="banId" class="form-control">
              <option v-for="skill in skillList" v-bind:value="skill.id"
                      aria-describedby="input-1-live-feedback"
                      v-bind:key="skill.name">{{ skill.name }}
              </option>
            </select>
          </div>
        </div>
        <button class="btn btn-success" type="submit">Add</button>

      </form>
      <div v-if="selected.length">
        <table class="table">
          <thead>
          <tr>
            <th>Id</th>
            <th>Skill</th>

          </tr>
          </thead>
          <tbody>
          <tr v-for="(skill, index) in selected" v-bind:key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ skill.skills.name }}</td>
            <td>
              <i class="fa fa-minus-circle a" aria-hidden="true" v-on:click="deleteSkill(skill.id)"></i>
            </td>

          </tr>
          </tbody>
        </table>
        <router-link :to="{name:'membershipInfo'}" class="btn btn-success">Next
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import SkillService from "@/services/SkillService";

export default {
  name: 'addSkills',
  data() {
    return {
      skills: '',
      ippis: '',
      message: "",
      selected: [],
      skillList: []
    }
  },
  created() {
    this.getListOfSkills();
    this.getSelectedSkills();
  },
  methods: {
    addSkill() {
      let data = {
        skills: this.skills,
        ippis: this.$store.state.auth.user.ippis
      };
      SkillService.createSkills(data).then((res) => {
        this.message = res.data.message;
        return SkillService.retrieveSkillByIppis(this.$store.state.auth.user.ippis);
      })
          .then(files => {
            this.selected = files.data;
          })
          .catch(() => {
            this.message = "failed to add a skill";
          });
    },
    getListOfSkills() {
      SkillService.getAllSkills().then(res => {
        this.skillList = res.data;
      })
    },
    getSelectedSkills() {
      SkillService.retrieveSkillByIppis(this.$store.state.auth.user.ippis).then(res => {
        this.selected = res.data;
      })
    },
    deleteSkill(id) {
      SkillService.deleteSkillById(id).then(() => {
        this.selected = this.selected.filter(skill => skill.id !== id)
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

table {
  width: 350px;
  flex: 2px;
}

i {
  float: right;
  cursor: pointer;
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