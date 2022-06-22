<template>
  <section class="bottom-header hidden-sm-and-down">
    <base-container>
      <el-row :gutter="15">
        <el-col :span="5">
          <div class="background-btns">
            <div
              @click="setOption('first')"
              :class="{ 'is-active': currentOption === 'first' }"
              class="btn"
            >
              <p>店舖</p>
            </div>
            <div
              @click="setOption('second')"
              :class="{ 'is-active': currentOption === 'second' }"
              class="btn"
            >
              <p>店舖</p>
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="search-section">
            <img src="../../assets/home/header-search-gray@2x.png" alt="" />
            <el-select
              popper-class="search-select"
              v-model="input"
              allow-create
              filterable
              placeholder="搜尋產品或店舖相關字眼"
            >
              <div class="popular-searches">
                <h5>熱門搜尋</h5>
              </div>
              <div class="selection">
                <el-row :gutter="10">
                  <el-col
                    :sm="6"
                    :md="4"
                    v-for="option in options"
                    :key="option"
                  >
                    <el-option :label="option.label" :value="option.value">
                      <div class="box">{{ option.name }}</div>
                    </el-option>
                  </el-col>
                </el-row>
              </div>
              <div class="popular-searches">
                <h5>搜尋記錄</h5>
                <p class="warning">清除搜尋記錄</p>
              </div>
              <div class="selection">
                <el-row :gutter="10">
                  <el-col
                    :sm="6"
                    :md="4"
                    v-for="option in searchHistory"
                    :key="option"
                  >
                    <el-option :label="option.label" :value="option.value">
                      <div class="box">{{ option.name }}</div>
                    </el-option>
                  </el-col>
                </el-row>
              </div>
            </el-select>
          </div>
        </el-col>
        <el-col :span="3">
          <el-button @click="advancedSearchDialog = true" class="btn-header"
            >進階搜尋</el-button
          >
        </el-col>
      </el-row>
    </base-container>
  </section>
  <advanced-search-dialog
    :advanced-search-dialog="advancedSearchDialog"
    @closedDialog="advancedSearchDialog = $event"
  ></advanced-search-dialog>
</template>

<script>
import AdvancedSearchDialog from "../search-product/AdvancedSearchDialog.vue";

export default {
  components: {
    AdvancedSearchDialog,
  },
  data() {
    return {
      currentOption: "first",
      advancedSearchDialog: false,
      input: "",
      options: [
        {
          name: "頭髮造型",
          label: "頭髮造型",
          value: "頭髮造型",
        },
        {
          name: "美白",
          label: "美白",
          value: "美白",
        },
        {
          name: "洗面膏",
          label: "洗面膏",
          value: "洗面膏",
        },
        {
          name: "嫩膚",
          label: "嫩膚",
          value: "嫩膚",
        },
        {
          name: "香水",
          label: "香水",
          value: "香水",
        },
        {
          name: "個人護理",
          label: "個人護理",
          value: "個人護理",
        },
        {
          name: "維他命",
          label: "維他命",
          value: "維他命",
        },
        {
          name: "沐浴用品",
          label: "沐浴用品",
          value: "沐浴用品",
        },
        {
          name: "隔離霜",
          label: "隔離霜",
          value: "隔離霜",
        },
        {
          name: "面膜",
          label: "面膜",
          value: "面膜",
        },
      ],
      searchHistory: [
        {
          name: "保濕",
          label: "保濕",
          value: "保濕",
        },
        {
          name: "口罩",
          label: "口罩",
          value: "口罩",
        },
        {
          name: "精華",
          label: "精華",
          value: "精華",
        },
        {
          name: "脫毛",
          label: "脫毛",
          value: "脫毛",
        },
        {
          name: "眉毛",
          label: "眉毛",
          value: "眉毛",
        },
        {
          name: "香水",
          label: "香水",
          value: "香水",
        },
        {
          name: "個人護理",
          label: "個人護理",
          value: "個人護理",
        },
        {
          name: "維他命",
          label: "維他命",
          value: "維他命",
        },
        {
          name: "沐浴用品",
          label: "沐浴用品",
          value: "沐浴用品",
        },
        {
          name: "隔離霜",
          label: "隔離霜",
          value: "隔離霜",
        },
      ],
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
.bottom-header .background-btns {
  background: #e18027;
  border-radius: 100px;
  padding: 1px;
  display: flex;
  align-items: center;
}

.bottom-header .background-btns .btn {
  border-radius: 100px;
  padding: 0.3rem;
  width: 100%;
  cursor: pointer;
}

.bottom-header .background-btns .btn.is-active {
  background: #ff9e45;
}

.bottom-header .background-btns .btn p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffbc63;
}

.bottom-header .background-btns .btn.is-active p {
  color: #fff;
}

.bottom-header .search-section {
  position: relative;
}

.bottom-header img {
  width: 1.2rem;
  position: absolute;
  left: 0.3rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.bottom-header .el-select {
  width: 100%;
}

.bottom-header :deep(.el-select .el-input__wrapper) {
  background: #ffffff;

  /* border: 1px solid #cccccc; */
  box-shadow: 0px 12px 40px rgba(51, 51, 51, 0.08);
  border-radius: 20px;
  padding-left: 1.7rem;
  padding-right: 1.7rem;
}

.bottom-header
  :deep(.el-select .el-input.el-input--suffix.is-focus .el-input__wrapper) {
  border-radius: 20px 20px 0 0;
}

.bottom-header :deep(.el-select .el-input__suffix) {
  display: none;
}

.bottom-header .el-select :deep(.el-input.is-focus .el-input__wrapper) {
  box-shadow: 0 0 0 1px #fff inset !important;
}

.bottom-header .el-button.btn-header {
  background: #e18027;
  border-color: #e18027;
  border-radius: 100px;
  width: 100%;
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding: 1rem;
}
</style>

<style>
.el-popper.is-pure.is-light.el-select__popper.search-select {
  top: 9rem !important;
  border-radius: 0px 0px 20px 20px !important;
}

.el-popper.is-pure.is-light.el-select__popper.search-select
  .el-select-dropdown.search-select {
  max-width: 38rem;
  /* min-width: 0; */
}
.el-popper.is-pure.is-light.el-select__popper.search-select .el-popper__arrow {
  display: none;
}

.el-popper.is-pure.is-light.el-select__popper.search-select
  .popular-searches
  h5 {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  padding: 0 1rem;
  margin: 1rem 0;
}

.el-popper.is-pure.is-light.el-select__popper.search-select
  .popular-searches
  p.warning {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #af3724;
  padding-right: 1rem;
}

.el-popper.is-pure.is-light.el-select__popper.search-select .popular-searches {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-popper.is-pure.is-light.el-select__popper.search-select .box {
  background: #f5f5f5;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem !important;
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  padding: 0.3rem;
}

.el-popper.is-pure.is-light.el-select__popper.search-select
  .el-select-dropdown__item {
  padding: 0;
  margin-bottom: 0.5rem;
}

.el-popper.is-pure.is-light.el-select__popper.search-select .selection {
  padding: 0 1rem;
}

/* @media screen and (max-width: 1345px) {
  .el-popper.is-pure.is-light.el-select__popper.search-select
    .el-select-dropdown.search-select {
    min-width: 36rem !important;
    width: 36rem !important;
  }
} */
</style>