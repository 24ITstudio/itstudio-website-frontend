<!-- 临时用于router的homePage页面！ -->
<template>
    <navHead :locate="-4000"></navHead>
    <main class="main" v-cloak>
        <section :class="['sec', { 'turnGray': showQR }]" @click="closeQR">
            <div class="titleimg">
                <div class="title3">
                    <div class="title">
                        <div class="slide-top">
                            <router-link to="/signUp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 62 62"
                                    fill="none" id="one">
                                    <g clip-path="url(#clip0_158_23)">
                                        <path
                                            d="M56.8075 20.6667C56.8075 18.8067 55.8516 17.1792 54.3791 16.275L31 2.58334L7.62079 16.275C6.14829 17.1792 5.16663 18.8067 5.16663 20.6667V46.5C5.16663 49.3417 7.49163 51.6667 10.3333 51.6667H51.6666C54.5083 51.6667 56.8333 49.3417 56.8333 46.5L56.8075 20.6667ZM31 33.5833L9.66163 20.2533L31 7.75001L52.3383 20.2533L31 33.5833Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_158_23">
                                            <rect width="58" height="55" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div class="teXt">报名入口</div>
                            </router-link>
                        </div>
                        <div class="slide-top">
                            <router-link to="/log">
                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 62 62"
                                    fill="none" id="two">
                                    <path
                                        d="M25.8727 26.4191C22.5816 26.4191 19.7643 25.2521 17.4206 22.9182C15.077 20.5843 13.9051 17.7786 13.9051 14.5012C13.9051 11.2238 15.077 8.41812 17.4206 6.0842C19.7643 3.75029 22.5816 2.58333 25.8727 2.58333C29.1638 2.58333 31.9812 3.75029 34.3249 6.0842C36.6685 8.41812 37.8404 11.2238 37.8404 14.5012C37.8404 17.7786 36.6685 20.5843 34.3249 22.9182C31.9812 25.2521 29.1638 26.4191 25.8727 26.4191ZM56.9886 58.5973L49.5088 51.1486C48.4616 51.7445 47.3397 52.2411 46.1429 52.6384C44.9461 53.0356 43.6746 53.2343 42.3282 53.2343C38.5883 53.2343 35.4089 51.9312 32.79 49.3252C30.1731 46.7172 28.8646 43.551 28.8646 39.8267C28.8646 36.1023 30.1731 32.9362 32.79 30.3281C35.4089 27.7221 38.5883 26.4191 42.3282 26.4191C46.0681 26.4191 49.2475 27.7221 51.8664 30.3281C54.4833 32.9362 55.7918 36.1023 55.7918 39.8267C55.7918 41.1674 55.5923 42.4337 55.1934 43.6255C54.7945 44.8173 54.2958 45.9346 53.6975 46.9774L61.1772 54.4261C61.7257 54.9723 62 55.6675 62 56.5117C62 57.3559 61.7257 58.0511 61.1772 58.5973C60.6287 59.1435 59.9306 59.4167 59.0829 59.4167C58.2352 59.4167 57.5371 59.1435 56.9886 58.5973ZM42.3282 47.2753C44.4226 47.2753 46.1928 46.5553 47.6389 45.1152C49.0849 43.6751 49.808 41.9123 49.808 39.8267C49.808 37.741 49.0849 35.9782 47.6389 34.5381C46.1928 33.098 44.4226 32.378 42.3282 32.378C40.2339 32.378 38.4637 33.098 37.0176 34.5381C35.5715 35.9782 34.8485 37.741 34.8485 39.8267C34.8485 41.9123 35.5715 43.6751 37.0176 45.1152C38.4637 46.5553 40.2339 47.2753 42.3282 47.2753ZM7.92131 50.2548C6.27576 50.2548 4.86657 49.6718 3.69375 48.5059C2.52292 47.3379 1.9375 45.9346 1.9375 44.2959V41.9868C1.9375 40.2984 2.36135 38.7342 3.20906 37.2941C4.05677 35.854 5.2286 34.7616 6.72455 34.0167C9.26767 32.7256 12.1349 31.6331 15.3263 30.7393C18.5176 29.8454 22.0581 29.3985 25.9475 29.3985C24.9502 30.9379 24.1893 32.5885 23.6647 34.3504C23.1421 36.1142 22.8808 37.9397 22.8808 39.8267C22.8808 41.664 23.1421 43.4636 23.6647 45.2255C24.1893 46.9893 24.9502 48.6657 25.9475 50.2548H7.92131Z"
                                        fill="white" />
                                </svg>
                                <div class="teXt">进度查询</div>
                            </router-link>
                        </div>
                        <div class="slide-top">
                            <router-link to="/letter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 62 62"
                                    fill="none" id="three">
                                    <g clip-path="url(#clip0_15_58)">
                                        <path
                                            d="M56.8333 18.0317V41.3333C56.8333 44.175 54.5083 46.5 51.6666 46.5H15.5L5.16663 56.8333V10.3333C5.16663 7.49167 7.49163 5.16667 10.3333 5.16667H36.425C36.27 5.99333 36.1666 6.87167 36.1666 7.75C36.1666 14.88 41.9533 20.6667 49.0833 20.6667C52.0025 20.6667 54.6633 19.6592 56.8333 18.0317ZM41.3333 7.75C41.3333 12.0383 44.795 15.5 49.0833 15.5C53.3716 15.5 56.8333 12.0383 56.8333 7.75C56.8333 3.46167 53.3716 0 49.0833 0C44.795 0 41.3333 3.46167 41.3333 7.75Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_58">
                                            <rect width="58" height="55" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div class="teXt">留言板</div>
                            </router-link>
                        </div>
                    </div>
                    <div class="title2-1 slide-in-blurred-bottom">爱特<br>工作室</div>
                </div>
            </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="32" viewBox="0 0 32 32" fill="none" id="four"
            @mouseover="showElement = true" @mouseout="showElement = false" @click="toggleShow" title="不妨加个迎新群看看">
            <rect width="12" height="12" rx="2" fill="white" />
            <rect y="20" width="12" height="12" rx="2" fill="white" />
            <rect y="14" width="32" height="4" rx="2" fill="white" />
            <rect x="15" y="32" width="12" height="4" rx="2" transform="rotate(-90 15 32)" fill="white" />
            <rect x="22" y="32" width="12" height="4" rx="2" transform="rotate(-90 22 32)" fill="white" />
            <rect x="14" y="12" width="12" height="4" rx="2" transform="rotate(-90 14 12)" fill="white" />
            <rect x="28" y="32" width="12" height="4" rx="2" transform="rotate(-90 28 32)" fill="white" />
            <rect x="20" width="12" height="12" rx="2" fill="white" />
        </svg>
        <!-- 这个id=four的svg后续改成点击弹出二维码 -->
        <transition name="fade">
            <div class="QR" v-if="showElement || showQR">
                <img src="../assets/code.webp" @mouseover="showElement = true" @mouseout="showElement = false" alt="">
                <div>不妨加个迎新群看看</div>
            </div>
        </transition>
        <div class="slogan scale-in-center">
            <div class="top">
                <span class="big">爱特工作室</span>
                <div class="logo"><img src="../assets/logoW.svg" alt=""></div>
            </div>
            <div class="next">
                <div class="Eng"><img src="../assets/IT Studio.svg" alt=""></div>
                <a target="_blank"
                    href="https://qm.qq.com/cgi-bin/qm/qr?k=WbEsjmn_lAw5h-O060uGkSeBnZTsjF6u&jump_from=webapi&authKey=z6mTCvTU40Gh/ituMRQkuX9Y1dcX1OvX/34FZS7BKQQw+xJ2UA+dcjEsozpb7a3J"><img
                        border="0" src="../assets/follow.webp" alt="24届爱特工作室迎新群" title="24届爱特工作室迎新群" class="follow"></a>
            </div>
            <div class="about">
                <span class="first">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;爱特工作室成立于2002年,是一个在中国海洋大学信息科学与工程学部领导主持下,以计算机技术人才培养,网络开发为特色的技术性团体。</span>
                <br>
                <router-link to="/intro"><img src="../assets/toIntro.webp" alt=""></router-link>
                <span></span>
                <br>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这么说是不是看不太懂？那就简单说一下，进入这个社团后通过各个部门合作，可以制作出好看的网页，APP和游戏，进来就可以玩哦，大家都很欢迎新朋友的~</span>
            </div>
            <div class="linkTo">
                <button @click="toProg"><img src="../assets/toProg.webp" alt="" class="height:100%"></button>
                <button @click="toWeb"><img src="../assets/toWEB.webp" alt="" class="height:100%"></button>
                <button @click="toGame"><img src="../assets/toGame.webp" alt="" class="height:100%"></button>
                <button @click="toAPP"><img src="../assets/toAPP.webp" alt="" class="height:100%"></button>
                <button @click="toUI"><img src="../assets/toUI.webp" alt="" class="height:100%"></button>
            </div>
        </div>
    </main>
</template>

<script setup>
import navHead from './nav-head.vue';
import router from '@/router/index.js';
import { ref } from 'vue';

const showElement = ref(false);
const showQR = ref(false);

function toggleShow() {
    showQR.value = !showQR.value;
}
function closeQR() {
    showQR.value = false;
}

function navigateToFeature(id) {
    router.push({
        path: '/feature',
        query: {
            id: Number(id)
        }
    });
}

// 使用  
const toProg = () => navigateToFeature(0);
const toWeb = () => navigateToFeature(1);
const toGame = () => navigateToFeature(2);
const toAPP = () => navigateToFeature(3);
const toUI = () => navigateToFeature(4);

</script>

<style scoped>
[v-cloak] {
    display: none !important;
}

@media (min-width: 1025px) {

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    * {
        padding: 0;
        margin: 0;
    }

    .titleimg {
        background-image: url(../assets/bg.webp);
        height: 100%;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        background-size: cover;
        background-attachment: fixed;
        width: 100vw;
        transition: 1s ease 0s;
        animation: load 1s;
    }


    .titleimg .title {
        position: absolute;
        left: 14vw;
        top: 50%;
        transform: translate(0, -60%);
        width: 600px;
        height: 340px;
        line-height: 36px;
        font-size: 36px;
        font-weight: bolder;
        color: white;
        z-index: 100;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .titleimg .title2 {
        font-size: 130px;
        font-weight: 700;
        line-height: 28px;
        color: white;
        position: fixed;
        margin-left: 240px;
        margin-top: 74vh;
    }

    .title2-1 {
        display: none;
    }

    #four {
        z-index: 3;
    }

    .title3 {
        background-color: #04132D;
        width: 30vw;
        height: 100%;
        position: relative;
    }

    .button {
        width: 10%;
        height: 5%;

        color: rgb(212, 220, 226);
        border: 1px solid rgba(212, 220, 226);
        border-radius: 15px;
        text-align: center;
        font-size: 24px;
        font-style: italic;
        line-height: 40px;
        transform: translate(340px, -180px);
    }

    a {

        text-decoration: none;
        color: rgba(212, 220, 226);
    }

    .buttona:hover,
    .button:hover {
        text-decoration: none;
        background-color: rgba(70, 73, 75);
        border: 1px solid rgba(70, 73, 75);
        color: white;
    }

    .main {
        /* scroll-snap-type: y mandatory;
        overflow: scroll; */
        overflow-x: hidden;
        height: 100vh;
        width: 100%;
        position: relative;
    }

    .sec {
        height: 100vh;
        width: 100%;
        scroll-snap-align: start;
    }

    .pt {
        display: flex;
        flex-direction: column;
        height: 500px;
        width: 250px;
        float: left;
        margin: 150px 0px 0px 105px;
        background: rgba(219, 235, 241, 0.8);
        box-shadow: 0 0 15px rgb(59, 73, 95);
        border-radius: 15px;
        overflow: hidden;
        scroll-snap-align: start;
        transition: all 0.5s ease 0s;
    }

    .pt:hover {
        cursor: pointer;
        transform: scale(1.05);
    }

    .imghid {
        overflow: hidden;
    }


    .pt .img {
        height: 190px;
        width: 250px;
        background-size: cover;
        background-position: center 0px;
        transition: all 0.5s ease 0s;
        opacity: 0.8;
    }

    .pt .img:hover {
        transform: scale(1.1);
    }

    .pt .txt {
        height: 310px;
        width: 200px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        margin: auto;

    }

    .pt .txt h1 {
        text-align: center;
        font-size: 3em;
        color: rgb(28, 44, 68);
        height: 30px;
        line-height: 30px;
    }

    .pt .txt p {
        margin-top: -2px;
        word-wrap: break-word;
        color: rgb(114, 182, 202);
    }

    @keyframes load {
        0% {
            background-position-y: 50px;
            opacity: 0;
        }

        100% {
            background-position-y: -110px;
            opacity: 1;
        }
    }

    body {
        margin: 0;
        padding: 0;

        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        overflow-x: hidden;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(91, 105, 136, 0.8);
    }

    ::-webkit-scrollbar-track {
        background: rgb(194, 213, 241);
    }

    .foot {
        margin-top: 0px;
        width: 100%;
        height: 100px;
        float: left;
        clear: both;
        text-align: center;
        margin-bottom: 0px;
        background-color: rgba(84, 132, 161, 0.8);
    }

    .foot p {
        line-height: 10px;
        color: rgb(28, 43, 43);
    }

    @keyframes load2 {
        0% {
            top: -80px;
            opacity: 0;
        }

        100% {
            top: 0px;
            opacity: 0.8;
        }
    }

    .slide-top {
        -webkit-animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @-webkit-keyframes slide-top {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }

        100% {
            -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
        }
    }

    @keyframes slide-top {
        0% {
            -webkit-transform: translateY(50px);
            transform: translateY(50px);
            opacity: 0;
        }

        100% {
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
            opacity: 1;
        }
    }

    .slide-in-blurred-bottom {
        -webkit-animation: slide-in-blurred-bottom 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
        animation: slide-in-blurred-bottom 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    }

    @-webkit-keyframes slide-in-blurred-bottom {
        0% {
            -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
            transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
            -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
            -webkit-filter: blur(40px);
            filter: blur(40px);
            opacity: 0;
        }

        100% {
            -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-blurred-bottom {
        0% {
            -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
            transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
            -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
            -webkit-filter: blur(40px);
            filter: blur(40px);
            opacity: 0;
        }

        100% {
            -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
        }
    }

    .teXt {
        width: 400px;
        height: 55px;
        display: flex;
        justify-content: start;
        align-items: center;
        margin-left: 10px;
        font-family: "Microsoft New Tai Lue";
    }

    .slide-top a {
        display: inline-block;
        width: 200px;
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    .slide-top a svg {
        transform: scale(1.8) translateX(-5px);
    }

    #four {
        position: fixed;
        bottom: 80px;
        right: 50px;
        transform: scale(1.8);
        display: none;
    }

    .QR {
        position: absolute;
        right: 120px;
        bottom: 90px;
        width: 200px;
        background-color: white;
        text-align: center;
        z-index: 10;
        border: 10px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 2px;
    }

    .QR div {
        background: linear-gradient(to right, #58b4f4 0%, #93b5f6 50%, #c7b2f7 100%);
        background-clip: text;
        color: transparent;
        font-size: 18px;
        line-height: 16px;
        padding-bottom: 16px;
    }

    .QR img {
        display: block;
        width: 100%;
        border-radius: 20px;
    }

    .slogan {
        width: 66vw;
        height: 84vh;
        position: absolute;
        right: 2vw;
        top: 50%;
        transform: translate(0, -45%);
        background-color: rgba(255, 255, 255, 0.2);
        border: white 3px solid;
        border-radius: 20px;
        backdrop-filter: blur(10px);
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

    .slogan div {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        margin: 0 4vh 0 4vh;
    }

    .slogan .top {
        margin-top: 2vh;
    }

    .slogan .top .big {
        width: 200vh;
        color: #FFF;
        font-family: "Microsoft New Tai Lue";
        font-size: 14vh;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .top .logo img {
        width: 10vh;
    }

    .slogan .next {
        margin-top: 4vh;
        margin-bottom: 8vh;
    }

    .slogan .Eng {
        width: 40vh !important;
    }

    .Eng img {
        width: 40vh;
    }

    .follow {
        height: 6vh;
    }

    .slogan .about {
        display: flex;
        flex-wrap: wrap;
        justify-content: center !important;
        align-items: center;
        margin: 0 !important;
        position: relative;
    }

    .about span {
        width: 90%;
        color: #FFF;
        font-family: Quantico;
        font-size: 2.2vh;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .about .first {
        font-size: 2.8vh;
        margin-bottom: 4vh;
    }

    .about a {
        height: 4vh;
        position: absolute;
        right: 10vh;
    }

    .about a img {
        height: 100%;
    }

    .slogan .linkTo {
        margin: 0 auto;
        margin-top: 8vh;
        width: 90%;
        display: flex;
        flex-direction: row !important;
        justify-content: space-between !important;
        align-items: center;
    }

    .linkTo button {
        cursor: pointer;
        border: none;
        background: transparent;
    }

    .linkTo button img {
        height: 9vh;
    }

    .scale-in-center {
        -webkit-animation: scale-in-center 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: scale-in-center 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @-webkit-keyframes scale-in-center {
        0% {
            -webkit-transform: translate(0, -45%) scale(0);
            transform: translate(0, -45%) scale(0);
            opacity: 1;
        }

        100% {
            -webkit-transform: translate(0, -45%) scale(1);
            transform: translate(0, -45%) scale(1);
            opacity: 1;
        }
    }

    @keyframes scale-in-center {
        0% {
            -webkit-transform: translate(0, -45%) scale(0);
            transform: translate(0, -45%) scale(0);
            opacity: 1;
        }

        100% {
            -webkit-transform: translate(0, -45%) scale(1);
            transform: translate(0, -45%) scale(1);
            opacity: 1;
        }
    }
}

@media (max-width: 1024px) {

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .homenavbig {
        display: none;
    }

    .titleimg {
        background-image: url(../assets/bg.webp);
        height: 100vh;


        background-repeat: no-repeat;
        background-position-x: -20vh;
        background-position-y: center;
        background-size: cover;
        background-attachment: fixed;

        background-color: rgba(43, 51, 77, 0.6);
        width: 100vw;
    }

    .titleimg:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: inherit;
        filter: blur(5px);
        z-index: 1;
    }

    .title2 {
        display: none;
    }

    .title3 {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }

    .title2-1 {
        text-indent: 0.5em;
        font-size: 50px;
        font-weight: 600;
        line-height: 70px;
        color: white;
        /* position: absolute; */
        padding-bottom: 400px;
        z-index: 3;
    }

    .titleimg .title {
        /* margin-left: 20vw; */
        line-height: 0px;
        font-size: 25px;
        font-weight: bolder;
        color: white;
        z-index: 10;
        position: fixed;

    }

    .title a {
        text-decoration: none;
        color: rgba(212, 220, 226);
    }

    .teXt {
        width: 150px;
        height: 55px;
        display: flex;
        justify-content: start;
        align-items: center;
        margin-left: 10px;
    }

    .slide-top a {
        display: inline-block;
        width: 200px;
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    #four {
        position: absolute;
        bottom: 50px;
        right: 20px;
        z-index: 10;
        transform: scale(1.6);
    }

    .QR {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 240px;
        height: 260px;
        margin-top: -130px;
        margin-left: -120px;
        background-color: white;
        text-align: center;
        z-index: 10;
        border: 10px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 2px;
    }

    .QR div {
        background: linear-gradient(to right, #58b4f4 0%, #93b5f6 50%, #c7b2f7 100%);
        background-clip: text;
        color: transparent;
        font-size: 18px;
        line-height: 16px;
        padding-bottom: 16px;
    }

    .QR img {
        display: block;
        width: 100%;
        border-radius: 20px;
    }

    .turnGray:before {
        transition: 0.5s;
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 10;
    }

    .slogan {
        display: none;
    }
}
</style>
