<template>
  <div class="e-shop-first-section">
    <el-row :gutter="20">
      <el-col v-for="item in 8" :key="item" :sm="12" :md="8" :lg="6">
        <div class="card">
          <img
            class="wish-off"
            src="../../assets/beauty-channel/wish-off-desktop@2x.png"
            alt=""
          />
          <img src="../../assets/home/sample-shop@2x.png" alt="" />
          <div class="card-body">
            <p class="title">
              推廣產品名稱推廣產品名稱推廣產品名稱產品名稱產品名稱產品名稱
            </p>
            <p class="description">
              店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱
            </p>
            <div class="reviews">
              <el-row justify="space-between">
                <el-col :span="4">
                  <img
                    src="../../assets/home/rating-like-small@2x.png"
                    alt=""
                  />
                  <p>2.7K</p>
                </el-col>
                <el-col :span="4">
                  <img src="../../assets/home/rating-ok-small@2x.png" alt="" />
                  <p>847</p>
                </el-col>
                <el-col :span="4">
                  <img
                    src="../../assets/home/rating-dislike-small@2x.png"
                    alt=""
                  />
                  <p>20</p>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.e-shop-first-section {
  margin-top: 1.5rem;
}

.e-shop-first-section .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  position: relative;
}

.e-shop-first-section .card img {
  width: 100%;
  border-radius: 8px 8px 0 0;
}

.e-shop-first-section .card img.video-img {
  border: none;
  width: 2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
.e-shop-first-section .card img.wish-off {
  border: none;
  width: 2rem;
  position: absolute;
  right: 0.1rem;
  top: 0rem;
}

.e-shop-first-section .card .card-body {
  padding: 0.5rem;
}

.e-shop-first-section .card .card-body p.title {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 0.5rem;
}
.e-shop-first-section .card .card-body p.description {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #808080;
}

.e-shop-first-section .card .reviews {
  margin-top: 1.5rem;
}

.e-shop-first-section .card .reviews .el-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.e-shop-first-section .card .reviews .el-col:not(:last-of-type):after {
  content: "";
  position: absolute;
  right: -1.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: #e6e6e6;
  height: 2.5rem;
  width: 1px;
}

.e-shop-first-section .card .reviews img {
  width: 2rem;
}

.e-shop-first-section .card .reviews p {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-top: 0.2rem;
}
</style>