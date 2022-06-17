<template>
  <div class="tab">
    <div
      @click="navigate('/wish-product-and-service')"
      :class="{ 'is-active': $route.path === '/wish-product-and-service' }"
      class="single-tab"
    >
      <p>產品/服務</p>
    </div>
    <div
      @click="navigate('/wish-store')"
      :class="{ 'is-active': $route.path === '/wish-store' }"
      class="single-tab"
    >
      <p>店舖</p>
    </div>
    <div
      @click="navigate('/wish-beauty-channel')"
      :class="{ 'is-active': $route.path === '/wish-beauty-channel' }"
      class="single-tab"
    >
      <p>美容頻道</p>
    </div>
    <div
      @click="navigate('/wish-live-record')"
      :class="{ 'is-active': $route.path === '/wish-live-record' }"
      class="single-tab"
    >
      <p>過往直播</p>
    </div>
  </div>
  <Card v-if="$route.path === '/wish-product-and-service'" />
  <wish-store-card v-if="$route.path === '/wish-store'"></wish-store-card>
  <wish-beauty-channel-card
    v-if="$route.path === '/wish-beauty-channel'"
  ></wish-beauty-channel-card>
  <wish-live-record-card
    v-if="$route.path === '/wish-live-record'"
  ></wish-live-record-card>
</template>

<script>
import Card from "./Card";
import WishStoreCard from "../wish-store/Card";
import WishBeautyChannelCard from "../wish-beauty-channel/Card";
import WishLiveRecordCard from "../wish-live-record/Card";

export default {
  components: {
    Card,
    WishStoreCard,
    WishBeautyChannelCard,
    WishLiveRecordCard,
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
    navigate(path) {
      this.$router.push(path);
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

@media screen and (max-width: 991px) {
  .tab .single-tab {
    padding: 0.5rem 0.3rem;
  }
}
</style>