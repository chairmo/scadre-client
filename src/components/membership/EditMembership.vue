<template>
  <div class="main">
    <h5>Update Membership</h5>
    <div class="align-content-center">
      <validation-observer ref="observer" v-slot="{handleSubmit}">
        <form @submit.stop.prevent="handleSubmit(updateMembership)">
          <div class="row form-group">
            <div class="col-xl-5">

              <validation-provider name="Organization" :rules="{required: true, min: 3}"
                                   v-slot="validationContext">
                <label>Organization</label>
                <input name="Organization" type="text" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="membership.institution" placeholder="Enter institution name" class="form-control"/>

                {{ validationContext.errors[0] }}

              </validation-provider>
            </div>

            <div class="col-xl-5">
              <validation-provider name="Registered As" :rules="{required: true, min: 3}"
                                   v-slot="validationContext">
                <label>Registered As</label>
                <input name="Registered As" type="text" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="membership.name" placeholder="Enter registration name" class="form-control"/>

                {{ validationContext.errors[0] }}

              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-5">
              <validation-provider name="Registration Number" :rules="{required: true, min: 3}"
                                   v-slot="validationContext">
                <label>Registration Number</label>
                <input name="Registration Number" type="text" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="membership.regNum" placeholder="Enter registration number" class="form-control"/>

                {{ validationContext.errors[0] }}

              </validation-provider>
            </div>

            <div class="col-xl-5">
              <validation-provider name="Type of Membership" :rules="{required: true}" v-slot="validationContext">
                <label>Type of Membership</label>
                <select v-model="membership.type" id="typeId" class="form-control">
                  <option v-for="type in types" v-bind:value="type.id" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="type.name">{{ type.name }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-5">
              <validation-provider name="Date of Induction"  :rules="{required: true}" v-slot="validationContext">
                <label>Date of Induction</label>
                <input name="date" type="date" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="membership.dateOfInduction" placeholder=" Enter date of induction" class="form-control"/>

                {{ validationContext.errors[0] }}

              </validation-provider>
            </div>
          </div>

          <div>
            <button class="btn btn-success" type="submit">Update</button>
            <router-link :to="{name:'membershipInfo'}" class="i btn btn-success">Cancel</router-link>
          </div>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import MembershipService from "@/services/MembershipService";

export default {
  name: "editMembership",
  data() {
    return {
      membership: {
        institution: "",
        name: "",
        regNum: "",
        type: "",
        dateOfInduction: "",
        ippis: ""
      },
      submitted: false,
      types: []
    }
  },
  created() {
    this.getMembership();
    this.getMembershipTypes();
  },
  methods: {
    getValidateState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },
    updateMembership() {
          MembershipService.updateMembership(this.$route.params.id, this.membership).then(() => {
            this.$router.push({name: 'membershipInfo'})
                .catch(error => console.log(error));
          });
    },
    getMembershipTypes(){
      MembershipService.getMembershipTypes().then(res => {
        this.types = res.data;
      })
    },
    getMembership(){
      MembershipService.retrieveMembershipById(this.$route.params.id).then(res => {
        this.membership = res.data;
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