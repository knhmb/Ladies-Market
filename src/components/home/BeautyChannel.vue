<template>
  <div class="beauty-channel">
    <base-container>
      <div class="tab-content">
        <img class="tab-img" src="../../assets/home/tab2-left@2x.png" alt="" />
        <p class="tab">美容頻道</p>
        <img class="tab-img" src="../../assets/home/tab2-right@2x.png" alt="" />
      </div>
    </base-container>

    <div class="beauty-channel-main">
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
        <!-- <el-row :gutter="20">
          <el-col v-for="item in items" :key="item" :span="6">
            <div class="card">
              <img src="../../assets/home/sample-product@2x.png" alt="" />
              <div class="card-body">
                <p class="title">
                  推廣產品名稱推廣產品名稱推廣產品名稱產品名稱產品名稱產品名稱
                </p>
                <p class="description">
                  店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱
                </p>
                <p class="discount">
                  {{ item.discount ? item.discount : "" }}
                </p>
                <p class="price">
                  {{ item.price ? item.price : "" }}
                </p>
              </div>
            </div>
          </el-col>
        </el-row> -->
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
.beauty-channel {
  margin-top: 3rem;
}

.beauty-channel .container {
  padding: 0 14rem;
}

.beauty-channel p.tab {
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

.beauty-channel .tab-content {
  display: flex;
}

.beauty-channel .tab-content img.tab-img {
  width: 1.5rem;
  /* margin-left: 0.2rem; */
}

.beauty-channel .beauty-channel-main {
  background: #fef2e2;
  padding: 1.5rem 0;
}

.beauty-channel .beauty-channel-main .el-col.card-col {
  /* position: relative; */
}

.beauty-channel .beauty-channel-main .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  position: relative;
}

.beauty-channel .beauty-channel-main .card img {
  width: 100%;
  border-radius: 8px 8px 0 0;
}

.beauty-channel .beauty-channel-main .card img.video-img {
  border: none;
  width: 2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}

.beauty-channel .beauty-channel-main .card .card-body {
  padding: 0.5rem;
}

.beauty-channel .beauty-channel-main .card .card-body p.title {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 0.5rem;
}
.beauty-channel .beauty-channel-main .card .card-body p.description {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #808080;
}

.beauty-channel .beauty-channel-main .card .card-body p.date {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #808080;
  margin-top: 1rem;
}

.beauty-channel .beauty-channel-main .el-carousel {
  overflow: visible;
}

.beauty-channel .beauty-channel-main .el-carousel :deep(.el-carousel__arrow) {
  background-color: #fff;
  color: #666;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
}

.beauty-channel
  .beauty-channel-main
  .el-carousel
  :deep(.el-carousel__arrow--left) {
  left: -3rem;
}

.beauty-channel
  .beauty-channel-main
  .el-carousel
  :deep(.el-carousel__arrow--right) {
  right: -3rem;
}

@media screen and (max-width: 991px) {
  .beauty-channel .container {
    padding: 0rem 1rem;
  }
}
</style>