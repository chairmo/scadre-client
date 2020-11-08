<template>
  <div class="main" >
    <div class="card" id="printMe" >

      <div v-if="staff.id">
        <button v-print="'#printMe'">print</button>
        <p> {{ currentDateTime() | moment("dddd, MMMM Do YYYY, h:mm:ss a")  }}</p>

        <br>
        <div v-if="photo">
          <b-img height="100" center width="100" :src="fetchPhoto" rounded="circle"
                 alt="circle image"></b-img>
        </div>
        <hr class="perpendicular-line"/>
        <div class="title row"><h6 class="align">Personal Data</h6></div>
        <br/>
        <div class="title row"><h6 class="title">Title </h6><a class="i">{{ staff.title }}</a></div>
        <div class="title row"><h6 class="title">Full Name </h6><a class="i">{{ fullName('') }}</a></div>
        <div class="title row"><h6 class="title">Phone </h6><a class="i">{{ staff.phoneNumber }}</a></div>
        <div class="title row"><h6 class="title">Email </h6><a class="i">{{ staff.email }}</a></div>
        <div class="title row"><h6 class="title">NIN </h6><a class="i">{{ staff.nin }}</a></div>
        <div class="title row"><h6 class="title">DOB </h6><a class="i">{{ staff.dob | moment("DD/MM/YYYY") }}</a></div>
        <div class="title row"><h6 class="title">Age </h6><a class="i">{{ staff.age }}</a></div>
        <div class="title row"><h6 class="title">Place of Origin</h6><a class="i">{{ placeOfOrigin('') }}</a></div>
        <div class="title row"><h6 class="title">Address </h6><a class="i">{{ staff.address }}</a></div>
        <div class="title row"><h6 class="title">Gender </h6><a class="i">{{ staff.gender }}</a></div>
        <div class="title row"><h6 class="title">Married </h6><a class="i">{{ staff.married }}</a></div>
      </div>
      <hr class="perpendicular-line"/>

      <div v-if="employment.id">
        <div class="title row"><h6 class="align">Employment Record</h6></div>
        <br/>
<!--                  <hr class="perpendicular-line"/>-->
        <div class="title row"><h6 class="title">MDA </h6><a class="i">{{ employment.mda.name }}</a></div>
        <div class="title row"><h6 class="title">Department </h6><a class="i">{{ employment.department.name }}</a>
        </div>
        <div class="title row"><h6 class="title">File Number </h6><a class="i">{{ staffId() }}</a></div>
        <div class="title row"><h6 class="title">First Appointment </h6>
          <a class="i">{{ employment.dAppoint | moment("DD/MM/YYYY") }}</a>
        </div>
        <div class="title row"><h6 class="title">Assumption of Duty </h6>
          <a class="i">{{ employment.dAssumption | moment("DD/MM/YYYY") }}</a>
        </div>
        <div class="title row"><h6 class="title">Confirmation Date </h6>
          <a class="i">{{ employment.dConfirm | moment("DD/MM/YYYY") }}</a>
        </div>
        <div class="title row"><h6 class="title">Appointment Type</h6><a class="i">{{ employment.appointType }}</a>
        </div>
        <div class="title row"><h6 class="title">FCSC File Number </h6><a class="i">{{ fcsc() }}</a></div>
        <div class="title row"><h6 class="title">Gazette Number </h6><a class="i">{{ gazette() }}</a></div>
        <div class="title row"><h6 class="title">Salary Structure </h6><a class="i">{{
            employment.salaryStructure
          }}</a>
        </div>
        <div class="title row"><h6 class="title">Labour Union </h6><a class="i">{{ employment.laborUnion }}</a></div>
        <div class="title row"><h6 class="title">NHF Number </h6><a class="i">{{ nhf() }}</a></div>
        <div class="title row"><h6 class="title">NHIS Number </h6><a class="i">{{ nhis() }}</a></div>
      </div>
      <hr class="perpendicular-line"/>
      <div v-if="kin.id">
        <div class="title row"><h6 class="align">Next of Kin</h6></div>
        <br/>
<!--                  <hr class="perpendicular-line"/>-->
        <div class="title row"><h6 class="title">Title </h6><a class="i">{{ kin.title }}</a></div>
        <div class="title row"><h6 class="title">Full Name </h6><a class="i">{{ kinFullName('') }}</a></div>
        <div class="title row"><h6 class="title">Relationship </h6><a class="i">{{ kin.relationship }}</a></div>
        <div class="title row"><h6 class="title">Phone </h6><a class="i">{{ kin.phoneNumber }}</a></div>
        <div class="title row"><h6 class="title">Email </h6><a class="i">{{ kin.email }}</a></div>
        <div class="title row"><h6 class="title">NIN </h6><a class="i">{{ kin.nin }}</a></div>
        <div class="title row"><h6 class="title">Place of Origin</h6><a class="i">{{ kinPlaceOfOrigin('') }}</a></div>
        <div class="title row"><h6 class="title">Address </h6><a class="i">{{ kin.address }}</a></div>
      </div>
      <hr class="perpendicular-line"/>
      <div class="align-content-center" v-if="educations.length">
        <br>
        <div class="title row"><h6 class="align">Educational qualification</h6></div>
        <table class="table table-responsive">
          <thead>
          <tr>
            <th>Id</th>
            <th>qualification</th>
            <th>course</th>
            <th>school</th>
            <th>grade obtained</th>
            <th>start date</th>
            <th>finish date</th>

          </tr>
          </thead>
          <tbody>
          <tr v-for="(education, index) in educations" v-bind:key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ education.qualification.name }}</td>
            <td>{{ education.course.name }}</td>
            <td>{{ education.school.toUpperCase() }}</td>
            <td>{{ education.grade }}</td>
            <td>{{ education.startDate | moment("DD/MM/YYYY") }}</td>
            <td>{{ education.finishDate | moment("DD/MM/YYYY") }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <hr class="perpendicular-line"/>
      <div class="align-content-center" v-if="histories.length">
        <br>
        <div class="title row"><h6 class="align">Service History</h6></div>
        <table class="table table-responsive">
          <thead>
          <tr>
            <th>Id</th>
            <th>Mda</th>
            <th>Department</th>
            <th>Rank</th>
            <th>Location</th>
            <th>Assumption Date</th>
            <th>Exit Date</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(history, index) in histories" v-bind:key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ history.mda.name }}</td>
            <td>{{ history.department.name }}</td>
            <td>{{ history.designation.name }}</td>
            <td>{{ history.location.name }}</td>
            <td>{{ history.dAssumption | moment("DD/MM/YYYY") }}</td>
            <td>{{ history.exitDate | moment("DD/MM/YYYY") }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import NextOfKinService from "@/services/NextOfKinService";
import StaffService from "@/services/StaffService";
import EmploymentService from "@/services/EmploymentService";
import EducationService from "@/services/EducationService";
import HistoryService from "@/services/HistoryService";
import DocumentService from "@/services/DocumentService";
import print from 'vue-print-nb';

export default {
  name: "summaryReport",
  directives:{
    print
  },
  data() {
    return {
      staff: {},
      employment: {},
      kin: {},
      educations: [],
      histories: [],
      photo: ''
    }
  },
  created() {
    this.refreshStaff();
    this.refreshEmployment();
    this.refreshKin();
    this.refreshEducation();
    this.refreshHistory();
    this.findPhoto();
  },
  computed: {
    fetchPhoto() {
      return 'data:image/jpeg;base64,' + this.photo;
    }
  },
  methods: {
    findPhoto() {
      DocumentService.retrieveDocumentByIppisAndName(this.$store.state.ippis,
          'Passport.jpg').then(res => {
        this.photo = res.data.data
      })
    },
    currentDateTime() {
      const current = new Date();
      const date = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
      const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
      const dateTime = date + ' ' + time;

      return dateTime;
    },
    refreshKin() {
      NextOfKinService.retrieveKinByIppis(this.$store.state.ippis).then((res) => {
        this.kin = res.data;
      })
    },
    kinFullName(salut) {
      return (`${salut} ${this.kin.firstName}
       ${this.kin.lastName} ${this.kin.middleName}`).toUpperCase();
    },
    kinPlaceOfOrigin(say) {
      return `${say} ${this.kin.lga.name} ${this.kin.lga.state.name}`
    },
    refreshStaff() {
      StaffService.retrieveStaffByIppis(this.$store.state.ippis).then((res) => {
        this.staff = res.data;
      })
    },
    fullName(salut) {
      return (`${salut} ${this.staff.firstName}
       ${this.staff.lastName} ${this.staff.middleName}`).toUpperCase();
    },
    placeOfOrigin(say) {
      return `${say} ${this.staff.lga.name} ${this.staff.lga.state.name}`
    },
    refreshEmployment() {
      EmploymentService.retrieveEmploymentByIppis(this.$store.state.ippis).then((res) => {
        this.employment = res.data;
      })
    },
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
    refreshEducation() {
      EducationService.getAllByIppis(this.$store.state.ippis).then(res => {
        this.educations = res.data;
      });
    },
    refreshHistory() {
      HistoryService.retrieveHistoryByIppis(this.$store.state.ippis).then(res => {
        this.histories = res.data;
      });
    },
    // print: function () {
    //   window.print();
    // }
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
  max-width: 780px;
  margin: auto;
  /*text-align: center;*/
}

.title {
  font-size: 16px;
  margin: auto;
  padding-right: 10px;
}

.i {
  width: 350px;
}

a {
  text-decoration: none;
  font-size: 16px;
  color: black;
}

.perpendicular-line {
  width: 100%;
  margin: 5% auto 0;
  transform: rotate(180deg);
  border-color: black;
}

.align {
  margin: auto;
}

button {
  float: right;
  margin: 5px;
}

p {
  text-decoration: none;
  font-size: 16px;
  color: black;
  margin: 5px;
  font-family: Garamond;
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