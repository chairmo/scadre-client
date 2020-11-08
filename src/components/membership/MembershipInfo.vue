<template>
  <div class="main">
    <h5> Professional Membership</h5>
    <div v-if="message" class="alert-success"/>
    <div class="align-content-center">
      <table class="table table-responsive">
        <thead>
        <tr>
          <th>Id</th>
          <th>Organization</th>
          <th>Registered As</th>
          <th>Registration Number</th>
          <th>Type</th>
          <th>Date of Induction</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="(membership, index) in memberships" v-bind:key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ membership.institution.toUpperCase() }}</td>
          <td>{{ membership.name.toUpperCase() }}</td>
          <td>{{ membership.regNum.toUpperCase() }}</td>
          <td>{{ membership.type.name }}</td>
          <td>{{ membership.dateOfInduction | moment("DD/MM/YYYY") }}</td>
          <td>
            <div class="btn btn-group">
              <router-link :to="{name:'editMembership', params:{id:membership.id}}" class="btn btn-success">Update
              </router-link>
              <button class="btn btn-warning" v-on:click="deleteMembership(membership.id)">Delete</button>
            </div>
          </td>

        </tr>
        </tbody>
      </table>
      <div>
        <router-link :to="{name:'addMembership'}" class="btn btn-success ">Add </router-link>
        <router-link :to="{name:'nextOfKinInfo'}"
                     class="i btn btn-success" v-if="memberships.length">Next
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MembershipService from "@/services/MembershipService";

export default {
  name: "membershipInfo",
  data() {
    return {
      memberships: [],
      message: ""
    };
  },
  methods: {
    refreshMembership() {
      MembershipService.retrieveMembershipByIppis(this.$store.state.ippis).then(res => {
        this.memberships = res.data;
      });
    },
    deleteMembership(id) {
      this.$dialog.confirm("If you delete this record, it'll be gone forever.", {
        loader: true
      })
          .then((dialog) => {
            MembershipService.deleteMembershipById(id).then(() => {
              this.memberships = this.memberships.filter(member => member.id !== id);
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
  created() {
    this.refreshMembership();
  }
}
</script>

<style scoped>
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding-left: 55px;
  padding-right: 30px;
}

.i {
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