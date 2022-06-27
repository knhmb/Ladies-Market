<template>
  <div class="edit-profile-form">
    <div class="avatar">
      <img
        class="avatar-img"
        src="../../assets/profile/avatar-sample01@2x.png"
        alt=""
      />
      <div class="img-content">
        <img class="edit-icon" src="../../assets/profile/edit@2x.png" alt="" />
      </div>
    </div>
    <el-form>
      <el-row>
        <el-col :span="7">
          <p class="label">顯示名稱</p>
        </el-col>
        <el-col :span="17">
          <el-form-item>
            <el-input v-model="username"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <p class="label">生日日期</p>
        </el-col>
        <el-col :span="17">
          <el-form-item>
            <el-date-picker v-model="date"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <p class="label">性別</p>
        </el-col>
        <el-col :span="17">
          <el-form-item>
            <el-radio-group v-model="value" class="ml-4">
              <el-radio label="男">男</el-radio>
              <el-radio label="女">女</el-radio>
              <el-radio label="保密">保密</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-button>確認修改</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "Tai Man",
      date: "2022-11-11",
      value: "",
    };
  },
};
</script>

<style scoped>
.edit-profile-form .avatar {
  position: relative;
  margin: 1rem auto;
  width: 6rem;
}

.edit-profile-form .avatar img.avatar-img {
  border: 3px solid #ffffff;
  border-radius: 100%;
  width: 100%;
}

.edit-profile-form .avatar .img-content {
  background: #cccccc;
  border-radius: 100px;
  background: #cccccc;
  border-radius: 100px;
  width: 1.3rem;
  height: 1.3rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
}

.edit-profile-form .avatar img.edit-icon {
  width: 1rem;
}

.edit-profile-form .el-row {
  align-items: center;
}

.edit-profile-form .el-row .el-col {
  margin-bottom: 1rem;
}

.edit-profile-form .el-form {
  margin-top: 2rem;
}

.edit-profile-form .el-form :deep(.el-form-item) {
  margin-bottom: 0;
}

.edit-profile-form .el-form p.label {
  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #666666;
}

.edit-profile-form .el-form :deep(.el-input .el-input__wrapper) {
  background: #f5f5f5;
  border-radius: 8px;
}

.edit-profile-form .el-form :deep(.el-date-editor.el-input) {
  width: 100%;
}

.edit-profile-form .el-form :deep(.el-date-editor.el-input .el-input__suffix) {
  display: none;
}

.edit-profile-form .el-form :deep(.el-date-editor.el-input .el-input__prefix) {
  position: absolute;
  right: 0;
}

.edit-profile-form .el-form :deep(.el-radio) {
  margin-right: 4rem;
}

.edit-profile-form .el-form :deep(.el-radio .el-radio__inner) {
  border-radius: 100%;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
}

.edit-profile-form .el-form :deep(.el-radio .el-radio__inner::after) {
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

.edit-profile-form
  .el-form
  :deep(.el-radio .el-radio__input.is-checked .el-radio__inner) {
  background: #e16956;
  border-color: #e16956;
}

.edit-profile-form
  .el-form
  :deep(.el-radio .el-radio__input.is-checked + .el-radio__label) {
  color: #333;
}

.edit-profile-form .el-form .el-button {
  background: #cccccc;
  border-radius: 8px;
  border-color: #cccccc;

  font-family: "PingFang HK";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-top: 1rem;
  padding: 1.2rem;
  width: 10.5rem;
  margin-left: auto;
  display: flex;
}
</style>