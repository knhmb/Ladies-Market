<template>
  <div class="tab">
    <div
      @click="setTab('first')"
      :class="{ 'is-active': currentOption === 'first' }"
      class="single-tab"
    >
      <p>產品/服務</p>
    </div>
    <div
      @click="setTab('second')"
      :class="{ 'is-active': currentOption === 'second' }"
      class="single-tab"
    >
      <p>店舖</p>
    </div>
    <div
      @click="setTab('third')"
      :class="{ 'is-active': currentOption === 'third' }"
      class="single-tab"
    >
      <p>美容頻道</p>
    </div>
    <div
      @click="setTab('fourth')"
      :class="{ 'is-active': currentOption === 'fourth' }"
      class="single-tab"
    >
      <p>過往直播</p>
    </div>
  </div>
  <Card v-if="currentOption === 'first'" />
</template>

<script>
import Card from "./Card";

export default {
  components: {
    Card,
  },
  data() {
    return {
      currentOption: "first",
    };
  },
  methods: {
    setTab(option) {
      this.currentOption = option;
    },
  },
};
</script>

<style scoped>
.tab {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
}

.tab .single-tab {
  background: #f5f5f5;
  /* box-shadow: inset 0px -1px 0px #e6e6e6; */
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.tab .single-tab.is-active {
  background: #e2f2ef;
  box-shadow: inset 0px -3px 0px #c4d4d1;
}

.tab .single-tab:not(:last-of-type) {
  margin-right: 1rem;
}

.tab .single-tab.is-active p {
  color: #333333;
}

.tab .single-tab p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: #999999;
}
</style>