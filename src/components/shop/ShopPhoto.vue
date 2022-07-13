<template>
  <div class="shop-photo">
    <base-container>
      <div class="tab-content">
        <img class="tab-img" src="../../assets/home/tab1-left@2x.png" alt="" />
        <p class="tab">美容頻道</p>
        <img class="tab-img" src="../../assets/home/tab1-right@2x.png" alt="" />
      </div>
    </base-container>
    <div class="shop-photo-main">
      <base-container>
        <Carousel :breakpoints="breakpoints">
          <Slide v-for="slide in 10" :key="slide">
            <img src="../../assets/home/sample-product@2x.png" alt="" />
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </base-container>
    </div>
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
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4.2,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>

<style scoped>
.shop-photo {
  margin-top: 2rem;
}

.shop-photo .container {
  padding: 0 13rem;
}

.shop-photo p.tab {
  background: #e2f2ef;
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #4d4d4d;
  padding: 0.2rem;
}

.shop-photo .tab-content {
  display: flex;
}

.shop-photo .tab-content img.tab-img {
  width: 1.5rem;
}

.shop-photo .shop-photo-main {
  background: #e2f2ef;
  padding: 1.5rem 0;
}

.shop-photo .shop-photo-main img {
  width: 100%;
  border-radius: 8px;
}

.shop-photo .shop-photo-main .carousel :deep(.carousel__slide) {
  margin-right: 1rem;
}

.shop-photo .shop-photo-main .carousel :deep(.carousel__prev) {
  background: #fff;
  color: #666;
  left: -1.5rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
}
.shop-photo .shop-photo-main .carousel :deep(.carousel__next) {
  background: #fff;
  color: #666;
  right: -1.5rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
}

@media screen and (max-width: 991px) {
  .shop-photo .container {
    padding: 0rem 1rem;
  }

  .shop-photo .shop-photo-main .carousel :deep(.carousel__prev) {
    left: 0;
  }
  .shop-photo .shop-photo-main .carousel :deep(.carousel__next) {
    right: 0;
  }
}
</style>