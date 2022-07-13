<template>
  <section class="register">
    <base-container>
      <el-row>
        <el-col :span="24">
          <div class="register-card">
            <h5>註冊</h5>
            <el-button @click="$router.push('/registeration-form')"
              >使用電郵註冊帳號</el-button
            >
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
            <p class="have-an-account">
              已經有帳號? <span @click="$router.push('/login')">登入</span>
            </p>
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
.register {
  padding: 2rem 0;
  background-image: url("../assets/login/login-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.register .register-card {
  background: #e16956;
  box-shadow: 0px 12px 40px rgba(205, 85, 66, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  width: 25rem;
}

.register .el-row .el-col {
  display: flex;
  justify-content: center;
}

.register .register-card h5 {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.register .register-card :deep(.el-form .el-input .el-input__wrapper) {
  background: #f5f5f5;
  border-radius: 8px;
}

.register .register-card :deep(.el-form .el-input .el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px #e16956;
}

.register .register-card :deep(.el-form .el-input .el-icon.el-input__icon) {
  color: #e16956;
}

.register
  .register-card
  :deep(.el-checkbox .el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #ffd572;
  border-color: #ffd572;
}

.register
  .register-card
  :deep(.el-checkbox
    .el-checkbox__input.is-checked
    .el-checkbox__inner::after) {
  border-color: #7d3f00;
}

.register .register-card :deep(.el-checkbox .el-checkbox__label),
.register .register-card p.forgot-password {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.register .register-card .checkbox-forgot-password {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.register .register-card .el-button {
  background: #ffd572;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  width: 100%;
  padding: 1rem;
  /* margin-top: 1rem; */
}

.register .register-card :deep(.el-divider--horizontal) {
  border-color: #af3724;
}

.register .register-card :deep(.el-divider .el-divider__text) {
  background-color: #e16956;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #af3724;
}

.register .register-card .el-button.google {
  background: #f5f5f5;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;

  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.register .register-card .el-button.google img,
.register .register-card .el-button.facebook img {
  width: 1rem;
  margin-right: 0.5rem;
}

.register .register-card .el-button.facebook {
  background: #1c77ed;
  border: 1px solid #1c77ed;
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  border-radius: 8px;

  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
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

.register .register-card p.have-an-account {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-align: center;
  margin-top: 1.5rem;
}

.register .register-card p.have-an-account span {
  font-weight: 600;
  color: #ffe986;
  margin-left: 0.5rem;
  cursor: pointer;
}
</style>