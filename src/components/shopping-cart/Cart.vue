<template>
  <div class="cart">
    <div class="cart-card">
      <div class="header">
        <el-checkbox @change="checkAllItems" v-model="checkAll"
          >店舖名稱店舖名稱</el-checkbox
        >
        <img src="../../assets/shop/shopping-cart-goto@2x.png" alt="" />
      </div>
      <div class="content">
        <el-row>
          <el-col :sm="24" :md="16">
            <el-checkbox @change="selectItem" v-model="checkbox1">
              <img src="../../assets/home/sample-product@2x.png" alt="" />
            </el-checkbox>
            <div class="checkbox-content">
              <!-- <img src="../../assets/home/sample-product@2x.png" alt="" /> -->
              <div class="text">
                <p>產品名稱產品名稱產品名稱產品名稱產品名稱</p>
                <div class="input-number">
                  <div @click="decrement" class="box">
                    <img
                      src="../../assets/shop/shopping-cart-minus@2x.png"
                      alt=""
                    />
                  </div>
                  <span>{{ num }}</span>
                  <div @click="increment" class="box">
                    <img
                      src="../../assets/shop/shopping-cart-plus@2x.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :sm="24" :md="8">
            <p class="discount">$2,800.00</p>
            <p class="price">$2,230.00</p>
          </el-col>
        </el-row>
      </div>
      <div class="content">
        <el-row>
          <el-col :sm="24" :md="16">
            <el-checkbox v-model="checkbox2">
              <img src="../../assets/home/sample-product@2x.png" alt="" />
            </el-checkbox>
            <div class="checkbox-content">
              <!-- <img src="../../assets/home/sample-product@2x.png" alt="" /> -->
              <div class="text">
                <p>產品名稱產品名稱產品名稱產品名稱產品名稱</p>
                <div class="input-number">
                  <div @click="decrement" class="box">
                    <img
                      src="../../assets/shop/shopping-cart-minus@2x.png"
                      alt=""
                    />
                  </div>
                  <span>{{ num }}</span>
                  <div @click="increment" class="box">
                    <img
                      src="../../assets/shop/shopping-cart-plus@2x.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :sm="24" :md="8">
            <p v-if="value1" class="discount">$2,800.00</p>
            <p class="price">3,000分</p>
          </el-col>
        </el-row>
        <div class="switch">
          <img src="../../assets/shop/bonus-point@2x.png" alt="" />
          <div class="switch-input">
            <p>使用積分換購</p>
            <el-switch @change="switchChanged" v-model="value1" />
          </div>
        </div>
      </div>
      <div class="content">
        <el-row>
          <el-col :sm="24" :md="16">
            <el-checkbox @change="selectItem" v-model="checkbox3">
              <img src="../../assets/home/sample-product@2x.png" alt="" />
            </el-checkbox>
            <div class="checkbox-content">
              <!-- <img src="../../assets/home/sample-product@2x.png" alt="" /> -->
              <div class="text">
                <p>產品名稱產品名稱產品名稱產品名稱產品名稱</p>
                <div class="input-number">
                  <div @click="decrement" class="box">
                    <img
                      src="../../assets/shop/shopping-cart-minus@2x.png"
                      alt=""
                    />
                  </div>
                  <span>{{ num }}</span>
                  <div @click="increment" class="box">
                    <img
                      src="../../assets/shop/shopping-cart-plus@2x.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :sm="24" :md="8">
            <p class="discount">$2,800.00</p>
            <p class="price">$2,230.00</p>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
  <cart-2></cart-2>
</template>

<script>
import Cart2 from "./Cart2.vue";

export default {
  components: {
    Cart2,
  },
  data() {
    return {
      num: 1,
      checkAll: true,
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      value1: false,
    };
  },
  methods: {
    decrement() {
      if (this.num <= 1) {
        return;
      }
      this.num--;
    },
    increment() {
      this.num++;
    },
    checkAllItems() {
      if (this.checkAll) {
        this.checkbox1 = true;
        this.checkbox2 = true;
        this.checkbox3 = true;
      } else {
        this.checkbox1 = false;
        this.checkbox2 = false;
        this.checkbox3 = false;
      }
    },
    selectItem() {
      if (!this.checkbox1 || this.checkbox2 || this.checkbox3) {
        this.checkAll = false;
      }
    },
    switchChanged() {
      console.log(this.value1);
    },
  },
  created() {},
};
</script>

<style scoped>
.cart {
  margin-top: 1rem;
}

.cart .cart-card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

.cart .cart-card .header {
  border-bottom: 1px solid #e6e6e6;
  padding: 1rem;
}

.cart .cart-card .header img {
  width: 1.6rem;
  vertical-align: middle;
  margin-left: 0.5rem;
}

.cart .cart-card .el-col:first-of-type {
  display: flex;
}

.cart .cart-card .el-col:nth-of-type(2) {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}

.cart .cart-card .content {
  padding: 1.5rem 1rem;
  border-bottom: 1px solid #e6e6e6;
}

.cart .cart-card .content .checkbox-content {
  display: flex;
}

.cart .cart-card .content img {
  width: 6rem;
  border-radius: 2px;
  margin-right: 0.5rem;
}

.cart .cart-card .content .text p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #333333;
}

.cart .cart-card .content .text .input-number {
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
}

.cart .cart-card .content .text .input-number span {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 135%;
  text-align: center;
  letter-spacing: -0.02em;
  margin: 0 1rem;
}

.cart .cart-card .content .text .input-number .box {
  background: #f5f5f5;
  border-radius: 4px;
  /* padding: 0.5rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.cart .cart-card .content .text .input-number .box img {
  width: 1.5rem;
  margin: 0;
}

.cart .cart-card .content p.dscount {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  text-decoration-line: line-through;
  color: #999999;
  margin-bottom: 0.5rem;
}

.cart .cart-card .content p.price {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #e16956;
}

.cart .cart-card .content:nth-of-type(3) p.price {
  color: #ff9e45;
}

.cart .cart-card .content .switch {
  background: #f5f5f5;
  border-radius: 80px;
  width: 20rem;
  padding: 0.2rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-left: auto;
}

.cart .cart-card .content .switch img {
  width: 1.5rem;
}

.cart .cart-card .content .switch .switch-input {
  display: flex;
  align-items: center;
}

.cart .cart-card .content .switch .switch-input p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  margin-right: 0.5rem;

  letter-spacing: -0.02em;

  color: #333333;
}

.cart
  .cart-card
  .content
  .switch
  .switch-input
  :deep(.el-switch.is-checked .el-switch__core) {
  background-color: #e16956;
  border-color: #e16956;
}

.cart .cart-card :deep(.el-checkbox) {
  vertical-align: middle;
  height: 100%;
}

.cart .cart-card :deep(.el-checkbox .el-checkbox__inner) {
  border-radius: 100%;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
}

.cart .cart-card :deep(.el-checkbox .el-checkbox__inner::after) {
  transform: none;
  border: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.5rem;
  background: #fff;
  border-radius: 100%;
}

.cart
  .cart-card
  :deep(.el-checkbox .el-checkbox__input.is-checked .el-checkbox__inner) {
  background: #e16956;
  border-color: #e16956;
}

.cart
  .cart-card
  :deep(.el-checkbox .el-checkbox__input.is-checked + .el-checkbox__label) {
  color: #333;
}

@media screen and (max-width: 991px) {
  .cart .cart-card .el-col:nth-of-type(2) {
    margin-top: 1rem;
  }
}
</style>