<template>
  <div class="main">
    <h5>Add Service History</h5>
    <div class="align-content-center">
      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.stop.prevent="handleSubmit(addHistory)">
          <div class="row form-group">
            <div class="col-xl-5">
              <validation-provider name="MDA" :rules="{required: true}" v-slot="validationContext">
                <label>MDA</label>
                <select v-model="history.mda" id="mdId" class="form-control">
                  <option v-for="mda in mdas" v-bind:value="mda.id" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="mda.name">{{ mda.name }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-5">
              <validation-provider name="Department" :rules="{required: true}" v-slot="validationContext">
                <label>Department</label>
                <select v-model="history.department" id="depId" class="form-control">
                  <option v-for="dept in departments" v-bind:value="dept.id" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="dept.name">{{ dept.name }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-5">
              <validation-provider name="Grade Level" :rules="{required: true}" v-slot="validationContext">
                <label>Grade Level</label>
                <select v-model="level" @change="getDesignations" id="levId" class="form-control">
                  <option v-for="lev in levels" v-bind:value="lev.id" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="lev.name">{{ lev.name }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-5">
              <validation-provider name="Designation" :rules="{required: true}" v-slot="validationContext">
                <label>Designation</label>
                <select v-model="history.designation" id="desId" class="form-control">
                  <option v-for="des in designations" v-bind:value="des.id" :state="getValidateState(validationContext)"
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
              <validation-provider name="Assumption Date" :rules="{required: true}" v-slot="validationContext">
                <label>Assumption Date</label>
                <input name="Assumption Date" type="date" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="history.dAssumption" placeholder="Enter date of assumption" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-5">
              <label>Exit Date</label>
                  <input type="date" class="form-control" v-model="history.exitDate"/>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-5">
              <validation-provider name="Location" :rules="{required: true}" v-slot="validationContext">
                <label>Location</label>
                <select v-model="history.location" id="locId" class="form-control">
                  <option v-for="loc in locations" v-bind:value="loc.id" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="loc.name">{{ loc.name }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>
          <div>
            <button class="btn btn-success" type="submit">Save</button>
            <router-link :to="{name:'historyInfo'}" class="i btn btn-success">Cancel</router-link>
          </div>
        </form>
      </validation-observer>
    </div>
  </div>

</template>

<script>

import HistoryService from "@/services/HistoryService";

export default {
  name: "addHistory",
  data() {
    return {
      history: {
        mda: "",
        department: "",
        designation: "",
        location: "",
        dAssumption: "",
        exitDate: "",
        ippis: ""
      },
      level: "",
      mdas: [],
      departments: [],
      levels: [],
      designations: [],
      locations: [],
      loading: true
    }
  },
  created() {
    this.getLocations();
    this.getDepartments();
    this.getDesignations();
    this.getLevels();
    this.getMdas();
  },

  methods: {
    getValidateState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },
    addHistory() {
      let data = {
        mda: this.history.mda,
        department: this.history.department,
        designation: this.history.designation,
        location: this.history.location,
        dAssumption: this.history.dAssumption,
        exitDate: this.history.exitDate,
        ippis: this.$store.state.auth.user.ippis
      };
      HistoryService.createHistory(data).then(() => {
        this.$router.push({name: 'historyInfo'})
            .catch(error => console.log(error));
      });
    },
    getDepartments: function () {
      HistoryService.getDepartment().then((res) => {
        this.departments = res.data;
      });
    },
    getMdas: function () {
      HistoryService.getMda().then((res) => {
        this.mdas = res.data;
      });
    },
    getDesignations () {
      HistoryService.getRankByLevel(this.level).then((res) => {
        this.designations = res.data;
      });
    },
    getLocations: function () {
      HistoryService.getLocation().then((res) => {
        this.locations = res.data;
      });
    },
    getLevels () {
      HistoryService.getGradeLevel().then((res) => {
        this.levels = res.data;
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
