<template>
  <div class="sorting-dialog">
    <el-dialog
      @close="$emit('dialogClosed', false)"
      :model-value="sortingDialog"
      width="25rem"
    >
      <template #header>
        <h6>排序</h6>
      </template>
      <div class="box">最相關</div>
      <div class="box">最高銷量</div>
      <div class="box">最受歡迎</div>
      <div class="box">價錢由低至高</div>
      <div class="box">價錢由高至低</div>
      <template #footer>
        <el-button>篩選</el-button>
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
.sorting-dialog :deep(.el-dialog) {
  border-radius: 16px;
}

.sorting-dialog :deep(.el-dialog h6) {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
  text-align: center;
}

.sorting-dialog :deep(.el-dialog .el-dialog__header),
.sorting-dialog :deep(.el-dialog .el-dialog__body) {
  border-bottom: 1px solid #e6e6e6;
  margin-right: 0;
}

.sorting-dialog :deep(.el-dialog .el-dialog__headerbtn) {
  display: none;
}

.sorting-dialog :deep(.el-dialog .box) {
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
  padding: 0.5rem;
  cursor: pointer;
}

.sorting-dialog :deep(.el-dialog .box:not(:last-of-type)) {
  margin-bottom: 0.5rem;
}

.sorting-dialog :deep(.el-dialog .el-button) {
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
</style>