<template>
  <div class="sorting-dialog-shop">
    <el-dialog
      @close="$emit('dialogClosed', false)"
      :model-value="sortingDialog"
      width="25rem"
    >
      <template #header>
        <h6>篩選</h6>
      </template>
      <div class="top-section">
        <el-row :gutter="10">
          <el-col :span="24">
            <div class="box">最相關</div>
          </el-col>
          <el-col :span="24">
            <div class="box">最高銷量</div>
          </el-col>
          <el-col :span="24">
            <div class="box">最受歡迎</div>
          </el-col>
        </el-row>
        <div class="second-section">
          <p>根據最高細項評分</p>
          <el-row :gutter="10">
            <el-col :sm="8">
              <div class="box">成效</div>
            </el-col>
            <el-col :sm="8">
              <div class="box">服務</div>
            </el-col>
            <el-col :sm="8">
              <div class="box">衛生</div>
            </el-col>
            <el-col :sm="8">
              <div class="box">價錢</div>
            </el-col>
            <el-col :sm="8">
              <div class="box">環境</div>
            </el-col>
          </el-row>
        </div>
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
</template>

<script>
export default {
  props: ["sortingDialog"],
};
</script>

<style scoped>
.sorting-dialog-shop :deep(.el-dialog) {
  border-radius: 16px;
}

.sorting-dialog-shop :deep(.el-dialog h6) {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
  text-align: center;
}

.sorting-dialog-shop :deep(.el-dialog .el-dialog__header) {
  border-bottom: 1px solid #e6e6e6;
  margin-right: 0;
}

.sorting-dialog-shop :deep(.el-dialog .el-dialog__body) {
  padding-bottom: 0.5rem;
  padding-top: 1rem;
}

.sorting-dialog-shop :deep(.el-dialog .el-dialog__footer) {
  border-top: 1px solid #e6e6e6;
}

.sorting-dialog-shop :deep(.el-dialog .el-dialog__headerbtn) {
  left: 0;
}

.sorting-dialog-shop :deep(.el-dialog .top-section .box),
.sorting-dialog-shop :deep(.el-dialog .second-section .box) {
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
  cursor: pointer;
}

.sorting-dialog-shop :deep(.el-dialog .second-section) {
  margin-top: 1rem;
}

.sorting-dialog-shop :deep(.el-dialog .second-section p) {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 1rem;
}

.sorting-dialog-shop :deep(.el-dialog .el-button) {
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
  .sorting-dialog-shop :deep(.el-dialog) {
    width: 22rem;
  }
}
</style>