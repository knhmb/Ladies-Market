<template>
  <section class="shop">
    <Carousel />
    <top-section></top-section>
    <Information />
    <Maps />
    <shop-photo></shop-photo>
    <Feedback />
    <related-products></related-products>
    <live-record></live-record>
    <beauty-channel-carousel></beauty-channel-carousel>
  </section>
</template>

<script>
import Carousel from "../components/shop/Carousel.vue";
import TopSection from "../components/shop/TopSection.vue";
import Information from "../components/shop/Information.vue";
import Maps from "../components/shop/Maps.vue";
import ShopPhoto from "../components/shop/ShopPhoto.vue";
import Feedback from "../components/shop/Feedback.vue";
import BeautyChannelCarousel from "../components/beauty-channel/BeautyChannelCarousel.vue";
import LiveRecord from "../components/shop/LiveRecord.vue";
import RelatedProducts from "../components/shop/RelatedProducts.vue";

export default {
  components: {
    Carousel,
    TopSection,
    Information,
    Maps,
    ShopPhoto,
    Feedback,
    BeautyChannelCarousel,
    LiveRecord,
    RelatedProducts,
  },
};
</script>

<style scoped>
.shop {
  margin-bottom: 3rem;
}
</style>