<template>
  <div class="advanced-search-dialog">
    <div class="advanced-search-dialog">
      <el-dialog
        @close="$emit('closedDialog', false)"
        :model-value="advancedSearchDialog"
        width="25rem"
      >
        <template #header>
          <h6>產品 - 進階搜尋</h6>
        </template>
        <div class="search-section">
          <el-input
            :prefix-icon="Search"
            placeholder="搜尋產品或店舖相關字眼"
          ></el-input>
        </div>
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
            <el-col :span="24">
              <el-button>篩選</el-button>
            </el-col>
          </el-row>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { Search } from "@element-plus/icons-vue";

export default {
  props: ["advancedSearchDialog"],
  data() {
    return {
      Search,
    };
  },
};
</script>

<style scoped>
.advanced-search-dialog :deep(.el-dialog) {
  border-radius: 16px;
}

.advanced-search-dialog :deep(.el-dialog h6) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
  text-align: center;
}

.advanced-search-dialog :deep(.el-dialog .el-dialog__header) {
  border-bottom: 1px solid #e6e6e6;
  margin-right: 0;
}

.advanced-search-dialog :deep(.el-dialog .el-dialog__body) {
  padding: 0;
}

.advanced-search-dialog :deep(.el-dialog .el-dialog__headerbtn) {
  display: none;
}

.advanced-search-dialog :deep(.el-dialog .top-section),
.advanced-search-dialog :deep(.el-dialog .bottom-section) {
  padding: 1rem;
}

.advanced-search-dialog :deep(.el-dialog .top-section .title),
.advanced-search-dialog :deep(.el-dialog .bottom-section .title) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.advanced-search-dialog :deep(.el-dialog .top-section .title img),
.advanced-search-dialog :deep(.el-dialog .bottom-section .title img) {
  width: 1.5rem;
}

.advanced-search-dialog :deep(.el-dialog .top-section .title p),
.advanced-search-dialog :deep(.el-dialog .bottom-section .title p) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
}

.advanced-search-dialog :deep(.el-dialog .top-section .box) {
  background: #f5f5f5;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  text-align: center;

  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
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

.advanced-search-dialog :deep(.el-dialog .top-section) {
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 1rem;
}

.advanced-search-dialog :deep(.el-dialog .bottom-section) {
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 1rem;
  margin-top: 1rem;
}

.advanced-search-dialog :deep(.el-dialog .bottom-section p.label) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #666666;
  margin-bottom: 0.5rem;
}

.advanced-search-dialog
  :deep(.el-dialog .bottom-section .el-input .el-input__wrapper) {
  background: #f5f5f5;
  /* border: 1px solid #e6e6e6; */
  border-radius: 8px;
  padding: 0.4rem;
}

.advanced-search-dialog :deep(.el-dialog .bottom-section .line) {
  background-color: #333;
  width: 3rem;
  height: 1px;
  bottom: 1.4rem;
  position: absolute;
}

.advanced-search-dialog :deep(.el-dialog p.footer) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #af3724;
  text-align: start;
}

.advanced-search-dialog :deep(.el-dialog .el-row.footer-row) {
  align-items: center;
}

.advanced-search-dialog :deep(.el-dialog .el-button) {
  background: linear-gradient(
      269.05deg,
      rgba(255, 142, 62, 0.6) 0%,
      rgba(255, 142, 62, 0) 100%
    ),
    #e16956;
  border-radius: 8px;
  width: 100%;
  border-color: #e16956;

  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding: 1.2rem;
}

.advanced-search-dialog :deep(.el-dialog .search-section) {
  background: #f5f5f5;
  padding: 0.5rem;
}

.advanced-search-dialog
  :deep(.el-dialog .search-section .el-input .el-input__wrapper) {
  background: #ffffff;
  border-radius: 8px;
}

@media screen and (max-width: 410px) {
  .advanced-search-dialog :deep(.el-dialog) {
    width: 22rem;
  }

  .advanced-search-dialog :deep(.el-dialog .bottom-section .line) {
    width: 2.7rem;
  }
}
</style>