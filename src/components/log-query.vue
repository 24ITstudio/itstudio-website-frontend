<template>
  <navHead :locate="-4000"></navHead>
  <div class="box" v-if="!showResult">
    <div class="shadow">
      <div class="back">
        <router-link to="/">
          <img src="../assets/Arrow back.webp" alt="" width="20px" />
          <p>返回</p>
        </router-link>
      </div>
      <div class="query">
        <div class="text">
          <p>请输入手机号/邮箱/姓名进行查询</p>
        </div>
        <div class="input">
          <div class="input2">
            <input type="text" placeholder="请输入手机号/邮箱/姓名" placeholder-class="place" v-model="code" required />
            <div class="search" @click="getProgress"><img src="../assets/Group.webp" alt="" title="点击查询" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <progressBar v-if="showResult" :idx="idx"></progressBar>
</template>
<script setup>
import { ref, computed } from 'vue';
import navHead from "./nav-head.vue";
import progressBar from "./newProgressBar.vue";
import axios from 'axios';
import { ElNotification } from 'element-plus'
const email = ref('');
const code = ref('');
const phone = ref('');
const name = ref('');
const showResult = ref(false);
const idx = ref(-5);

const isEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(code.value); // 返回布尔值而不是字符串  
})

const isPhone = computed(() => {
  const phoneRegex = /^1[3-9]\d{9}$/;
  return phoneRegex.test(code.value);
})

const isName = computed(() => {
  const nameRegex = /^[\u4e00-\u9fa5]+$/;
  return nameRegex.test(code.value);
})

async function getProgress() {
  if (code.value) {
    try {
      console.log('发送表单')
      if (isEmail.value) {
        email.value = code.value
      }
      else if (isPhone.value) {
        phone.value = Number(code.value)
      }
      else if (isName.value) {
        name.value = code.value
        console.log(name.value)
      }
      const response = await axios.post('/api/progress/', {
        ...email.value ? { email: email.value } : {},
        ...phone.value ? { phone: phone.value } : {},
        ...name.value ? { name: name.value } : {},
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
            title: '无效数据',
            message: '请使用手机号/邮箱/姓名进行查询',
            offset: 100,
          });
        }
        if (error.response.status === 404) {
          ElNotification.warning({
            title: '记录不存在',
            message: '该登记信息当前似乎没有报名',
            offset: 100,
          });
        }
      }
      return;
    }
    showResult.value = true;
    // 清空表单  
    code.value = '';
  }
}

</script>

<style scoped>
@media (min-width: 1025px) {
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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .shadow {
    /* position: absolute;
    left: 7.5%; */
    width: 85vw;
    height: 100vh;
    background-color: #04132dcc;
    transform: translateY(70px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back a {
    position: absolute;
    left: 0;
    top: 0;
    margin: 10px;
    display: flex;
    align-items: center;
  }

  .back img {
    /* position: absolute; */
    width: 20px;
  }

  .back p {
    padding-left: 20px;
    color: #808da5;
    font-size: 15px;
  }

  .query {
    width: 33%;
    border-radius: 17px;
    height: 20%;
    transform: translateY(-70px);
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
    right: 1%;
    top: 6%;
    width: 4vh;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search img {
    width: 100%;
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
}

@media (max-width: 1024px) {
  a {
    text-decoration: none;
  }

  body,
  .box {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url(../assets/bg.jpg);
    background-size: 100% 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .shadow {
    /* position: absolute;
    left: 7.5%; */
    width: 85vw;
    height: 100vh;
    background-color: #04132dcc;
    transform: translateY(70px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back a {
    position: absolute;
    left: 0;
    top: 0;
    margin: 10px;
    display: flex;
    align-items: center;
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
    width: 350px;
    border-radius: 17px;
    height: 160px;
    transform: translateY(-70px);
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
    right: 1%;
    top: 3%;
    width: 12%;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search img {
    width: 100%;
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
}
</style>
