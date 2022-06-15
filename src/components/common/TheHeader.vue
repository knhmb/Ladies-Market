<template>
  <section class="the-header">
    <base-container>
      <el-row class="hidden-sm-and-down" justify="space-between">
        <el-col style="cursor: pointer" :sm="24" :md="2">
          <img src="../../assets/header/header-home@2x.png" alt="" />
          <p>Home</p>
        </el-col>
        <el-col :sm="24" :md="22">
          <img
            class="logo"
            src="../../assets/header/brand-logo@2x.png"
            alt=""
          />
          <img
            class="streaming-img"
            src="../..//assets/header/status-streaming@2x.png"
            alt=""
          />
          <div class="options">
            <div class="option">
              <img
                src="../../assets/header/header-notification@2x.png"
                alt=""
              />
              <p>NEWS</p>
            </div>
            <div class="option">
              <img
                src="../../assets/header/header-notification@2x.png"
                alt=""
              />
              <p>ESHOP</p>
            </div>
            <div class="option">
              <img
                src="../../assets/header/header-notification@2x.png"
                alt=""
              />
              <p>WISH</p>
            </div>
            <div class="option">
              <img
                src="../../assets/header/header-notification@2x.png"
                alt=""
              />
              <p>CART</p>
            </div>
            <div class="option">
              <img
                src="../../assets/header/header-notification@2x.png"
                alt=""
              />
              <p>MEMBER</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="mobile-menu hidden-md-and-up">
        <img src="../../assets/header/header-home@2x.png" alt="" />
        <img class="logo" src="../../assets/header/brand-logo@2x.png" alt="" />
        <div class="options">
          <div class="option">
            <img src="../../assets/header/header-search-white@2x.png" alt="" />
            <img src="../../assets/header/header-notification@2x.png" alt="" />
          </div>
        </div>
      </div>
    </base-container>
  </section>
</template>

<style scoped>
.the-header {
  background-image: url("../../assets/header/header-red@2x.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.the-header .el-row {
  align-items: center;
}

.the-header .el-col {
  display: flex;
  align-items: center;
}

.the-header .el-col:nth-of-type(2) {
  justify-content: flex-end;
}

.the-header .el-col:first-of-type {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.the-header img {
  width: 1.3rem;
  /* margin: 0 auto; */
}

.the-header .el-col:nth-of-type(2) img.logo {
  cursor: pointer;
}

.the-header .el-col:nth-of-type(2) img.logo,
.the-header .el-col:nth-of-type(2) img.streaming-img {
  margin: 0;
  width: 6rem;
}

.the-header .el-col:nth-of-type(2) img.streaming-img {
  width: 4rem;
  margin: 0 1rem 0 5rem;
}

.the-header .options {
  display: flex;
}

.the-header .options .option {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.the-header .options .option:not(:last-of-type) {
  margin-right: 1.5rem;
}

.the-header .options .option img {
  margin: 0 auto;
  display: block;
}

.the-header .el-col:nth-of-type(2) img {
  display: inline-block;
  width: 1.3rem;
  margin: 0;
}

.the-header p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-align: center;
}

.the-header .mobile-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.the-header .mobile-menu img.logo {
  width: 6rem;
}

.the-header .mobile-menu .option {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.the-header .mobile-menu .option img:first-of-type {
  margin-right: 1rem;
}
</style>