<template>
  <section class="profile">
    <base-container>
      <el-row :gutter="15">
        <el-col :span="7">
          <left-section></left-section>
        </el-col>
        <el-col :span="17">
          <router-view></router-view>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
import LeftSection from "../components/profile/LeftSection.vue";

export default {
  components: {
    LeftSection,
  },
};
</script>