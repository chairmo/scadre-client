<template>
  <div>
    <div class="col-md-12">
      <div class="card card-container">
        <p>{{ message }}</p>
<!--        <img-->
<!--            id="profile-img"-->
<!--            src="../../assets/logo.png"-->
<!--            class="profile-img-card"-->
<!--            alt="image"/>-->
        <validation-observer v-slot="{ handleSubmit }">
          <form @submit.stop.prevent="handleSubmit(registerUser)">
            <div v-if="!successful">
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
                  <validation-provider name="First Name" :rules="{required: true, alpha: true, min: 3}"
                                       v-slot="validationContext">
                    <label>First Name</label>
                    <input name="FirstName" type="text" :state="getValidateState(validationContext)"
                           aria-describedby="input-1-live-feedback"
                           v-model="user.firstName" placeholder="Enter first name" class="form-control"/>
                    {{ validationContext.errors[0] }}
                  </validation-provider>
                </div>
              </div>

              <div class="row form-group">
                <div class="col">
                  <validation-provider name="Last Name" :rules="{required: true, alpha: true, min: 3}"
                                       v-slot="validationContext">
                    <label>Last Name</label>
                    <input name="FirstName" type="text" :state="getValidateState(validationContext)"
                           aria-describedby="input-1-live-feedback"
                           v-model="user.lastName" placeholder="Enter last name" class="form-control"/>
                    {{ validationContext.errors[0] }}
                  </validation-provider>
                </div>
              </div>

              <div class="row form-group">
                <div class="col">
                  <validation-provider name="ippis number" :rules="{required: true, min:4, max: 7}"
                                       v-slot="validationContext">
                    <label>Ippis</label>
                    <input name="ippis" type="number" :state="getValidateState(validationContext)"
                           aria-describedby="input-1-live-feedback"
                           v-model="user.ippis" placeholder="Enter your ippis number" class="form-control"/>
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
                  <span>Sign Up</span>
                </button>
              </div>
              <router-link :to="{name:'landingPage'}" class="btn btn-block">Cancel
              </router-link>
              <router-link :to="{name:'activation'}" class="text-center"> didn't receive activation link?
              </router-link>
            </div>
          </form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../../model/user';

export default {
  name: 'register',
  data() {
    return {
      user: new User('', '', '', '', ''),
      submitted: false,
      successful: false,
      message: '',
      loading: false
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push({name: 'home'});
    }
  },
  methods: {
    getValidateState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },
    registerUser() {
      this.submitted = true;
      this.loading = true;
      this.$store.dispatch('auth/register', this.user).then(
          data => {
            this.message = data.message;
            this.successful = true;
            this.$router.push({name: 'success'})
          },
          error => {
            this.loading = false;
            this.message = error.response.data.exMessage;
            this.successful = false;
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
  margin-top: 2px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 20px 20px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 20px;
  margin-top: 15px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 90px;
  height: 90px;
  margin: 0 auto 3px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

</style>
