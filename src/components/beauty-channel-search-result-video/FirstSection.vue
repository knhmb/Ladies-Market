<template>
  <div class="first-section">
    <div class="first-section-main">
      <!-- <base-container> -->
      <el-row :gutter="20">
        <el-col
          class="card-col"
          v-for="item in 8"
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
      <!-- </base-container> -->
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
.first-section {
  margin-top: 2rem;
}

.first-section .first-section-main .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  position: relative;
}

.first-section .first-section-main .card img {
  width: 100%;
  border-radius: 8px 8px 0 0;
}

.first-section .first-section-main .card img.video-img {
  border: none;
  width: 2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}

.first-section .first-section-main .card .card-body {
  padding: 0.5rem;
}

.first-section .first-section-main .card .card-body p.title {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 0.5rem;
}
.first-section .first-section-main .card .card-body p.description {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #808080;
}

.first-section .first-section-main .card .card-body p.date {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #808080;
  margin-top: 1rem;
}

.first-section
  .first-section-main
  .el-carousel
  :deep(.el-carousel__arrow--right) {
  right: -3rem;
}
</style>