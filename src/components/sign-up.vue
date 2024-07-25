<template>
    <div class="body">
        <div class="putIn" v-if="!showResult">
            <div class="head">
                <router-link to="/"><img src="../assets/Go Back.png" alt=""></router-link>
                <div class="text" style="display: inline-block;">信息填报</div>
            </div>
            <form action="" @submit.prevent="submitForm">
                <div class="name fill">
                    <img src="../assets/User.png" alt="" style="height: 20px;">
                    <input type="text" v-model="name" placeholder="姓名" required>
                </div>
                <div class="depart fill">
                    <img src="../assets/Flutter dash.png" alt="" style="height: 20px;">
                    <select class="form-control" v-model="depart" required>
                        <option value="" selected disabled hidden style="color: #808DA5;">请选择意向部门</option>
                        <option value="程序开发">程序开发</option>
                        <option value="Web开发">Web开发</option>
                        <option value="游戏开发">游戏开发</option>
                        <option value="APP开发">APP开发</option>
                        <option value="UI设计">UI设计</option>
                    </select>
                </div>
                <div class="stuId fill">
                    <img src="../assets/Identification Documents.png" alt="" style="height: 20px;">
                    <input type="text" v-model="stuId" placeholder="学号" required>
                </div>
                <div class="stuMajor fill">
                    <img src="../assets/Identification Documents.png" alt="" style="height: 20px;">
                    <input type="text" v-model="stuMajor" placeholder="年级专业" required>
                </div>
                <div class="tele fill">
                    <img src="../assets/Phone iphone.png" alt="" style="height: 20px;">
                    <input type="text" v-model="tele" placeholder="电话" required>
                </div>
                <div class="QQ fill">
                    <img src="../assets/Flutter dash.png" alt="" style="height: 20px;">
                    <input type="text" v-model="qq" placeholder="QQ号" required>
                </div>
                <div class="mail fill">
                    <img src="../assets/Flutter dash.png" alt="" style="height: 20px;">
                    <input type="text" v-model="mail" placeholder="邮箱" required>
                    <div class="small" @click="getCode" v-if="second === 61">
                        <el-icon>
                            <Right />
                        </el-icon>
                    </div>
                    <div class="count" v-else>{{ second + 's' }}</div>
                </div>
                <div class="code fill">
                    <input type="text" v-model="code" placeholder="请输入验证码" required
                        style="transform: translateX(10px);">
                </div>
                <input type="submit" class="button" value="提       交">
            </form>
        </div>
        <div class="succeed" style="z-index: 1000;" v-if="showResult">
            <div class="head">
                <a href="#" style="position: fixed;"><img src="../assets/Go Back.png" @click='back' alt=""></a>
                <div class="msg">
                    <div class="text">&nbsp;&nbsp;&nbsp;报名成功！</div>
                    <div class="pic"><img src="../assets/happy.gif" alt="" style="height:200px;"></div>
                    <div class="tip">加群关注后续</div>
                    <div class="QR"><img src="../assets/code.png" alt="" style="height: 200px;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import axios from 'axios';
import { ElNotification } from 'element-plus'

const name = ref('');
const stuId = ref('');
const stuMajor = ref('');
const tele = ref('');
const qq = ref('');
const depart = ref('');
const mail = ref(''); // 确保包含mail  
const code = ref('');
const showResult = ref(false);
const totalSec = ref(61);//验证码总秒数
const second = ref(61);//当前秒数,开定时器，对second--
let timer = null;

function submitForm() {
    if (name.value && stuId.value && tele.value && qq.value && stuMajor.value && depart.value && mail.value && code.value) {
        showResult.value = true;
        // 在这里可以添加将表单数据发送到服务器的代码  
        // ...  

        // 清空表单  
        name.value = '';
        stuId.value = '';
        tele.value = '';
        qq.value = '';
        stuMajor.value = '';
        mail.value = '';
        depart.value = '';
        code.value = '';
    }
};

function back() {
    showResult.value = false;
};

function getCode() {
    const emailError = computed(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(mail.value) ? 'true' : 'false';
    });
    if (emailError.value === 'true') {
        console.log('发送验证码');
        axios.post('api/code-send/', {
            email: mail.value,
        }).then(response => {
            console.log(response.data)
        })
            .catch(error => {
                console.log(error)
            })
        ElNotification.success({
            title: '验证码已发送',
            message: '请及时查看邮箱',
            offset: 100,
        })
        if (!timer && second.value === totalSec.value) {
            timer = setInterval(() => {
                second.value--;
                if (second.value <= 0) {
                    clearInterval(timer);
                    timer = null;
                    second.value = totalSec.value;
                }
                console.log('别急，倒计时完就能再发送');
            }, 1000)
        }
    }
    else if (emailError.value === 'false') {
        console.log('邮箱格式有问题');
        ElNotification.error({
            title: '邮箱格式错误',
            message: '请检查输入是否正确',
            offset: 100,
        })
    }
};
// 组件销毁时清理定时器  
onUnmounted(() => {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
});  
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
}

input {
    outline: none;
    border: 0;
    background-color: transparent;
}

.body {
    background-color: transparent;
    background-image: url(../assets/background.png);
    background-size: 100%;
    display: flex;
    position: relative;
    height: 100vh;
    width: 100vw;
}

.body .putIn {
    width: 33.9%;
    height: 68vh;
    background-color: #D9D9D9;
    position: absolute;
    top: 17.4%;
    left: 11.25%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.putIn .head,
.succeed .head {
    width: 84.79%;
    height: 55px;
    margin-top: 8.23%;
    display: flex;
    margin-bottom: 9.5%;
}

.putIn .head .text {
    color: var(--2, #04132D);
    font-family: "Microsoft JhengHei UI";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 55px;
    height: 55px;
    margin-left: 28px;
}

.putIn form {
    width: 84.79%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    transform: translateY(-30px);
}

.putIn form .fill {
    background-color: rgba(103, 110, 123, 0.09);
    width: 100%;
    height: 3.6vh;
    margin-bottom: 3vh;
    line-height: 45px;
    display: flex;
    align-items: center;
    border-radius: 24px;
    border: 2px solid #808DA5;
}

.putIn form .fill input {
    line-height: 45px;
    color: var(--2, #04132D);
    font-family: "Microsoft JhengHei UI";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
}

.putIn form .fill input::placeholder {
    color: #808DA5;
}

.putIn form .fill img {
    margin-left: 15px;
    margin-right: 20px;
}

.putIn form .button {
    color: #FFF;
    font-family: "Microsoft JhengHei UI";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    height: 50px;
    width: 60%;
    border: none;
    border-radius: 52px;
    background: var(--2, #04132D);
    margin: 0 auto;
}

.mail {
    width: 65% !important;
    position: relative;
}

.code {
    width: 32% !important;
}

.putIn form .mail .small {
    background-color: rgba(241, 244, 248, 0.6);
    color: #808DA5;
    font-size: 20px;
    font-weight: bold;
    width: 2.8vh;
    height: 2.5vh;
    line-height: 2.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    border: 2px solid #808DA5;
    position: absolute;
    right: 5px;
}

.putIn form .mail .count {
    background-color: rgba(241, 244, 248, 0.6);
    color: #808DA5;
    font-size: 12px;
    font-weight: bold;
    width: 2.8vh;
    height: 2.5vh;
    line-height: 2.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    border: 2px solid #808DA5;
    position: absolute;
    right: 5px;
}

.small:active {
    opacity: .7;
}

.small:hover {
    cursor: pointer;
}

.putIn form .button:active {
    opacity: 0.7;
}

.name {
    width: 40% !important;
}

.depart {
    width: 55% !important;
}

select {
    outline: none;
    border: none;
    background-color: transparent;
    width: 80%;
    height: 100%;
    transform: translateX(-10px);
    color: var(--2, #04132D);
    font-weight: bold;
    font-size: 18px;
}

option {
    color: var(--2, #04132D);
    font-weight: bold;
    font-size: 18px;
}

.succeed {
    width: 33.9%;
    height: 65.19%;
    background-color: #D9D9D9;
    position: absolute;
    top: 17.4%;
    left: 11.25%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.succeed .head .msg {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.succeed .head .text {
    color: #000;
    font-family: "Microsoft YaHei UI";
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    margin: 0 auto;
    margin-top: 13.07%;
}

.succeed .head .pic {
    height: 200px;
    margin: 0 auto;
    margin-top: 22px;
}

.tip {
    color: #000;
    font-family: "Microsoft YaHei UI";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 auto;
    margin-top: 5%;
}

.QR {
    margin: 0 auto;
    margin-top: 5%;
}
</style>