<template>
  <div class="member-info" @click.stop>
    <div class="info">
      <div class="photo"><img :src="member.photo" alt="Member Photo" /></div>
      <div class="name">{{ member.name }}</div>
      <div class="department">{{ member.department }}</div>
      <div class="liuyan">个性留言：{{ member.message }}</div>
      <button @click="$emit('close')" class="back">返回</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["member"],
};
</script>

<style scoped>
/* .member-info {
  border-radius: 30px;
  width: 240px;
  height: 350px;
  background-color: #d9d9d9eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.7;
} */
.info {
  position: relative;
  width: 18%;
  height: 42%;
  background-color: #d9d9d9eb;
  padding: 40px;
  border-radius: 18px;
  margin: 0 auto;
}

.photo {
  margin: 0 auto;
  width: 123px;
  height: 123px;
}

img {
  height: 100%;
  width: 100%;
  border-radius: 20px;
}

.name {
  /* margin-left: 33%; */
  text-align: center;
  margin-top: 28px;
  color: black;
  font-size: 24px;
  font-family: Microsoft New Tai Lue;
  font-weight: 700;
  word-wrap: break-word;
}

.department {
  margin-top: 12px;
  /* margin-left: 31%; */
  text-align: center;
  color: black;
  font-size: 16px;
  font-family: Microsoft New Tai Lue;
  font-weight: 700;
  word-wrap: break-word;
}

.back {
  position: absolute;
  width: 60px;
  height: 29px;
  bottom: 7%;
  left: 42%;
}

.liuyan {
  text-align: center;
  margin-top: 15px;
  color: black;
  font-size: 16px;
  font-family: Microsoft New Tai Lue;
  font-weight: 400;
  word-wrap: break-word;
}

button {
  margin: 0 auto;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid rgb(178, 176, 176);
  background-color: #f1f8f885;
}
button:hover {
  background-color: rgba(217, 217, 217, 0.1);
}
@media (max-width: 430px) {
  .info {
    position: relative;
    width: 45%;
    height: 34%;
    background-color: #d9d9d9eb;
    opacity: 1;
    padding: 40px;
    border-radius: 18px;
    margin: 0 auto;
  }
}
</style>