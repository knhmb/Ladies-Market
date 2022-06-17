<template>
  <section class="wish-live-record">
    <base-container>
      <h5>願望</h5>
      <Tab />
    </base-container>
  </section>
</template>

<script>
import Tab from "../components/wish-product-service/Tab";

export default {
  components: {
    Tab,
  },
};
</script>

<style scoped>
.wish-live-record {
  padding: 2rem 0;
  background: #f9e9dc;
}

.wish-live-record h5 {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #333333;
}
</style>