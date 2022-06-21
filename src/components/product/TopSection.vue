<template>
  <div class="top-section">
    <base-container>
      <el-row :gutter="15">
        <el-col :sm="24" :md="18">
          <div class="top">
            <div class="content">
              <h5>產品名稱產品名稱產品名稱產品名稱產品名稱產品名稱</h5>
              <p>尚餘500件</p>
            </div>
            <div class="links">
              <img
                @click="dialogVisible = true"
                src="../../assets/beauty-channel/share@2x.png"
                alt=""
              />
              <img
                src="../../assets/beauty-channel/shop-detail-wish-off@2x.png"
                alt=""
              />
            </div>
          </div>
          <div class="text">
            <p class="small">店鋪資訊</p>

            <p class="description">
              店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊
            </p>
            <p class="description">
              店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊
            </p>
            <p class="description">
              店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊
            </p>
            <p class="description">
              店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊
            </p>
            <p class="description">
              店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊店鋪資訊
            </p>
          </div>
        </el-col>
        <el-col :sm="24" :md="6">
          <right-section></right-section>
        </el-col>
      </el-row>
    </base-container>
  </div>
  <section class="dialog">
    <el-dialog v-model="dialogVisible">
      <template #header>
        <p class="header">撰寫美評</p>
      </template>
      <Form @formValidation="checkValidation" />
      <template #footer>
        <el-button
          :class="{
            'is-disabled':
              title === '' || description === '' || currentOption === '',
            'is-active': title && description && currentOption,
          }"
          >提交美評</el-button
        >
        <el-button class="cancel">取消</el-button>
      </template>
    </el-dialog>
  </section>
</template>

<script>
import RightSection from "./RightSection.vue";
import Form from "../product/Form.vue";

export default {
  components: {
    RightSection,
    Form,
  },
  data() {
    return {
      dialogVisible: false,
      title: "",
      description: "",
      currentOption: "",
    };
  },
  methods: {
    checkValidation(event) {
      console.log(event);
      this.title = event.title;
      this.description = event.description;
      this.currentOption = event.currentOption;
    },
  },
};
</script>

<style scoped>
.top-section {
  margin-top: 1.5rem;
}

.top-section .content h5 {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
}

.top-section .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 1rem;
}

.top-section .content p {
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  margin-top: 0.5rem;
  color: #54c151;
}

.top-section .links {
  display: flex;
  align-items: center;
}

.top-section .links img {
  width: 2rem;
  cursor: pointer;
}

.top-section .links img:first-of-type {
  margin-right: 1rem;
}

.top-section .text {
  margin-top: 1rem;
}

.top-section .text p.small {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #999999;
}

.top-section .text p.description {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-top: 1rem;
}

.dialog :deep(.el-dialog) {
  width: 30rem;
}

.dialog .el-dialog p.header {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
  text-align: center;
}

.dialog :deep(.el-dialog .el-dialog__header) {
  margin-right: 0;
  border-bottom: 1px solid #e6e6e6;
  border-radius: 0.1px;
}
.dialog :deep(.el-dialog .el-dialog__header .el-dialog__headerbtn) {
  left: 0;
}

.dialog :deep(.el-dialog .el-dialog__body) {
  border-bottom: 1px solid #e6e6e6;
  border-radius: 0.1px;
}

.dialog .el-button {
  width: 100%;
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  border-radius: 8px;
  color: #ffffff;
  padding: 1.2rem;
}

.dialog .el-button.is-disabled {
  background: #cccccc;
}

.dialog .el-button.is-active {
  background: linear-gradient(
      269.05deg,
      rgba(255, 142, 62, 0.6) 0%,
      rgba(255, 142, 62, 0) 100%
    ),
    #e16956;
  border-color: #e16956;
}

.dialog .el-button.cancel {
  color: #666666;
  background: #fff;
  margin-top: 0.5rem;
  border: none;
}

.el-button + .el-button {
  margin: 0;
}

@media screen and (max-width: 500px) {
  .dialog :deep(.el-dialog) {
    width: 22rem;
  }
}
</style>