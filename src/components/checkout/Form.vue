<template>
  <div class="checkout-form">
    <h5>訂購人資料</h5>
    <el-form label-position="top">
      <el-form-item label="訂購人名稱">
        <el-input placeholder="輸入訂購人名稱"></el-input>
      </el-form-item>
      <el-form-item label="電話號碼">
        <el-input placeholder="請輸入電話號碼"></el-input>
      </el-form-item>
      <el-form-item label="運送地址">
        <el-input placeholder="輸入運送地址"></el-input>
      </el-form-item>
      <el-form-item>
        <p class="info">
          所有訂單將會由賣方聯絡買方，確認運送方法，如有疑問可聯絡賣方 或
          <span>本平台</span>。
        </p>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.checkout-form {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.checkout-form h5 {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 1.5rem;
}

.checkout-form .el-form :deep(.el-form-item .el-form-item__label),
.checkout-form .el-form p.info {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #666666;
  margin-bottom: 0.3rem;
}

.checkout-form .el-form p.info span {
  color: #e16956;
}

.checkout-form .el-form :deep(.el-input .el-input__wrapper) {
  background: #f5f5f5;
  border-radius: 8px;
}
</style>