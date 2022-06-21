<template>
  <div class="product-right-section">
    <div class="card">
      <p class="discount">$2,800.00</p>
      <p class="price">$2,230.00</p>
      <el-button
        ><img
          src="../../assets/beauty-channel/vector-1.png"
          alt=""
        />加入購物車</el-button
      >
    </div>
  </div>
</template>

<style scoped>
.product-right-section .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding: 0.7rem;
}

.product-right-section .card p.discount {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  text-decoration-line: line-through;
  color: #999999;
}

.product-right-section .card p.price {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #e16956;
}

.product-right-section .card .el-button {
  background: #e16956;
  border-color: #e16956;
  border-radius: 8px;

  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 100%;
  padding: 1.3rem;
  margin-top: 1rem;
}

.product-right-section .card .el-button img {
  width: 1.1rem;
  margin-right: 0.5rem;
}

@media screen and (max-width: 991px) {
  .product-right-section {
    margin: 1.5rem 0;
  }
}
</style>