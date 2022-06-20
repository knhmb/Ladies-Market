<template>
  <div class="recover-password">
    <el-form label-position="top">
      <el-form-item label="新密碼">
        <el-input
          type="password"
          show-password
          v-model="newPassword"
          placeholder="請輸入8-10位字母、數字和符號"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="確認新密碼">
        <el-input type="password" show-password placeholder="再次輸入密碼">
        </el-input>
      </el-form-item>
      <el-button>重設密碼</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPassword: "",
      confirmPassword: "",
    };
  },
};
</script>

<style scoped>
.recover-password {
  margin-top: 1rem;
}

.recover-password .el-input :deep(.el-input__wrapper) {
  background: #f5f5f5;
  /* border: 1px solid #e6e6e6; */
  border-radius: 8px;
  padding: 0.3rem 1rem;
}

.recover-password .el-button {
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