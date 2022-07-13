<template>
  <div class="wish-beauty-channel-card">
    <el-row :gutter="20">
      <el-col v-for="item in 32" :key="item" :sm="12" :md="8" :lg="6">
        <div class="card">
          <img
            class="wish-img"
            src="../../assets/wish/wish-on-desktop@2x.png"
            alt=""
          />
          <img
            class="video-img"
            src="../../assets/home/play-video@2x.png"
            alt=""
          />
          <img
            class="product-img"
            src="../../assets/home/sample-video@2x.png"
            alt=""
          />
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
  </div>
</template>

<style scoped>
.wish-beauty-channel-card {
  margin-top: 1.5rem;
}

.wish-beauty-channel-card .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  position: relative;
}

.wish-beauty-channel-card .card img.product-img {
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0 0;
}

.wish-beauty-channel-card .card img.wish-img {
  position: absolute;
  right: 0.2rem;
  border-radius: 0;
  width: 2.3rem;
  top: 0;
}

.wish-beauty-channel-card .card img.video-img {
  border: none;
  width: 2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}

.wish-beauty-channel-card .card .card-body {
  padding: 0.5rem;
}

.wish-beauty-channel-card .card .card-body p.title {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 0.5rem;
}
.wish-beauty-channel-card .card .card-body p.description {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #808080;
}

.wish-beauty-channel-card .card .card-body p.date {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #808080;
  margin-top: 1rem;
}
</style>