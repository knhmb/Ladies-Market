<template>
  <div class="breadcrumb">
    <div class="breadcrumb-card">
      <div class="content is-active">
        <p>資料填寫</p>
        <img src="../../assets/shop/chevron-right-primary@2x.png" alt="" />
        <!-- <img v-else src="../../assets/shop/chevron-right-gray@2x.png" alt="" /> -->
      </div>
      <div
        class="content"
        :class="{ 'is-active': $route.path === '/checkout' }"
      >
        <p>資料填寫</p>
        <img
          v-if="$route.path === '/checkout'"
          src="../../assets/shop/chevron-right-primary@2x.png"
          alt=""
        />
        <img v-else src="../../assets/shop/chevron-right-gray@2x.png" alt="" />
      </div>
      <div class="content">
        <p>資料填寫</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .breadcrumb {
  margin-top: 1rem;
} */

.breadcrumb .breadcrumb-card {
  background: #ffffff;
  border-radius: 4px 4px 0px 0px;
  display: flex;
  /* justify-content: space-around; */
  /* padding: 0.5rem; */
}

.breadcrumb .breadcrumb-card .content {
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 4px solid #ccc;
}

.breadcrumb .breadcrumb-card .content.is-active {
  border-color: #e16956;
}
.breadcrumb .breadcrumb-card .content.is-active p {
  color: #e16956;
}

.breadcrumb .breadcrumb-card p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #b3b3b3;
  width: 100%;
}

.breadcrumb .breadcrumb-card img {
  width: 1.5rem;
}
</style>

