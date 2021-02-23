<template>
  <div>
      <div >
        <header>
          <!-- Navbar -->
          <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar"
               style="padding-top: 5px; background:#007d53;">

            <div class="container">
              <a class="navbar-brand" href="#"><a><img src="../../assets/logo.png" alt="50%" height="50" width="50"></a></a>
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
                  <li class="nav-item" style="margin-right: 200px">
                    <a class="nav-link" href="#contact" data-offset="90">Contact</a>
                  </li>
                  <li style="margin-right: 20px">
                    <a href="#" data-offset="90">
                      <router-link to="/register" class="nav-item nav-link" tag="button" :disabled=true>Register</router-link>
                    </a>
                  </li>
                  <li style="margin-right: 20px">
                    <a href="#" data-offset="90">
                      <router-link to="/login" class="nav-item nav-link">Login</router-link>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </nav>

        </header>

        <section id="home" class="py-4">
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
                      src="../../assets/slide1.jpg"
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
                      src="../../assets/slide2.jpg"
                      alt="image slot"
                  >
                </template>
              </b-carousel-slide>

            </b-carousel>
          </div>

        </section>

        <!--Section: about-->
        <section id="about" class="py-4">

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
                <img class="img-fluid" src="../../assets/exams.jpg"
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
                <img src="../../assets/promotions.jpg"
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
                <img class="img-fluid" src="../../assets/learning.jpg"
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
        <section id="projects" class="p-2" style="background-color: #eeeeee">
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
        <section id="gallery" class="p-2" style="background-color: #eeeeee">
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
        <section id="articles" class="p-2" style="background-color: #eeeeee">
          <div class="container">

            <!-- Section heading -->
            <h2 class="h1-responsive font-weight-bold text-center mb-5">Articles</h2>
            <!-- Section description -->
            <p class="text-center w-responsive mx-auto mb-5"> The articles listed below are the Ministry of
              Communication and Digital Economy newspaper publications, circulars, gazette, magazines and
              journals.. </p>
          </div>

        </section>

        <!--Section: contact-->
        <section id="contact" class="py-2" style="background-color: #eee;">

          <div class="container">

            <!-- Section heading -->

            <h2 class="h1-responsive font-weight-bold text-center mb-5">Contact us</h2>
            <!-- Section description -->
            <p class="text-center w-responsive mx-auto mb-5">You can forward all your enquiries to 
            our email or call the following numbers. 
            You may wish to also visit our office on the below address when necessary.</p>


            <!-- Grid column -->
          
            <div class="row font-weight-normal w-responsive text-center mb-5 ">
              <ul class="list-unstyled mb-2 address">
                <li>
                  <i class="fa fa-fw fa-map-marker fa-2x black-text"></i>
                  <p>Shehu Shagari Way, Federal Secretariat Complex, Phase 1 Annex II, FCT Abuja</p>
                </li>
                <li>
                  <i class="fa fa-phone fa-2x mt-2 purple-text"></i>
                  <p>+ 01 234 567 89</p>
                </li>
                <li>
                  <i class="fa fa-envelope fa-2x mt-2 purple-text" aria-hidden="true"></i>
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

        <footer class="page-footer font-small pt-4">
          <!-- Footer Elements -->

          <!-- Copyright -->
          <div class="footer-copyright text-center py-3">© <a>{{new Date().getFullYear()}}</a> Copyright |
            <a href="https://www.commtech.gov.ng/"> commtech.gov.ng</a>
          </div>
          <!-- Copyright -->

        </footer>
      </div>
  </div>
</template>

<script>
export default {
  name: "landingPage",
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  // created() {
  //   window.onunload = () => {
  //     window.localStorage.clear();
  //   }
  // },
  methods: {
    // eslint-disable-next-line no-unused-vars
    onSlideStart(slide) {
      this.sliding = true
    },
    // eslint-disable-next-line no-unused-vars
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}

</script>

<style scoped>
a{
  color: #333333;
}
.page-footer {
  background-color: #007d53 !important;
  font-size: 14px;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

.address {
  width: auto;
  height: auto;
  margin: 20px auto 20px;
text-align: center;
}

/* On screens that are less than 700px wide, make the sidebar into a top bar */
@media screen and (max-width: 700px) {
  .small-size {
    width: 100em;
    height: auto;
    position: relative;
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

  .small-size {
    width: 100em;
    height: auto;
    position: relative;
  }
  .address {
    text-align: center;
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

[v-cloak] {
  display: none;
}
i{
  color: rgba(0, 0, 0, 0.822);
}
</style>