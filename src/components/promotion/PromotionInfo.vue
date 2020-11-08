<template>
  <div class="main">
    <h5>Promotion Record</h5>
    <div v-if="message" class="alert-success"/>
    <div class="align-content-center">
      <table class="table table-responsive">
        <thead>
        <tr>
          <th>Id</th>
          <th>Promoted Level</th>
          <th>Rank Code</th>
          <th>Promoted Rank</th>
          <th>Promotion Date</th>
          <th>Previous Level</th>
          <th>Previous Rank</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="(promotion, index) in promotions" v-bind:key="index">
          <th>{{index + 1}}</th>
          <td>{{ promotion.newDesignation.level.name }}</td>
          <td>{{ promotion.newDesignation.rankCode }}</td>
          <td>{{ promotion.newDesignation.name }}</td>
          <td>{{ promotion.promotionDate | moment("DD/MM/YYYY") }}</td>
          <td>{{ promotion.previousDesignation.level.name }}</td>
          <td>{{ promotion.previousDesignation.name }}</td>
          <td>
            <div class="btn btn-group">
              <router-link :to="{name:'editPromotion', params:{id:promotion.id}}" class="btn btn-success">Update
              </router-link>
              <button class="btn btn-warning" v-on:click="deletePromotion(promotion.id)">Delete</button>
            </div>
          </td>

        </tr>
        </tbody>
      </table>
      <div >
        <router-link :to="{name:'addPromotion'}" class="btn btn-success ">Add</router-link>
        <router-link :to="{name:'accountInfo'}"
                     class="i btn btn-success" v-if="promotions.length">Next
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PromotionService from "@/services/PromotionService";

export default {
  name: "promotionInfo",
  data() {
    return {
      promotions: [],
      message: ""
    };
  },
  methods: {
    refreshPromotion() {
      PromotionService.retrievePromotionByIppis(this.$store.state.ippis)
          .then(res => {
            this.promotions = res.data;
          });
    },
    deletePromotion(id) {
      this.$dialog.confirm("If you delete this record, it'll be gone forever.", {
        loader: true
      })
          .then((dialog) => {
      PromotionService.deletePromotionById(id).then(() => {
        this.promotions = this.promotions.filter(item => item.id !== id);
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
    this.refreshPromotion();
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