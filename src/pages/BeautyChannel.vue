<template>
  <section class="beauty-channel">
    <base-container>
      <h5>直播</h5>
      <left-section></left-section>
    </base-container>
    <beauty-channel-carousel></beauty-channel-carousel>
    <base-container>
      <el-input
        :prefix-icon="Search"
        class="search"
        placeholder="搜尋影片或直播相關字眼"
      ></el-input>
    </base-container>
    <live-video-carousel></live-video-carousel>
    <beauty-channel></beauty-channel>
  </section>
</template>

<script>
import LeftSection from "../components/beauty-channel/LeftSection.vue";
import BeautyChannelCarousel from "../components/beauty-channel/BeautyChannelCarousel.vue";
import LiveVideoCarousel from "../components/beauty-channel/LiveVideoCarousel.vue";
import BeautyChannel from "../components/home/BeautyChannel.vue";
import { Search } from "@element-plus/icons-vue";

export default {
  components: {
    LeftSection,
    BeautyChannelCarousel,
    LiveVideoCarousel,
    BeautyChannel,
  },
  data() {
    return {
      Search,
    };
  },
};
</script>

<style scoped>
.beauty-channel {
  padding: 2rem 0;
}

.beauty-channel h5 {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #333333;
}

.beauty-channel .el-input.search {
  margin-top: 1rem;
}

.beauty-channel .el-input.search :deep(.el-input__wrapper) {
  background: #ffffff;
  border-radius: 8px;
}
</style>