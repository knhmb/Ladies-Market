<template>
  <section class="edit-member">
    <div class="card">
      <h5>修改資料</h5>
      <div class="tab">
        <div class="content">
          <div
            @click="navigate('/profile/edit-member')"
            :class="{
              'is-active': $route.path === '/profile/edit-member',
            }"
            class="single-tab"
          >
            會員資料
          </div>
          <div
            @click="navigate('/profile/edit-password')"
            :class="{
              'is-active': $route.path === '/profile/edit-password',
            }"
            class="single-tab"
          >
            修改密碼
          </div>
        </div>
      </div>
      <Form v-if="$route.path === '/profile/edit-member'" />
      <change-password-form
        v-if="$route.path === '/profile/edit-password'"
      ></change-password-form>
    </div>
  </section>
</template>

<script>
import Form from "../components/edit-profile/Form.vue";
import ChangePasswordForm from "../components/change-password/ChangePasswordForm.vue";

export default {
  components: {
    Form,
    ChangePasswordForm,
  },
  data() {
    return {};
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.edit-member .card {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  padding: 1rem;
}

.edit-member .card h5 {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #333333;
}

.edit-member .card .tab {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 0 0.5rem;
  margin-top: 1rem;
}

.edit-member .card .tab .content {
  display: flex;
}

.edit-member .card .tab .content .single-tab {
  background: #f5f5f5;
  padding: 0.8rem 1.5rem;

  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: #999999;
  cursor: pointer;
}

.edit-member .card .tab .content .single-tab.is-active {
  box-shadow: inset 0px -3px 0px #09c0e0;
  color: #333;
  font-weight: 500;
}
</style>