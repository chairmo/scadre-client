<template>
  <div class="main">
    <h5>Update Promotion</h5>
    <div class="align-content-center">
      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.stop.prevent="handleSubmit(updatePromotion)">
          <div class="row form-group">
            <div class="col-xl-5">
              <validation-provider name="Previous Level" :rules="{required: true}" v-slot="validationContext">
                <label>Previous GradeLevel</label>
                <select v-model="previousLevel" @change="getDesignations" id="prevLId" class="form-control">
                  <option v-for="lev in previousLevels" v-bind:value="lev.id"
                          :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="lev.name">{{ lev.name }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-5">
              <validation-provider name="Previous Designation" :rules="{required: true}" v-slot="validationContext">
                <label>Previous Designation</label>
                <select v-model="promotion.previousDesignation" id="predId" class="form-control">
                  <option v-for="des in previousDesignations" v-bind:value="des.id"
                          :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="des.name">{{ des.name }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-5">
              <validation-provider name="New Level" :rules="{required: true}" v-slot="validationContext">
                <label>New GradeLevel</label>
                <select v-model="newLevel" @change="getNewDesignation" id="newDeLId" class="form-control">
                  <option v-for="lev in newLevels" v-bind:value="lev.id" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="lev.name">{{ lev.name }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-5">
              <validation-provider name="New Designation" :rules="{required: true}" v-slot="validationContext">
                <label>New Designation</label>
                <select v-model="promotion.newDesignation" id="newDId" class="form-control">
                  <option v-for="des in newDesignations" v-bind:value="des.id"
                          :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="des.name">{{ des.name }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-5">
              <validation-provider name="Promotion Date" :rules="{required: true}" v-slot="validationContext">
                <label>Promotion Date</label>
                <input name="Promotion Date" type="date" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="promotion.promotionDate" placeholder="Enter promotion date" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

          </div>
          <div>
            <button class="btn btn-success" type="submit">Update</button>
            <router-link :to="{name:'promotionInfo'}" class="i btn btn-success">Cancel</router-link>
          </div>
        </form>
      </validation-observer>
    </div>
  </div>

</template>

<script>

import PromotionService from "@/services/PromotionService";

export default {
  name: "editPromotion",
  data() {
    return {
      promotion: {
        previousDesignation: "",
        newDesignation: "",
        promotionDate: "",
        ippis: ""
      },
      newLevel: "",
      previousLevel: "",
      previousLevels: [],
      previousDesignations: [],
      newLevels: [],
      newDesignations: [],
      loading: true
    }
  },
  created() {
    this.getPromotion();
    this.getNewDesignation();
    this.getDesignations();
    this.getLevels();
  },

  methods: {
    getValidateState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },
    getPromotion(){
      PromotionService.retrievePromotionById(this.$route.params.id).then(res => {
        this.promotion = res.data;
      })
    },
    updatePromotion() {
      PromotionService.updatePromotion(this.$route.params.id, this.promotion).then(() => {
        this.$router.push({name: 'promotionInfo'})
            .catch(error => console.log(error));
      });
    },

    getDesignations: function () {
      PromotionService.getRankByLevel(this.previousLevel).then((res) => {
        this.previousDesignations = res.data;
      });
    },
    getNewDesignation: function () {
      PromotionService.getRankByLevel(this.newLevel).then((res) => {
        this.newDesignations = res.data;
      });
    },

    getLevels: function () {
      PromotionService.getGradeLevel().then((res) => {
        this.previousLevels = res.data;
        this.newLevels = res.data;
      });
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
