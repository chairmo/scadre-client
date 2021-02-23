<template>
  <div class="main">
    <div class="card">
<!--      <i v-show="loading" class="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i>-->

      <div v-if="staff.id">
        <br>
        <div v-if="pic">
          <b-img height="95" center width="95"  :src="profilePhoto"  rounded="circle"
                 alt="circle image">
          </b-img>
        </div>

        <hr class="perpendicular-line"/>
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
      <a v-if="!staff.id" style="text-align: center">
        <router-link :to="{name:'addStaff'}" class="btn btn-success" style="color: white">Add Bio-data</router-link>
      </a>
      <div class="btn btn-group" v-if="staff.id">
        <router-link :to="{name:'editStaff', params:{id:staff.id}}" class="btn btn-success" style="color: white">Update
        </router-link>
        <router-link :to="{name:'employmentInfo'}" class="btn btn-success" style="color: white">Next
        </router-link>
        <button class="btn btn-warning" v-on:click="deleteStaff(staff.id)">Delete</button>
      </div>

    </div>
  </div>
</template>

<script>
import StaffService from "@/services/StaffService";
import DocumentService from "@/services/DocumentService";


export default {
  name: "staffInfo",
  data() {
    return {
      staff: {},
      pic: '',
      loading: false
    }
  },
  computed:{
    profilePhoto(){
      return 'data:image/jpeg;base64,' + this.pic;
    }
  },
    methods: {
      refreshStaff() {
        this.loading = true;
        StaffService.retrieveStaffByIppis(this.$store.state.auth.user.ippis).then((res) => {
          this.loading = false;

          this.staff = res.data;
          console.log("Staff info: ", this.staff)
        })
      },

      findPhoto(){
        DocumentService.retrieveDocumentByIppisAndName(this.$store.state.auth.user.ippis,
            'passport.jpg').then(res => {
          this.pic = res.data.data
          // console.log('pics data: ', this.pic)
        })
      },
      fullName(salut) {
        return (`${salut} ${this.staff.firstName}
       ${this.staff.lastName} ${this.staff.middleName}`).toUpperCase();
      },
      placeOfOrigin(say) {
        return `${say} ${this.staff.lga.name} ${this.staff.lga.state.name}`
      },
      deleteStaff(id) {
        this.$dialog.confirm("If you delete this record, it'll be gone forever.", {
          loader: true
        })
            .then((dialog) => {
        StaffService.deleteStaffById(id).then(() => {
          this.staff = {}
        }).catch(err => {
          console.log(err)
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
    created () {
      this.refreshStaff();
      this.findPhoto()
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
  width: 350px;
}

/*i{*/
/* margin: auto;*/
/*}*/
a {
  text-decoration: none;
  font-size: 16px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}

.perpendicular-line {
  width: 100%;
  margin: 5% auto 0;
  transform: rotate(180deg);
  border-color: black;
}

p {
  width: 100px;
  height: 100px;
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