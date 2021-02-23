<template>
  <div class="col-md-12">
    <div class="card card-container">
      <span>{{ message }}</span>
      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.stop.prevent="handleSubmit(savePassword)">
          <div class="row form-group">
            <div class="col">
              <validation-provider name="password" :rules="{required: true, min: 6, max: 25}"
                                   v-slot="validationContext">
                <label>New Password</label>
                <input name="password" type="password" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="password" placeholder="Enter your password" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col">
              <validation-provider name="new password" :rules="{required: true, confirmed: 'password'}"
                                   v-slot="validationContext">
                <label>Confirm Password</label>
                <input name="new password" type="password" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="confirmPassword" placeholder="Confirm your password" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block" type="submit">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>Save</span>
            </button>
          </div>
          <router-link :to="{name:'login'}" class="btn btn-block">Back to login
          </router-link>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>

export default {
  name: 'passwordChange',
  data() {
    return {
      email: '',
      password: '',
      token: '',
      confirmPassword: '',
      loading: false,
      message: ''
    };
  },

  created() {
    const { token, email } = this.$router.currentRoute.query;

    this.email = email
    this.token = token

    if (token) {
      // remove email and token from url to prevent http referral leakage
      this.$router.replace(this.$router.currentRoute.path);
    }
     else {
      this.$router.push({name: 'login'})
    }
  },
  methods: {
    getValidateState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },
    savePassword() {
      let data = {
        email: this.email,
        password: this.password,
        token: this.token
      }
      console.log("data: ", data)
      this.loading = true;
      this.$store.dispatch('auth/resetPassword', data).then(
          user => {
            this.message = user.message;
            this.loading = false

            // this.$router.push({name: 'login'});
          }).catch(error => {
        this.loading = false
        this.message = error.response.data

        console.log("change password: ", this.message)
      });
    }
  }
};
</script>

<style scoped>
span {
  margin: auto;
}

.btn-primary {
  background: #007d53;
}

label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

</style>
