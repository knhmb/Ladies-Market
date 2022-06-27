<template>
  <div class="profile-left-section">
    <div class="card">
      <div class="header">
        <img src="../../assets/profile/avatar-sample01@2x.png" alt="" />
        <p>Chan Tai Man</p>
        <div class="box">登出</div>
      </div>
      <div class="body">
        <div class="member-card">
          <img src="../../assets/profile/member-card@2x.png" alt="" />
          <div class="points">
            <p class="name">Tai Man</p>
            <div class="available-points">
              <p class="current-points">
                <img
                  src="../../assets/profile/bonus-point@2x.png"
                  alt=""
                />10,000
              </p>
              <p class="expiry-date">註冊日期: 2022-11-11</p>
            </div>
          </div>
        </div>
        <Journal />
      </div>
    </div>
  </div>
</template>

<script>
import Journal from "./Journal.vue";

export default {
  components: {
    Journal,
  },
};
</script>

<style scoped>
.profile-left-section .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
}

.profile-left-section .card .header {
  background-image: url("../../assets/profile/blue.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.profile-left-section .card .header img {
  width: 7rem;
  border-radius: 100%;
  border: 4px solid #ffffff;
}

.profile-left-section .card .header p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 135%;
  color: #ffffff;
  margin-top: 1rem;
}

.profile-left-section .card .header .box {
  background: #006887;
  border-radius: 40px;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  padding: 0.2rem 0.5rem;

  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.profile-left-section .card .body {
  padding: 0.8rem;
}

.profile-left-section .card .body .member-card {
  position: relative;
}

.profile-left-section .card .body .member-card img {
  width: 100%;
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.08));
  border-radius: 8px;
}

.profile-left-section .card .body .member-card .points {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.profile-left-section .card .body .member-card .points p.name {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #0d6d81;
  position: absolute;
  left: 0.6rem;
  bottom: 1.5rem;
}

.profile-left-section .card .body .member-card .points .available-points {
  position: absolute;
  right: 0.6rem;
  bottom: 0.5rem;
}

.profile-left-section
  .card
  .body
  .member-card
  .points
  .available-points
  p.current-points {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
  text-align: end;
  display: flex;
  align-items: center;
}

.profile-left-section
  .card
  .body
  .member-card
  .points
  .available-points
  p.current-points
  img {
  width: 1.2rem;
  margin-right: 0.5rem;
}

.profile-left-section
  .card
  .body
  .member-card
  .points
  .available-points
  p.expiry-date {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  color: #0d6d81;
  /* margin-top: 0.5rem; */
}
</style>