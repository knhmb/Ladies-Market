<template>
  <section class="shopping-cart">
    <base-container>
      <h5>購物車</h5>
      <Breadcrumb />
      <Cart />
    </base-container>
  </section>
</template>

<script>
import Breadcrumb from "../components/shopping-cart/Breadcrumb.vue";
import Cart from "../components/shopping-cart/Cart.vue";

export default {
  components: {
    Breadcrumb,
    Cart,
  },
};
</script>

<style scoped>
.shopping-cart {
  padding: 2rem 0;
  background: #f5f5f5;
}

.shopping-cart h5 {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #333333;
}
</style>