<template>
  <div class="items">
    <el-row justify="space-between">
      <el-col v-for="item in items" :key="item" :xs="6" :sm="6" :md="3">
        <div class="item-content">
          <img :src="item.img" />
          <p>{{ item.name }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "保濕",
          img: require("../../assets/home/category-mz@2x.png"),
        },
        {
          name: "美白",
          img: require("../../assets/home/category-wt@2x.png"),
        },
        {
          name: "嫩膚",
          img: require("../../assets/home/category-sr@2x.png"),
        },
        {
          name: "塑形",
          img: require("../../assets/home/category-sp@2x.png"),
        },
        {
          name: "按摩",
          img: require("../../assets/home/category-ms@2x.png"),
        },
        {
          name: "醫美",
          img: require("../../assets/home/category-am@2x.png"),
        },
        {
          name: "美睫/眉毛",
          img: require("../../assets/home/category-es@2x.png"),
        },
        {
          name: "脫毛",
          img: require("../../assets/home/category-hr@2x.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.items {
  margin-top: 2rem;
}

.items .item-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.items .item-content img {
  width: 4rem;
}

.items .item-content p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #000000;
  margin-top: 0.5rem;
}

@media screen and (max-width: 991px) {
  .items .item-content {
    margin-bottom: 1rem;
  }
}
</style>