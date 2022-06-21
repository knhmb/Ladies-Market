<template>
  <div class="leaderboard">
    <base-container>
      <div class="tab-content">
        <img class="tab-img" src="../../assets/home/tab3-left@2x.png" alt="" />
        <p class="tab">排行榜</p>
        <img class="tab-img" src="../../assets/home/tab3-right@2x.png" alt="" />
      </div>
    </base-container>
    <div class="leaderboard-main">
      <base-container>
        <el-row :gutter="15">
          <el-col :sm="12" :md="8" v-for="item in items" :key="item">
            <div class="card">
              <el-row>
                <div class="inner-card">
                  <el-col :span="12">
                    <img src="../../assets/home/sample-shop@2x.png" alt="" />
                  </el-col>
                  <el-col :span="12">
                    <div class="content">
                      <img :src="item.img" alt="" />
                      <p>店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱</p>
                    </div>
                  </el-col>
                </div>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </base-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          img: require("../../assets/home/reward-1@2x.png"),
        },
        {
          img: require("../../assets/home/reward-2@2x.png"),
        },
        {
          img: require("../../assets/home/reward-3@2x.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.leaderboard {
  margin-top: 2rem;
}

.leaderboard .container {
  padding: 0 14rem;
}

.leaderboard p.tab {
  background: #f7f6f2;
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #4d4d4d;
  padding: 0.2rem;
}

.leaderboard .tab-content {
  display: flex;
}

.leaderboard .tab-content img.tab-img {
  width: 1.5rem;
}

.leaderboard .leaderboard-main {
  background: #f7f6f2;
  padding: 1.5rem 0;
}

.leaderboard .leaderboard-main .card {
  margin-bottom: 1rem;
}

.leaderboard .leaderboard-main .card .inner-card {
  background: #fff;
  border-radius: 8px;
  display: flex;
}

.leaderboard .leaderboard-main .card .inner-card .el-col:nth-of-type(2) {
  display: flex;
  align-items: center;
}

.leaderboard .leaderboard-main .card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 0 0 8px;
}

.leaderboard .leaderboard-main .card .content {
  padding: 0.5rem;
  display: flex;
  align-items: center;
}

.leaderboard .leaderboard-main .card .content p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
}

.leaderboard .leaderboard-main .card .content img {
  width: 1.3rem;
  margin-right: 0.5rem;
}

@media screen and (max-width: 991px) {
  .leaderboard .container {
    padding: 0 1rem;
  }
}
</style>