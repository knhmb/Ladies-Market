<template>
  <div class="forgot-password-form">
    <el-form label-position="top">
      <el-form-item label="電郵地址">
        <el-input v-model="email" placeholder="請輸入電郵地址"> </el-input>
        <p class="input-text">獲取認證碼</p>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="請輸入認證碼"> </el-input>
      </el-form-item>
      <el-button @click="$emit('recoverPassword', true)">下一步</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
};
</script>

<style scoped>
.forgot-password-form {
  margin-top: 1rem;
}

.forgot-password-form p.input-text {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #e16956;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.forgot-password-form .el-input :deep(.el-input__wrapper) {
  background: #f5f5f5;
  /* border: 1px solid #e6e6e6; */
  border-radius: 8px;
  padding: 0.3rem 6rem 0.3rem 1rem;
}

.forgot-password-form .el-button {
  background: linear-gradient(
      269.05deg,
      rgba(255, 142, 62, 0.6) 0%,
      rgba(255, 142, 62, 0) 100%
    ),
    #e16956;
  border-radius: 8px;

  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 100%;
  padding: 1.3rem;
}
</style>