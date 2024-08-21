<template>
    <navHead :locate="-4000"></navHead>
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
                <div :class="['words', { 'lightUp': up1 }]">报名<br>成功</div>
                <div :class="['words', { 'lightUp': up1 && up2 }]">STEP1<br>一面</div>
                <div :class="['words', { 'lightUp': up1 && up2 && up3 }]">STEP2<br>国庆题</div>
                <div :class="['words', { 'lightUp': up1 && up2 && up3 && up4 }]">STEP3<br>二面</div>
                <div :class="['words', { 'lightUp': up1 && up2 && up3 && up4 && up5 }]">STEP4<br>录取<br>结果</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import navHead from './nav-head.vue';
import { defineProps, ref, computed } from "vue";
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

// 计算属性来动态更新录取结果文本
const resultText = computed(() => {
    if (idx.value === 3) {
        return "成功录取";
    } else if (idx.value === -4) {
        return "未被录取";
    } else {
        return "未录取";
    }
});

// 根据 idx 的值更新进度条和状态
if (idx.value > -1) {
    locate.value = 5;
    up1.value = 1;
    if (idx.value >= 0) {
        locate.value = 23;
        up2.value = 1;
        if (idx.value >= 1) {
            locate.value = 47;
            up3.value = 1;
            if (idx.value >= 2) {
                locate.value = 72;
                up4.value = 1;
                if (idx.value >= 3) {
                    locate.value = 100;
                    up5.value = 1;
                }
            }
        }
    }
}

if (idx.value === -1) {
    locate.value = 46;
    up1.value = 1;
    up2.value = 1;
}

if (idx.value === -2) {
    locate.value = 61;
    up1.value = 1;
    up2.value = 1;
    up3.value = 1;
}
if (idx.value === -3) {
    locate.value = 76;
    up1.value = 1;
    up2.value = 1;
    up3.value = 1;
    up4.value = 1;
}
if (idx.value === -4) {
    locate.value = 100;
    up1.value = 1;
    up2.value = 1;
    up3.value = 1;
    up4.value = 1;
    up5.value = 1;
}

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
        color: white;
        font-size: 36px;
        font-family: Microsoft JhengHei UI;
        font-weight: 700;
        word-wrap: break-word;
        line-height: 98px;
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
        height: 90vh;
        background: rgba(120.72, 138.25, 168.94, 0.20);
        border-radius: 16px;
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
        font-size: 12px;
        font-family: Microsoft New Tai Lue;
        font-weight: 400;
        word-wrap: break-word;
        margin-bottom: 14px;
    }

    .top2 {
        color: white;
        font-size: 16px;
        font-family: Microsoft New Tai Lue;
        font-weight: 700;
        word-wrap: break-word;
        margin-bottom: 45px;
    }

    .bottom {
        position: relative;
        width: 120%;
        margin-top: 24px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
    }

    .words {
        width: 20%;
        text-align: center;
        color: #fff;
        font-size: 16px;
        font-family: Microsoft JhengHei UI;
        font-weight: 400;
        word-wrap: break-word;
        line-height: 24px;
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
        height: 15px;
        width: 100%;
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
</style>