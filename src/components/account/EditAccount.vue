<template>
  <div class="main">
    <h5>Update Account Info</h5>
    <div class="align-content-center">
      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.stop.prevent="handleSubmit(updateAccount)">
          <div class="row form-group">
            <div class="col-xl-5">
              <validation-provider name="Pension Administrator" :rules="{required: true}" v-slot="validationContext">
                <label>Pension Administrator</label>
                <select v-model="account.pension" id="penId" class="form-control">
                  <option v-for="pen in pensions" v-bind:value="pen.id" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="pen.name">{{ pen.name }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-5">
              <validation-provider name="Pencom Number" :rules="{required: true}" v-slot="validationContext">
                <label>Pencom Number</label>
                <input name="Pencom Number" type="text" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="account.pensionNumber" placeholder="Enter Pencom PIN" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-5">
              <validation-provider name="Bank" :rules="{required: true}" v-slot="validationContext">
                <label>Bank</label>
                <select v-model="account.bank" id="banId" class="form-control">
                  <option v-for="bank in banks" v-bind:value="bank.id" :state="getValidateState(validationContext)"
                          aria-describedby="input-1-live-feedback"
                          v-bind:key="bank.name">{{ bank.name }}
                  </option>
                </select>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>

            <div class="col-xl-5">
              <validation-provider name="Account Number" :rules="{required: true, digits: 10}"
                                   v-slot="validationContext">
                <label>Pencom Number</label>
                <input name="Account Number" type="number" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="account.bankNumber" placeholder="Enter account number" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col-xl-5">
              <validation-provider name="Sort Code" :rules="{required: true}" v-slot="validationContext">
                <label>Bank Sort Code</label>
                <input name="Sort Code" type="number" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="account.sortCode" placeholder="Enter sort code" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <button class="btn btn-success" type="submit">Update</button>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import AccountService from "@/services/AccountService";

export default {
  name: "editAccount",
  data() {
    return {
      account: {
        bankNumber: "",
        sortCode: "",
        pensionNumber: "",
        pension: "",
        bank: ""
      },
      banks: [],
      pensions: []
    }
  },
  created() {
    this.fetchAccount();
    this.getBank();
    this.getPension();
  },
  methods: {
    getValidateState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },
    fetchAccount() {
      AccountService.retrieveAccountById(this.$route.params.id).then((res => {
        this.account = res.data;
      }));
    },
    updateAccount() {
      AccountService.updateAccount(this.$route.params.id, this.account).then(() => {
        this.$router.push({name: 'accountInfo'})
            .catch(error => console.log(error));
      });
    },
    getPension: function () {
      AccountService.getPensions().then((res) => {
        this.pensions = res.data;
      });
    },
    getBank: function () {
      AccountService.getBanks().then((res) => {
        this.banks = res.data;
      });
    }
  }
}
</script>

<style scoped>
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding-left: 55px;
  padding-right: 30px;
}
</style>