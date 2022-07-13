<template>
  <section class="forgot-password">
    <base-container>
      <div class="forgot-password-card">
        <div class="header">
          <h5>重設密碼</h5>
        </div>
        <div v-if="!isRecoverPassword" class="content">
          <p>認證電郵地址</p>
          <forgot-password-form
            @recoverPassword="isRecoverPassword = $event"
          ></forgot-password-form>
        </div>
        <div v-else class="content">
          <p>重設密碼</p>
          <recover-password></recover-password>
        </div>
      </div>
    </base-container>
  </section>
</template>

<script>
import ForgotPasswordForm from "../components/forgot-password/ForgotPasswordForm.vue";
import RecoverPassword from "../components/forgot-password/RecoverPassword.vue";

export default {
  components: {
    ForgotPasswordForm,
    RecoverPassword,
  },
  data() {
    return {
      isRecoverPassword: false,
    };
  },
};
</script>

<style scoped>
.forgot-password {
  padding: 2rem 0;
  background-image: url("../assets/login/login-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.forgot-password .forgot-password-card {
  background: #ffffff;
  box-shadow: 0px 12px 40px rgba(205, 85, 66, 0.2);
  border-radius: 16px;
  max-width: 30rem;
  margin: 0 auto;
}

.forgot-password .forgot-password-card .header {
  padding: 1.3rem;
  border-bottom: 1px solid #e6e6e6;
}

.forgot-password .forgot-password-card .header h5 {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
  text-align: center;
}

.forgot-password .forgot-password-card .content {
  padding: 1.3rem;
}

.forgot-password .forgot-password-card .content p {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
}
</style>