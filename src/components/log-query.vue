<template>
  <div class="box">
    <div class="shadow">
      <div class="back">
        <router-link to="/">
          <img src="../assets/Arrow back.png" alt="" width="20px" />
          <p>返回</p>
        </router-link>
      </div>
    </div>
    <div class="query">
      s
      <div class="text">
        <p>请输入手机号/邮箱/学号进行查询</p>
      </div>
      <div class="input">
        <div class="input1">
          <input
            type="text"
            v-model="phoneNumber"
            placeholder="请输入号码"
            placeholder-class="place"
          />
          <a href=""
            ><img
              src="../assets/Group.png"
              alt=""
              title="点击发送"
              :disabled="isSending"
              @click="sendVerificationCode"
          /></a>
        </div>
        <div class="input2">
          <input
            type="text"
            placeholder="请输入验证码"
            placeholder-class="place"
          />
          <a href=""
            ><img src="../assets/Group.png" alt="" title="点击发送"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phoneNumber: "",
      isSending: false,
      timer: null,
    };
  },
  methods: {
    sendVerificationCode() {
      if (!this.phoneNumber || !/^1[3-9]\d{9}$/.test(this.phoneNumber)) {
        alert("请输入正确的手机号！");
        return;
      }
      this.isSending = true;
      this.timer = setTimeout(() => {
        this.isSending = false;
      }, 60000);
      this.timer = setTimeout(() => {
        console.log("验证码已发送至手机：", this.phoneNumber);
        this.isSending = false;
        clearTimeout(this.timer);
        this.timer = null;
      }, 1000);
    },
  },
};
</script>

<style scoped>
body,
.box {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url(../assets/bg.jpg);
  background-size: 100%;
}

.shadow {
  position: absolute;
  left: 7.5%;
  width: 85vw;
  height: 100vh;
  background-color: #04132dcc;
}
.query:hover {
  background-color: #29447385;
}
.back {
  position: relative;
  margin: 10px;
}

.back img {
  position: absolute;
  width: 20px;
}
.back p {
  padding-left: 20px;
  color: #808da5;
  font-size: 15px;
}
.back a {
  text-decoration: none;
}
.query {
  transition: all 0.4s;
  position: absolute;
  left: 31%;
  top: 26%;
  width: 37%;
  border-radius: 17px;
  max-width: 100%;
  overflow: hidden;
  height: 31%;
}
.text p {
  text-align: center;
  letter-spacing: 1.5px;
  margin-top: 30px;
  font-size: 1.2em;
  font-family: "Microsoft New Tai Lue";
  color: #fff;
}
.input {
  width: 82%;
  height: 100%;
  margin: 0 auto;
}
.input1,
.input2 {
  position: relative;
  margin-top: 5px;
  margin-left: 12%;
  width: 78%;
  height: 23%;
  margin-bottom: 10px;
}
.input1 img,
.input2 img {
  position: absolute;
  right: 2%;
  top: 13%;
  width: 40px;
}
@keyframes img {
  to {
    transform: scale(1.2);
  }
}
input {
  letter-spacing: 1.5px;
  color: white;
  font-size: 18px;
  padding-left: 18px;
  width: 100%;
  height: 100%;
  outline: none;
  border-radius: 35px;
  background-color: rgba(103, 110, 123, 0.09);
  border: 2.8px solid #808da5;
  box-sizing: border-box;
}

input::-webkit-input-placeholder {
  font-size: 16px;
  color: #808da5;
}
</style>
