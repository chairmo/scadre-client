<template>
  <div class="main">
    <h5>Staff Data</h5>
    <div class="align-content-center">
      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.stop.prevent="handleSubmit(updateStaff)">
          <div class="row form-group">
            <div class="col-xl-2">
              <validation-provider name="Title" :rules="{required: true}" v-slot="validationContext">
                <label>Title</label>
                <select v-model="staff.title" id="titleId" class="form-control">
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
                       v-model="staff.firstName" placeholder="Enter first name" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-4">
              <validation-provider name="Last Name" :rules="{required: true, alpha: true, min: 3}"
                                   v-slot="validationContext">
                <label>Last Name</label>
                <input name="First Name" type="text" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="staff.lastName" placeholder="Enter last name" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
            <div class="col-xl-4">
              <label>Middle Name</label>
              <input type="text" v-model="staff.middleName" class="form-control"/>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-4">
                <label>Email</label>
                <input name="E-mail" type="email"
                       aria-describedby="input-1-live-feedback"
                       v-model="staff.email" class="form-control" disabled/>
            </div>

            <div class="col-xl-4">
              <validation-provider name="Phone Number" :rules="{required: true, digits: 10}"
                                   v-slot="validationContext">
                <label>Phone Number</label>
                <input name="Phone Number" type="tel" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="staff.phoneNumber" placeholder="Enter email" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-4">
              <validation-provider name="Date of Birth" :rules="{required: true}"
                                   v-slot="validationContext">
                <label>Date of Birth</label>
                <input name="Date of Birth" type="date" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="staff.dob" placeholder="Enter date of birth" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-4">
              <validation-provider name="State of Origin" :rules="{required: true}" v-slot="validationContext">
                <label>State of Origin</label>
                <select v-model="state" @change="fetchLga" id="statId" class="form-control">
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
                <select v-model="staff.lga" id="lgaId" class="form-control">
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
              <input type="text" class="form-control" v-model="staff.address"/>
            </div>
          </div>

          <div class="row form-group">

            <div class="col-xl-4">
              <validation-provider name="National ID" :rules="{required: true, digits:10}"
                                   v-slot="validationContext">
                <label>National ID (NIN)</label>
                <input name="National ID" type="number" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="staff.nin" placeholder="Enter national id" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-4">
              <validation-provider name="Gender" :rules="{required: true}" v-slot="validationContext">
                <label>Gender</label>
                <select v-model="staff.gender" id="genId" class="form-control">
                  <option v-for="gender in options" v-bind:value="gender.text" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="gender.value">{{ gender.value }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div>
            <input type="checkbox" id="checkbox" v-model="staff.married">
            <label for="checkbox"> Are you married? </label>
          </div>
          <div>
            <button class="btn btn-success" type="submit">Update</button>
          </div>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>

import StaffService from "@/services/StaffService";

export default {
  name: "editStaff",
  data() {
    return {
      staff: {
        firstName: "",
        lastName: "",
        middleName: "",
        phoneNumber: "",
        email: "",
        dateOfBirth: "",
        lga: "",
        address: "",
        ippis: "",
        nin: "",
        gender: "",
        married: false,
        title: ""
      },
      state: "",
      states: [],
      lgas: [],
      options: [
        {text: 'Male', value: 'Male'},
        {text: 'Female', value: 'Female'}
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
  created: function () {
    this.getStaff();
    this.fetchStates();
    this.fetchLga();
  },
  methods: {
    getValidateState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },
    getStaff: function () {
      StaffService.retrieveStaffById(this.$route.params.id).then(res => {
        this.staff = res.data;
      });
    },
    updateStaff: function () {
      StaffService.updateStaff(this.$route.params.id, this.staff).then(() => {
        this.$router.push({name: 'staffInfo'});
      });
    },
    fetchStates: function () {
      StaffService.getStates().then((res) => {
        this.states = res.data;
      });
    },
    fetchLga: function () {
      StaffService.retrieveLgaByStateId(this.state).then(res => {
        this.lgas = res.data;
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