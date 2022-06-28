<template>
  <div class="profile-second-section">
    <base-container>
      <div class="tab-content">
        <img class="tab-img" src="../../assets/home/tab4-left@2x.png" alt="" />
        <p class="tab">店舖</p>
        <img class="tab-img" src="../../assets/home/tab4-right@2x.png" alt="" />
      </div>
    </base-container>

    <div class="profile-second-section-main">
      <base-container>
        <el-carousel indicator-position="none" arrow="always" height="50vh">
          <el-carousel-item>
            <el-row :gutter="20">
              <el-col
                class="card-col"
                v-for="item in 4"
                :key="item"
                :sm="12"
                :md="8"
                :lg="6"
              >
                <div class="card">
                  <img
                    class="wish-img"
                    src="../../assets/wish/wish-on-desktop@2x.png"
                    alt=""
                  />
                  <img src="../../assets/home/sample-shop@2x.png" alt="" />
                  <div class="card-body">
                    <p class="title">
                      推廣產品名稱推廣產品名稱推廣產品名稱產品名稱產品名稱產品名稱
                    </p>
                    <p class="description">
                      店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱店舖名稱
                    </p>
                    <div class="reviews">
                      <el-row justify="space-between">
                        <el-col :span="4">
                          <img
                            src="../../assets/home/rating-like-small@2x.png"
                            alt=""
                          />
                          <p>2.7K</p>
                        </el-col>
                        <el-col :span="4">
                          <img
                            src="../../assets/home/rating-ok-small@2x.png"
                            alt=""
                          />
                          <p>847</p>
                        </el-col>
                        <el-col :span="4">
                          <img
                            src="../../assets/home/rating-dislike-small@2x.png"
                            alt=""
                          />
                          <p>20</p>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </base-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.profile-second-section {
  margin-top: 2rem;
}

.profile-second-section .container {
  padding: 0 13rem;
}

.profile-second-section p.tab {
  background: #faeadd;
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #4d4d4d;
  padding: 0.2rem;
}

.profile-second-section .tab-content {
  display: flex;
}

.profile-second-section .tab-content img.tab-img {
  width: 1.5rem;
  /* margin-left: 0.2rem; */
}

.profile-second-section .profile-second-section-main {
  background: #faeadd;
  padding: 1.5rem 0;
}

.profile-second-section .profile-second-section-main .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  position: relative;
}

.profile-second-section .profile-second-section-main .card img {
  width: 100%;
  border-radius: 8px 8px 0 0;
}

.profile-second-section .profile-second-section-main .card img.video-img {
  border: none;
  width: 2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}

.profile-second-section .profile-second-section-main .card img.wish-img {
  border: none;
  width: 2rem;
  position: absolute;
  right: 0.1rem;
  top: 0rem;
}

.profile-second-section .profile-second-section-main .card .card-body {
  padding: 0.5rem;
}

.profile-second-section .profile-second-section-main .card .card-body p.title {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 0.5rem;
}
.profile-second-section
  .profile-second-section-main
  .card
  .card-body
  p.description {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #808080;
}

.profile-second-section .profile-second-section-main .card .reviews {
  margin-top: 1.5rem;
}

.profile-second-section .profile-second-section-main .card .reviews .el-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.profile-second-section
  .profile-second-section-main
  .card
  .reviews
  .el-col:not(:last-of-type):after {
  content: "";
  position: absolute;
  right: -1.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: #e6e6e6;
  height: 2.5rem;
  width: 1px;
}

/* .profile-second-section .profile-second-section-main .card .reviews .el-col:last-of-type::after */

.profile-second-section .profile-second-section-main .card .reviews img {
  width: 2rem;
}

.profile-second-section .profile-second-section-main .card .reviews p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-top: 0.2rem;
}

.profile-second-section .profile-second-section-main .el-carousel {
  overflow: visible;
}

.profile-second-section
  .profile-second-section-main
  .el-carousel
  :deep(.el-carousel__arrow) {
  background-color: #fff;
  color: #666;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
}

.profile-second-section
  .profile-second-section-main
  .el-carousel
  :deep(.el-carousel__arrow--left) {
  left: -3rem;
}

.profile-second-section
  .profile-second-section-main
  .el-carousel
  :deep(.el-carousel__arrow--right) {
  right: -3rem;
}

@media screen and (max-width: 991px) {
  .profile-second-section .container {
    padding: 0rem 1rem;
  }

  .profile-second-section
    .profile-second-section-main
    .el-carousel
    :deep(.el-carousel__arrow--left) {
    left: 0;
  }

  .profile-second-section
    .profile-second-section-main
    .el-carousel
    :deep(.el-carousel__arrow--right) {
    right: 0;
  }
}
</style>