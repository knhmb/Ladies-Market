<template>
  <div class="shop-top-section">
    <base-container>
      <el-row>
        <el-col :sm="24" :md="15">
          <img
            class="beauty-channel-img"
            src="../../assets/beauty-channel/avatar-2.png"
            alt=""
          />
          <div class="content">
            <p>店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱</p>
            <div class="reviews">
              <div class="review">
                <img src="../../assets/home/rating-like-small@2x.png" alt="" />
                <p>2.7k</p>
              </div>
              <div class="review">
                <img src="../../assets/home/rating-ok-small@2x.png" alt="" />
                <p>801</p>
              </div>
              <div class="review">
                <img
                  src="../../assets/home/rating-dislike-small@2x.png"
                  alt=""
                />
                <p>123</p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :sm="24" :md="9">
          <img
            @click="dialogVisible = true"
            class="link"
            src="../../assets/beauty-channel/share@2x.png"
            alt=""
          />
          <img
            class="link"
            src="../../assets/beauty-channel/shop-detail-wish-off@2x.png"
            alt=""
          />
        </el-col>
      </el-row>
    </base-container>
    <el-dialog v-model="dialogVisible" title="Tips">
      <template #header>
        <h5>撰寫美評</h5>
      </template>
      <Form @formValidation="checkValidation" />
      <template #footer>
        <el-button
          @click="confirm"
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
  </div>
  <confirm-dialog
    @dialogClosed="confirmDialog = $event"
    :confirm-dialog="confirmDialog"
  ></confirm-dialog>
</template>

<script>
import Form from "./Form.vue";
import ConfirmDialog from "./ConfirmDialog.vue";

export default {
  components: {
    Form,
    ConfirmDialog,
  },
  data() {
    return {
      dialogVisible: false,
      title: "",
      description: "",
      currentOption: "",
      confirmDialog: false,
    };
  },
  methods: {
    checkValidation(event) {
      console.log(event);
      this.title = event.title;
      this.description = event.description;
      this.currentOption = event.currentOption;
    },
    confirm() {
      if (!this.title || !this.description || !this.currentOption) {
        return;
      }
      this.confirmDialog = true;
    },
  },
};
</script>

<style scoped>
.shop-top-section img.beauty-channel-img {
  width: 3.5rem;
  margin-right: 1rem;
}

.shop-top-section .el-row {
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 1rem;
}

.shop-top-section .el-col:first-of-type {
  display: flex;
  align-items: center;
}

.shop-top-section .content p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 135%;
  color: #333333;
}

.shop-top-section .reviews {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
}

.shop-top-section .reviews .review {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.shop-top-section .reviews .review img {
  width: 2.2rem;
  margin-right: 0.5rem;
}

.shop-top-section .reviews .review p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #333333;
}

.shop-top-section .el-col:nth-of-type(2) {
  text-align: end;
}

.shop-top-section img.link {
  width: 2rem;
  cursor: pointer;
}

.shop-top-section img.link:first-of-type {
  margin-right: 1rem;
}

.shop-top-section :deep(.el-dialog) {
  background: #ffffff;
  box-shadow: 0px 12px 40px rgba(205, 85, 66, 0.2);
  border-radius: 16px;
  width: 30rem;
}

.shop-top-section :deep(.el-dialog .el-dialog__header) {
  border-bottom: 1px solid #e6e6e6;
  margin-right: 0;
}

.shop-top-section :deep(.el-dialog h5) {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
  text-align: center;
}

.shop-top-section :deep(.el-dialog .el-dialog__footer) {
  border-top: 1px solid #e6e6e6;
}

.shop-top-section :deep(.el-dialog .el-button) {
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

.shop-top-section :deep(.el-dialog .el-button.is-disabled) {
  background: #cccccc;
}

.shop-top-section :deep(.el-dialog .el-button.is-active) {
  background: linear-gradient(
      269.05deg,
      rgba(255, 142, 62, 0.6) 0%,
      rgba(255, 142, 62, 0) 100%
    ),
    #e16956;
  border-color: #e16956;
}

.shop-top-section :deep(.el-dialog .el-button.cancel) {
  color: #666666;
  background: #fff;
  margin-top: 0.5rem;
  border: none;
}

.el-button + .el-button {
  margin: 0;
}

.shop-top-section :deep(.el-dialog .el-dialog__headerbtn) {
  left: 0;
}

@media screen and (max-width: 991px) {
  .shop-top-section img.link {
    margin-top: 1rem;
  }
}

@media screen and (max-width: 500px) {
  .shop-top-section :deep(.el-dialog) {
    width: 22rem;
  }
}
</style>