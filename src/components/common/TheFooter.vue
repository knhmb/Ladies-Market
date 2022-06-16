<template>
  <section class="footer">
    <base-container>
      <el-row justify="space-between">
        <el-col :sm="24" :md="8">
          <p class="copyright">
            Copyright © 2022 Ladies Market. All Rights Reserved.
          </p>
        </el-col>
        <el-col :sm="24" class="spans" :md="5">
          <span>使用條款</span>
          <span>私隱條例</span>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.footer {
  background-image: url("../../assets/home/footer-red@2x.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.footer .el-row {
  justify-content: center;
}

.footer p.copyright {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #f5f5f5;
}

.footer span {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #f5f5f5;
  /* display: inline-block; */
}

.footer .el-col.spans {
  margin-left: 2rem;
}

.footer span:first-of-type {
  margin-right: 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  padding-right: 1rem;
}

@media screen and (max-width: 991px) {
  .footer .el-col.spans {
    margin-left: 0;
    margin-top: 0.5rem;
  }
}
</style>