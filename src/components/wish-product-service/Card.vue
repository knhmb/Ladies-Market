<template>
  <div class="wish-product-service-card">
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
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.wish-product-service-card {
  margin-top: 1.5rem;
}

.wish-product-service-card .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  position: relative;
}

.wish-product-service-card .card img.product-img {
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0 0;
}

.wish-product-service-card .card img.wish-img {
  position: absolute;
  right: 0.2rem;
  border-radius: 0;
  width: 2.3rem;
  top: 0;
}

.wish-product-service-card .card .card-body {
  padding: 0.5rem;
}

.wish-product-service-card .card .card-body p.title {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 0.5rem;
}
.wish-product-service-card .card .card-body p.description {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #808080;
}

.wish-product-service-card .card .card-body p.discount {
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

.wish-product-service-card .card .card-body p.price {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #e16956;
}
</style>