<template>
  <section class="beauty-log-order-record">
    <div class="card">
      <h5>已購買</h5>
      <Tab />
      <Card />
    </div>
  </section>
</template>

<script>
import Tab from "../components/profile-tab/Tab.vue";
import Card from "../components/beauty-log-order-record/Card.vue";

export default {
  components: {
    Tab,
    Card,
  },
};
</script>

<style scoped>
.beauty-log-order-record .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  padding: 1rem;
}

.beauty-log-order-record .card h5 {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #333333;
}
</style>