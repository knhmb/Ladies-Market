<template>
  <div class="beauty-channel-right-section">
    <div class="tab-content">
      <img class="tab-img" src="../../assets/home/tab2-left@2x.png" alt="" />
      <p class="tab">即時留言</p>
      <img class="tab-img" src="../../assets/home/tab2-right@2x.png" alt="" />
    </div>
    <div class="chat">
      <div class="chat-card">
        <div class="chat-content">
          <img
            src="../../assets/beauty-channel/default-avatar-unknown@2x.png"
            alt=""
          />
          <p>tadeubonini</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div class="chat-content">
          <img
            src="../../assets/beauty-channel/default-avatar-female@2x.png"
            alt=""
          />
          <p>johndue</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div class="chat-content">
          <img
            src="../../assets/beauty-channel/default-avatar-male@2x.png"
            alt=""
          />
          <p>andrebiachi</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div class="chat-content">
          <img
            src="../../assets/beauty-channel/default-avatar-unknown@2x.png"
            alt=""
          />
          <p>tadeubonini</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div class="chat-content">
          <img
            src="../../assets/beauty-channel/default-avatar-male@2x.png"
            alt=""
          />
          <p>gabrielcantarin</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div class="chat-content">
          <img
            src="../../assets/beauty-channel/default-avatar-female@2x.png"
            alt=""
          />
          <p>johndue</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div class="chat-content">
          <img
            src="../../assets/beauty-channel/default-avatar-male@2x.png"
            alt=""
          />
          <p>gabrielcantarin</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div class="chat-content">
          <img
            src="../../assets/beauty-channel/default-avatar-male@2x.png"
            alt=""
          />
          <p>gabrielcantarin</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div class="chat-content">
          <img
            src="../../assets/beauty-channel/default-avatar-male@2x.png"
            alt=""
          />
          <p>gabrielcantarin</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div class="comment-input">
        <img
          class="chat-icon"
          src="../../assets/beauty-channel/chat@2x.png"
          alt=""
        />
        <el-input v-model="chat" placeholder="輸入留言..."></el-input>
        <img
          class="like-icon"
          src="../../assets/home/rating-like-small@2x.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chat: "",
    };
  },
};
</script>

<style scoped>
.beauty-channel-right-section p.tab {
  background: #fef2e2;
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #4d4d4d;
  padding: 0.2rem;
}

.beauty-channel-right-section .tab-content {
  display: flex;
  margin-left: 0.7rem;
}

.beauty-channel-right-section .tab-content img.tab-img {
  width: 1.5rem;
}

.beauty-channel-right-section .chat {
  background: #fef2e2;
  border-radius: 8px;
  padding: 0.5rem;
}

.beauty-channel-right-section .chat .chat-card {
  background: #ffffff;
  border-radius: 4px;
  padding: 1rem 0.5rem;
}

.beauty-channel-right-section .chat .chat-card .chat-content {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.beauty-channel-right-section .chat .chat-card .chat-content img {
  width: 1.5rem;
  border-radius: 100%;
}

.beauty-channel-right-section .chat .chat-card .chat-content p {
  font-family: Noto Sans TC, PingFang, Helvetica, Arial, sans-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #333333;
  margin: 0 0.5rem;
}

.beauty-channel-right-section .chat .chat-card .chat-content p:nth-of-type(2) {
  font-weight: 400;
  margin: 0;
}

.beauty-channel-right-section .chat .comment-input {
  position: relative;
  margin-top: 1rem;
}

.beauty-channel-right-section .chat .el-input :deep(.el-input__wrapper) {
  background: #ffffff;
  border-radius: 4px;
  padding: 0.2rem 2.5rem;
}

.beauty-channel-right-section .chat .comment-input img.chat-icon {
  width: 1.2rem;
  position: absolute;
  left: 0.7rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.beauty-channel-right-section .chat .comment-input img.like-icon {
  width: 1.2rem;
  position: absolute;
  right: 0.7rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

@media screen and (max-width: 991px) {
  .beauty-channel-right-section {
    margin-top: 1.5rem;
  }
}
</style>