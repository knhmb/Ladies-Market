<template>
  <section class="product">
    <Carousel />
    <top-section></top-section>
    <bottom-section></bottom-section>
  </section>
</template>

<script>
import Carousel from "../components/product/Carousel.vue";
import TopSection from "../components/product/TopSection";
import BottomSection from "../components/product/BottomSection.vue";

export default {
  components: {
    Carousel,
    TopSection,
    BottomSection,
  },
};
</script>
