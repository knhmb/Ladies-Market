<template>
  <section class="registeration-form">
    <base-container>
      <el-row>
        <el-col :span="24">
          <div class="registeration-form-card">
            <div class="header">
              <img src="../assets/login/close-black@2x.png" alt="" />
              <h5>註冊</h5>
            </div>
            <Form />
          </div>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
import Form from "../components/register/Form";

export default {
  components: {
    Form,
  },
};
</script>

<style scoped>
.registeration-form {
  background-image: url("../assets/login/login-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem 0;
}

.registeration-form .el-row .el-col {
  display: flex;
  justify-content: center;
}

.registeration-form .registeration-form-card {
  background: #ffffff;
  box-shadow: 0px 12px 40px rgba(205, 85, 66, 0.2);
  border-radius: 16px;
  width: 50rem;
}

.registeration-form .registeration-form-card .header {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
}

.registeration-form .registeration-form-card img {
  width: 1.3rem;
}

.registeration-form .registeration-form-card h5 {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
  text-align: center;
  margin: 0 auto;
}

@media screen and (max-width: 991px) {
  .registeration-form .registeration-form-card {
    width: 25rem;
  }

  .registeration-form .registeration-form-card .header {
    padding: 0.7rem;
  }
}
</style>