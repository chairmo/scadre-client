<template>
  <div class="main">
    <h5>Add Employee</h5>
    <div class="align-content-center">
      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.stop.prevent="handleSubmit(addEmployment)">
          <div class="row form-group">
            <div class="col-xl-4">
              <validation-provider name="MDA" :rules="{required: true}" v-slot="validationContext">
                <label>MDA</label>
                <select v-model="employment.mda" id="mdId" class="form-control">
                  <option v-for="mda in mdas" v-bind:value="mda.id" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="mda.name">{{ mda.name }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-4">
              <validation-provider name="Department" :rules="{required: true}" v-slot="validationContext">
                <label>Department</label>
                <select v-model="employment.department" id="depId" class="form-control">
                  <option v-for="dept in departments" v-bind:value="dept.id"
                          :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="dept.name">{{ dept.name }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-4">
              <validation-provider name="Staff ID" :rules="{required: true, min: 5}" v-slot="validationContext">
                <label>Staff ID</label>
                <input name="Staff ID" type="text" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="employment.staffId" placeholder="Enter Staff ID" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-4">
              <label>NHIS Number (optional)</label>
              <input type="text" class="form-control" v-model="employment.nhisNumber"/>
            </div>

            <div class="col-xl-4">
              <validation-provider name="FCSC File Number" :rules="{required: true, min: 5}" v-slot="validationContext">
                <label>FCSC File Number</label>
                <input name="Staff ID" type="text" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="employment.fcscFileNumber" placeholder="Enter FCSC File Number" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-4">
              <validation-provider name="Type of Appointment" :rules="{required: true}" v-slot="validationContext">
                <label>Type of Appointment</label>
                <select v-model="employment.appointType" id="appointId" class="form-control">
                  <option v-for="type in types" v-bind:value="type.text" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback" v-bind:key="type.value">{{ type.value }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-4">
              <label>Gazette Number (Optional)</label>
              <input type="text" v-model="employment.gazetteNumber" class="form-control"/>
            </div>

            <div class="col-xl-4">
              <validation-provider name="Date of First Appointment" :rules="{required: true}"
                                   v-slot="validationContext">
                <label>Date of First Appointment</label>
                <input name="Date of First Appointment" type="date" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="employment.dAppoint" placeholder="Enter date of first appointment"
                       class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-4">
              <validation-provider name="Salary Structure" :rules="{required: true}" v-slot="validationContext">
                <label>Salary Structure</label>
                <select v-model="employment.salaryStructure" id="salId" class="form-control">
                  <option v-for="salary in salaryStructures" v-bind:value="salary.text"
                          :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback" v-bind:key="salary.value">{{ salary.value }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-4">
              <validation-provider name="Date of Confirmation" :rules="{required: true}" v-slot="validationContext">
                <label>Date of Confirmation</label>
                <input name="Date of Confirmation" type="date" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="employment.dConfirm" placeholder="Enter date of confirmation" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-4">
              <validation-provider name="Assumption of Duty" :rules="{required: true}" v-slot="validationContext">
                <label>Assumption of Duty</label>
                <input name="Assumption of Duty" type="date" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="employment.dAssumption" placeholder="Enter assumption of duty" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-4">
              <validation-provider name="Labour Union" :rules="{required: true}" v-slot="validationContext">
                <label>Labour Union</label>
                <select v-model="employment.laborUnion" id="labId" class="form-control">
                  <option v-for="labor in laborUnions" v-bind:value="labor.text"
                          :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback" v-bind:key="labor.value">{{ labor.value }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">

            <div class="col-xl-4">
              <label>NHF Number (Optional)</label>
              <input type="text" class="form-control" v-model="employment.nhfNumber"/>
            </div>

          </div>
          <div>
            <button class="btn btn-success" type="submit">Save</button>
            <router-link :to="{name:'employmentInfo'}" class="i btn btn-success">Cancel</router-link>
          </div>
        </form>
      </validation-observer>
    </div>
  </div>

</template>

<script>
import EmploymentService from "@/services/EmploymentService";

export default {
  name: "addEmployment",
  data() {
    return {
      employment: {
        mda: "",
        department: "",
        staffId: "",
        fcscFileNumber: "",
        gazetteNumber: "",
        nhfNumber: "",
        dAppoint: "",
        dAssumption: "",
        dConfirm: "",
        nhisNumber: "",
        salaryStructure: "CONSPSS",
        appointType: "Permanent",
        laborUnion: "ASCSN",
        ippis: ""
      },
      mdas: [],
      departments: [],
      types: [
        {text: 'Permanent', value: 'Permanent'},
        {text: 'Temporary', value: 'Temporary'}
      ],
      laborUnions: [
        {text: 'ASCSN', value: 'ASCSN'},
        {text: 'NCSU', value: 'NCSU'}
      ],
      salaryStructures: [
        {text: 'CONSPSS', value: 'CONSPSS'},
        {text: 'CONTOPSAL', value: 'CONTOPSAL'},
        {text: 'CONPOSS', value: 'CONPOSS'},
        {text: 'CONICSS', value: 'CONICSS'}
      ]
    }
  },
  created() {
    this.getMdas();
    this.getDepartments()
  },
  methods: {
    getValidateState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },
    addEmployment() {
      let data = {
        mda: this.employment.mda,
        department: this.employment.department,
        staffId: this.employment.staffId,
        fcscFileNumber: this.employment.fcscFileNumber,
        gazetteNumber: this.employment.gazetteNumber,
        nhfNumber: this.employment.nhfNumber,
        dAppoint: this.employment.dAppoint,
        dAssumption: this.employment.dAssumption,
        dConfirm: this.employment.dConfirm,
        nhisNumber: this.employment.nhfNumber,
        laborUnion: this.employment.laborUnion,
        appointType: this.employment.appointType,
        salaryStructure: this.employment.salaryStructure,
        ippis: this.$store.state.ippis
      };

      EmploymentService.createEmployment(data).then(() => {
        this.$router.push({name: 'employmentInfo'})
            .catch(error => console.log(error));
      });
    },
    getDepartments: function () {
      EmploymentService.getDepartment().then((res) => {
        this.departments = res.data;
      });
    },

    getMdas: function () {
      EmploymentService.getMda().then((res) => {
        this.mdas = res.data;
      });
    },
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