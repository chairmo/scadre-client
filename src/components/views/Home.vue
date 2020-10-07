<template>
  <div>
      <div class="main">
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

  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
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
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding-left: 55px;
  padding-right: 25px;
}

</style>