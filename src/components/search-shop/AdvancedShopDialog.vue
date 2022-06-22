<template>
  <div class="advanced-search-dialog-shop">
    <el-dialog
      @close="$emit('closedDialog', false)"
      :model-value="advancedShopDialog"
      width="25rem"
    >
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
      <div class="second-section">
        <div class="title">
          <p>地區</p>
          <img src="../../assets/beauty-channel/dropdown@2x.png" alt="" />
        </div>
        <el-row :gutter="10">
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">中西區</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">東區</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">南區</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">灣仔區</div>
          </el-col>
        </el-row>
        <div class="title">
          <p>地區</p>
        </div>
        <el-row :gutter="10">
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">九龍城區</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">觀塘區</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">深水埗區</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">黃大仙區</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">油尖旺區</div>
          </el-col>
        </el-row>
        <div class="title">
          <p>地區</p>
        </div>
        <el-row :gutter="10">
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">離島區</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">葵青區</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">北區</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">西貢區</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">沙田區</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">大埔區</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">荃灣區</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">屯門區</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6">
            <div class="box">元朗區</div>
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
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["advancedShopDialog"],
};
</script>

<style scoped>
.advanced-search-dialog-shop :deep(.el-dialog) {
  border-radius: 16px;
}

.advanced-search-dialog-shop :deep(.el-dialog h6) {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
  text-align: center;
}

.advanced-search-dialog-shop :deep(.el-dialog .el-dialog__header) {
  border-bottom: 1px solid #e6e6e6;
  margin-right: 0;
}

.advanced-search-dialog-shop :deep(.el-dialog .el-dialog__footer) {
  border-top: 1px solid #e6e6e6;
}

.advanced-search-dialog-shop :deep(.el-dialog .el-dialog__headerbtn) {
  left: 0;
}

.advanced-search-dialog-shop
  :deep(.el-dialog .second-section .el-row:not(:last-of-type)) {
  margin-bottom: 1rem;
}

.advanced-search-dialog-shop :deep(.el-dialog .top-section .title),
.advanced-search-dialog-shop :deep(.el-dialog .bottom-section .title),
.advanced-search-dialog-shop :deep(.el-dialog .second-section .title) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.advanced-search-dialog-shop :deep(.el-dialog .top-section .title img),
.advanced-search-dialog-shop :deep(.el-dialog .bottom-section .title img),
.advanced-search-dialog-shop :deep(.el-dialog .second-section .title img) {
  width: 1.5rem;
}

.advanced-search-dialog-shop :deep(.el-dialog .top-section .title p),
.advanced-search-dialog-shop :deep(.el-dialog .bottom-section .title p),
.advanced-search-dialog-shop :deep(.el-dialog .second-section .title p) {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
}

.advanced-search-dialog-shop :deep(.el-dialog .top-section .box),
.advanced-search-dialog-shop :deep(.el-dialog .second-section .box) {
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

.advanced-search-dialog-shop :deep(.el-dialog .top-section) {
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 1rem;
}

.advanced-search-dialog-shop :deep(.el-dialog .second-section) {
  margin-top: 1rem;
}

.advanced-search-dialog-shop :deep(.el-dialog .bottom-section) {
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 1rem;
  margin-top: 1rem;
}

.advanced-search-dialog-shop :deep(.el-dialog .bottom-section p.label) {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #666666;
  margin-bottom: 0.5rem;
}

.advanced-search-dialog-shop
  :deep(.el-dialog .bottom-section .el-input .el-input__wrapper) {
  background: #f5f5f5;
  /* border: 1px solid #e6e6e6; */
  border-radius: 8px;
  padding: 0.4rem;
}

.advanced-search-dialog-shop :deep(.el-dialog .bottom-section .line) {
  background-color: #333;
  width: 3rem;
  height: 1px;
  bottom: 1.4rem;
  position: absolute;
}

.advanced-search-dialog-shop :deep(.el-dialog p.footer) {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #af3724;
  text-align: start;
}

.advanced-search-dialog-shop :deep(.el-dialog .el-row.footer-row) {
  align-items: center;
}

.advanced-search-dialog-shop :deep(.el-dialog .el-button) {
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
  .advanced-search-dialog-shop :deep(.el-dialog) {
    width: 22rem;
  }

  .advanced-search-dialog-shop :deep(.el-dialog .bottom-section .line) {
    width: 2.7rem;
  }
}
</style>