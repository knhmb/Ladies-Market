<template>
  <div class="journal">
    <p class="journal-title">美麗日誌</p>
    <img
      class="profile-log"
      src="../../assets/profile/profile-log-bg@2x.png"
      alt=""
    />
    <div class="journal-content">
      <div class="content-1">
        <img src="../../assets/profile/profile-comment@2x.png" alt="" />
        <p>美評</p>
      </div>
      <div class="content-1">
        <img src="../../assets/profile/profile-order-record@2x.png" alt="" />
        <p>相片</p>
      </div>
      <div class="content-1">
        <img src="../../assets/profile/profile-photo@2x.png" alt="" />
        <p>已購買</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.journal {
  position: relative;
}

.journal p.journal-title {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #4d4d4d;
  position: absolute;
  top: 0.8rem;
  left: 50%;
  transform: translateX(-50%);
}

.journal img.profile-log {
  width: 100%;
}

.journal .journal-content {
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  width: 100%;
}

.journal .content-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.journal .content-1 img {
  width: 2rem;
  margin-bottom: 0.3rem;
}

.journal .content-1 p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
}
</style>