<template>
  <div class="beauty-channel-left-section">
    <el-row :gutter="15">
      <el-col :sm="24" :md="16">
        <div class="img-content">
          <img src="../../assets/wish/sample-live@2x.png" alt="" />
          <div class="box">
            <img src="../../assets/beauty-channel/live@2x.png" alt="" />
            <p>直播中</p>
          </div>
        </div>

        <div class="share">
          <div class="share-one">
            <img src="../../assets/beauty-channel/avatar-2.png" alt="" />
            <div class="content">
              <p>
                直播名稱直播名稱直播名稱直播名稱直播名稱直播名稱直播名稱直播名稱直播名稱
              </p>
              <p>Beauty Store</p>
            </div>
          </div>
          <div class="share-two">
            <div class="icons">
              <img src="../../assets/beauty-channel/share@2x.png" alt="" />
              <img
                src="../../assets/beauty-channel/shop-detail-wish-off@2x.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </el-col>
      <el-col :sm="24" :md="8">
        <right-section></right-section>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RightSection from "./RightSection.vue";

export default {
  components: {
    RightSection,
  },
};
</script>

<style scoped>
.beauty-channel-left-section {
  margin-top: 2rem;
}

.beauty-channel-left-section .img-content {
  position: relative;
}

.beauty-channel-left-section img {
  width: 100%;
  border-radius: 1rem;
}

.beauty-channel-left-section .box {
  background: #f35349;
  border-radius: 4px;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0.8rem;
  bottom: 0.8rem;
}

.beauty-channel-left-section .box p {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.beauty-channel-left-section .box img {
  width: 1.3rem;
  margin-right: 0.3rem;
}

.beauty-channel-left-section .share {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.beauty-channel-left-section .share .share-one {
  display: flex;
  align-items: center;
}

.beauty-channel-left-section .share .share-one img {
  width: 2.5rem;
  margin-right: 0.5rem;
}

.beauty-channel-left-section .share .share-one .content p {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  max-width: 90%;
}

.beauty-channel-left-section .share .share-one .content p:nth-of-type(2) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #999999;
  margin-top: 0.2rem;
}

.beauty-channel-left-section .share .share-two .icons img {
  width: 2rem;
}

.beauty-channel-left-section .share .share-two .icons img:first-of-type {
  margin-right: 0.5rem;
}
</style>