<template>
  <div class="shop-live-record">
    <base-container>
      <div class="tab-content">
        <img class="tab-img" src="../../assets/home/tab2-left@2x.png" alt="" />
        <p class="tab">直播記錄</p>
        <img class="tab-img" src="../../assets/home/tab2-right@2x.png" alt="" />
      </div>
    </base-container>

    <div class="shop-live-record-main">
      <base-container>
        <el-carousel indicator-position="none" arrow="always" height="43vh">
          <el-carousel-item>
            <el-row :gutter="20">
              <el-col
                class="card-col"
                v-for="item in 4"
                :key="item"
                :sm="12"
                :md="8"
                :lg="6"
              >
                <div class="card">
                  <img
                    class="video-img"
                    src="../../assets/home/play-video@2x.png"
                    alt=""
                  />
                  <img src="../../assets/home/sample-video@2x.png" alt="" />
                  <div class="card-body">
                    <p class="title">
                      推廣產品名稱推廣產品名稱推廣產品名稱產品名稱產品名稱產品名稱
                    </p>
                    <p class="description">
                      店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱
                    </p>
                    <p class="date">2022-11-11</p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </base-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.shop-live-record {
  margin-top: 2rem;
}

.shop-live-record .container {
  padding: 0 13rem;
}

.shop-live-record p.tab {
  background: #fef2e2;
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #4d4d4d;
  padding: 0.2rem;
}

.shop-live-record .tab-content {
  display: flex;
}

.shop-live-record .tab-content img.tab-img {
  width: 1.5rem;
  /* margin-left: 0.2rem; */
}

.shop-live-record .shop-live-record-main {
  background: #fef2e2;
  padding: 1.5rem 0;
}

.shop-live-record .shop-live-record-main .el-col.card-col {
  /* position: relative; */
}

.shop-live-record .shop-live-record-main .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  position: relative;
}

.shop-live-record .shop-live-record-main .card img {
  width: 100%;
  border-radius: 8px 8px 0 0;
}

.shop-live-record .shop-live-record-main .card img.video-img {
  border: none;
  width: 2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}

.shop-live-record .shop-live-record-main .card .card-body {
  padding: 0.5rem;
}

.shop-live-record .shop-live-record-main .card .card-body p.title {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 0.5rem;
}
.shop-live-record .shop-live-record-main .card .card-body p.description {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #808080;
}

.shop-live-record .shop-live-record-main .card .card-body p.date {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #808080;
  margin-top: 1rem;
}

.shop-live-record .shop-live-record-main .el-carousel {
  overflow: visible;
}

.shop-live-record
  .shop-live-record-main
  .el-carousel
  :deep(.el-carousel__arrow) {
  background-color: #fff;
  color: #666;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
}

.shop-live-record
  .shop-live-record-main
  .el-carousel
  :deep(.el-carousel__arrow--left) {
  left: -3rem;
}

.shop-live-record
  .shop-live-record-main
  .el-carousel
  :deep(.el-carousel__arrow--right) {
  right: -3rem;
}

@media screen and (max-width: 991px) {
  .shop-live-record .container {
    padding: 0rem 1rem;
  }

  .shop-live-record
    .shop-live-record-main
    .el-carousel
    :deep(.el-carousel__arrow--left) {
    left: 0;
  }

  .shop-live-record
    .shop-live-record-main
    .el-carousel
    :deep(.el-carousel__arrow--right) {
    right: 0;
  }
}
</style>