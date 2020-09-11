<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light" style="padding-top: 5px; background:#007d53;">
      <div class="collapse navbar-collapse" style="margin: 5px 0 5px 5px">
        <a><img src="./assets/logo.png" alt="50%" height="90" width="90"></a>
        <span class="navbar-centre">MINISTRY OF COMMUNICATIONS AND DIGITAL ECONOMY</span>

      </div>

      <div>
        <ul v-if="!authenticated" class="navbar-nav">
          <router-link to="/login" style="color: #f1f1f1">Login</router-link>
        </ul>
        <ul class="navbar-nav" v-if="authenticated">
          <li><a> {{ this.firstName }}</a></li>
          <br>
          <li>
            <i href @click.prevent="handleLogout">
              <font-awesome-icon icon="sign-out-alt"/><a>logout</a></i>
          </li>
        </ul>
      </div>

    </nav>

    <nav class="sidebar" v-if="authenticated">
      <!-- <router-view :authenticated="authenticated"/>-->
      <div>
        <router-link to="/" class="nav-item nav-link"><i class="fa fa-fw fa-home"></i>Home</router-link>
        <router-link to="/staff" class="nav-item nav-link"><i class="fa fa-fw fa-user-o"></i>Personnel Data
        </router-link>
        <router-link to="/employment" class="nav-item nav-link"><i class="fa fa-fw fa-id-badge"></i>Employment Data
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
        <router-link to="/kin" class="nav-item nav-link"><i class="fa fa-fw fa-user-plus"></i>Next of Kin</router-link>
        <router-link to="/document" class="nav-item nav-link"><i class="fa fa-fw fa-file-o"></i>Documents</router-link>
      </div>
    </nav>
    <br/>
    <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: 'app',
  data: () => {
    return {
      authenticated: null,
      firstName: ''
    }
  },

  created() {
    this.isAuthenticated()
  },

  watch: {
    '$route': 'isAuthenticated'
  },

  methods: {
    async isAuthenticated() {
      this.authenticated = await this.$auth.isAuthenticated();
      await this.$auth.getUser().then(user => {
        this.firstName = user.firstName;
      })
      console.log('activeUser ', this.authenticated)

    },
    async handleLogout() {
      await this.$auth.logout()
      await this.isAuthenticated()
      this.$router.push({path: '/'})
    }
  }
};

</script>

<style>
/* The side navigation menu */
.sidebar {
  margin: 0;
  padding: 0;
  width: 180px;
  background-color: #f1f1f1;
  position: fixed;
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

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  /*background-color: #555;*/
  color: white;
  background-color: #007d53
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
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
}

.navbar-centre {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  font-family: Helvetica Neue, Arial, sans-serif, Garamond;
  font-size: 24px;
  color: #fff;
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
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
  margin: 5px;
}

</style>
