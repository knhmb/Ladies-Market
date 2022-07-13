<template>
  <div class="price-details">
    <h5>訂單概覽</h5>
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
</template>

<style scoped>
.price-details {
  margin-top: 2rem;
}

.price-details h5 {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 1rem;
}

.price-details .items:not(:last-of-type) {
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 1rem;
}

.price-details .items .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
}

.price-details .items .item p {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #666666;
}

.price-details .items:last-of-type .item p {
  display: inline-block;
}

.price-details .items:last-of-type .item p.plus {
  margin: 0 0.5rem;
}

.price-details .items .item p.desc span {
  color: #e16956;
}

.price-details .items .item p.price {
  font-weight: 500;
  color: #333333;
}

.price-details .items .item p.price.orange {
  color: #ff9e45;
}

.price-details .items .item p.price.red {
  color: #e16956;
}
</style>