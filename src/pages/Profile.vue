<template>
  <section class="profile">
    <base-container>
      <el-row :gutter="15">
        <el-col :sm="24" :md="7">
          <left-section></left-section>
        </el-col>
        <el-col :sm="24" :md="17">
          <router-view></router-view>
        </el-col>
      </el-row>
    </base-container>
    <section-1></section-1>
    <second-section></second-section>
    <beauty-channel></beauty-channel>
    <live-video></live-video>
  </section>
</template>

<script>
import LeftSection from "../components/profile/LeftSection.vue";
import Section1 from "../components/profile/Section1.vue";
import SecondSection from "../components/profile/SecondSection.vue";
import LiveVideo from "../components/profile/LiveVideo.vue";
import BeautyChannel from "../components/profile/BeautyChannel.vue";

export default {
  components: {
    LeftSection,
    Section1,
    SecondSection,
    LiveVideo,
    BeautyChannel,
  },
};
</script>