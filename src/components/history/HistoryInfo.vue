<template>
  <div class="main">
    <h5> Service History</h5>
    <div v-if="message" class="alert-success"/>
    <div class="align-content-center">
      <table class="table">
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
          <td>{{ history.dAssumption }}</td>
          <td>{{ history.exitDate }}</td>
          <td>
            <div class="btn btn-group">
              <router-link :to="{name:'editHistory', params:{id:history.id}}" class="btn btn-success">Update
              </router-link>
              <button class="i btn btn-warning" v-on:click="deleteHistory(history.id)">Delete</button>
            </div>
          </td>

        </tr>
        </tbody>
      </table>
      <div>
        <router-link :to="{name:'addHistory'}" class="btn btn-success ">Add</router-link>
        <router-link :to="{name:'promotionInfo'}"
                     class="i btn btn-success" v-if="histories.length">Next
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HistoryService from "@/services/HistoryService";

export default {
  name: "historyInfo",
  data() {
    return {
      histories: [],
      message: ""
    };
  },
  methods: {
    refreshHistory() {
      HistoryService.retrieveHistoryByIppis(this.$store.state.ippis).then(res => {
        this.histories = res.data;
      });
    },
    deleteHistory(id) {
      this.$dialog.confirm("If you delete this record, it'll be gone forever.", {
        loader: true
      })
          .then((dialog) => {

            HistoryService.deleteHistoryById(id).then(() => {
              this.histories = this.histories.filter(history => history.id !== id);
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
    this.refreshHistory();
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
  margin-left: 150px;
}
</style>