<template>
  <div class="checkout-top-section-inner-card">
    <div class="header">
      <p>店舖名稱店舖名稱店舖名稱</p>
    </div>
    <div class="content">
      <el-row>
        <el-col :sm="24" :md="16">
          <img src="../../assets/home/sample-product@2x.png" alt="" />
          <div class="text">
            <p>產品名稱產品名稱產品名稱產品名稱產品名稱</p>
            <p>數量: 1</p>
          </div>
        </el-col>
        <el-col :sm="24" :md="8">
          <p class="discount">$2,800.00</p>
          <p class="price">$2,800.00</p>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <el-row>
        <el-col :sm="24" :md="16">
          <img src="../../assets/home/sample-product@2x.png" alt="" />
          <div class="text">
            <p>產品名稱產品名稱產品名稱產品名稱產品名稱</p>
            <p>數量: 1</p>
          </div>
        </el-col>
        <el-col :sm="24" :md="8">
          <!-- <p class="discount">$2,800.00</p> -->
          <p class="points">3,000分</p>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <el-row>
        <el-col :sm="24" :md="16">
          <img src="../../assets/home/sample-product@2x.png" alt="" />
          <div class="text">
            <p>產品名稱產品名稱產品名稱產品名稱產品名稱</p>
            <p>數量: 1</p>
          </div>
        </el-col>
        <el-col :sm="24" :md="8">
          <p class="discount">$2,800.00</p>
          <p class="price">$2,800.00</p>
        </el-col>
      </el-row>
    </div>
  </div>

  <div class="checkout-top-section-inner-card">
    <div class="header">
      <p>店舖名稱店舖名稱店舖名稱</p>
    </div>
    <div class="content">
      <el-row>
        <el-col :sm="24" :md="16">
          <img src="../../assets/home/sample-product@2x.png" alt="" />
          <div class="text">
            <p>產品名稱產品名稱產品名稱產品名稱產品名稱</p>
            <p>數量: 1</p>
          </div>
        </el-col>
        <el-col :sm="24" :md="8">
          <p class="discount">$2,800.00</p>
          <p class="price">$2,800.00</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.checkout-top-section-inner-card {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.checkout-top-section-inner-card .header {
  border-bottom: 1px solid #e6e6e6;
  padding: 1rem;
}

.checkout-top-section-inner-card .header p {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
}

.checkout-top-section-inner-card .el-col:first-of-type {
  display: flex;
  align-items: flex-start;
}

.checkout-top-section-inner-card .el-col:nth-of-type(2) {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}

.checkout-top-section-inner-card .content {
  padding: 1rem;
}

.checkout-top-section-inner-card .content:not(:last-of-type) {
  border-bottom: 1px solid #e6e6e6;
}

.checkout-top-section-inner-card .content img {
  width: 6rem;
  border-radius: 2px;
  margin-right: 0.5rem;
}

.checkout-top-section-inner-card .content .text p {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
}

.checkout-top-section-inner-card .content .text p:first-of-type {
  margin-bottom: 1rem;
}

.checkout-top-section-inner-card .content p.discount {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  text-decoration-line: line-through;
  color: #999999;
}

.checkout-top-section-inner-card .content p.price,
.checkout-top-section-inner-card .content p.points {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #e16956;
}

.checkout-top-section-inner-card .content p.points {
  color: #ff9e45;
}
</style>