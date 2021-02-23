<template>
  <div class="main">
    <div class="card">
      <!--      <div v-if="message" class="alert alert-success">{{ message }}</div>-->
      <div v-if="kin.id">
        <br>
        <div class="title row"><h6 class="align">Next of Kin</h6></div>
        <hr class="perpendicular-line"/>
        <div class="title row" ><h6 class="title">Title </h6><a class="i">{{ kin.title }}</a> </div>
        <div class="title row" ><h6 class="title">Full Name </h6><a class="i">{{ fullName('') }}</a> </div>
        <div class="title row" ><h6 class="title">Relationship </h6><a class="i">{{ kin.relationship }}</a> </div>
        <div class="title row" ><h6 class="title">Phone  </h6><a class="i">{{ kin.phoneNumber }}</a> </div>
        <div class="title row" ><h6 class="title">Email  </h6><a class="i">{{ kin.email }}</a> </div>
        <div class="title row" ><h6 class="title">NIN  </h6><a class="i">{{ kin.nin }}</a> </div>
        <div class="title row" ><h6 class="title">Place of Origin</h6><a class="i">{{  placeOfOrigin('') }}</a> </div>
        <div class="title row" ><h6 class="title">Address </h6><a class="i">{{ kin.address }}</a> </div>

      </div>
      <a v-if="!kin.id" style="text-align: center">
        <router-link :to="{name:'addNextOfKin'}" class="btn btn-success" style="color: white">Add Next of Kin</router-link>
      </a>
      <div class="btn btn-group" v-if="kin.id">
        <router-link :to="{name:'editNextOfKin', params:{id:kin.id}}" class="btn btn-success" style="color: white">Update
        </router-link>
        <router-link :to="{name:'document'}" class="btn btn-success" style="color: white">Next
        </router-link>
        <button class="btn btn-warning" v-on:click="deleteStaff(kin.id)">Delete</button>
      </div>

    </div>
  </div>
</template>

<script>
import NextOfKinService from "@/services/NextOfKinService";

export default {
  name: "nextOfKinInfo",
  data() {
    return {
      kin: {},
      message: ""
    }
  },
  methods: {
    refreshKin() {
      NextOfKinService.retrieveKinByIppis(this.$store.state.auth.user.ippis).then((res) => {
        this.kin = res.data;
      })
    },
    fullName(salut) {
      return (`${salut} ${this.kin.firstName}
       ${this.kin.lastName} ${this.kin.middleName}`).toUpperCase();
    },
    placeOfOrigin(say) {
      return `${say} ${this.kin.lga.name} ${this.kin.lga.state.name}`
    },
    deleteStaff (id) {
      this.$dialog.confirm("If you delete this record, it'll be gone forever.", {
        loader: true
      })
          .then((dialog) => {
        NextOfKinService.deleteKinById(id).then(() => {
          this.kin = {}
        }).catch(err => {console.log(err)});
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
  created() {
    this.refreshKin();
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