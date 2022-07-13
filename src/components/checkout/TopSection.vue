<template>
  <div class="checkout-top-section">
    <div class="card">
      <h5>訂購產品</h5>
      <inner-card></inner-card>
    </div>
  </div>
</template>

<script>
import InnerCard from "./InnerCard.vue";

export default {
  components: {
    InnerCard,
  },
};
</script>

<style scoped>
.checkout-top-section {
  margin-top: 1rem;
}

.checkout-top-section .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 1rem;
}

.checkout-top-section .card h5 {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 1rem;
}
</style>