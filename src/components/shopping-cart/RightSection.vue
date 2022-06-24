<template>
  <div class="shopping-cart-right-section">
    <div class="card">
      <p>總值(4) :</p>
      <span class="points">3000分</span>
      <span>+</span>
      <span class="price">$6,690.00</span>
      <el-button>下一步</el-button>
    </div>
  </div>
</template>

<style scoped>
.shopping-cart-right-section .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 1rem;
}

.shopping-cart-right-section .card p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 0.5rem;
}

.shopping-cart-right-section .card span {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #ff9e45;
  color: #333;
}

.shopping-cart-right-section .card span.points {
  color: #ff9e45;
}

.shopping-cart-right-section .card span.price {
  color: #e16956;
}

.shopping-cart-right-section .card span:nth-of-type(2) {
  margin: 0 0.5rem;
}

.shopping-cart-right-section .card .el-button {
  background: linear-gradient(
      269.05deg,
      rgba(255, 142, 62, 0.6) 0%,
      rgba(255, 142, 62, 0) 100%
    ),
    #e16956;
  border-radius: 8px;
  border-color: #e16956;

  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 100%;
  margin-top: 1rem;
  padding: 1.3rem;
}
</style>