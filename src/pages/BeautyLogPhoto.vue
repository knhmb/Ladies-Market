<template>
  <section class="beauty-log-photo">
    <div class="card">
      <h5>相片</h5>
      <el-row :gutter="20">
        <el-col v-for="item in 18" :key="item" :span="8">
          <img src="../assets/home/sample-product@2x.png" alt="" />
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<style scoped>
.beauty-log-photo .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  padding: 1rem;
  max-height: 750px;
  overflow-y: scroll;
}

.beauty-log-photo .card .el-col {
  margin-bottom: 1rem;
}

.beauty-log-photo .card h5 {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 2rem;
}

.beauty-log-photo .card img {
  width: 100%;
  border-radius: 2px;
}

::-webkit-scrollbar {
  display: none;
}
</style>