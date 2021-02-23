<template>
  <div class="col-md-12">
    <div class="card card-container">
      <span>{{message}}</span>
      <img
          id="profile-img"
          src="../../assets/logo.png"
          class="profile-img-card"
          alt="image"/>
      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.stop.prevent="handleSubmit(loginUser)">
          <div class="row form-group">
            <div class="col">
              <validation-provider name="email" :rules="{required: true, email: true, max: 45}"
                                   v-slot="validationContext">
                <label>Email</label>
                <input name="email" type="email" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="user.email" placeholder="Enter your email" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="row form-group">
            <div class="col">
              <validation-provider name="password" :rules="{required: true, min:6, max: 30}"
                                   v-slot="validationContext">
                <label>Password</label>
                <input name="password" type="password" :state="getValidateState(validationContext)"
                       aria-describedby="input-1-live-feedback"
                       v-model="user.password" placeholder="Enter your password" class="form-control"/>
                {{ validationContext.errors[0] }}
              </validation-provider>
            </div>
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block" type="submit" >
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>Login</span>
            </button>
          </div>
          <router-link :to="{name:'landingPage'}" class="btn btn-block">Cancel
          </router-link>
          <router-link :to="{name:'forgotPassword'}" class="text-center">Forgot Password?
          </router-link>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import User from '../../model/userLogin';

export default {
  name: 'login',
  data() {
    return {
      user: new User('', ''),
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
      this.$router.push('page');
    }
  },
  methods: {
    getValidateState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },
    loginUser() {
      this.message = '';
      this.loading = true;
      this.$store.dispatch('auth/login', this.user).then(
          () => {
            this.$router.push({name: 'home'});
          },
          error => {
            this.loading = false;
            if(error.response.status === 400) {
              this.message = "Email or Password Incorrect"
            } else{
               this.message = error.response.data.message
            }
            // this.message = error.response.data.message
            console.log("ERROR: ", error.response.status)
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

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>
