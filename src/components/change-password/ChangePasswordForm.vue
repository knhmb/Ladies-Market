<template>
  <div class="change-password-form">
    <el-form>
      <el-row>
        <el-col :span="7">
          <p class="label">現有密碼</p>
        </el-col>
        <el-col :span="17">
          <el-form-item>
            <el-input
              v-model="oldPassword"
              placeholder="輸入現有密碼"
              type="password"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <p class="label">輸入新密碼</p>
        </el-col>
        <el-col :span="17">
          <el-form-item>
            <el-input
              v-model="newPassword"
              type="password"
              placeholder="輸入新密碼"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <p class="label">確認新密碼</p>
        </el-col>
        <el-col :span="17">
          <el-form-item>
            <el-input
              v-model="confirmPassword"
              placeholder="確認新密碼"
              type="password"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-button
        :class="{ 'is-active': oldPassword && newPassword && confirmPassword }"
        >確認修改</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  },
};
</script>

<style scoped>
.change-password-form .el-row {
  align-items: center;
}

.change-password-form .el-row .el-col {
  margin-bottom: 1rem;
}

.change-password-form .el-form {
  margin-top: 2rem;
}

.change-password-form .el-form :deep(.el-form-item) {
  margin-bottom: 0;
}

.change-password-form .el-form p.label {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #666666;
}

.change-password-form .el-form :deep(.el-input .el-input__wrapper) {
  background: #f5f5f5;
  border-radius: 8px;
}

.change-password-form .el-form .el-button {
  background: #cccccc;
  border-radius: 8px;
  border-color: #cccccc;

  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-top: 1rem;
  padding: 1.2rem;
  width: 10.5rem;
  margin-left: auto;
  display: flex;
}

.change-password-form .el-form .el-button.is-active {
  background: linear-gradient(
      269.05deg,
      rgba(255, 142, 62, 0.6) 0%,
      rgba(255, 142, 62, 0) 100%
    ),
    #e16956;
  border-color: #e16956;
}
</style>