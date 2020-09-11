<!--<template>-->
<!--  <div class="main">-->
<!--    <h5>Technical Skills</h5>-->
<!--    <div v-if="message" class="alert-success"/>-->
<!--    <div class="align-content-center">-->
<!--      <table class="table">-->
<!--        <thead>-->
<!--        <tr>-->
<!--          <th>Id</th>-->
<!--          <th>Skill</th>-->

<!--        </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--        <tr v-for="(skill, index) in skills" v-bind:key="index">-->
<!--          <td>{{ index }}</td>-->
<!--          <td>{{ skill.name }}</td>-->
<!--          <td>-->
<!--            <div class="btn btn-group">-->
<!--              <router-link :to="{name:'editSkills', params:{id:skill.id}}" class="btn btn-success">Update-->
<!--              </router-link>-->
<!--              <button class="btn btn-warning" v-on:click="deleteSkill(index)">Delete</button>-->
<!--            </div>-->
<!--          </td>-->

<!--        </tr>-->
<!--        </tbody>-->
<!--      </table>-->
<!--      <div class="btn btnP ">-->
<!--        <router-link :to="{name:'addSkills'}" class="btn btn-success ">Add a skill</router-link>-->
<!--        <router-link :to="{name:'membershipInfo'}"-->
<!--                     class="btn btn-success" v-if="skills.length">Next-->
<!--        </router-link>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import SkillService from "@/services/SkillService";-->

<!--export default {-->
<!--  name: "skillsInfo",-->
<!--  data() {-->
<!--    return {-->
<!--      skills: [],-->
<!--      message: ""-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    refreshSkills() {-->
<!--      SkillService.createSkills(this.$store.state.user.ippis)-->
<!--          .then(res => {-->
<!--            this.skills = res.data;-->
<!--          });-->
<!--    },-->
<!--    deleteSkill() {-->
<!--      // PromotionService.deletePromotionById(id).then(() => {-->
<!--      //   let i = this.promotions.findIndex(item => item.id);-->
<!--      //   this.promotions.slice(i, 1);-->
<!--      //   this.message = `Deleted promotion with id ${id} Successfully`;-->
<!--      //   this.refreshHistory();-->
<!--      // });-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    this.refreshSkills();-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.main {-->
<!--  margin-left: 160px; /* Same as the width of the sidebar */-->
<!--  padding-left: 55px;-->
<!--  padding-right: 30px;-->
<!--}-->

<!--.btnP {-->
<!--  margin-left: 10px;-->
<!--}-->
<!--</style>-->