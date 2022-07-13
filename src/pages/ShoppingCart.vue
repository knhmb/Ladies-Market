<template>
  <section class="shopping-cart">
    <base-container>
      <h5>購物車</h5>
      <el-row :gutter="20">
        <el-col :sm="24" :md="17">
          <Breadcrumb />
          <Cart />
        </el-col>
        <el-col :sm="24" :md="7">
          <right-section></right-section>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
import Breadcrumb from "../components/shopping-cart/Breadcrumb.vue";
import Cart from "../components/shopping-cart/Cart.vue";
import RightSection from "../components/shopping-cart/RightSection.vue";

export default {
  components: {
    Breadcrumb,
    Cart,
    RightSection,
  },
};
</script>

<style scoped>
.shopping-cart {
  padding: 2rem 0;
  background: #f5f5f5;
}

.shopping-cart h5 {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 1rem;
}
</style>