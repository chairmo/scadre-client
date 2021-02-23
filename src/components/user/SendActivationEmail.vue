<template>
  <div class="col-md-12">
    <div class="card card-container">
      <span>{{message}}</span>
      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.stop.prevent="handleSubmit(sendLink)">
          <div class="row form-group">
            <div class="col">
              <validation-provider name="email" :rules="{required: true, email: true, max: 45}"
                                   v-slot="validationContext">
                <label>Email</label>
                <input name="email" type="email" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="email" placeholder="Enter your email" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block" type="submit" >
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>Send Activation link</span>
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
  name: 'activationEmail',
  data() {
    return {
      email: '',
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('home');
    }
  },
  methods: {
    getValidateState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },
    sendLink() {
      let data = { email: this.email}
      this.loading = true;
      this.$store.dispatch('auth/activationEmail', data).then(
          (user) => {
            this.message = user.message;
            this.loading = false;
            // this.$router.push({name: 'login'});
          },
          (error) => {
            this.loading = false;
            this.message = error.response.data.exMessage;
            console.log("mega: " + error.response.data.exMessage)
          }
      );
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
