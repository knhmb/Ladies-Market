<template>
  <div class="card-content">
    <div class="information">
      <div class="content">
        <div class="single-info">
          <p class="question">訂單號碼</p>
          <p class="answer">ABCD123456789</p>
        </div>
        <div class="single-info">
          <p class="question">訂單日期</p>
          <p class="answer">2022-11-11</p>
        </div>
        <div class="single-info">
          <p class="question">訂購人名稱</p>
          <p class="answer">Chan Tai Man</p>
        </div>
        <div class="single-info">
          <p class="question">訂單狀態</p>
          <p class="answer is-colored">已付款</p>
        </div>
        <div class="single-info">
          <p class="question">總計</p>
          <p class="answer is-colored">$4520.00</p>
        </div>
      </div>
      <img src="../../assets/profile/chevron-right-gray@2x.png" alt="" />
    </div>
    <div class="images">
      <img src="../../assets/home/sample-product@2x.png" alt="" />
      <img src="../../assets/home/sample-product@2x.png" alt="" />
      <img src="../../assets/home/sample-product@2x.png" alt="" />
      <img src="../../assets/home/sample-product@2x.png" alt="" />
      <img src="../../assets/home/sample-product@2x.png" alt="" />
    </div>
  </div>
  <div class="card-content">
    <div class="information">
      <div class="content">
        <div class="single-info">
          <p class="question">訂單號碼</p>
          <p class="answer">ABCD123456789</p>
        </div>
        <div class="single-info">
          <p class="question">訂單日期</p>
          <p class="answer">2022-11-11</p>
        </div>
        <div class="single-info">
          <p class="question">訂購人名稱</p>
          <p class="answer">Chan Tai Man</p>
        </div>
        <div class="single-info">
          <p class="question">訂單狀態</p>
          <p class="answer is-colored">已付款</p>
        </div>
        <div class="single-info">
          <p class="question">總計</p>
          <p class="answer is-colored">$4520.00</p>
        </div>
      </div>
      <img src="../../assets/profile/chevron-right-gray@2x.png" alt="" />
    </div>
    <div class="images">
      <img src="../../assets/home/sample-product@2x.png" alt="" />
      <img src="../../assets/home/sample-product@2x.png" alt="" />
      <img src="../../assets/home/sample-product@2x.png" alt="" />
      <img src="../../assets/home/sample-product@2x.png" alt="" />
      <img src="../../assets/home/sample-product@2x.png" alt="" />
    </div>
  </div>
  <div class="card-content">
    <div class="information">
      <div class="content">
        <div class="single-info">
          <p class="question">訂單號碼</p>
          <p class="answer">ABCD123456789</p>
        </div>
        <div class="single-info">
          <p class="question">訂單日期</p>
          <p class="answer">2022-11-11</p>
        </div>
        <div class="single-info">
          <p class="question">訂購人名稱</p>
          <p class="answer">Chan Tai Man</p>
        </div>
        <div class="single-info">
          <p class="question">訂單狀態</p>
          <p class="answer is-colored">已付款</p>
        </div>
        <div class="single-info">
          <p class="question">總計</p>
          <p class="answer is-colored">$4520.00</p>
        </div>
      </div>
      <img src="../../assets/profile/chevron-right-gray@2x.png" alt="" />
    </div>
    <div class="images">
      <img src="../../assets/home/sample-product@2x.png" alt="" />
      <img src="../../assets/home/sample-product@2x.png" alt="" />
      <img src="../../assets/home/sample-product@2x.png" alt="" />
      <img src="../../assets/home/sample-product@2x.png" alt="" />
      <img src="../../assets/home/sample-product@2x.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.card-content {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1.5rem;
  box-shadow: none;
}

.card-content .information {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-content .information img {
  width: 1.5rem;
}

.card-content .information .content {
  width: 55%;
}

.card-content .information .single-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-content .information .single-info:not(:last-of-type) {
  margin-bottom: 1rem;
}

.card-content .information .single-info p.question {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #666666;
}

.card-content .information .single-info p.answer {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
}

.card-content .information .single-info p.answer.is-colored {
  font-weight: 600;
  color: #e16956;
}

.card-content .images {
  margin-top: 1rem;
}

.card-content .images img {
  width: 6.5rem;
  border-radius: 2px;
}

.card-content .images img:not(:last-of-type) {
  margin-right: 0.5rem;
}
</style>