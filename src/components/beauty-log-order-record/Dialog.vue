<template>
  <div class="order-record-dialog">
    <el-dialog
      @close="$emit('dialogClosed', false)"
      :model-value="dialogVisible"
      title="訂單詳細"
    >
      <el-row :gutter="80">
        <el-col :sm="24" :md="12">
          <div class="profile-info">
            <h6>訂單詳細</h6>
            <div class="content">
              <div class="single-info">
                <p class="question">訂單號碼</p>
                <p class="answer">ABCD123456789</p>
              </div>
              <div class="single-info">
                <p class="question">訂單日期</p>
                <p class="answer">2022-11-11</p>
              </div>
              <div class="single-info">
                <p class="question">訂購人名稱</p>
                <p class="answer">Chan Tai Man</p>
              </div>
              <div class="single-info">
                <p class="question">訂單狀態</p>
                <p class="answer is-colored">已付款</p>
              </div>
            </div>
          </div>
          <div class="orders">
            <h6>訂單產品</h6>
            <div class="card">
              <div class="top">
                <img src="../../assets/home/sample-product@2x.png" alt="" />
                <p>乍話喝幼祖原又你重心戶丟拉條錯流位乍話喝幼祖原又</p>
              </div>
              <div class="bottom">
                <p>數量: 1</p>
                <div class="prices">
                  <p class="discount">$2,800.00</p>
                  <p class="price">$2,230.00</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="top">
                <img src="../../assets/home/sample-product@2x.png" alt="" />
                <p>乍話喝幼祖原又你重心戶丟拉條錯流位乍話喝幼祖原又</p>
              </div>
              <div class="bottom">
                <p>數量: 1</p>
                <div class="prices">
                  <p class="discount">$2,800.00</p>
                  <p class="price">$2,230.00</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="top">
                <img src="../../assets/home/sample-product@2x.png" alt="" />
                <p>乍話喝幼祖原又你重心戶丟拉條錯流位乍話喝幼祖原又</p>
              </div>
              <div class="bottom">
                <p>數量: 1</p>
                <div class="prices">
                  <p class="discount">$2,800.00</p>
                  <p class="price">$2,230.00</p>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :sm="24" :md="12">
          <Form />
          <price-details></price-details>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import Form from "./Form";
import PriceDetails from "./PriceDetails.vue";

export default {
  props: ["dialogVisible"],
  components: {
    Form,
    PriceDetails,
  },
};
</script>

<style scoped>
.order-record-dialog :deep(.el-dialog) {
  width: 50rem;
  border-radius: 1rem;
}

.order-record-dialog :deep(.el-dialog .el-dialog__header) {
  text-align: center;
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  border-bottom: 1px solid #e6e6e6;
}

.order-record-dialog :deep(.el-dialog .el-dialog__headerbtn) {
  left: 0;
}

.order-record-dialog :deep(.el-dialog .profile-info h6) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
}

.order-record-dialog :deep(.el-dialog .content) {
  margin-top: 1rem;
}

.order-record-dialog :deep(.el-dialog .content .single-info) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.order-record-dialog
  :deep(.el-dialog .content .single-info:not(:last-of-type)) {
  margin-bottom: 1rem;
}

.order-record-dialog :deep(.el-dialog .content .single-info p.question) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #666666;
}

.order-record-dialog :deep(.el-dialog .content .single-info p.answer) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
}
.order-record-dialog
  :deep(.el-dialog .content .single-info p.answer.is-colored) {
  font-weight: 600;
  color: #e16956;
}

.order-record-dialog :deep(.el-dialog .orders) {
  margin-top: 1rem;
}

.order-record-dialog :deep(.el-dialog .orders .card) {
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 0.5rem;
}

.order-record-dialog :deep(.el-dialog .orders .card:not(:last-of-type)) {
  margin-bottom: 0.5rem;
}

.order-record-dialog :deep(.el-dialog .orders h6) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 1rem;
}

.order-record-dialog :deep(.el-dialog .orders .card .top) {
  display: flex;
}

.order-record-dialog :deep(.el-dialog .orders .card .top p) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
}

.order-record-dialog :deep(.el-dialog .orders .card .top img) {
  width: 6rem;
  border-radius: 2px;
  margin-right: 0.5rem;
}

.order-record-dialog :deep(.el-dialog .orders .bottom) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 6.6rem;
}

.order-record-dialog :deep(.el-dialog .orders .bottom p) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  align-self: flex-end;
}

.order-record-dialog :deep(.el-dialog .orders .bottom .prices p.discount) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  text-decoration-line: line-through;
  color: #999999;
}

.order-record-dialog :deep(.el-dialog .orders .bottom .prices p.price) {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: -0.02em;
  color: #e16956;
}

@media screen and (max-width: 820px) {
  .order-record-dialog :deep(.el-dialog) {
    width: 42rem;
  }
}

@media screen and (max-width: 690px) {
  .order-record-dialog :deep(.el-dialog) {
    width: 22rem;
  }
}
</style>