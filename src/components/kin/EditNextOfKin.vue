<template>
  <div class="main">
    <h5>Update Next of Kin</h5>
    <div class="align-content-center">
      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.stop.prevent="handleSubmit(updateNextOfKin)">
          <div class="row form-group">
            <div class="col-xl-2">
              <validation-provider name="Title" :rules="{required: true}" v-slot="validationContext">
                <label>Title</label>
                <select v-model="kin.title" id="titleId" class="form-control">
                  <option v-for="title in titles" v-bind:value="title.text" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="title.value">{{ title.value }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-4">
              <validation-provider name="First Name" :rules="{required: true, alpha: true, min: 3}"
                                   v-slot="validationContext">
                <label>First Name</label>
                <input name="First Name" type="text" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="kin.firstName" placeholder="Enter first name" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-4">
              <validation-provider name="Last Name" :rules="{required: true, alpha: true, min: 3}"
                                   v-slot="validationContext">
                <label>Last Name</label>
                <input name="First Name" type="text" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="kin.lastName" placeholder="Enter last name" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
            <div class="col-xl-4">
              <label>Middle Name</label>
              <input type="text" v-model="kin.middleName" class="form-control"/>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-4">
              <validation-provider name="E-mail" :rules="{required: true, email: true}"
                                   v-slot="validationContext">
                <label>Email</label>
                <input name="E-mail" type="text" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="kin.email" placeholder="Enter email" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-4">
              <validation-provider name="Phone Number" :rules="{required: true, digits: 10}"
                                   v-slot="validationContext">
                <label>Phone Number</label>
                <input name="Phone Number" type="tel" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="kin.phoneNumber" placeholder="Enter email" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-4">
              <validation-provider name="Relationship" :rules="{required: true}" v-slot="validationContext">
                <label>Relationship</label>
                <select v-model="kin.relationship" id="relId" class="form-control">
                  <option v-for="relation in options" v-bind:value="relation.text" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="relation.value">{{ relation.value }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-4">
              <validation-provider name="State of Origin" :rules="{required: true}" v-slot="validationContext">
                <label>State of Origin</label>
                <select v-model="state" @change="getLga" id="statId" class="form-control">
                  <option v-for="stat in states" v-bind:value="stat.id" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="stat.name">{{ stat.name }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-4">
              <validation-provider name="LGA of Origin" :rules="{required: true}" v-slot="validationContext">
                <label>LGA of Origin</label>
                <select v-model="kin.lga" id="lgaId" class="form-control">
                  <option v-for="lga in lgas" v-bind:value="lga.id" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="lga.name">{{ lga.name }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-4">
              <label>Street Address</label>
              <input type="text" class="form-control" v-model="kin.address"/>
            </div>
          </div>

          <div class="row form-group">

            <div class="col-xl-4">
              <validation-provider name="National ID" :rules="{required: true, digits:10}"
                                   v-slot="validationContext">
                <label>National ID (NIN)</label>
                <input name="National ID" type="number" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="kin.nin" placeholder="Enter national id" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

          </div>

          <div>
            <button class="btn btn-success" type="submit">Update</button>
            <router-link :to="{name:'nextOfKinInfo'}" class="i btn btn-success">Cancel</router-link>
          </div>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import NextOfKinService from "@/services/NextOfKinService";

export default {
  name: "editNextOfKin",
  data() {
    return {
      kin: {
        firstName: "",
        lastName: "",
        middleName: "",
        phoneNumber: "",
        email: "",
        lga: "",
        address: "",
        nin: "",
        relationship: "",
        title: ""
      },
      state: "",
      states: [],
      lgas: [],
      options: [
        {text: 'Brother', value: 'Brother'},
        {text: 'Sister', value: 'Sister'},
        {text: 'Mother', value: 'Mother'},
        {text: 'Father', value: 'Father'},
        {text: 'Son', value: 'Son'},
        {text: 'Daughter', value: 'Daughter'},
        {text: 'Nephew', value: 'Nephew'},
        {text: 'Niece', value: 'Niece'},
        {text: 'Aunt', value: 'Aunt'},
        {text: 'Uncle', value: 'Uncle'}
      ],
      titles: [
        {text: 'Prof.', value: 'Prof.'},
        {text: 'Dr.', value: 'Dr.'},
        {text: 'Engr.', value: 'Engr.'},
        {text: 'Mr.', value: 'Mr.'},
        {text: 'Mrs.', value: 'Mrs.'},
        {text: 'Ms.', value: 'Ms.'},
      ]
    }
  },
  created() {
    this.getNextOfKin();
    this.getStates();
    this.getLga();
  },

  methods: {
    getValidateState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },
    getNextOfKin(){
      NextOfKinService.retrieveKinById(this.$route.params.id).then((res) => {
        this.kin = res.data;
      });
    },
    updateNextOfKin() {
      NextOfKinService.updateKin(this.$route.params.id, this.kin).then(() => {
        this.$router.push({name: 'nextOfKinInfo'})
            .catch(error => console.log(error));
      });
    },
    getLga: function () {
      NextOfKinService.retrieveLgaByStateId(this.state).then((res) => {
        this.lgas = res.data;
      });
    }
    ,
    getStates: function () {
      NextOfKinService.getStates().then((res) => {
        this.states = res.data;
      });
    }
  }

}
</script>

<style scoped>
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding-left: 60px;
  padding-right: 40px;
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