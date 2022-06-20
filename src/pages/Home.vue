<template>
  <section class="home">
    <base-container>
      <el-row :gutter="20">
        <el-col :sm="24" :md="17">
          <img class="banner" src="../assets/home/banner1@2x.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="7">
          <div class="card">
            <img src="../assets/home/default-avatar-unknown@2x.png" alt="" />
            <p>還未加入Ladies Market嗎？</p>
            <el-button class="register">立即註冊</el-button>
            <el-divider content-position="center">或</el-divider>
            <el-button class="login">登入</el-button>
          </div>
        </el-col>
      </el-row>
      <Items />
    </base-container>
    <latest-offers></latest-offers>
    <beauty-channel></beauty-channel>
    <Leaderboard />
    <Recommends />
  </section>
</template>

<script>
import Items from "../components/home/Items.vue";
import LatestOffers from "../components/home/LatestOffers.vue";
import BeautyChannel from "../components/home/BeautyChannel.vue";
import Leaderboard from "../components/home/Leaderboard.vue";
import Recommends from "../components/home/Recommends.vue";

export default {
  components: {
    Items,
    LatestOffers,
    BeautyChannel,
    Leaderboard,
    Recommends,
  },
};
</script>

<style scoped>
.home {
  padding: 2rem 0;
}

.home img.banner {
  width: 100%;
  border-radius: 1rem;
}

.home .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  padding: 2.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home .card img {
  width: 5rem;
  border-radius: 100%;
  border: 3px solid #ffffff;
  filter: drop-shadow(0px 0px 15px rgba(255, 146, 0, 0.3));
}

.home .card p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #808080;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.home .card .el-button.register {
  background: #ffd572;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;

  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #7d3f00;
}

.home .card .el-button {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  width: 100%;
  padding: 1.2rem;
}

.home .card .el-button.register {
  background: #ffd572;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  color: #7d3f00;
}

.home .card .el-button.login {
  background: linear-gradient(
      269.05deg,
      rgba(255, 142, 62, 0.6) 0%,
      rgba(255, 142, 62, 0) 100%
    ),
    #e16956;
  border-color: #e16956;
  border-radius: 8px;
  color: #ffffff;
}

.home .card .el-divider :deep(.el-divider__text) {
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #cccccc;
  padding: 0 0.5rem;
}

@media screen and (max-width: 991px) {
  .home img.banner {
    margin-bottom: 1rem;
  }
}
</style>