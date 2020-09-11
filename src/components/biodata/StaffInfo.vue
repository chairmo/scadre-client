<template>
  <div class="main">
    <div class="card">
      <div v-if="staff.id">
        <b-img height="100" @click="upload" center width="100" src="http://localhost:8090/api/staff/document/passport" rounded="circle"
               alt="circle image"></b-img>
        <hr class="perpendicular-line"/>
        <div class="title row" ><h6 class="title">Title </h6><a class="i">{{ staff.title }}</a> </div>
        <div class="title row" ><h6 class="title">Full Name </h6><a class="i">{{ fullName('') }}</a> </div>
        <div class="title row" ><h6 class="title">Phone  </h6><a class="i">{{ staff.phoneNumber }}</a> </div>
        <div class="title row" ><h6 class="title">Email  </h6><a class="i">{{ staff.email }}</a> </div>
        <div class="title row" ><h6 class="title">NIN  </h6><a class="i">{{ staff.nin }}</a> </div>
        <div class="title row" ><h6 class="title">DOB  </h6><a class="i">{{  staff.dob }}</a> </div>
        <div class="title row" ><h6 class="title">Age  </h6><a class="i">{{ staff.age }}</a> </div>
        <div class="title row" ><h6 class="title">Place of Origin</h6><a class="i">{{  placeOfOrigin('') }}</a> </div>
        <div class="title row" ><h6 class="title">Address </h6><a class="i">{{ staff.address }}</a> </div>
        <div class="title row" ><h6 class="title">Gender </h6><a class="i">{{ staff.gender }}</a> </div>
        <div class="title row" ><h6 class="title">Married </h6><a class="i">{{ staff.married }}</a> </div>

      </div>
      <a v-if="!staff.id" style="text-align: center">
        <router-link :to="{name:'addStaff'}" class="btn btn-success">Add Biodata</router-link>
      </a>
      <div class="btn btn-group" v-if="staff.id">
        <router-link :to="{name:'editStaff', params:{id:staff.id}}" class="btn btn-success">Update
        </router-link>
        <router-link :to="{name:'employmentInfo'}" class="btn btn-success">Next
        </router-link>
        <button class="btn btn-warning" v-on:click="deleteStaff(staff.id)">Delete</button>
      </div>

    </div>
  </div>
</template>

<script>
import StaffService from "@/services/StaffService";

export default {
  name: "staffInfo",
  data() {
    return {
      staff: {},
    }
  },
  methods: {
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
    deleteStaff (id) {
      if (confirm("Are you sure you want to delete personal data ?")) {
        StaffService.deleteStaffById(id).then(() => {
          this.staff = {}
        }).catch(err => {console.log(err)});
      }
    }
  },
  created() {
    this.refreshStaff();
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
.i{
  width: 350px;
}

a {
  text-decoration: none;
  font-size: 16px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}

.vl {
  horiz-align: center;
  size: 2px;
  color: black;
  height: 500px;
}

.perpendicular-line {
  width: 100%;
  margin: 5% auto 0;
  transform: rotate(180deg);
  border-color: black;
}

.vertical-border {
  height: 60%;
  margin: 5% auto;
  transform: rotateY(90deg);
  border-color: black;
}
</style>