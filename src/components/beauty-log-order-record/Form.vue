<template>
  <div class="order-record-form">
    <h5>訂購人資料</h5>
    <el-form label-position="top">
      <el-form-item label="訂購人名稱">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="電話號碼">
        <el-input v-model="phoneNo"></el-input>
      </el-form-item>
      <el-form-item label="運送地址">
        <el-input v-model="about"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "Chan Tai Man",
      phoneNo: "6123 4567",
      about: "九龍 觀塘區 月華街26號 海景大廈 20樓 F室",
    };
  },
};
</script>

<style scoped>
.order-record-form h5 {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
}

.order-record-form .el-form {
  margin-top: 1rem;
}

.order-record-form .el-form :deep(.el-form-item .el-form-item__label) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #666666;
}

.order-record-form .el-form :deep(.el-input .el-input__wrapper) {
  background: #f5f5f5;
  border-radius: 8px;
}

@media screen and (max-width: 991px) {
  .order-record-form {
    margin-top: 2rem;
  }
}
</style>