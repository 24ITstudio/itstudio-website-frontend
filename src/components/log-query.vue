<template>
  <navHead></navHead>
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
        <p>请输入手机号/邮箱/学号进行查询</p>
      </div>
      <div class="input">
        <input type="text" placeholder="请输入号码" placeholder-class="place" />
        <a href=""><img src="../assets/Group.png" alt="" /></a>
      </div>
    </div>
  </div>
</template>

<script>
import navHead from "./nav-head.vue"
export default {
  components: {
    navHead,
  },
}
</script>

<style scoped>
body,
.box {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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
  left: 31%;
  top: 31%;
  width: 37%;
  border-radius: 17px;
  max-width: 100%;
  overflow: hidden;
  height: 24%;
  background-color: #29447385;
}

.text p {
  text-align: center;
  letter-spacing: 1.5px;
  margin-top: 30px;
  font-size: 1.2rem;
  font-family: "Microsoft New Tai Lue";
  color: #fff;
}

.input {
  position: relative;
  margin-top: 5px;
  margin-left: 12%;
  width: 78%;
  height: 28%;
}

.input img {
  position: absolute;
  right: 2%;
  top: 13%;
  width: 40px;
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
