<template>
  <navHead :locate="-4000"></navHead>
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
      <div class="text">
        <p>请输入邮箱进行查询</p>
      </div>
      <div class="input">
        <div class="input1">
          <input
            type="text"
            v-model="phoneNumber"
            placeholder="请输入邮箱地址"
            placeholder-class="place"
          />
          <button>发送验证码</button>
        </div>
        <div class="input2">
          <input
            type="text"
            placeholder="请输入验证码"
            placeholder-class="place"
          />
          <a href=""
            ><img src="../assets/Group.png" alt="" title="点击查询"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navHead from "./nav-head.vue";
export default {
  components: {
    navHead,
  },
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
a {
  text-decoration: none;
}
body,
.box {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url(../assets/bg.jpg);
  background-size: 100%;
  overflow: hidden;
}

.shadow {
  position: absolute;
  left: 7.5%;
  width: 85vw;
  height: 100vh;
  background-color: #04132dcc;
  transform: translateY(70px);
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
.query {
  position: absolute;
  left: 33%;
  top: 26%;
  width: 33%;
  border-radius: 17px;
  height: 31%;
  transform: translateY(70px);
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
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.input1,
.input2 {
  position: relative;
  margin-top: 5px;
  margin-left: 12%;
  width: 80%;
  height: 23%;
  margin-bottom: 10px;
}
.input2 img {
  position: absolute;
  right: 2%;
  top: 13%;
  width: 40px;
}
button {
  position: absolute;
  right: 5%;
  top: 25%;
  width: 25%;
  height: 50%;
  background-color: #29447385;
  border-radius: 37px;
  border: none;
  color: wheat;
  cursor: pointer;
  font-size: 14px;
  background-color: #1c3869;
}
input {
  letter-spacing: 1.5px;
  color: white;
  font-size: 15px;
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
.query {
  animation-duration: 1s;
  animation-name: slidein;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}
@keyframes slidein {
  from {
    transform: translateY(-134px);
  }
  to {
    top: 23%;
    background-color: #29447385;
  }
}
@media (max-width: 376px) {
  .query {
    width: 80%;
    left: 11%;
  }
  .shadow {
    width: 100%;
    height: 100%;
  }
  .text p {
    font-size: 16px;
  }
  input::-webkit-input-placeholder {
    font-size: 14px;
  }
  input {
    font-size: 12px;
  }
  .input1,
  .input2 {
    width: 88%;
    right: 5%;
  }
  button {
    font-size: 12px;
    width: 30%;
    right: 2%;
  }
  .input2 img {
    top: 8%;
  }
}
</style>
