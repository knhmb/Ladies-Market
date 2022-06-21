<template>
  <section class="notifications">
    <base-container>
      <h5>最新通知</h5>
      <div
        class="collapse"
        @click="open(item)"
        v-for="item in items"
        :key="item"
      >
        <div class="content" :class="{ 'is-active': item.isCollapsed }">
          <div class="dot"></div>
          <div class="text">
            <p class="date">2022-11-11</p>
            <p v-if="!item.isCollapsed">
              最新消息：方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生
            </p>
            <p v-else>
              最新消息：方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生方珠且做位生乙目化方珠且做位生
            </p>
          </div>
          <img src="../assets/beauty-channel/dropdown@2x.png" alt="" />
        </div>
      </div>
    </base-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeNames: "",
      items: [
        {
          num: 1,
        },
        {
          num: 2,
        },
        {
          num: 3,
        },
        {
          num: 4,
        },
        {
          num: 5,
        },
        {
          num: 6,
        },
        {
          num: 7,
        },
        {
          num: 8,
        },
        {
          num: 9,
        },
        {
          num: 10,
        },
      ],
    };
  },
  methods: {
    open(item) {
      item.isCollapsed = !item.isCollapsed;
    },
  },
};
</script>

<style scoped>
.notifications {
  padding: 2rem 0;
}

.notifications h5 {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #333333;
  margin-bottom: 1rem;
}

.notifications .collapse {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  padding: 0.5rem;
  cursor: pointer;
}

.notifications .collapse:first-of-type {
  border-radius: 4px 4px 0px 0px;
}

.notifications .collapse:nth-of-type(2n) {
  background: #f5f5f5;
}

.notifications .dot {
  background: #f35349;
  border-radius: 100%;
  width: 0.6rem;
  height: 0.5rem;
  margin-right: 0.5rem;
}

.notifications .content.is-active .dot {
  width: 2.5rem;
  height: 0.5rem;
}

.notifications .content {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
}

.notifications .content img {
  width: 1.5rem;
}

.notifications .content .text p {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #333333;
  width: 90%;
}
.notifications .content .text p.date {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #b3b3b3;
  width: 100%;
}

@media screen and (max-width: 540px) {
  .notifications .dot {
    background: #f35349;
    border-radius: 100%;
    width: 1.6rem;
    height: 0.5rem;
    margin-right: 0.5rem;
  }

  .notifications .content.is-active .dot {
    width: 5.6rem;
    height: 0.5rem;
  }
}
</style>