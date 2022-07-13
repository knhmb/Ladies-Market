<template>
  <div class="shop-feedback">
    <base-container>
      <div class="tab-content">
        <img class="tab-img" src="../../assets/home/tab2-left@2x.png" alt="" />
        <p class="tab">客戶留言</p>
        <img class="tab-img" src="../../assets/home/tab2-right@2x.png" alt="" />
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
.shop-feedback {
  margin: 2rem 0;
}

.shop-feedback .container {
  padding: 0 13rem;
}

.shop-feedback .tab-content p.tab {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #4d4d4d;
  background: #fef2e2;
}
.shop-feedback .tab-content {
  display: flex;
}

.shop-feedback .tab-content img.tab-img {
  width: 1.5rem;
}

.shop-feedback .main-content {
  background: #fef2e2;
  padding: 1rem 0;
}

.shop-feedback .card {
  background: #ffffff;
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
}

.shop-feedback .card .avatar img {
  width: 2rem;
  border-radius: 100%;
  margin-right: 0.7rem;
}

.shop-feedback .card .content h5 {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #333333;
}

.shop-feedback .card .content p.info {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #808080;
  margin-top: 0.3rem;
}

.shop-feedback .card .content span {
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

.shop-feedback .card .content span:first-of-type {
  border-right: 1px solid #e6e6e6;
  padding-right: 0.5rem;
}

.shop-feedback .card .content span:nth-of-type(2) {
  margin-left: 0.5rem;
}

.shop-feedback .card .images {
  margin-top: 0.5rem;
}

.shop-feedback .card .content img {
  width: 4.5rem;
  border-radius: 2px;
}

.shop-feedback .card .content img:not(:last-of-type) {
  margin-right: 0.5rem;
}

.shop-feedback .main-content .el-button {
  border: 1px solid #666666;
  border-radius: 8px;
  background: transparent;

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
  .shop-feedback .container {
    padding: 0 1rem;
  }

  .shop-feedback .card {
    margin-bottom: 1rem;
  }
}
</style>