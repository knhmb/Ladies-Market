<template>
  <div class="product-bottom-section">
    <base-container>
      <div class="tab-content">
        <img class="tab-img" src="../../assets/home/tab1-left@2x.png" alt="" />
        <p class="tab">客戶留言</p>
        <img class="tab-img" src="../../assets/home/tab1-right@2x.png" alt="" />
      </div>
    </base-container>
    <div class="main-content">
      <base-container>
        <el-row :gutter="15">
          <el-col v-for="item in 3" :key="item" :sm="12" :md="8">
            <div class="card">
              <div class="avatar">
                <img
                  class="avatar-img"
                  src="../../assets/beauty-channel/avatar-sample02@2x.png"
                  alt=""
                />
              </div>
              <div class="content">
                <h5>美評標題</h5>
                <p class="info">
                  美評內容美評內容美評內容美評內容美評內容美評內容美評內容美評內容美評內容美評內容美評內容美評內容美評內容美評內容美評內容
                </p>
                <span>User123456</span>
                <span>2022-11-11</span>
                <div class="images">
                  <img src="../../assets/home/sample-product@2x.png" alt="" />
                  <img src="../../assets/home/sample-product@2x.png" alt="" />
                  <img src="../../assets/home/sample-product@2x.png" alt="" />
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-button>撰寫美評</el-button>
      </base-container>
    </div>
  </div>
</template>

<style scoped>
.product-bottom-section {
  margin: 2rem 0;
}

.product-bottom-section .container {
  padding: 0 13rem;
}

.product-bottom-section .tab-content p.tab {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #4d4d4d;
  background: #e2f2ef;
}
.product-bottom-section .tab-content {
  display: flex;
}

.product-bottom-section .tab-content img.tab-img {
  width: 1.5rem;
}

.product-bottom-section .main-content {
  background: #e2f2ef;
  padding: 1rem 0;
}

.product-bottom-section .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
}

.product-bottom-section .card .avatar img {
  width: 2rem;
  border-radius: 100%;
  margin-right: 0.7rem;
}

.product-bottom-section .card .content h5 {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #333333;
}

.product-bottom-section .card .content p.info {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #808080;
  margin-top: 0.3rem;
}

.product-bottom-section .card .content span {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #808080;
  margin-top: 0.5rem;
  display: inline-block;
}

.product-bottom-section .card .content span:first-of-type {
  border-right: 1px solid #e6e6e6;
  padding-right: 0.5rem;
}

.product-bottom-section .card .content span:nth-of-type(2) {
  margin-left: 0.5rem;
}

.product-bottom-section .card .images {
  margin-top: 0.5rem;
}

.product-bottom-section .card .content img {
  width: 4.5rem;
  border-radius: 2px;
}

.product-bottom-section .card .content img:not(:last-of-type) {
  margin-right: 0.5rem;
}

.product-bottom-section .main-content .el-button {
  border: 1px solid #666666;
  border-radius: 8px;
  background: #e2f2ef;

  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #4d4d4d;
  display: flex;
  margin: 1.5rem auto 0 auto;
  width: 19rem;
}

@media screen and (max-width: 991px) {
  .product-bottom-section .container {
    padding: 0 1rem;
  }

  .product-bottom-section .card {
    margin-bottom: 1rem;
  }
}
</style>