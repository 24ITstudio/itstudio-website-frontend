<template>
    <navHead></navHead>
    <div class="box">
        <div class="shadow">
            <div class="back">
                <router-link to="/">
                    <img src="../assets/Arrow back.webp" alt="" width="20px" />
                    <p>返回</p>
                </router-link>
            </div>
        </div>
        <div class="main">
            <div class="top1">您所处的录取阶段为</div>
            <div class="top2">{{ resultText }}</div>
            <div class="mid">
                <div class="highlight scale-in-hor-left" :style="{ width: locate + '%' }">
                </div>
                <div class="common">
                </div>
            </div>


            <div class="bottom">
                <div :class="['words', { 'lightUp': up1 }, { 'upUp': pUp0 }]">报名<span><br></span>成功</div>
                <div :class="['words', { 'lightUp': up1 && up2 }, { 'upUp': pUp1 }]"><span>STEP1</span><br>一面</div>
                <div :class="['words', { 'lightUp': up1 && up2 && up3 }, { 'upUp': pUp2 }]">
                    <span>STEP2</span><br>国庆题
                </div>
                <div :class="['words', { 'lightUp': up1 && up2 && up3 && up4 }, { 'upUp': pUp3 }]">
                    <span>STEP3</span><br>二面
                </div>
                <div :class="['words', { 'lightUp': up1 && up2 && up3 && up4 && up5 }]" v-if="!isMobile">
                    STEP4<br>录取<br>结果</div>
            </div>


        </div>
    </div>
</template>

<script setup>
import navHead from './nav-head.vue';
import { defineProps, ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
    idx: Number,
});

const idx = ref(props.idx);
const locate = ref(5);
const up1 = ref(0);
const up2 = ref(0);
const up3 = ref(0);
const up4 = ref(0);
const up5 = ref(0);
const isMobile = ref(window.innerWidth <= 768);

// 计算属性来动态更新录取结果文本
const resultText = computed(() => {
    if (idx.value === 4) {
        return "成功录取";
    }
    if (idx.value === -4) {
        return "未被录取";
    }
    if (idx.value === -3) {
        return "二面失败";
    }
    if (idx.value === -2) {
        return "国庆题未通过";
    }
    if (idx.value === -1) {
        return "一面失败";
    }
    if (idx.value === 1) {
        return "一面通过";
    }
    if (idx.value === 2) {
        return "国庆题通过";
    }
    if (idx.value === 3) {
        return "二面成功";
    }
    return "已报名";
});

const pUp0 = ref(false);
const pUp1 = ref(false);
const pUp2 = ref(false);
const pUp3 = ref(false);

if (idx.value === 0) {
    pUp0.value = true
}
if (idx.value === 1) {
    pUp1.value = true
}
if (idx.value === 2) {
    pUp2.value = true
}
if (idx.value === 3) {
    pUp3.value = true
}

// 定义每个阶段的进度百分比
const progressSteps = [5, 25, 49, 73.5, 100];

// 根据 idx 的值更新进度条和状态
const updateProgress = () => {
    if (idx.value > -1) {
        if (idx.value >= 0) {
            up1.value = 1;
            if (idx.value >= 1) {
                up2.value = 1;
                if (idx.value >= 2) {
                    up3.value = 1;
                    if (idx.value >= 3) {
                        up4.value = 1;
                        if (idx.value >= 4) {
                            up5.value = 1;
                        }
                    }
                }
            }
        }
    }

    if (idx.value === -1) {
        up1.value = 1;
        up2.value = 1;
        locate.value = 5;
    }

    if (idx.value === -2) {
        up1.value = 1;
        up2.value = 1;
        up3.value = 1;
    }
    if (idx.value === -3) {
        up1.value = 1;
        up2.value = 1;
        up3.value = 1;
        up4.value = 1;
    }
    if (idx.value === -4) {
        up1.value = 1;
        up2.value = 1;
        up3.value = 1;
        up4.value = 1;
        up5.value = 1;
    }

    // 设置进度条位置
    if (idx.value > -1) {
        locate.value = progressSteps[Math.max(0, idx.value)];
    }
};

updateProgress();

// 检测窗口大小变化
const handleResize = () => {
    isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
@media (min-width: 769px) {
    a {
        text-decoration: none;
    }

    body,
    .box {
        position: relative;
        width: 100vw;
        height: 100vh;
        background: url(../assets/bg.webp);
        background-size: 100% 100%;
        display: flex;
        align-items: center;
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
        margin-top: 80px;
        margin-left: 40px;
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

    .main {
        position: absolute;
        width: 76%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10% 10%;
    }

    .top1 {
        color: white;
        font-size: 24px;
        font-family: Microsoft New Tai Lue;
        font-weight: 400;
        word-wrap: break-word;
        margin-bottom: 14px;
    }

    .top2 {
        color: white;
        font-size: 36px;
        font-family: Microsoft New Tai Lue;
        font-weight: 700;
        word-wrap: break-word;
        margin-bottom: 61px;
    }

    .bottom {
        position: relative;
        width: 93%;
        margin-top: 58px;
        justify-content: space-between;
        align-items: flex-start;
        display: inline-flex
    }

    .words {
        text-align: center;
        color: gray;
        font-size: 36px;
        font-family: Microsoft JhengHei UI;
        font-weight: 700;
        word-wrap: break-word;
        line-height: 78px;
    }

    .lightUp {
        color: #fff;
        font-weight: 700;
    }

    .highlight {
        position: absolute;
        left: 0;
        height: 100%;
        width: 16%;
        background-color: #fff;
        border-radius: 15px;
    }

    .common {
        height: 100%;
        width: 100%;
        background-color: rgba(152, 152, 152, 0.3);
        border-radius: 15px;
    }

    .mid {
        height: 30px;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .scale-in-hor-left {
        -webkit-animation: scale-in-hor-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: scale-in-hor-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @-webkit-keyframes scale-in-hor-left {
        0% {
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
            opacity: 1;
        }

        100% {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
            opacity: 1;
        }
    }

    @keyframes scale-in-hor-left {
        0% {
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
            opacity: 1;
        }

        100% {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
            opacity: 1;
        }
    }
}

@media (max-width: 768px) {
    a {
        text-decoration: none;
    }

    body,
    .box {
        position: relative;
        width: 100vw;
        height: 100vh;
        background: url(../assets/bg.webp);
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .shadow {
        width: 92vw;
        height: 100vh;
        background: rgba(120.72, 138.25, 168.94, 0.20);
        /* border-radius: 16px; */
        overflow: hidden;
        border: 1px rgba(120.72, 138.25, 168.94, 0.24) solid;
        backdrop-filter: blur(25px)
    }

    .back {
        position: relative;
        margin-top: 30px;
        margin-left: 10px;
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

    .main {
        position: absolute;
        width: 76%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10% 10%;
    }

    .top1 {
        color: white;
        font-size: 17px;
        font-family: Microsoft New Tai Lue;
        font-weight: 400;
        word-wrap: break-word;
        margin-bottom: 14px;
    }

    .top2 {
        color: white;
        font-size: 19px;
        font-family: Microsoft New Tai Lue;
        font-weight: 700;
        word-wrap: break-word;
        margin-bottom: 45px;
    }


    .bottom {
        position: relative;
        width: 100%;
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

    }

    .words {
        width: auto;
        text-align: center;
        color: gray;
        font-size: 18px;
        font-family: Microsoft JhengHei UI;
        font-weight: 400;
        word-wrap: break-word;
        line-height: 24px;
        margin-right: 10px;
    }

    .words span {
        display: none;
    }

    .upUp {
        color: #fff;
        font-size: 28px;
        font-weight: 700;
    }

    .highlight {
        position: absolute;
        left: 0;
        height: 100%;
        width: 16%;
        background-color: #fff;
        border-radius: 15px;
    }

    .common {
        height: 100%;
        width: 100%;
        background-color: rgba(152, 152, 152, 0.3);
        border-radius: 15px;
    }

    .mid {
        display: none;
    }

    @-webkit-keyframes scale-in-hor-left {
        0% {
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
            opacity: 1;
        }

        100% {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
            opacity: 1;
        }
    }

    @keyframes scale-in-hor-left {
        0% {
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
            opacity: 1;
        }

        100% {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
            opacity: 1;
        }
    }
}
</style>