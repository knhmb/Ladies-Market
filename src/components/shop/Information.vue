<template>
  <div class="shop-information">
    <base-container>
      <el-row justify="space-between">
        <el-col :sm="24" :md="10">
          <div class="info">
            <img src="../../assets/shop/shop-detail-location@2x.png" alt="" />
            <p>
              店舖地址店舖地址店舖地址店舖地址店舖地址店舖地址店舖地址店舖地址店舖地址店舖地址
            </p>
          </div>
          <div class="info">
            <img src="../../assets/shop/shop-detail-phone@2x.png" alt="" />
            <p>1234 5678</p>
          </div>
          <div class="info">
            <img
              src="../../assets/shop/shop-detail-price-range@2x.png"
              alt=""
            />
            <p>$400 ~ $800</p>
          </div>
          <div class="info">
            <img src="../../assets/shop/shop-detail-tag@2x.png" alt="" />
            <p>醫美、脫毛及塑形</p>
          </div>
        </el-col>
        <el-col :sm="24" :md="10">
          <div class="numbers">
            <div class="number">
              <img src="../../assets/shop/score-4-small-on@2x.png" alt="" />
              <p>成效</p>
            </div>
            <div class="number">
              <img src="../../assets/shop/score-5-small-on@2x.png" alt="" />
              <p>服務</p>
            </div>
            <div class="number">
              <img src="../../assets/shop/score-3-small-on@2x.png" alt="" />
              <p>衛生</p>
            </div>
            <div class="number">
              <img src="../../assets/shop/score-1-small-on@2x.png" alt="" />
              <p>價錢</p>
            </div>
            <div class="number">
              <img src="../../assets/shop/score-4-small-on@2x.png" alt="" />
              <p>環境</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </base-container>
  </div>
</template>

<style scoped>
.shop-information .info {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.shop-information .el-row {
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 1rem;
}

.shop-information .info img {
  width: 1.5rem;
  margin-right: 0.5rem;
}

.shop-information .info p {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
}

.shop-information .numbers {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.shop-information .numbers .number img {
  width: 2rem;
}

.shop-information .numbers .number p {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
}
</style>