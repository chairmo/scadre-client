<!--<template>-->
<!--  <div>-->

<!--    <header>-->
<!--      &lt;!&ndash; Navbar &ndash;&gt;-->
<!--      <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar"-->
<!--           style="padding-top: 5px; background:#007d53;">-->
<!--        <div class="container">-->
<!--          <a class="navbar-brand" href="#"><a><img src="./assets/logo.png" alt="50%" height="50" width="50"></a></a>-->
<!--          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"-->
<!--                  aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">-->
<!--            <span class="navbar-toggler-icon"></span>-->
<!--          </button>-->
<!--          <nav class="collapse navbar-collapse" id="navbarTogglerDemo02">-->
<!--            <ul class="navbar-nav mr-auto smooth-scroll">-->
<!--              <li class="nav-item">-->
<!--                <a class="nav-link" href="#home">Home-->
<!--                </a>-->
<!--              </li>-->
<!--              <li class="nav-item">-->
<!--                <a class="nav-link" href="#about" data-offset="90">About</a>-->
<!--              </li>-->
<!--              <li class="nav-item">-->
<!--                <a class="nav-link" href="#projects" data-offset="90">Projects</a>-->
<!--              </li>-->
<!--              <li class="nav-item">-->
<!--                <a class="nav-link" href="#gallery" data-offset="90">Gallery</a>-->
<!--              </li>-->
<!--              <li class="nav-item">-->
<!--                <a class="nav-link" href="#articles" data-offset="90">Articles</a>-->
<!--              </li>-->
<!--              <li class="nav-item">-->
<!--                <a class="nav-link" href="#contact" data-offset="90">Contact</a>-->
<!--              </li>-->
<!--            </ul>-->
<!--            <div>-->
<!--              <ul class="navbar-nav nav-flex-icons">-->
<!--                <router-link to="/login" style="color: #eeeeee; font-family: Arial">Login</router-link>-->
<!--              </ul>-->
<!--            </div>-->
<!--          </nav>-->
<!--        </div>-->
<!--      </nav>-->

<!--    </header>-->


<!--    <section id="home" class="py-2">-->
<!--      &lt;!&ndash;      <div class="mask rgba-gradient d-flex justify-content-center align-items-center">&ndash;&gt;-->
<!--      &lt;!&ndash; Content &ndash;&gt;-->
<!--      <div class="container px-md-5 px-sm-0 d-flex justify-content-center align-items-center">-->
<!--        &lt;!&ndash;Grid row&ndash;&gt;-->
<!--        <div class="row wow fadeIn">-->
<!--          &lt;!&ndash;Grid column&ndash;&gt;-->
<!--          <div class="col-md-12 mb-4 white-text text-center wow fadeIn">-->
<!--            <h4 class="display-7 font-weight-bold white-text mb-0 pt-md-5 pt-5">FEDERAL MINISTRY OF-->
<!--              COMMUNICATIONS AND DIGITAL ECONOMY</h4>-->
<!--            <hr class="hr-light my-4 w-75">-->
<!--            <h6 class="subtext-header mt-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing-->
<!--              elit deleniti consequuntur nihil.</h6>-->
<!--          </div>-->
<!--          &lt;!&ndash;Grid column&ndash;&gt;-->
<!--        </div>-->
<!--        &lt;!&ndash;Grid row&ndash;&gt;-->
<!--        &lt;!&ndash;        </div>&ndash;&gt;-->
<!--      </div>-->
<!--      &lt;!&ndash; Container &ndash;&gt;-->
<!--      <div class="container">-->
<!--        <b-carousel-->
<!--            id="carousel-1"-->
<!--            v-model="slide"-->
<!--            :interval="4000"-->
<!--            controls-->
<!--            indicators-->
<!--            background="#ababab"-->
<!--            img-width="1024"-->
<!--            img-height="480"-->
<!--            style="text-shadow: 1px 1px 2px #333;"-->
<!--            @sliding-start="onSlideStart"-->
<!--            @sliding-end="onSlideEnd"-->
<!--        >-->
<!--          &lt;!&ndash; Text slides with image &ndash;&gt;-->
<!--          <b-carousel-slide>-->
<!--            <template v-slot:img>-->
<!--              <img-->
<!--                  class="d-block img-fluid w-100"-->
<!--                  width="1024"-->
<!--                  height="480"-->
<!--                  src="assets/slide1.jpg"-->
<!--                  alt="image slot"-->
<!--              >-->
<!--            </template>-->
<!--          </b-carousel-slide>-->

<!--          &lt;!&ndash; Note the classes .d-block and .img-fluid to prevent browser default image alignment &ndash;&gt;-->
<!--          <b-carousel-slide>-->
<!--            <template v-slot:img>-->
<!--              <img-->
<!--                  class="d-block img-fluid w-100"-->
<!--                  width="1024"-->
<!--                  height="480"-->
<!--                  src="assets/slide2.jpg"-->
<!--                  alt="image slot"-->
<!--              >-->
<!--            </template>-->
<!--          </b-carousel-slide>-->

<!--        </b-carousel>-->
<!--      </div>-->

<!--    </section>-->

<!--    &lt;!&ndash;Section: about&ndash;&gt;-->
<!--    <section id="about" class="py-4">-->

<!--      &lt;!&ndash; Container &ndash;&gt;-->
<!--      <div class="container">-->
<!--        &lt;!&ndash; Section heading &ndash;&gt;-->
<!--        <h2 class="h1-responsive font-weight-bold text-center mb-5">Career Management</h2>-->
<!--        &lt;!&ndash; Section description &ndash;&gt;-->
<!--        <p class="lead grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet,-->
<!--          consectetur-->
<!--          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim-->
<!--          ad-->
<!--          minim veniam.</p>-->

<!--        &lt;!&ndash; Grid row &ndash;&gt;-->
<!--        <div class="row">-->

<!--          &lt;!&ndash; Grid column &ndash;&gt;-->
<!--          <div class="col-lg-5 text-center text-lg-left">-->
<!--            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt="Sample image">-->
<!--          </div>-->
<!--          &lt;!&ndash; Grid column &ndash;&gt;-->

<!--          &lt;!&ndash; Grid column &ndash;&gt;-->
<!--          <div class="col-lg-7">-->

<!--            &lt;!&ndash; Grid row &ndash;&gt;-->
<!--            <div class="row mb-3">-->

<!--              &lt;!&ndash; Grid column &ndash;&gt;-->
<!--              <div class="col-1">-->
<!--                <i class="fa fa-mail-forward fa-lg purple-text"></i>-->
<!--              </div>-->
<!--              &lt;!&ndash; Grid column &ndash;&gt;-->

<!--              &lt;!&ndash; Grid column &ndash;&gt;-->
<!--              <div class="col-xl-10 col-md-11 col-10">-->
<!--                <h5 class="font-weight-bold mb-3">Exams</h5>-->
<!--                <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad-->
<!--                  minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam-->
<!--                  assumenda deleniti hic.</p>-->
<!--              </div>-->
<!--              &lt;!&ndash; Grid column &ndash;&gt;-->

<!--            </div>-->
<!--            &lt;!&ndash; Grid row &ndash;&gt;-->

<!--            &lt;!&ndash; Grid row &ndash;&gt;-->
<!--            <div class="row mb-3">-->

<!--              &lt;!&ndash; Grid column &ndash;&gt;-->
<!--              <div class="col-1">-->
<!--                <i class="fa fa-mail-forward fa-lg purple-text"></i>-->
<!--              </div>-->
<!--              &lt;!&ndash; Grid column &ndash;&gt;-->

<!--              &lt;!&ndash; Grid column &ndash;&gt;-->
<!--              <div class="col-xl-10 col-md-11 col-10">-->
<!--                <h5 class="font-weight-bold mb-3">Promotions</h5>-->
<!--                <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad-->
<!--                  minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam-->
<!--                  assumenda deleniti hic.</p>-->
<!--              </div>-->
<!--              &lt;!&ndash; Grid column &ndash;&gt;-->

<!--            </div>-->
<!--            &lt;!&ndash; Grid row &ndash;&gt;-->

<!--            &lt;!&ndash;Grid row&ndash;&gt;-->
<!--            <div class="row">-->

<!--              &lt;!&ndash; Grid column &ndash;&gt;-->
<!--              <div class="col-1">-->
<!--                <i class="fa fa-mail-forward fa-lg purple-text"></i>-->
<!--              </div>-->
<!--              &lt;!&ndash; Grid column &ndash;&gt;-->

<!--              &lt;!&ndash; Grid column &ndash;&gt;-->
<!--              <div class="col-xl-10 col-md-11 col-10">-->
<!--                <h5 class="font-weight-bold mb-3">Postings</h5>-->
<!--                <p class="grey-text mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim-->
<!--                  ad minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam-->
<!--                  assumenda deleniti hic.</p>-->
<!--              </div>-->
<!--              &lt;!&ndash; Grid column &ndash;&gt;-->

<!--            </div>-->
<!--            &lt;!&ndash;Grid row&ndash;&gt;-->

<!--          </div>-->
<!--          &lt;!&ndash;Grid column&ndash;&gt;-->

<!--        </div>-->
<!--        &lt;!&ndash; Grid row &ndash;&gt;-->

<!--      </div>-->
<!--      &lt;!&ndash; Container &ndash;&gt;-->

<!--    </section>-->

<!--    &lt;!&ndash;Section: contact&ndash;&gt;-->
<!--    <section id="contact" class="py-4" style="background-color: #eee;">-->

<!--      <div class="container">-->

<!--        &lt;!&ndash; Section heading &ndash;&gt;-->
<!--        <h2 class="h1-responsive font-weight-bold text-center mb-5">Contact us</h2>-->
<!--        &lt;!&ndash; Section description &ndash;&gt;-->
<!--        <p class="text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>-->

<!--        &lt;!&ndash; Grid row &ndash;&gt;-->
<!--        <div class="row">-->

<!--          &lt;!&ndash; Grid column &ndash;&gt;-->
<!--          <div class="col-md-9 mb-md-0 mb-5">-->

<!--            <form>-->

<!--              &lt;!&ndash; Grid row &ndash;&gt;-->
<!--              <div class="row">-->

<!--                &lt;!&ndash; Grid column &ndash;&gt;-->
<!--                <div class="col-md-5">-->
<!--                  <div class="md-form mb-0">-->
<!--                    <input type="text" id="contact-name" class="form-control">-->
<!--                    <label for="contact-name" class="">Your name</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash; Grid column &ndash;&gt;-->

<!--                &lt;!&ndash; Grid column &ndash;&gt;-->
<!--                <div class="col-md-5">-->
<!--                  <div class="md-form mb-0">-->
<!--                    <input type="text" id="contact-email" class="form-control">-->
<!--                    <label for="contact-email" class="">Your email</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash; Grid column &ndash;&gt;-->

<!--              </div>-->
<!--              &lt;!&ndash; Grid row &ndash;&gt;-->

<!--              &lt;!&ndash; Grid row &ndash;&gt;-->
<!--              <div class="row">-->

<!--                &lt;!&ndash; Grid column &ndash;&gt;-->
<!--                <div class="col-md-10">-->
<!--                  <div class="md-form mb-0">-->
<!--                    <input type="text" id="contact-Subject" class="form-control">-->
<!--                    <label for="contact-Subject" class="">Subject</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash; Grid column &ndash;&gt;-->

<!--              </div>-->
<!--              &lt;!&ndash; Grid row &ndash;&gt;-->

<!--              &lt;!&ndash; Grid row &ndash;&gt;-->
<!--              <div class="row">-->

<!--                &lt;!&ndash; Grid column &ndash;&gt;-->
<!--                <div class="col-md-10">-->
<!--                  <div class="md-form">-->
<!--                    <textarea type="text" id="contact-message" class="form-control md-textarea" rows="3"></textarea>-->
<!--                    <label for="contact-message">Your message</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash; Grid column &ndash;&gt;-->

<!--              </div>-->
<!--              &lt;!&ndash; Grid row &ndash;&gt;-->

<!--            </form>-->

<!--            <div class="text-center text-md-left">-->
<!--              <a class="btn btn-purple btn-md">Send</a>-->
<!--            </div>-->

<!--          </div>-->
<!--          &lt;!&ndash; Grid column &ndash;&gt;-->

<!--          &lt;!&ndash; Grid column &ndash;&gt;-->
<!--          <div class="col-md-3 text-center" >-->
<!--            <ul class="list-unstyled mb-0">-->
<!--              <li>-->
<!--                <i class="fa fa-map-marker fa-2x grey-text"></i>-->
<!--                <p>Shehu Shagari Way, Federal Secretariat Complex, Phase 1 Annex II</p>-->
<!--              </li>-->
<!--              <li>-->
<!--                <i class="fa fa-phone fa-2x mt-4 purple-text"></i>-->
<!--                <p>+ 01 234 567 89</p>-->
<!--              </li>-->
<!--              <li>-->
<!--                <i class="fa fa-envelope fa-2x mt-4 purple-text"></i>-->
<!--                <p class="mb-0">contact@example.com</p>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--          &lt;!&ndash; Grid column &ndash;&gt;-->

<!--        </div>-->
<!--        &lt;!&ndash; Grid row &ndash;&gt;-->

<!--      </div>-->

<!--    </section>-->
<!--    &lt;!&ndash;Section: contact&ndash;&gt;-->

<!--    &lt;!&ndash;Section: about&ndash;&gt;-->
<!--    <footer class="page-footer font-small pt-4">-->
<!--      &lt;!&ndash; Footer Elements &ndash;&gt;-->

<!--      &lt;!&ndash; Copyright &ndash;&gt;-->
<!--      <div class="footer-copyright text-center py-3">© 2020 Copyright:-->
<!--        <a href="https://www.commtech.gov.ng/"> commtech.gov.ng</a>-->
<!--      </div>-->
<!--      &lt;!&ndash; Copyright &ndash;&gt;-->

<!--    </footer>-->

<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'HomePage',-->
<!--  data() {-->
<!--    return {-->
<!--      slide: 0,-->
<!--      sliding: null-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    // eslint-disable-next-line no-unused-vars-->
<!--    onSlideStart(slide) {-->
<!--      this.sliding = true-->
<!--    },-->
<!--    // eslint-disable-next-line no-unused-vars-->
<!--    onSlideEnd(slide) {-->
<!--      this.sliding = false-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.main {-->
<!--  margin-top: 60px;-->
<!--  /*margin-left: 60px; !* Same as the width of the sidebar *!*/-->
<!--  /*padding-left: 25px;*/-->
<!--  /*padding-right: 10px;*/-->
<!--}-->
<!--.list-unstyled{-->
<!--  font-family: Garamond;-->
<!--  font-size: 16px;-->
<!--  color: #333333;-->
<!--}-->

<!--#intro-section {-->
<!--  height: 100%;-->
<!--}-->

<!--@media (max-width: 740px) {-->
<!--  html,-->
<!--  body,-->
<!--  header,-->
<!--  #intro-section {-->
<!--    height: 100vh;-->
<!--  }-->
<!--}-->

<!--.navbar:not(.top-nav-collapse) {-->
<!--  background: transparent !important;-->
<!--}-->

<!--@media (max-width: 991px) {-->
<!--  .navbar:not(.top-nav-collapse) {-->
<!--    background: #007d53 !important;-->
<!--  }-->
<!--}-->

<!--.top-nav-collapse, .page-footer {-->
<!--  background-color: #007d53 !important;-->
<!--}-->

<!--.rgba-gradient {-->
<!--  background: rgba(35, 7, 77, 0.6);-->
<!--  /* fallback for old browsers */-->
<!--  background: -webkit-linear-gradient(to right, rgba(204, 83, 51, 0.6), rgba(35, 7, 77, 0.6));-->
<!--  /* Chrome 10-25, Safari 5.1-6 */-->
<!--  background: linear-gradient(to right, rgba(204, 83, 51, 0.6), rgba(35, 7, 77, 0.6));-->
<!--  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */-->
<!--}-->

<!--.img-gradient:after {-->
<!--  content: '';-->
<!--  position: absolute;-->
<!--  left: 0;-->
<!--  top: 0;-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  display: inline-block;-->
<!--  /* FF3.6+ */-->
<!--  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(220, 66, 37, 0.5)), color-stop(100%, rgba(0, 47, 75, 0.5)));-->
<!--  /* Chrome,Safari4+ */-->
<!--  background: -webkit-linear-gradient(top, rgba(0, 47, 75, 0.5) 0%, rgba(220, 66, 37, 0.5) 100%);-->
<!--  /* Chrome10+,Safari5.1+ */-->
<!--  background: -o-linear-gradient(top, rgba(0, 47, 75, 0.5) 0%, rgba(220, 66, 37, 0.5) 100%);-->
<!--  /* Opera 11.10+ */-->
<!--  /* IE10+ */-->
<!--  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 47, 75, 0.5)), to(rgba(220, 66, 37, 0.5)));-->
<!--  background: linear-gradient(to bottom, rgba(0, 47, 75, 0.5) 0%, rgba(220, 66, 37, 0.5) 100%);-->
<!--  /* W3C */-->
<!--  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#002f4b', endColorstr='#00000000', GradientType=0);-->
<!--  /* IE6-9 */-->
<!--}-->
<!--</style>-->