<template>
  <div class="main">
    <div class="card">
            <div v-if="message" class="alert alert-success">{{ message }}</div>
      <div v-if="employment.id">
        <br>
        <div class="title row"><h6 class="align">Employment Record</h6></div>
        <hr class="perpendicular-line"/>
        <div class="title row"><h6 class="title">MDA </h6><a class="i">
          {{ employment.mda.name }}</a></div>
        <div class="title row"><h6 class="title">Department </h6><a class="i">
          {{ employment.department.name }}</a></div>
        <div class="title row"><h6 class="title">File Number </h6><a class="i">
          {{ staffId() }}</a></div>
        <div class="title row"><h6 class="title">First Appointment </h6><a class="i">
          {{ employment.dAppoint | moment("DD/MM/YYYY")  }}</a></div>
        <div class="title row"><h6 class="title">Assumption of Duty </h6><a class="i">
          {{ employment.dAssumption | moment("DD/MM/YYYY")  }}</a>
        </div>
        <div class="title row"><h6 class="title">Confirmation Date </h6><a class="i">
          {{ employment.dConfirm | moment("DD/MM/YYYY")  }}</a></div>
        <div class="title row"><h6 class="title">Appointment Type</h6><a class="i">
          {{ employment.appointType }}</a>
        </div>

        <hr class="perpendicular-line"/>

        <div class="title row"><h6 class="title">FCSC File Number </h6><a class="i">{{ fcsc() }}</a></div>
        <div class="title row"><h6 class="title">Gazette Number </h6><a class="i">{{ gazette() }}</a></div>
        <div class="title row"><h6 class="title">Salary Structure </h6><a class="i">{{ employment.salaryStructure }}</a>
        </div>
        <div class="title row"><h6 class="title">Labour Union </h6><a class="i">{{ employment.laborUnion }}</a></div>
        <div class="title row"><h6 class="title">NHF Number </h6><a class="i">{{ nhf() }}</a></div>
        <div class="title row"><h6 class="title">NHIS Number </h6><a class="i">{{ nhis() }}</a></div>

      </div>
      <a v-if="!employment.id" style="text-align: center">
        <router-link :to="{name:'addEmployment'}" class="btn btn-success" style="color: white">Add Employment Info</router-link>
      </a>
      <div class="btn btn-group" v-if="employment.id">
        <router-link :to="{name:'editEmployment', params:{id:employment.id}}" class="btn btn-success" style="color: white">Update
        </router-link>
        <router-link :to="{name:'historyInfo'}" class="btn btn-success" style="color: white">Next
        </router-link>
        <button class="btn btn-warning" v-on:click="deleteEmployment(employment.id)">Delete</button>
      </div>

    </div>
  </div>
</template>

<script>
import EmploymentService from "@/services/EmploymentService";

export default {
  name: "employmentInfo",
  data() {
    return {
      employment: {},
      message: ""
    }
  },
  methods: {
    staffId() {
      return (`${this.employment.staffId}`).toUpperCase();
    },
    fcsc() {
      return (`${this.employment.fcscFileNumber}`).toUpperCase();
    },
    nhis() {
      return (`${this.employment.nhisNumber}`).toUpperCase();
    },
    nhf() {
      return (`${this.employment.nhfNumber}`).toUpperCase();
    },
    gazette() {
      return (`${this.employment.gazetteNumber}`).toUpperCase();
    },
    refreshEmployment() {
      EmploymentService.retrieveEmploymentByIppis(this.$store.state.auth.user.ippis).then((res) => {
        this.employment = res.data;
      });
    },
    deleteEmployment(id) {
      this.$dialog.confirm("If you delete this record, it'll be gone forever.", {
        loader: true
      }).then((dialog) => {
        EmploymentService.deleteEmployment(id).then(() => {
          this.employment = {}
        }).catch(err => {console.log(err)});
        setTimeout(() => {
          console.log('Delete action completed ');
          dialog.close();
        }, 2000);
      }).catch(() => {
            // Triggered when cancel button is clicked
            console.log('Delete aborted');
          });
      }
  },
  created() {
    this.refreshEmployment();
  }
}
</script>

<style scoped>
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding-left: 55px;
  padding-right: 30px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 550px;
  margin: auto;
  /*text-align: center;*/
}

.title {
  font-size: 16px;
  margin: auto;
  padding-right: 10px;
}

.i {
  width: 300px;
}

a {
  text-decoration: none;
  font-size: 16px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}

.align {
  margin: auto;
}

.perpendicular-line {
  width: 100%;
  margin: 5% auto 0;
  transform: rotate(180deg);
  border-color: black;
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