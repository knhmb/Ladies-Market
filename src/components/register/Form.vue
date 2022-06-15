<template>
  <div class="register-form-content">
    <el-form label-position="top">
      <el-row :gutter="20">
        <el-col :sm="24" :md="12">
          <h5>會員資料</h5>
          <el-form-item label="帳號名稱 (電郵地址)">
            <el-input placeholder="請輸入電郵地址"></el-input>
          </el-form-item>
          <el-form-item label="密碼">
            <el-input
              type="password"
              show-password
              placeholder="請輸入8-10位字母、數字和符號"
            ></el-input>
          </el-form-item>
          <el-form-item label="確認新密碼">
            <el-input
              type="password"
              show-password
              placeholder="再次輸入密碼"
            ></el-input>
          </el-form-item>
          <el-form-item label="顯示名稱">
            <el-input placeholder="請輸入顯示名稱"></el-input>
          </el-form-item>
          <el-form-item label="生日日期">
            <el-date-picker placeholder="日 / 月 / 年"></el-date-picker>
          </el-form-item>
          <el-form-item class="two-inputs" label="電話號碼">
            <el-input placeholder="請輸入電話號碼">
              <template #suffix>
                <p class="input-suffix">獲取認證碼</p>
              </template>
            </el-input>
            <el-input placeholder="請輸入認證碼"></el-input>
          </el-form-item>
          <el-form-item class="two-inputs" label="性別">
            <el-radio-group v-model="radio2">
              <el-radio label="男">男</el-radio>
              <el-radio label="女">女</el-radio>
              <el-radio label="保密">保密</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :sm="24" :md="12">
          <h5>問卷調查</h5>
          <el-form-item
            class="boxes"
            label="你感興趣的內容 (最少選一項，可選多項)"
          >
            <div class="box">
              <p>保濕</p>
            </div>
            <div class="box">
              <p>美白</p>
            </div>
            <div class="box">
              <p>嫩膚</p>
            </div>
            <div class="box">
              <p>塑形</p>
            </div>
            <div class="box">
              <p>按摩</p>
            </div>
            <div class="box">
              <p>醫美</p>
            </div>
            <div class="box">
              <p>美睫/眉毛</p>
            </div>
            <div class="box">
              <p>脫毛</p>
            </div>
            <div class="box">
              <p>其他</p>
            </div>
          </el-form-item>
          <el-form-item label="收入">
            <el-select placeholder="選擇收入"></el-select>
          </el-form-item>
          <el-form-item class="boxes" label="如何得知">
            <div class="box">
              <p>Facebook</p>
            </div>
            <div class="box">
              <p>Google</p>
            </div>
            <div class="box">
              <p>instagram</p>
            </div>
            <div class="box">
              <p>朋友</p>
            </div>
            <div class="box">
              <p>美容院</p>
            </div>
            <div class="box">
              <p>其他</p>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="footer">
        <el-checkbox
          >我同意收取宣傳訊息及最新資訊 <br />
          點擊 <span>提交</span> 即表示您同意遵守及接受本平台的
          <span>條款及細則</span> ，以及 <span>私隱政策</span></el-checkbox
        >
        <el-button>提交</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio2: "",
    };
  },
};
</script>

<style scoped>
.register-form-content {
  padding: 0.5rem 1.5rem;
  position: relative;
}

.register-form-content::after {
  content: "";
  position: absolute;
  bottom: 5.5rem;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
}

.register-form-content h5 {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 1.5rem;
}

.register-form-content .el-form {
  margin-top: 1.5rem;
}

.register-form-content .el-form :deep(.el-form-item__label) {
  margin-bottom: 0.3rem;
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #666666;
}

.register-form-content .el-form :deep(.el-input .el-input__wrapper) {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 0.2rem 1rem;
}

.register-form-content .el-form :deep(.el-input) {
  width: 100%;
}

.register-form-content
  .el-form
  :deep(.el-input.el-date-editor--date .el-input__wrapper) {
  position: relative;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 1.1rem 1rem;
}

.register-form-content
  .el-form
  :deep(.el-input.el-date-editor--date .el-input__prefix) {
  position: absolute;
  right: 0;
}

.register-form-content .el-form .two-inputs .el-input:first-of-type {
  margin-bottom: 0.7rem;
}
.register-form-content .el-form .two-inputs .el-input p.input-suffix {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #e16956;
}

.register-form-content .el-form .el-radio {
  margin-right: 3.5rem;
}

.register-form-content .el-form .el-radio:last-child {
  margin-right: 0;
}

.register-form-content .el-form .el-radio :deep(.el-radio__label) {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #333333;
}

.register-form-content .el-form .box {
  background: #f5f5f5;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.2rem;
  margin-bottom: 0.7rem;
}

.register-form-content .el-form .box p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #666666;
}

.register-form-content
  .el-form
  :deep(.el-form-item.boxes .el-form-item__content) {
  justify-content: space-between;
}

.register-form-content .el-form .el-select {
  width: 100%;
}

.register-form-content .el-form .footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.register-form-content .el-form .el-checkbox :deep(.el-checkbox__label) {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  padding-right: 0.5rem;
  white-space: normal;
}

.register-form-content .el-form .el-checkbox :deep(.el-checkbox__label span) {
  color: #e16956;
  font-weight: 600;
}

.register-form-content .el-form .el-button {
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
  width: 15rem;
  padding: 1.2rem;
}

@media screen and (max-width: 991px) {
  .register-form-content .el-form .footer {
    flex-direction: column;
    margin-top: 2rem;
  }

  .register-form-content .el-form .el-button {
    margin-top: 2rem;
  }

  .register-form-content::after {
    bottom: 10rem;
  }

  .register-form-content {
    padding: 0.5rem 0.7rem;
  }
}
</style>