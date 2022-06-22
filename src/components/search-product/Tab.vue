<template>
  <h5>搜尋: <span>美白</span></h5>
  <div class="tab">
    <div
      @click="setOption('first')"
      :class="{
        'is-active': currentOption === 'first',
      }"
      class="content"
    >
      <p>店舖(20)</p>
    </div>
    <div
      @click="setOption('second')"
      :class="{
        'is-active': currentOption === 'second',
      }"
      class="content"
    >
      <p>產品(40)</p>
    </div>
  </div>
  <div class="filter">
    <p v-if="currentOption === 'first'">共 <span>20</span> 段影片</p>
    <p v-if="currentOption === 'second'">共 <span>40</span> 段影片</p>
    <div class="filter-right">
      <div @click="openFilter" class="filter-item">
        <img src="../../assets/beauty-channel/vector.png" alt="" />
        <p>篩選</p>
      </div>
      <div @click="sortingDialog = true" class="filter-item">
        <img src="../../assets/beauty-channel/Union.png" alt="" />
        <p>排序</p>
      </div>
    </div>
  </div>
  <first-section v-if="currentOption === 'first'"></first-section>

  <second-section></second-section>

  <first-section v-if="currentOption === 'first'"></first-section>

  <second-section></second-section>

  <first-section v-if="currentOption === 'first'"></first-section>
  <div class="filter-dialog">
    <el-dialog v-model="filterDialog" width="25rem">
      <template #header>
        <h6>篩選</h6>
      </template>
      <div class="top-section">
        <div class="title">
          <p>類型</p>
          <img src="../../assets/beauty-channel/dropdown@2x.png" alt="" />
        </div>
        <el-row :gutter="10">
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">保濕</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">美白</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">嫩膚</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">塑形</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">按摩</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">醫美</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">美睫/眉毛</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">脫毛</div>
          </el-col>
        </el-row>
      </div>
      <div class="bottom-section">
        <div class="title">
          <p>價格區間</p>
          <img src="../../assets/beauty-channel/dropdown@2x.png" alt="" />
        </div>
        <el-row :gutter="10">
          <el-col :span="10">
            <p class="label">最低</p>
            <el-input placeholder="HKD"></el-input>
          </el-col>
          <el-col :span="4">
            <div class="line"></div>
          </el-col>
          <el-col :span="10">
            <p class="label">最高</p>
            <el-input placeholder="HKD"></el-input>
          </el-col>
        </el-row>
      </div>
      <template #footer>
        <el-row class="footer-row">
          <el-col :span="8">
            <p class="footer">清除篩選條件</p>
          </el-col>
          <el-col :span="16">
            <el-button>篩選</el-button>
          </el-col>
        </el-row>
        <!-- <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >Confirm</el-button
          >
        </span> -->
      </template>
    </el-dialog>
  </div>
  <sorting-dialog
    @dialogClosed="sortingDialog = $event"
    :sorting-dialog="sortingDialog"
  ></sorting-dialog>
</template>

<script>
import FirstSection from "./FirstSection";
import SecondSection from "../e-shop/SecondSection.vue";
import SortingDialog from "./SortingDialog.vue";

export default {
  components: {
    FirstSection,
    SecondSection,
    SortingDialog,
  },
  data() {
    return {
      currentOption: "first",
      filterDialog: false,
      sortingDialog: false,
    };
  },
  methods: {
    setOption(option) {
      this.currentOption = option;
    },
    openFilter() {
      this.filterDialog = true;
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

.filter .filter-item {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.filter-dialog :deep(.el-dialog) {
  border-radius: 16px;
}

.filter-dialog :deep(.el-dialog h6) {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
  text-align: center;
}

.filter-dialog :deep(.el-dialog .el-dialog__header) {
  border-bottom: 1px solid #e6e6e6;
  margin-right: 0;
}

.filter-dialog :deep(.el-dialog .el-dialog__headerbtn) {
  display: none;
}

.filter-dialog :deep(.el-dialog .top-section .title),
.filter-dialog :deep(.el-dialog .bottom-section .title) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.filter-dialog :deep(.el-dialog .top-section .title img),
.filter-dialog :deep(.el-dialog .bottom-section .title img) {
  width: 1.5rem;
}

.filter-dialog :deep(.el-dialog .top-section .title p),
.filter-dialog :deep(.el-dialog .bottom-section .title p) {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
}

.filter-dialog :deep(.el-dialog .top-section .box) {
  background: #f5f5f5;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  text-align: center;

  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.filter-dialog :deep(.el-dialog .top-section) {
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 1rem;
}

.filter-dialog :deep(.el-dialog .bottom-section) {
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 1rem;
  margin-top: 1rem;
}

.filter-dialog :deep(.el-dialog .bottom-section p.label) {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #666666;
  margin-bottom: 0.5rem;
}

.filter-dialog :deep(.el-dialog .bottom-section .el-input .el-input__wrapper) {
  background: #f5f5f5;
  /* border: 1px solid #e6e6e6; */
  border-radius: 8px;
  padding: 0.4rem;
}

.filter-dialog :deep(.el-dialog .bottom-section .line) {
  background-color: #333;
  width: 3rem;
  height: 1px;
  bottom: 1.4rem;
  position: absolute;
}

.filter-dialog :deep(.el-dialog p.footer) {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #af3724;
  text-align: start;
}

.filter-dialog :deep(.el-dialog .el-row.footer-row) {
  align-items: center;
}

.filter-dialog :deep(.el-dialog .el-button) {
  background: linear-gradient(
      269.05deg,
      rgba(255, 142, 62, 0.6) 0%,
      rgba(255, 142, 62, 0) 100%
    ),
    #e16956;
  border-radius: 8px;
  width: 100%;
  border-color: #e16956;

  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding: 1.2rem;
}

@media screen and (max-width: 410px) {
  .filter-dialog :deep(.el-dialog) {
    width: 22rem;
  }

  .filter-dialog :deep(.el-dialog .bottom-section .line) {
    width: 2.7rem;
  }
}
</style>