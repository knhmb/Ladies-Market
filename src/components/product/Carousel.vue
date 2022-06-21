<template>
  <div class="product-carousel">
    <Carousel :items-to-show="3.1" :wrap-around="true" snap-align="start">
      <Slide v-for="slide in 5" :key="slide">
        <img src="../../assets/home/sample-product@2x.png" alt="" />
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Navigation,
    Slide,
    Pagination,
  },
};
</script>

<style scoped>
.product-carousel .carousel :deep(.carousel__prev),
.product-carousel .carousel :deep(.carousel__next) {
  display: none;
}

.product-carousel img {
  width: 100%;
}

.product-carousel .carousel :deep(.carousel__pagination) {
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
}

.product-carousel .carousel :deep(.carousel__pagination-button) {
  background: #fff;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
}

.product-carousel
  .carousel
  :deep(.carousel__pagination-button.carousel__pagination-button--active) {
  background: #e16956;
}
</style>