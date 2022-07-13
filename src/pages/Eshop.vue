<template>
  <section class="e-shop">
    <base-container>
      <h5>店舖</h5>
      <first-section></first-section>
      <second-section></second-section>
      <first-section></first-section>
      <second-section></second-section>
      <first-section></first-section>
    </base-container>
  </section>
</template>

<script>
import FirstSection from "../components/e-shop/FirstSection.vue";
import SecondSection from "../components/e-shop/SecondSection.vue";

export default {
  components: {
    FirstSection,
    SecondSection,
  },
};
</script>

<style scoped>
.e-shop {
  padding: 2rem 0;
}

.e-shop h5 {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #333333;
}
</style>