<template>
  <div class="shop-form">
    <el-form label-position="top">
      <el-form-item label="美評標題">
        <el-input
          @input="updateFields"
          v-model="title"
          placeholder="請輸入標題"
        ></el-input>
      </el-form-item>
      <el-form-item label="內容">
        <el-input
          @input="updateFields"
          type="textarea"
          v-model="description"
          rows="5"
          placeholder="可留下你對此公司的意見"
        ></el-input>
      </el-form-item>
      <el-form-item label="評分">
        <div
          @click="setOption('like')"
          :class="{ 'is-active': currentOption === 'like' }"
          class="rate-box"
        >
          <img src="../../assets/home/rating-like-small@2x.png" alt="" />
          <p>好評</p>
        </div>
        <div
          @click="setOption('ok')"
          :class="{ 'is-active': currentOption === 'ok' }"
          class="rate-box"
        >
          <img src="../../assets/home/rating-ok-small@2x.png" alt="" />
          <p>一般</p>
        </div>
        <div
          @click="setOption('dislike')"
          :class="{ 'is-active': currentOption === 'dislike' }"
          class="rate-box"
        >
          <img src="../../assets/home/rating-dislike-small@2x.png" alt="" />
          <p>劣評</p>
        </div>
      </el-form-item>
      <el-form-item label="細項評分">
        <div class="ratings">
          <div class="rate">
            <p>成效</p>
            <div class="numbers">
              <img src="../../assets/shop/score-1-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-2-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-3-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-4-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-5-small-off@2x.png" alt="" />
            </div>
          </div>
          <div class="rate">
            <p>服務</p>
            <div class="numbers">
              <img src="../../assets/shop/score-1-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-2-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-3-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-4-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-5-small-off@2x.png" alt="" />
            </div>
          </div>
          <div class="rate">
            <p>衛生</p>
            <div class="numbers">
              <img src="../../assets/shop/score-1-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-2-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-3-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-4-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-5-small-off@2x.png" alt="" />
            </div>
          </div>
          <div class="rate">
            <p>價錢</p>
            <div class="numbers">
              <img src="../../assets/shop/score-1-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-2-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-3-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-4-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-5-small-off@2x.png" alt="" />
            </div>
          </div>
          <div class="rate">
            <p>環境</p>
            <div class="numbers">
              <img src="../../assets/shop/score-1-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-2-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-3-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-4-small-off@2x.png" alt="" />
              <img src="../../assets/shop/score-5-small-off@2x.png" alt="" />
            </div>
          </div>
        </div>
      </el-form-item>
      <el-form-item>
        <div class="content">
          <p class="label">上傳圖片 <span>(最多上傳3張圖片)</span></p>
          <el-upload action="#" list-type="picture-card" :auto-upload="false">
            <el-icon><Upload /></el-icon>

            <template #file="{ file }">
              <div>
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <el-icon><zoom-in /></el-icon>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <el-icon><Download /></el-icon>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <el-icon><Delete /></el-icon>
                  </span>
                </span>
              </div>
            </template>
          </el-upload>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Upload } from "@element-plus/icons-vue";

export default {
  components: {
    Upload,
  },
  data() {
    return {
      imageUrl: "",
      title: "",
      description: "",
      currentOption: "",
    };
  },
  watch: {
    currentOption() {
      this.updateFields();
    },
  },

  methods: {
    setOption(option) {
      this.currentOption = option;
    },
    updateFields() {
      this.$emit("formValidation", {
        title: this.title,
        description: this.description,
        currentOption: this.currentOption,
      });
    },
  },
  created() {
    this.updateFields();
  },
};
</script>

<style scoped>
.shop-form .rate-box {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
}

.shop-form .rate-box:hover,
.shop-form .rate-box.is-active {
  background: #ff9200;
  border-color: #ff9200;
}

.shop-form .rate-box:nth-of-type(2) {
  margin: 0 1rem;
}

.shop-form .rate-box img {
  width: 1rem;
  margin-right: 0.5rem;
}

.shop-form .rate-box p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
}

.shop-form .rate-box:hover p,
.shop-form .rate-box.is-active p {
  color: #fff;
}

.shop-form p.label {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #666666;
  margin-bottom: 1rem;
}

.shop-form p.label span {
  color: #999;
}

.shop-form :deep(.el-upload.el-upload--picture-card),
.shop-form :deep(.el-upload-list__item.is-ready) {
  width: 5rem;
  height: 5rem;
}

.shop-form .el-form :deep(.el-input .el-input__wrapper),
.shop-form .el-form :deep(.el-textarea .el-textarea__inner) {
  background: #f5f5f5;
  /* border: 1px solid #e6e6e6; */
  border-radius: 8px;
}

.shop-form .el-form :deep(.el-form-item .el-form-item__label) {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #666666;
  margin-bottom: 0.3rem;
}

.shop-form .el-form .ratings {
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 0 1rem;
  /* padding-top: 0; */
  width: 100%;
}

.shop-form .el-form .ratings .rate {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.shop-form .el-form .ratings .rate:not(:last-of-type) {
  border-bottom: 1px solid #e6e6e6;
}

.shop-form .el-form .ratings .rate p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
}

.shop-form .el-form .ratings .rate .numbers img {
  width: 1.5rem;
  cursor: pointer;
}

.shop-form .el-form .ratings .rate .numbers img:not(:last-of-type) {
  margin-right: 1rem;
}
</style>