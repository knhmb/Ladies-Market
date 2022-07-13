<template>
  <div class="beauty-log-order-record-tab">
    <div class="tab">
      <div class="content">
        <div
          @click="setOption('first')"
          :class="{
            'is-active': currentOption === 'first',
          }"
          class="single-tab"
        >
          已付款
        </div>
        <div
          @click="setOption('second')"
          :class="{
            'is-active': currentOption === 'second',
          }"
          class="single-tab"
        >
          已發貨
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentOption: "first",
    };
  },
  methods: {
    setOption(option) {
      this.currentOption = option;
    },
  },
};
</script>

<style scoped>
.beauty-log-order-record-tab .tab {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 0 0.5rem;
  margin-top: 1rem;
}

.beauty-log-order-record-tab .tab .content {
  display: flex;
}

.beauty-log-order-record-tab .tab .content .single-tab {
  background: #f5f5f5;
  padding: 0.8rem 1.5rem;

  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: #999999;
  cursor: pointer;
}

.beauty-log-order-record-tab .tab .content .single-tab.is-active {
  box-shadow: inset 0px -3px 0px #09c0e0;
  color: #333;
  font-weight: 500;
}
</style>