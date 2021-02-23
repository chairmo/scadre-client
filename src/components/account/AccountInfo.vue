<template>
  <div class="main">
    <div class="card">
      <div v-if="account.id">
        <br>
        <div class="title row"><h6 class="align">Account Information</h6></div>
        <hr class="perpendicular-line"/>
        <div class="title row"><h6 class="title">Pension Admin </h6><a class="i">{{ account.pension.name }}</a></div>
        <div class="title row"><h6 class="title">Pencom Number </h6><a class="i">{{ pensionNum() }}</a></div>
        <div class="title row"><h6 class="title">Bank </h6><a class="i">{{ account.bank.name }}</a></div>
        <div class="title row"><h6 class="title">Sort Code </h6><a class="i">{{ account.sortCode }}</a></div>
        <div class="title row"><h6 class="title">Account Number </h6><a class="i">{{ account.bankNumber }}</a>
        </div>

      </div>
      <a v-if="!account.id" style="text-align: center;">
        <router-link :to="{name:'addAccount'}" class="btn btn-success" style="color: white">
          Add Account Info</router-link>
      </a>
      <div class="btn btn-group " v-if="account.id">
        <router-link :to="{name:'editAccount', params:{id:account.id}}"
                     class="btn btn-success" style="color: white">Update</router-link>
        <router-link :to="{name:'educationInfo'}" class="btn btn-success" style="color: white">Next
        </router-link>
        <button class="btn btn-warning" v-on:click="deleteAccount(account.id)">Delete</button>
      </div>

    </div>
  </div>
</template>

<script>
import AccountService from "@/services/AccountService";

export default {
  name: "accountInfo",
  data() {
    return {
      account: {}
    }
  },
  methods: {
    pensionNum() {
      return (`${this.account.pensionNumber}`).toUpperCase();
    },
    refreshAccount() {
      AccountService.retrieveAccountByIppis(this.$store.state.auth.user.ippis).then((res) => {
        this.account = res.data;
        console.log("IPPIS VALUE: ", this.$store.state.auth.user.ippis)
      });
    },
    deleteAccount(id) {
      this.$dialog.confirm("If you delete this record, it'll be gone forever.", {
        loader: true
      })
          .then((dialog) => {
        AccountService.deleteAccountById(id).then(() => {
          this.account = {}
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
    this.refreshAccount();
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

p {
  text-decoration: none;
  font-size: 16px;
  color: white;
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