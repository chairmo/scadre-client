<template>
  <div>
    <nav>
      <!--    <div v-if="!authenticated">-->
      <header v-if="!authenticated">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar"
             style="padding-top: 5px; background:#007d53;">
          <div class="container">
            <a class="navbar-brand" href="#"><a><img src="./assets/logo.png" alt="50%" height="50" width="50"></a></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <nav class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav mr-auto smooth-scroll">
                <li class="nav-item">
                  <a class="nav-link" href="#home">Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about" data-offset="90">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#projects" data-offset="90">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#gallery" data-offset="90">Gallery</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#articles" data-offset="90">Articles</a>
                </li>
                <li class="nav-item" style="margin-right: 540px">
                  <a class="nav-link" href="#contact" data-offset="90">Contact</a>
                </li>
                <li style="margin-right: 50px">
                  <a href="#" data-offset="90">
                    <router-link to="/login" class="nav-item nav-link">Login</router-link>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </nav>

      </header>

      <section v-if="!authenticated" id="home" class="py-4">
        <!--      <div class="mask rgba-gradient d-flex justify-content-center align-items-center">-->
        <!-- Content -->
        <div class="container px-md-5 px-sm-0 d-flex justify-content-center align-items-center">
          <!--Grid row-->
          <div class="row wow fadeIn">
            <!--Grid column-->
            <div class="col-md-12 mb-4 white-text text-center wow fadeIn">
              <h4 class="display-7 font-weight-bold white-text mb-0 pt-md-5 pt-5">FEDERAL MINISTRY OF
                COMMUNICATIONS AND DIGITAL ECONOMY</h4>
              <hr class="hr-light my-4 w-75">
              <h6 class="subtext-header mt-2 mb-4">Leveraging Digital
                Technology for National Economic Development</h6>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
          <!--        </div>-->
        </div>
        <!-- Container -->
        <div class="container">
          <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
          >
            <!-- Text slides with image -->
            <b-carousel-slide>
              <template v-slot:img>
                <img
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    src="./assets/slide1.jpg"
                    alt="image slot"
                >
              </template>
            </b-carousel-slide>

            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <template v-slot:img>
                <img
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    src="./assets/slide2.jpg"
                    alt="image slot"
                >
              </template>
            </b-carousel-slide>

          </b-carousel>
        </div>

      </section>

      <!--Section: about-->
      <section v-if="!authenticated" id="about" class="py-4">

        <!-- Container -->
        <div class="container">
          <!-- Section heading -->
          <h2 class="h1-responsive font-weight-bold text-center mb-5">Career Management</h2>
          <!-- Section description -->
          <p class="lead grey-text text-center w-responsive mx-auto mb-5">The service this
            portal provides is to act as a database repository for the Information Communication
            Technology cadre of the Nigeria Civil Service. This includes supporting the efforts of the Nigerian
            Government to enhance the competitiveness of public employment and record management
            to improve professionalism in the public service.</p>

          <!-- Grid row -->
          <div class="row">

            <!-- Grid column -->
            <div class="col-lg-4 text-center text-lg-left">
              <img class="img-fluid" src="./assets/exams.jpg"
                   alt="Sample image" height="200" width="400">
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-lg-7">

              <!-- Grid row -->
              <div class="row mb-3">

                <!-- Grid column -->
                <div class="col-1">
                  <i class="fa fa-mail-forward fa-lg purple-text"></i>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-xl-10 col-md-11 col-10">
                  <h5 class="font-weight-bold mb-3">Exams</h5>
                  <p class="grey-text">This form captures ICT cadre staff qualifications and
                    credentials that showcase the necessary skills to succeed in a wide variety of roles.
                    The Civil Service would use staff qualifications and credentials as criteria for the
                    posting process to make it more objective, efficient, and transparent.
                    This form also addresses the public sector challenge of succession planning and
                    employee turnover by having a database for pool of available ICT cadre staff.</p>

                </div>
                <!-- Grid column -->

              </div>
              <!-- Grid row -->
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 text-center text-lg-left">
              <img src="./assets/promotions.jpg"
                   alt="50%" height="269" width="400">
            </div>

            <div class="col-lg-7">
              <!-- Grid row -->
              <div class="row mb-3">


                <!-- Grid column -->
                <div class="col-1">
                  <i class="fa fa-mail-forward fa-lg purple-text"></i>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-xl-10 col-md-11 col-10">
                  <h5 class="font-weight-bold mb-3">Promotions</h5>
                  <p class="grey-text">Staff promotion is the advancement of an employees’
                    rank or position in an organizational hierarchical system.
                    The following are the attributes or factors to be considered in staff
                    promotion – experience and knowledge gained on-the-job, qualification,
                    leadership skills, can do ability, good interpersonal relations, commitment to
                    deliver/hard work, and punctuality.</p>

                </div>
              </div>
            </div>
          </div>
          <!-- Grid row -->
          <div class="row">

            <!-- Grid column -->
            <div class="col-lg-4 text-center text-lg-left">
              <img class="img-fluid" src="./assets/learning.jpg"
                   alt="Sample image" height="200" width="400">
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-lg-7">
              <!-- Grid row -->
              <div class="row mb-3">

                <!-- Grid column -->
                <div class="col-1">
                  <i class="fa fa-mail-forward fa-lg purple-text"></i>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-xl-10 col-md-11 col-10">
                  <h5 class="font-weight-bold mb-3">Postings</h5>
                  <p class="grey-text mb-0">This form captures staff posting history
                    and transfers with the objective of capturing data that maximizes staff
                    performance to improve professionalism.</p>
                </div>
                <!-- Grid column -->

              </div>
              <!--Grid row-->

            </div>
            <!--Grid column-->

          </div>
          <!-- Grid row -->

        </div>
        <!-- Container -->

      </section>

      <!-- Section Projects-->
      <section v-if="!authenticated" id="projects" class="p-2" style="background-color: #eeeeee">
        <div class="container">

          <!-- Section heading -->

          <h2 class="h1-responsive font-weight-bold text-center mb-5">The Ministry Projects</h2>
          <!-- Section description -->
          <p class="text-center w-responsive mx-auto mb-5"> The projects being conducted by the Ministry of
            Communication and Digital Economy are listed below. These are projects financed by government and
            is typically owned and may be operated by the Ministry and its Agencies.</p>
        </div>

      </section>

      <!-- Section Photo Gallery-->
      <section v-if="!authenticated" id="gallery" class="p-2" style="background-color: #eeeeee">
        <div class="container">

          <!-- Section heading -->
          <h2 class="h1-responsive font-weight-bold text-center mb-5">Photo Gallery</h2>
          <!-- Section description -->
          <p class="text-center w-responsive mx-auto mb-5"> The gallery are photos and images that capture
            the Ministry of Communication and Digital Economy activities, tasks and responsibilities for
            information dissemination and sensitization. </p>
        </div>

      </section>

      <!-- Section Articles-->
      <section v-if="!authenticated" id="articles" class="p-2" style="background-color: #eeeeee">
        <div class="container">

          <!-- Section heading -->
          <h2 class="h1-responsive font-weight-bold text-center mb-5">Articles</h2>
          <!-- Section description -->
          <p class="text-center w-responsive mx-auto mb-5"> The articles listed below are the Ministry of
            Communication and Digital Economy newspaper publications, circulars, gazette, magazines and journals.. </p>
        </div>

      </section>

      <!--Section: contact-->
      <section v-if="!authenticated" id="contact" class="py-2" style="background-color: #eee;">

        <div class="container">

          <!-- Section heading -->

          <h2 class="h1-responsive font-weight-bold text-center mb-5">Contact us</h2>
          <!-- Section description -->
          <p class="text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum
            porro a pariatur veniam.</p>


          <!-- Grid column -->
          <div class=" row font-weight-normal col-md-5 text-center">
            <ul class="list-unstyled mb-2">
              <li>
                <p class="fa fa-map-marker fa-2x grey-text"></p>
                <p>Shehu Shagari Way, Federal Secretariat Complex, Phase 1 Annex II</p>
              </li>
              <li>
                <p class="fa fa-phone fa-2x mt-2 purple-text"></p>
                <p>+ 01 234 567 89</p>
              </li>
              <li>
                <p class="fa fa-envelope fa-2x mt-2 purple-text"></p>
                <p class="mb-0">contact@example.com</p>
              </li>
            </ul>
          </div>
          <!-- Grid column -->

          <!--          </div>-->
          <!-- Grid row -->

        </div>

      </section>
      <!--Section: contact-->

      <!--      Section: about-->

      <footer v-if="!authenticated" class="page-footer font-small pt-4">
        <!-- Footer Elements -->

        <!-- Copyright -->
        <div class="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="https://www.commtech.gov.ng/"> commtech.gov.ng</a>
        </div>
        <!-- Copyright -->

      </footer>
      <!--    </nav>-->

      <nav v-if="authenticated">
        <nav class="navbar navbar-expand-md navbar-light"
             style="padding-top: 5px; background:#007d53;">
          <div class="collapse navbar-collapse" style="margin: 5px 0 5px 5px">
            <a><img src="./assets/logo.png" alt="50%" height="90" width="90"></a>
            <span class="navbar-centre">MINISTRY OF COMMUNICATIONS AND DIGITAL ECONOMY</span>
          </div>
          <ul class="navbar-nav">
            <li><a>Welcome, {{ this.firstName }}</a></li>
            <br>
            <li>
              <i href @click.prevent="handleLogout">
                <font-awesome-icon icon="sign-out-alt"/>
                <a>logout</a></i>
            </li>
          </ul>
        </nav>

        <nav class="sidebar">
          <div>
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
        <br/>
        <!--      <router-view></router-view>-->
      </nav>
      <router-view></router-view>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: () => {
    return {
      authenticated: null,
      firstName: '',
      slide: 0,
      sliding: null
    }
  },

  created() {
    this.isAuthenticated()
  },

  watch: {
    '$route': 'isAuthenticated'
  },

  methods: {
    clickLogin() {
      this.$router.push({name: 'login'})
    },
    // eslint-disable-next-line no-unused-vars
    onSlideStart(slide) {
      this.sliding = true
    },
    // eslint-disable-next-line no-unused-vars
    onSlideEnd(slide) {
      this.sliding = false
    },
    async isAuthenticated() {
      this.authenticated = await this.$auth.isAuthenticated();

      await this.$auth.getUser().then(user => {
        this.firstName = user.firstName;

        //commit mutations to update the vuex state
        this.$store.commit('setIppis', user.ippis)
      })
      console.log('activeUser ', this.authenticated)

    },
    async handleLogout() {
      await this.$auth.logout()
      await this.isAuthenticated()
      await this.$router.push({path: '#home'})
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

.page-footer {
  background-color: #007d53 !important;
  font-size: 14px;
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
  margin-right: 25px;
}

p {
  font-family:  Times New Roman;
  font-size: 20px;
  color: #333333;
}

.navbar:not(.top-nav-collapse) {
  background: #007d53 !important;
}
</style>
