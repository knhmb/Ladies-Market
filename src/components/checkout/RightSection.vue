<template>
  <div class="checkout-right-section">
    <div class="card">
      <div class="header">
        <h5>訂單概覽</h5>
      </div>
      <div class="body">
        <div class="items">
          <div class="item">
            <p class="desc">會員積分賺取</p>
            <p class="price">45分</p>
          </div>
        </div>
        <div class="items">
          <div class="item">
            <p class="desc">貨品總值</p>
            <p class="price">8,400.00</p>
          </div>
          <div class="item">
            <p class="desc">已享折扣/優惠</p>
            <p class="price">-1,710.00</p>
          </div>
          <div class="item">
            <p class="desc">會員積分換購</p>
            <p class="price orange">3000分</p>
          </div>
        </div>
        <div class="items">
          <div class="item">
            <p class="desc">小計</p>
            <p class="price">6,690.00</p>
          </div>
          <div class="item">
            <p class="desc">積分</p>
            <p class="price orange">3000分</p>
          </div>
        </div>
        <div class="items">
          <div class="item">
            <p class="desc">總數 <span>4</span> 件貨品</p>
            <div>
              <p class="price orange">3000分</p>
              <p class="price plus">+</p>
              <p class="price red">$6,690.00</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <el-button>確認並付款</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkout-right-section .card {
  background: #ffffff;
  border-radius: 8px;
}

.checkout-right-section .card .header {
  padding: 1rem;
  padding-bottom: 0.5rem;
}

.checkout-right-section .card .header h5 {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
}

.checkout-right-section .card .body {
  padding: 1rem;
  padding-top: 0;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 1rem;
}

.checkout-right-section .card .body .items:not(:last-of-type) {
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 1rem;
}

.checkout-right-section .card .body .items .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
}

.checkout-right-section .card .body .items .item p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #666666;
}

.checkout-right-section .card .body .items:last-of-type .item p {
  display: inline-block;
}

.checkout-right-section .card .body .items:last-of-type .item p.plus {
  margin: 0 0.5rem;
}

.checkout-right-section .card .body .items .item p.desc span {
  color: #e16956;
}

.checkout-right-section .card .body .items .item p.price {
  font-weight: 500;
  color: #333333;
}

.checkout-right-section .card .body .items .item p.price.orange {
  color: #ff9e45;
}

.checkout-right-section .card .body .items .item p.price.red {
  color: #e16956;
}

.checkout-right-section .card .footer {
  padding: 1rem;
}

.checkout-right-section .card .footer .el-button {
  background: linear-gradient(
      269.05deg,
      rgba(255, 142, 62, 0.6) 0%,
      rgba(255, 142, 62, 0) 100%
    ),
    #e16956;
  border-color: #e16956;
  border-radius: 8px;
  padding: 1.3rem;

  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 100%;
}

@media screen and (max-width: 991px) {
  .checkout-right-section {
    margin-top: 1rem;
  }
}
</style>