<template>
  <div class="col-md-12">
    <div class="card card-container">
      <span>{{ message }}</span>

          <router-link :to="{name:'login'}" class="btn btn-block">Click to login
          </router-link>
    </div>
  </div>
</template>

<script>
// import {mapState, mapActions } from 'vuex'

export default {
  name: 'verify',
  data () {
    return {
      message: '',
      status: 'loading.....'
    }
  },
 created() {
   const { token } = this.$router.currentRoute.query;
   console.log("token: ", token)
   if (token) {
     // remove email and token from url to prevent http referral leakage
     this.$router.replace(this.$router.currentRoute.path);
     // this.verifyEmail(token);
     this.$store.dispatch('auth/verifyEmail', token).then(res => {
       this.message = res
       console.log("response: ", res)
     }).catch(error => {
       this.message = error.response.data.exMessage
       console.log("verify email error: ", error.response.exMessage)
     })
   }
    else {
     this.$router.push({name: 'login'})
   }
 },
 }
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
