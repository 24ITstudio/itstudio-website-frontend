<template>
  <navHead :locate="-4000"></navHead>
  <div class="box" v-if="!showResult">
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
          <input type="text" v-model="mail" placeholder="请输入邮箱地址" placeholder-class="place" />
          <div :class="['code', { 'upShake': isDown }]" @click="getCode" v-if="second === 61">发送验证码</div>
          <div class="count" v-else>{{ second + 's' }}</div>
        </div>
        <div class="input2">
          <input type="text" placeholder="请输入验证码" placeholder-class="place" v-model="code" />
          <div class="search" @click="getProgress"><img src="../assets/Group.png" alt="" title="点击查询" /></div>
        </div>
      </div>
    </div>
  </div>
  <progressBar v-if="showResult" :idx="idx"></progressBar>
</template>
<script setup>
import { ref, onUnmounted, computed } from 'vue';
import navHead from "./nav-head.vue";
import progressBar from "./newProgressBar.vue";
import axios from 'axios';
import { ElNotification } from 'element-plus'
const mail = ref('');
const code = ref('');
const totalSec = ref(61);//验证码总秒数
const second = ref(61);//当前秒数,开定时器，对second--
let timer = null;
const isDown = ref(false);
const showResult = ref(false);
const idx = ref(-1);

const emailError = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailRegex.test(mail.value); // 返回布尔值而不是字符串  
})

async function getCode() {
  if (!emailError.value) { // 如果邮箱格式正确  
    try {
      console.log('发送验证码');

      if (!timer && second.value === totalSec.value) {
        console.log('别急，倒计时完就能再发送')
        timer = setInterval(() => {
          second.value--;
          if (second.value <= 0) {
            clearInterval(timer);
            timer = null;
            second.value = totalSec.value;
          }
        }, 1000);
      }

      const response = await axios.post('/api/code-send/', {
        email: mail.value,
      });
      console.log(response.data);
      if (response.status === 200) {
        ElNotification.success({
          title: '验证码已发送',
          message: '请及时查看邮箱',
          offset: 100,
        });
      }
    } catch (error) {
      console.log(error);
      ElNotification.error({
        title: '发送失败',
        message: '验证码发送失败，请重试',
        offset: 100,
      });
      clearInterval(timer);
      timer = null;
      second.value = totalSec.value;
    }
  } else {
    console.log('邮箱格式有问题')
    ElNotification.warning({
      title: '邮箱格式错误',
      message: '请检查输入是否正确',
      offset: 100,
    })
    isDown.value = true
    setTimeout(() => {
      isDown.value = false
    }, 800)
  }
}

async function getProgress() {
  if (mail.value && code.value) {
    try {
      console.log('发送表单')
      const response = await axios.post('/api/progress/', {
        email: mail.value,
        code: code.value,
      });
      console.log(response.data);
      if (response.status === 200) {
        ElNotification.success({
          title: '查询成功',
          message: '',
          offset: 100,
        });
        idx.value = response.data.idx;
        console.log(idx.value);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        if (error.response.status === 400) {
          ElNotification.warning({
            title: '？？？',
            message: '？？？',
            offset: 100,
          });
        }
        if (error.response.status === 404) {
          ElNotification.warning({
            title: '记录不存在',
            message: '该邮箱当前似乎没有报名',
            offset: 100,
          });
        }
      }
      return;
    }
    showResult.value = true;
    // 清空表单  
    mail.value = '';
    code.value = '';
  }
}

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
})
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

.search {
  position: absolute;
  right: 2%;
  top: 13%;
  width: 40px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
}

.search:active {
  opacity: .6;
}

.code {
  position: absolute;
  right: 5%;
  top: 25%;
  width: 25%;
  height: 50%;
  background-color: #29447385;
  border-radius: 37px;
  border: none;
  color: #FFF;
  cursor: pointer;
  font-size: 14px;
  background-color: #1c3869;
  display: flex;
  align-items: center;
  justify-content: center;
}

.count {
  position: absolute;
  right: 5%;
  top: 25%;
  width: 10%;
  height: 50%;
  background-color: #29447385;
  border-radius: 37px;
  border: none;
  color: #FFF;
  cursor: pointer;
  font-size: 14px;
  background-color: #1c3869;
  display: flex;
  align-items: center;
  justify-content: center;
}

.code:active {
  opacity: .6;
}

.code:hover {
  cursor: pointer;
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

  .code {
    font-size: 8px;
  }

  .search img {
    width: 32px;
  }
}

.upShake {
  -webkit-animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
  animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

@-webkit-keyframes shake-horizontal {

  0%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }

  80% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
  }

  90% {
    -webkit-transform: translateX(-8px);
    transform: translateX(-8px);
  }
}

@keyframes shake-horizontal {

  0%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }

  80% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
  }

  90% {
    -webkit-transform: translateX(-8px);
    transform: translateX(-8px);
  }
}
</style>
