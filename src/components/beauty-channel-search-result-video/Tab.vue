<template>
  <h5>搜尋: <span>化妝技巧</span></h5>
  <div class="tab">
    <div
      @click="setOption('/beauty-channel-search-result-video')"
      :class="{
        'is-active': $route.path === '/beauty-channel-search-result-video',
      }"
      class="content"
    >
      <p>美容頻道(20)</p>
    </div>
    <div
      @click="setOption('second')"
      :class="{ 'is-active': currentOption === 'second' }"
      class="content"
    >
      <p>過往直播(40)</p>
    </div>
  </div>
  <div class="filter">
    <p>共 <span>20</span> 段影片</p>
    <div class="filter-right">
      <img src="../../assets/beauty-channel/vector.png" alt="" />
      <p>篩選</p>
      <img src="../../assets/beauty-channel/Union.png" alt="" />
      <p>排序</p>
    </div>
  </div>
  <first-section
    v-if="$route.path === '/beauty-channel-search-result-video'"
  ></first-section>
  <second-section></second-section>
  <first-section
    v-if="$route.path === '/beauty-channel-search-result-video'"
  ></first-section>
  <second-section></second-section>
  <first-section
    v-if="$route.path === '/beauty-channel-search-result-video'"
  ></first-section>
</template>

<script>
import FirstSection from "./FirstSection.vue";
import SecondSection from "../e-shop/SecondSection.vue";

export default {
  components: {
    FirstSection,
    SecondSection,
  },
  data() {
    return {
      currentOption: "first",
    };
  },
  methods: {
    setOption(option) {
      this.$router.push(option);
    },
  },
};
</script>

<style scoped>
h5 {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #999999;
  margin-bottom: 1rem;
}

h5 span {
  color: #333333;
}

.tab {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 0.5rem;
  padding-bottom: 0;
  display: flex;
  align-items: center;
}

.tab .content {
  background: #f5f5f5;
  /* box-shadow: inset 0px -3px 0px #e16956; */
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.tab .content.is-active {
  box-shadow: inset 0px -3px 0px #e16956;
}

.tab .content:first-of-type {
  margin-right: 0.5rem;
}

.tab .content p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: #999999;
}

.tab .content.is-active p {
  color: #333333;
}

.filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
}

.filter p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
}

.filter p span {
  color: #e16956;
}

.filter .filter-right {
  display: flex;
  align-items: center;
}

.filter .filter-right p:first-of-type {
  margin-right: 1rem;
}

.filter .filter-right img {
  width: 1rem;
  margin-right: 0.5rem;
}
</style>