<template>
  <div class="main">
    <h5>Add Account Info</h5>
    <div class="align-content-center">
      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.stop.prevent="handleSubmit(addAccount)">
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
            <validation-provider name="Account Number" :rules="{required: true, digits: 10}" v-slot="validationContext">
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

        <button class="btn btn-success" type="submit">Save</button>
      </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import AccountService from "@/services/AccountService";

export default {
  name: "addAccount",
  data() {
    return {
      account: {
        bankNumber: "",
        sortCode: "",
        pensionNumber: "",
        pension: "",
        bank: "",
        ippis: ""
      },
      banks: [],
      pensions: []
    }
  },
  created() {
    this.getBank();
    this.getPension();
  },
  methods: {
    getValidateState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },
    addAccount(){
      let data = {
        bankNumber: this.account.bankNumber,
        sortCode: this.account.sortCode,
        pensionNumber: this.account.pensionNumber,
        pension: this.account.pension,
        bank: this.account.bank,
        ippis: this.$store.state.ippis
      };
      AccountService.createAccount(data).then(() => {
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