<template>
  <div>
    <div class="col-md-12">
      <div class="card card-container">
        <i class="profile-img-card fa fa-check-circle" style="font-size: 45px; color: #007d53"></i>
        <p class="card-text">{{message}}</p>
        <div>
          <span><router-link :to="{name:'login'}" class="btn btn-block">back login
          </router-link></span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterSuccess",
  data() {
    return {
      message: "Your registration is successful, please check your email and activate your account"
    }
  }
}
</script>

<style scoped>
.card-container.card {
  max-width: 350px !important;
  padding: 30px 30px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 10px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 50px;
  height: 50px;
  margin: 0 auto 4px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

span{
  float: right;
}
</style>