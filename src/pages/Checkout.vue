<template>
  <section class="checkout">
    <base-container>
      <el-row :gutter="20">
        <el-col :span="17">
          <Breadcrumb />
          <top-section></top-section>
          <Form />
        </el-col>
        <el-col :span="7">
          <right-section></right-section>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
import Breadcrumb from "../components/shopping-cart/Breadcrumb.vue";
import TopSection from "../components/checkout/TopSection.vue";
import Form from "../components/checkout/Form.vue";
import RightSection from "../components/checkout/RightSection.vue";

export default {
  components: {
    Breadcrumb,
    TopSection,
    Form,
    RightSection,
  },
};
</script>

<style scoped>
.checkout {
  padding: 2rem 0;
  background: #f5f5f5;
}
</style>