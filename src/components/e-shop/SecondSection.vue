<template>
  <div class="e-shop-second-section">
    <Carousel :breakpoints="breakpoints">
      <Slide v-for="slide in 10" :key="slide">
        <img src="../../assets/home/banner1@2x.png" alt="" />
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Navigation,
    Slide,
  },
  data() {
    return {
      breakpoints: {
        300: {
          itemsToShow: 2.5,
          snapAlign: "center",
        },
        // 700px and up
        700: {
          itemsToShow: 3.11,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 3.11,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>

<style scoped>
.e-shop-second-section {
  margin-top: 1rem;
}

.e-shop-second-section img {
  width: 100%;
  border-radius: 16px;
}

.e-shop-second-section .carousel :deep(.carousel__slide) {
  margin-right: 1rem;
}

.e-shop-second-section .carousel :deep(.carousel__prev) {
  background: #fff;
  color: #666;
  left: -1.5rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
}
.e-shop-second-section .carousel :deep(.carousel__next) {
  background: #fff;
  color: #666;
  right: -1.5rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
}
</style>