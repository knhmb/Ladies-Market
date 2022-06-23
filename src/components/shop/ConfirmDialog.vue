<template>
  <div class="shop-confirm-dialog">
    <el-dialog
      :model-value="confirmDialog"
      title="Tips"
      @close="$emit('dialogClosed', false)"
      width="22rem"
    >
      <p>確認要提交美評嗎？</p>
      <template #footer>
        <span class="dialog-footer">
          <el-button class="cancel" @click="$emit('dialogClosed', false)"
            >取消</el-button
          >
          <el-button class="confirm" @click="$emit('dialogClosed', false)"
            >確認提交</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["confirmDialog"],
};
</script>

<style scoped>
.shop-confirm-dialog :deep(.el-dialog) {
  border-radius: 8px;
}

.shop-confirm-dialog :deep(.el-dialog p) {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #333333;
  text-align: center;
}
.shop-confirm-dialog :deep(.el-dialog .el-button) {
  border-radius: 8px;
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  padding: 1.2rem;
  width: 7rem;
}

.shop-confirm-dialog :deep(.el-dialog .el-button.confirm) {
  background: linear-gradient(
      269.05deg,
      rgba(255, 142, 62, 0.6) 0%,
      rgba(255, 142, 62, 0) 100%
    ),
    #e16956;
  border-color: #e16956;
  color: #ffffff;
}

.shop-confirm-dialog :deep(.el-dialog .el-button.cancel) {
  background: #fff;
  border-color: #666;
  margin-right: 1rem;
}

.shop-confirm-dialog :deep(.el-dialog .el-dialog__headerbtn),
.shop-confirm-dialog :deep(.el-dialog .el-dialog__header) {
  display: none;
}

.shop-confirm-dialog :deep(.el-dialog .el-dialog__footer) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.shop-confirm-dialog :deep(.el-button + .el-button) {
  margin-left: 0;
}
</style>