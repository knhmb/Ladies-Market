<template>
  <section class="login">
    <base-container>
      <el-row>
        <el-col :span="24">
          <div class="login-card">
            <h5>登錄</h5>
            <el-form>
              <el-form-item>
                <el-input
                  v-model="username"
                  placeholder="用戶名稱"
                  :prefix-icon="User"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  type="password"
                  show-password
                  placeholder="用戶名稱"
                  :prefix-icon="Lock"
                  v-model="password"
                ></el-input>
              </el-form-item>
              <div class="checkbox-forgot-password">
                <el-checkbox label="記住我" v-model="rememberMe"></el-checkbox>
                <p class="forgot-password">忘記密碼?</p>
              </div>
              <el-button>登入</el-button>
              <el-divider content-position="center">或</el-divider>
              <el-button class="google"
                ><img
                  src="../assets/login/social-media-google@2x.png"
                  alt=""
                />使用 Google 帳號登入</el-button
              >
              <el-button class="facebook"
                ><img
                  src="../assets/login/social-media-facebook@2x.png"
                  alt=""
                />使用 Facebook 帳號登入</el-button
              >
              <p class="dont-have-an-account">
                未登記成會員? <span>立即註冊</span>
              </p>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
import { User, Lock } from "@element-plus/icons-vue";

export default {
  data() {
    return {
      User,
      Lock,
      username: "",
      password: "",
      rememberMe: false,
    };
  },
};
</script>

<style scoped>
.login {
  background-color: #fcf0ef;
  padding: 2rem 0;
}

.login .login-card {
  background: #e16956;
  box-shadow: 0px 12px 40px rgba(205, 85, 66, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  width: 25rem;
}

.login .el-row .el-col {
  display: flex;
  justify-content: center;
}

.login .login-card h5 {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.login .login-card :deep(.el-form .el-input .el-input__wrapper) {
  background: #f5f5f5;
  border-radius: 8px;
}

.login .login-card :deep(.el-form .el-input .el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px #e16956;
}

.login .login-card :deep(.el-form .el-input .el-icon.el-input__icon) {
  color: #e16956;
}

.login
  .login-card
  :deep(.el-checkbox .el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #ffd572;
  border-color: #ffd572;
}

.login
  .login-card
  :deep(.el-checkbox
    .el-checkbox__input.is-checked
    .el-checkbox__inner::after) {
  border-color: #7d3f00;
}

.login .login-card :deep(.el-checkbox .el-checkbox__label),
.login .login-card p.forgot-password {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.login .login-card .checkbox-forgot-password {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.login .login-card .el-button {
  background: #ffd572;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  width: 100%;
  margin-top: 1rem;
}

.login .login-card :deep(.el-divider--horizontal) {
  border-color: #af3724;
}

.login .login-card :deep(.el-divider .el-divider__text) {
  background-color: #e16956;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #af3724;
}

.login .login-card .el-button.google {
  background: #f5f5f5;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;

  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.login .login-card .el-button.google img,
.login .login-card .el-button.facebook img {
  width: 1rem;
  margin-right: 0.5rem;
}

.login .login-card .el-button.facebook {
  background: #1c77ed;
  border: 1px solid #1c77ed;
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  border-radius: 8px;

  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #ffffff;
  display: flex;
  align-items: center;
}

:deep(.el-button + .el-button) {
  margin: 0;
}

.login .login-card p.dont-have-an-account {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-align: center;
  margin-top: 1.5rem;
}

.login .login-card p.dont-have-an-account span {
  font-weight: 600;
  color: #ffe986;
  margin-left: 0.5rem;
}
</style>