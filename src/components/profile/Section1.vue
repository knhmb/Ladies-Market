<template>
  <div class="profile-first-section">
    <base-container>
      <div class="tab-content">
        <img class="tab-img" src="../../assets/home/tab1-left@2x.png" alt="" />
        <p class="tab">產品/服務</p>
        <img class="tab-img" src="../../assets/home/tab1-right@2x.png" alt="" />
      </div>
    </base-container>

    <div class="profile-first-section-main">
      <base-container>
        <Carousel :breakpoints="breakpoints">
          <Slide v-for="slide in 4" :key="slide">
            <div class="card">
              <img
                class="wish-img"
                src="../../assets/wish/wish-on-desktop@2x.png"
                alt=""
              />
              <img
                class="product-img"
                src="../../assets/home/sample-product@2x.png"
                alt=""
              />
              <div class="card-body">
                <p class="title">
                  推廣產品名稱推廣產品名稱推廣產品名稱產品名稱產品名稱產品名稱
                </p>
                <p class="description">
                  店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱
                </p>
                <p class="discount">$2,800.00</p>
                <p class="price">$2,230.00</p>
              </div>
            </div>
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
          itemsToShow: 4.23,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>

<style scoped>
.profile-first-section {
  margin-top: 2rem;
}

.profile-first-section .container {
  padding: 0 13rem;
}

.profile-first-section p.tab {
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

.profile-first-section .tab-content {
  display: flex;
}

.profile-first-section .tab-content img.tab-img {
  width: 1.5rem;
}

.profile-first-section .profile-first-section-main {
  background: #e2f2ef;
  padding: 1.5rem 0;
}

.profile-first-section .profile-first-section-main :deep(.carousel .card) {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  position: relative;
}

.profile-first-section
  .profile-first-section-main
  :deep(.carousel .card img.product-img) {
  width: 100%;
  /* height: 100%; */
  border-radius: 8px 8px 0 0;
}

.profile-first-section
  .profile-first-section-main
  :deep(.carousel .card img.wish-img) {
  position: absolute;
  right: 0.2rem;
  border-radius: 0;
  width: 2.3rem;
  top: 0;
}

.profile-first-section
  .profile-first-section-main
  :deep(.carousel .card .card-body) {
  padding: 0.5rem;
  text-align: start;
}

.profile-first-section
  .profile-first-section-main
  :deep(.carousel .card .card-body p.title) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 0.5rem;
}
.profile-first-section
  .profile-first-section-main
  :deep(.carousel .card .card-body p.description) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #808080;
}

.profile-first-section
  .profile-first-section-main
  :deep(.carousel .card .card-body p.discount) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  text-decoration-line: line-through;
  color: #999999;
  margin-top: 1rem;
}

.profile-first-section
  .profile-first-section-main
  :deep(.carousel .card .card-body p.price) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #e16956;
}

.profile-first-section
  .profile-first-section-main
  .carousel
  :deep(.carousel__slide) {
  margin-right: 1rem;
}

.profile-first-section
  .profile-first-section-main
  .carousel
  :deep(.carousel__prev) {
  background: #fff;
  color: #666;
  left: -1.5rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
}
.profile-first-section
  .profile-first-section-main
  .carousel
  :deep(.carousel__next) {
  background: #fff;
  color: #666;
  right: -1.5rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
}

@media screen and (max-width: 991px) {
  .profile-first-section .container {
    padding: 0 1rem;
  }

  .profile-first-section
    .profile-first-section-main
    .carousel
    :deep(.carousel__prev) {
    left: 0;
  }
  .profile-first-section
    .profile-first-section-main
    .carousel
    :deep(.carousel__next) {
    right: 0;
  }
}
</style>