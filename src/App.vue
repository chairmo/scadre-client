<template>
  <div id="app">
    <div id="nav">
      <div v-if="!currentUser">

      </div>
      <div v-if="currentUser" >

        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark text-center scrolling-navbar"
             style="padding-top: 5px; margin-bottom: 15px; background:#007d53;">

<!--        <nav class="col-md-12 mb-4 white-text text-center navbar navbar-expand-md navbar-light small-size"-->
<!--             style="padding-top: 5px; background:#007d53;">-->
          <div class="collapse navbar-collapse" >
            <a><img src="./assets/logo.png" alt="50%" height="85" width="85"></a>
            <span class="display-7 font-weight-bold white-text mb-2 pt-md-3 pt-3 navbar-centre">
             FEDERAL MINISTRY OF COMMUNICATIONS AND DIGITAL ECONOMY</span>
          </div>
          <ul class="navbar-nav">
            <li><a>Welcome, {{ currentUser.firstName }}</a></li>
            <br>
            <li>
              <i href @click.stop.prevent="logOut">
                <font-awesome-icon icon="sign-out-alt"/>
                <a>logout</a></i>
            </li>
          </ul>
        </nav>
<!--        </nav>-->

        <nav class="sidebar">
          <div >
            <router-link to="/home" class="nav-item nav-link"><i class="fa fa-fw fa-home"></i>Home</router-link>
            <router-link to="/staff" class="nav-item nav-link"><i class="fa fa-fw fa-user-o"></i>Personnel Data
            </router-link>
            <router-link to="/employment" class="nav-item nav-link"><i class="fa fa-fw fa-id-badge"></i>Employment
              Data
            </router-link>
            <router-link to="/history" class="nav-item nav-link"><i class="fa fa-fw fa-history"></i>Service History
            </router-link>
            <router-link to="/promotion" class="nav-item nav-link"><i class="fa fa-fw fa-level-up"></i>Promotions
            </router-link>
            <router-link to="/account" class="nav-item nav-link"><i class="fa fa-fw fa-money"></i>Accounts Info
            </router-link>
            <router-link to="/education" class="nav-item nav-link"><i class="fa fa-fw fa-university"></i>Education
            </router-link>
            <router-link to="/certification" class="nav-item nav-link"><i class="fa fa-fw fa-certificate"></i>Certifications
            </router-link>
            <router-link to="/skills" class="nav-item nav-link"><i class="fa fa-fw fa-stack-overflow"></i>Skills
            </router-link>
            <router-link to="/membership" class="nav-item nav-link"><i class="fa fa-fw fa-registered"></i>Membership
            </router-link>
            <router-link to="/kin" class="nav-item nav-link"><i class="fa fa-fw fa-user-plus"></i>Next of Kin
            </router-link>
            <router-link to="/document" class="nav-item nav-link"><i class="fa fa-fw fa-file-o"></i>Documents
            </router-link>
          </div>
        </nav>

      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>


export default {
  name: 'app',

  created() {
    window.onunload = () => {
      window.localStorage.clear();
    }
  },

  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  // mounted() {
  //   if (!this.currentUser) {
  //     this.$router.push('/');
  //   }
  // },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    }
  }
};

</script>

<style scoped>

/* The side navigation menu */
.sidebar {
  margin: 0;
  padding: 0;
  width: 180px;
  background-color: #f1f1f1;
  position: absolute;
  height: 100%;
  overflow: hidden;
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: black;
  padding: 8px;
  text-decoration: none;
}

.navbar-centre {
  margin: 5px 0 5px 5px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  font-family: Helvetica Neue, Arial, sans-serif, Garamond;
  font-size: 22px;
  color: #fff;
}

/* Active/current link */
.sidebar a.active {
  background-color: #4CAF50;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #007d53;
  color: white;
}

/* On screens that are less than 700px wide, make the sidebar into a top bar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }

  .sidebar a {
    float: left;
  }

  div.content {
    margin-left: 0;
  }

  .small-size {
    width: 100em;
    height: auto;
    position: relative;
  }
}


/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
 .navbar-collapse{
   text-align: center;
   width: auto;
 }

  .sidebar a {
    text-align: center;
    float: none;
  }

  .small-size {
    width: 100em;
    height: auto;
    position: relative;
  }

  .navbar-centre {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    font-family: Helvetica Neue, Arial, sans-serif, Garamond;
    font-size: 16px;
    color: #fff;
  }
  img{
    width: 60px;
    height: 60px;
  }
}

ul {
  float: right;
  cursor: pointer;
  padding-right: 20px;
  font-family: Helvetica Neue, Arial, sans-serif, Garamond;
  /*font-size: 18px;*/
  color: #fff;
}

li {
  color: #fff;
  font-family: Helvetica Neue, Arial, sans-serif, Garamon, bold;
  font-size: 16px;
  margin-right: 25px;
}

p {
  font-family: Times New Roman;
  font-size: 20px;
  color: #333333;
}

.navbar:not(.top-nav-collapse) {
  background: #007d53 !important;
}


</style>
