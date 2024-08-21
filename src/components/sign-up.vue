<template>
    <div class="body">
        <div class="putIn slide-in-blurred-left" v-if="!showResult && isOn">
            <div class="head">
                <router-link to="/"><img src="../assets/Go Back.webp" alt="" style="height: 50px;"></router-link>
                <div class="text" style="display: inline-block;">信息填报</div>
            </div>
            <form action="" @submit.prevent="submitForm">
                <div class="name fill">
                    <img src="../assets/User.webp" alt="" style="height: 20px;">
                    <input type="text" v-model="name" placeholder="姓名" required>
                    <span class="required-star">*</span>
                </div>
                <div class="depart fill">
                    <span class="required-star">*</span>
                    <img src="../assets/love.webp" alt="" style="height: 20px;">
                    <select class="form-control" v-model="depart" required>
                        <option value="" selected disabled hidden style="color: #808DA5;">请选择意向部门</option>
                        <option value="程序开发">程序开发</option>
                        <option value="Web开发">Web开发</option>
                        <option value="游戏开发">游戏开发</option>
                        <option value="APP开发">APP开发</option>
                        <option value="UI设计">UI设计</option>
                        <option value="ios">iOS</option>
                    </select>
                </div>
                <div class="stuId fill">
                    <span class="required-star">*</span>
                    <img src="../assets/Identification Documents.webp" alt="" style="height: 20px;">
                    <input type="number" v-model="stuId" placeholder="学号" required>
                </div>
                <div class="stuMajor fill">
                    <span class="required-star">*</span>
                    <img src="../assets/Identification Documents.webp" alt="" style="height: 20px;">
                    <input type="text" v-model="stuMajor" placeholder="年级专业(例如：大一电子信息)" required>
                </div>
                <div class="tele fill">
                    <span class="required-star">*</span>
                    <img src="../assets/Phone iphone.webp" alt="" style="height: 20px;">
                    <input type="number" v-model="tele" placeholder="电话" required>
                </div>
                <div class="QQ fill">
                    <img src="../assets/Flutter dash.webp" alt="" style="height: 20px;">
                    <input type="number" v-model="qq" placeholder="QQ号">
                </div>
                <div class="mail fill">
                    <span class="required-star">*</span>
                    <img src="../assets/mail.webp" alt="" style="height: 20px;">
                    <input type="text" v-model="mail" placeholder="邮箱" required>
                </div>
                <div class="code fill">
                    <input type="number" v-model="code" placeholder="请输入验证码" required
                        style="transform: translateX(10px);">
                    <div class="small" @click="getCode" v-if="second === 61" title="获取验证码">获取邮箱验证码</div>
                    <div class="count" v-else>{{ second + 's重新发送' }}</div>
                </div>
                <textarea name="textarea" id="myText" cols="80" rows="8" v-model="reason"
                    placeholder="为什么要加入爱特工作室(选填,不超过200字)"></textarea>
                <input type="submit" :class="['button', { 'upShake': isDown }]" value="提       交" @click="blank">
            </form>
        </div>
        <div class="succeed" style="z-index: 1000;" v-if="showResult && isOn">
            <div class="head">
                <a href="#" style="position: fixed;"><img src="../assets/Go Back.webp" @click='back' alt=""></a>
                <div class="msg">
                    <div class="text">&nbsp;&nbsp;&nbsp;报名成功！</div>
                    <div class="pic"><img src="../assets/happy.gif" alt=""></div>
                    <div class="tip">加群关注后续</div>
                    <div class="QR"><img src="../assets/code.webp" alt="" style="height: 30vh;"></div>
                </div>
            </div>
        </div>
        <div class="isOver" v-if="!isOn">
            <div class="head">
                <router-link to="/"><img src="../assets/Go Back.webp" alt="" style="height: 6vh;"></router-link>
                <div class="text" style="display: inline-block;">:(</div>
                <div class="mainText">
                    <div>报名已结束</div>
                    <div>谢谢参与</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onUnmounted, computed } from 'vue';
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
const reason = ref('');
const showResult = ref(false);
const totalSec = ref(61);//验证码总秒数
const second = ref(61);//当前秒数,开定时器，对second--
let timer = null;
const isDown = ref(false);
const isOn = ref(true);

const isEmail = computed(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail.value); // 返回布尔值而不是字符串  
})

const isPhone = computed(() => {
    const phoneRegex = /^1[3-9]\d{9}$/;
    return phoneRegex.test(tele.value);
})

const isName = computed(() => {
    const nameRegex = /^[\u4e00-\u9fa5A-Za-z\s]+$/;
    return nameRegex.test(name.value);
})

try {
    console.log('查询报名是否过期')
    const response = axios.get('/api/ddl/')
    console.log(response.data)
    if (response.status === 200) {
        console.log('报名仍在继续')
    }
} catch (error) {
    if (error.response.status === 499) {
        console.log('报名已经过期')
        isOn.value = false
    }
}


async function submitForm() {
    if (name.value && stuId.value && tele.value && stuMajor.value && depart.value && mail.value && code.value) {
        if (isName.value && isPhone.value && isEmail.value) {
            try {
                console.log('发送表单')
                const response = await axios.post('/api/enroll/', {
                    name: name.value,
                    department: depart.value,
                    major: stuMajor.value,
                    code: code.value,
                    phone: tele.value,
                    uid: stuId.value,
                    ...qq.value ? { qq: qq.value } : {},
                    ...reason.value ? { content: reason.value } : {},
                    email: mail.value,
                });
                console.log(response.data);
                if (response.status === 201) {
                    ElNotification.success({
                        title: '提交成功！',
                        message: '请等待后续通知~',
                        offset: 100,
                    });
                }
            } catch (error) {
                console.log(error);
                if (error.response) {
                    if (error.response.status === 400) {
                        ElNotification.warning({
                            title: '重复报名',
                            message: '邮箱/手机/学号已经存在报名信息或是验证码已失效',
                            offset: 100,
                        });
                    }
                    if (error.response.status === 404) {
                        ElNotification.warning({
                            title: '邮箱无效',
                            message: '该邮箱当前没有验证码',
                            offset: 100,
                        });
                    }
                    if (error.response.status === 410) {
                        ElNotification.warning({
                            title: '验证码过期',
                            message: '验证码已过期',
                            offset: 100,
                        });
                    }
                    if (error.response.status === 503) {
                        ElNotification.error({
                            title: '报名截止',
                            message: '报名已结束',
                            offset: 100,
                        });
                    }
                }
                return;
            }
            showResult.value = true;
            // 清空表单  
            name.value = '';
            stuId.value = '';
            tele.value = '';
            qq.value = '';
            stuMajor.value = '';
            mail.value = '';
            depart.value = '';
            code.value = '';
            reason.value = '';
        }
        else if (!isName.value) {
            ElNotification.warning({
                title: '姓名格式错误',
                message: '请输入中文/英文名',
                offset: 100,
            });
            isDown.value = true
            setTimeout(() => {
                isDown.value = false
            }, 800)
            return;
        }
        else if (!isPhone.value) {
            ElNotification.warning({
                title: '手机电话格式错误',
                message: '例：138XXXXXX12',
                offset: 100,
            });
            isDown.value = true
            setTimeout(() => {
                isDown.value = false
            }, 800)
            return;
        }
        else if (!isEmail.value) {
            ElNotification.warning({
                title: '邮箱格式错误',
                message: '请检查输入是否正确',
                offset: 100,
            });
            isDown.value = true
            setTimeout(() => {
                isDown.value = false
            }, 800)
            return;
        }
    }
}
function blank() {
    if (!name.value || !stuId.value || !tele.value || !stuMajor.value || !depart.value || !mail.value || !code.value) {
        isDown.value = true
        setTimeout(() => {
            isDown.value = false
        }, 800)
    }
}
function back() {
    showResult.value = false
}

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
        console.log('邮箱格式有问题');
        ElNotification.warning({
            title: '邮箱格式错误',
            message: '请检查输入是否正确',
            offset: 100,
        });
    }
}
// 组件销毁时清理定时器  
onUnmounted(() => {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
})
</script>

<style scoped>
@media (min-width: 1025px) {

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
        background-image: url(../assets/background.webp);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        position: relative;
        height: 100vh;
        width: 100vw;
    }

    .body .putIn {
        width: 33.9%;
        height: 84vh;
        background-color: #D9D9D9;
        position: absolute;
        top: 8vh;
        left: 11.25%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .putIn .head,
    .succeed .head,
    .isOver .head {
        width: 84.79%;
        height: 5vh;
        margin-top: 8.23%;
        display: flex;
        margin-bottom: 9.5%;
    }

    .putIn .head .text {
        color: var(--2, #04132D);
        font-family: "Microsoft JhengHei UI";
        font-size: 4vh;
        font-style: normal;
        font-weight: 700;
        line-height: 55px;
        height: 55px;
        margin-left: 28px;
    }

    .isOver .head .text {
        color: var(--2, #04132D);
        font-family: "Microsoft JhengHei UI";
        font-size: 4vh;
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
        margin-bottom: 2vh;
        line-height: 45px;
        display: flex;
        align-items: center;
        border-radius: 24px;
        border: 2px solid #808DA5;
        position: relative;
    }

    .putIn form .fill .required-star {
        z-index: 100;
        color: red;
        font-size: 20px;
        height: 3.6vh;
        display: flex;
        align-items: center;
        position: absolute;
        left: 40px;
    }

    .putIn form .fill input {
        line-height: 45px;
        color: var(--2, #04132D);
        font-family: "Microsoft JhengHei UI";
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        width: 95%;
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

    .code {
        position: relative;
        padding-left: 0.5vw;
    }

    .putIn form .code .small {
        background-color: #808DA5;
        color: white;
        font-size: 14px;
        font-weight: bold;
        font-family: "Microsoft JhengHei UI";
        width: 8vw;
        height: 3.6vh;
        line-height: 2.5vh;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 24px;
        border: 2px solid #808DA5;
        position: absolute;
        right: -2px;
    }

    .putIn form .code .count {
        background-color: #808DA5;
        color: white;
        font-size: 14px;
        font-weight: bold;
        font-family: "Microsoft JhengHei UI";
        width: 8vw;
        height: 3.6vh;
        line-height: 2.5vh;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 24px;
        border: 2px solid #808DA5;
        position: absolute;
        right: -2px;
    }

    .small:active {
        opacity: .7;
        transform: scale(0.98);
    }

    .small:hover {
        cursor: pointer;
    }

    .putIn form .button:active {
        opacity: 0.7;
        transform: scale(0.98);
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
        height: 84vh;
        background-color: #D9D9D9;
        position: absolute;
        top: 8vh;
        left: 11.25%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .isOver {
        width: 33.9%;
        height: 84vh;
        background-color: #D9D9D9;
        position: absolute;
        top: 8vh;
        left: 11.25%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;
    }

    .mainText {
        position: absolute;
        height: 10vh;
        top: 45%;
        left: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .mainText div {
        color: var(--2, #04132D);
        font-family: "Microsoft JhengHei UI";
        font-size: 4vh;
        font-style: normal;
        font-weight: 700;
        width: 14vw;
        display: flex;
        justify-content: center;
    }

    .succeed .head .msg {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        margin-top: 4vh;
    }

    .succeed .head .text {
        color: #000;
        font-family: "Microsoft YaHei UI";
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        margin: 0 auto;
        /* margin-top: 13.07%; */
    }

    .succeed .head .pic {
        height: 10vh;
        margin: 0 auto;
        margin-top: 22px;
    }

    .pic img {
        height: 100%;
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

    textarea {
        resize: none;
        border: 2px solid #808DA5;
        border-radius: 8px;
        margin-bottom: 5%;
        color: var(--2, #04132D);
        background-color: rgba(103, 110, 123, 0.09);
        padding: 6px;
        font-size: 16px;
        height: 14vh;
    }

    textarea::placeholder {
        color: #808DA5;
        font-size: 14px;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .slide-in-blurred-left {
        -webkit-animation: slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
        animation: slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    }

    @-webkit-keyframes slide-in-blurred-left {
        0% {
            -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
            -webkit-filter: blur(40px);
            filter: blur(40px);
            opacity: 0;
        }

        100% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-blurred-left {
        0% {
            -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
            -webkit-filter: blur(40px);
            filter: blur(40px);
            opacity: 0;
        }

        100% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
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
        background-color: #04132D;
        ;
        background-size: 100%;
        display: flex;
        position: relative;
        height: 100vh;
        width: 100vw;
    }

    .body .putIn {
        width: 100vw;
        height: auto;
        background-color: #D9D9D9;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-self: center;
        flex-wrap: nowrap;
    }

    .putIn .head,
    .succeed .head,
    .isOver .head {
        width: 84.79%;
        margin: 0 auto;
        height: 50px;
        margin-top: 40px;
        display: flex;
        margin-bottom: 40px;
    }

    .putIn .head .text {
        color: var(--2, #04132D);
        font-family: "Microsoft JhengHei UI";
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 55px;
        height: 55px;
        margin-left: 28px;
    }

    .isOver .head .text {
        color: var(--2, #04132D);
        font-family: "Microsoft JhengHei UI";
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 55px;
        height: 55px;
        margin-left: 28px;
    }

    .putIn form {
        width: 84.79%;
        margin: 0 auto;
        height: 900px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        /* transform: translateY(-30px); */
    }

    .putIn form .fill {
        background-color: rgba(103, 110, 123, 0.09);
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
        line-height: 45px;
        display: flex;
        align-items: center;
        border-radius: 24px;
        border: 2px solid #808DA5;
        position: relative;
    }

    .putIn form .fill .required-star {
        z-index: 100;
        color: red;
        font-size: 14px;
        height: 3.6vh;
        display: flex;
        align-items: center;
        position: absolute;
        left: 40px;
    }

    .putIn form .fill input {
        line-height: 45px;
        color: var(--2, #04132D);
        font-family: "Microsoft JhengHei UI";
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        width: 90%;
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
        font-size: 28px;
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

    .code {
        position: relative;
        padding-left: 0.5vw;
    }

    .putIn form .code .small {
        background-color: #808DA5;
        color: white;
        font-size: 12px;
        font-weight: bold;
        font-family: "Microsoft JhengHei UI";
        width: 90px;
        height: 40px;
        line-height: 2.5vh;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 24px;
        border: 2px solid #808DA5;
        position: absolute;
        right: -2px;
    }

    .putIn form .code .count {
        background-color: #808DA5;
        color: white;
        font-size: 12px;
        font-weight: bold;
        font-family: "Microsoft JhengHei UI";
        width: 90px;
        height: 40px;
        line-height: 2.5vh;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 24px;
        border: 2px solid #808DA5;
        position: absolute;
        right: -2px;
    }

    .small:active {
        opacity: .7;
        transform: scale(0.98);
    }

    .small:hover {
        cursor: pointer;
    }

    .putIn form .button:active {
        opacity: 0.7;
        transform: scale(0.98);
    }

    select {
        outline: none;
        border: none;
        background-color: transparent;
        width: 100%;
        height: 100%;
        transform: translateX(-10px);
        color: var(--2, #04132D);
        font-weight: bold;
        font-size: 12px;
    }

    option {
        color: var(--2, #04132D);
        font-weight: bold;
        font-size: 12px;
    }

    .succeed {
        width: 100vw;
        height: 100vh;
        background-color: #D9D9D9;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .isOver {
        width: 100vw;
        height: 100vh;
        background-color: #D9D9D9;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;
    }

    .mainText {
        position: absolute;
        height: 100px;
        width: 200px;
        margin-left: -100px;
        margin-top: -50px;
        top: 50%;
        left: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .mainText div {
        color: var(--2, #04132D);
        font-family: "Microsoft JhengHei UI";
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .succeed .head .msg {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        margin-top: 60px;
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
        height: 100px;
        margin: 0 auto;
        margin-top: 22px;
    }

    .succeed .head .pic img {
        height: 100px !important;
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

    .QR img {
        height: 150px !important;
    }

    textarea {
        resize: none;
        border: 2px solid #808DA5;
        border-radius: 8px;
        margin-bottom: 5%;
        color: var(--2, #04132D);
        background-color: rgba(103, 110, 123, 0.09);
        padding: 6px;
        font-size: 16px;
        height: 14vh;
        width: 100%;
    }

    textarea::placeholder {
        color: #808DA5;
        font-size: 14px;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .slide-in-blurred-left {
        -webkit-animation: slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
        animation: slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    }

    @-webkit-keyframes slide-in-blurred-left {
        0% {
            -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
            -webkit-filter: blur(40px);
            filter: blur(40px);
            opacity: 0;
        }

        100% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-blurred-left {
        0% {
            -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
            -webkit-filter: blur(40px);
            filter: blur(40px);
            opacity: 0;
        }

        100% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
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