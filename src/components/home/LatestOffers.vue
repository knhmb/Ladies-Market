<template>
  <div class="latest-offers">
    <base-container>
      <div class="tab-content">
        <img class="tab-img" src="../../assets/home/tab1-left@2x.png" alt="" />
        <p class="tab">最新優惠</p>
        <img class="tab-img" src="../../assets/home/tab1-right@2x.png" alt="" />
      </div>
    </base-container>

    <div class="latest-offers-main">
      <base-container>
        <el-carousel indicator-position="none" arrow="always" height="90vh">
          <el-carousel-item>
            <el-row :gutter="20">
              <el-col
                v-for="item in items"
                :key="item"
                :sm="12"
                :md="8"
                :lg="6"
              >
                <div class="card">
                  <img src="../../assets/home/sample-product@2x.png" alt="" />
                  <div class="card-body">
                    <p class="title">
                      推廣產品名稱推廣產品名稱推廣產品名稱產品名稱產品名稱產品名稱
                    </p>
                    <p class="description">
                      店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱
                    </p>
                    <p class="discount">
                      {{ item.discount ? item.discount : "" }}
                    </p>
                    <p class="price">
                      {{ item.price ? item.price : "" }}
                    </p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
        <!-- <el-row :gutter="20">
          <el-col v-for="item in items" :key="item" :span="6">
            <div class="card">
              <img src="../../assets/home/sample-product@2x.png" alt="" />
              <div class="card-body">
                <p class="title">
                  推廣產品名稱推廣產品名稱推廣產品名稱產品名稱產品名稱產品名稱
                </p>
                <p class="description">
                  店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱
                </p>
                <p class="discount">
                  {{ item.discount ? item.discount : "" }}
                </p>
                <p class="price">
                  {{ item.price ? item.price : "" }}
                </p>
              </div>
            </div>
          </el-col>
        </el-row> -->
      </base-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          price: null,
          discount: null,
        },
        {
          price: null,
          discount: null,
        },
        {
          price: null,
          discount: null,
        },
        {
          price: null,
          discount: null,
        },
        {
          price: "$2,230.00",
          discount: "$2,800.00",
        },
        {
          price: "$2,230.00",
          discount: "$2,800.00",
        },
        {
          price: "$2,230.00",
          discount: "$2,800.00",
        },
        {
          price: "$2,230.00",
          discount: "$2,800.00",
        },
      ],
    };
  },
};
</script>

<style scoped>
.latest-offers {
  margin-top: 3rem;
}

.latest-offers .container {
  padding: 0 14rem;
}

.latest-offers p.tab {
  background: #e2f2ef;
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #4d4d4d;
  padding: 0.2rem;
}

.latest-offers .tab-content {
  display: flex;
}

.latest-offers .tab-content img.tab-img {
  width: 1.5rem;
  /* margin-left: 0.2rem; */
}

.latest-offers .latest-offers-main {
  background: #e2f2ef;
  padding: 1.5rem 0;
}

.latest-offers .latest-offers-main .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.latest-offers .latest-offers-main .card img {
  width: 100%;
  border-radius: 8px 8px 0 0;
}

.latest-offers .latest-offers-main .card .card-body {
  padding: 0.5rem;
}

.latest-offers .latest-offers-main .card .card-body p.title {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 0.5rem;
}
.latest-offers .latest-offers-main .card .card-body p.description {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #808080;
}

.latest-offers .latest-offers-main .card .card-body p.discount {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  text-decoration-line: line-through;
  color: #999999;
  margin-top: 1rem;
}

.latest-offers .latest-offers-main .card .card-body p.price {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #e16956;
}

.latest-offers .latest-offers-main .el-carousel {
  overflow: visible;
}

.latest-offers .latest-offers-main .el-carousel :deep(.el-carousel__arrow) {
  background-color: #fff;
  color: #666;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
}

.latest-offers
  .latest-offers-main
  .el-carousel
  :deep(.el-carousel__arrow--left) {
  left: -3rem;
}

.latest-offers
  .latest-offers-main
  .el-carousel
  :deep(.el-carousel__arrow--right) {
  right: -3rem;
}

@media screen and (max-width: 991px) {
  .latest-offers .container {
    padding: 0rem 1rem;
  }
}
</style>