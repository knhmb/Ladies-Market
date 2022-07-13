<template>
  <section class="beauty-log-comment">
    <div class="card">
      <h5>美評</h5>
      <Card />
    </div>
  </section>
</template>

<script>
import Card from "../components/beauty-log-comment/Card.vue";

export default {
  components: {
    Card,
  },
};
</script>

<style scoped>
.beauty-log-comment .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  padding: 1rem;
}

.beauty-log-comment .card h5 {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #333333;
}
</style>