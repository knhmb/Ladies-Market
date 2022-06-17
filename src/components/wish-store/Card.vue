<template>
  <div class="wish-store-card">
    <el-row :gutter="20">
      <el-col v-for="item in 32" :key="item" :sm="12" :md="8" :lg="6">
        <div class="card">
          <img
            class="wish-img"
            src="../../assets/wish/wish-on-desktop@2x.png"
            alt=""
          />
          <img
            class="product-img"
            src="../../assets/home/sample-shop@2x.png"
            alt=""
          />
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
.wish-store-card {
  margin-top: 1.5rem;
}

.wish-store-card .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  position: relative;
}

.wish-store-card .card img.product-img {
  width: 100%;
  border-radius: 8px 8px 0 0;
}
.wish-store-card .card img.wish-img {
  position: absolute;
  right: 0.2rem;
  border-radius: 0;
  width: 2.3rem;
  top: 0;
}

.wish-store-card .card img.video-img {
  border: none;
  width: 2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}

.wish-store-card .card .card-body {
  padding: 0.5rem;
}

.wish-store-card .card .card-body p.title {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 0.5rem;
}
.wish-store-card .card .card-body p.description {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #808080;
}

.wish-store-card .card .reviews {
  margin-top: 1.5rem;
}

.wish-store-card .card .reviews .el-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.wish-store-card .card .reviews .el-col:not(:last-of-type):after {
  content: "";
  position: absolute;
  right: -1.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: #e6e6e6;
  height: 2.5rem;
  width: 1px;
}

.wish-store-card .card .reviews img {
  width: 2rem;
}

.wish-store-card .card .reviews p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-top: 0.2rem;
}
</style>