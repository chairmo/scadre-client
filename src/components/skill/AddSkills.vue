<template>
  <div class="main">
    <h5>Add a skill</h5>
    <div class="align-content-center">

      <!--      <label>Technical Skill (Optional)</label>-->
      <form @submit.prevent="addSkill">
        <div class="row form-group">
          <div class="col-xl-5">
            <vue-multiselect v-model="name.skills" :options="skillList" class="form-control"
                             :multiple="false" placeholder="Type to search" track-by="name"
                             label="name"><span slot="noResult">Oops! No skill found.
          Consider searching a different skill-set.</span></vue-multiselect>
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
          <td>{{ skill.skills.name}}</td>
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
  name: "addSkill",
  data() {
    return {
      name: {
        skills: {},
        ippis: ""
      },
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
        skills: this.name.skills.id,
        ippis: this.$store.state.ippis
      };
      SkillService.createSkills(data).then(() => {
        this.getSelectedSkills();
      })
    },
    getListOfSkills() {
      SkillService.getAllSkills().then(res => {
        this.skillList = res.data;
      })
    },
    getSelectedSkills() {
      SkillService.retrieveSkillByIppis(this.$store.state.ippis).then(res => {
        this.selected = res.data;
      })
    },
    deleteSkill(id){
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
table{
  width: 350px;
  flex: 2px;
}
i{
  float: right;
  cursor: pointer;
}
vue-multiselect{
  background-color: dimgray;
}
</style>