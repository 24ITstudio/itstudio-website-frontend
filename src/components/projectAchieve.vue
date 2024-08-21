<template>
    <navHead :locate="834"></navHead>
    <div class="Main" @wheel="handleWheel">
        <div class="mask">
            <div class="scroll-container" ref="scrollContainer" style="overflow-y: scroll;">
                <p v-for="(text, index) in texts" :key="index" :class="{ 'active-text': currentIndex === index }"
                    @click="setCurrentIndex(index)">
                    {{ text }}
                </p>
            </div>
        </div>
        <div class="scroll-container" ref="scrollContainer" style="overflow-y: scroll;">
            <p v-for="(text, index) in texts" :key="index" :class="{ 'active-text': currentIndex === index }"
                @click="setCurrentIndex(index)">
                {{ text }}
            </p>
        </div>
        <div class="achmain">
            <div class="slider-container">

                <div class="title">项目成果</div>
                <div class="title3-1">
                    2023
                    <div class="title2-1-1"></div>
                </div>

                <div class="slide eles" :class="{ active: currentIndex === 0 }">
                    <p id="one">中国海洋大学信息科学与工程学部百年校庆小程序</p>
                    <p id="four">中国海洋大学百年校庆小程序</p>
                    <div class="ima" id="two">
                        <img src="../assets/ach237.webp" alt="" style="width:100%;border-radius: 10px;">
                    </div>
                    <div class="ima" id="three">
                        <img src="../assets/ach236.webp" alt="" style="width:100%;border-radius: 10px;">
                    </div>
                </div>

                <div class="title3-2">
                    2022
                    <div class="title2-2"></div>
                </div>


                <div class="slide y22" :class="{ active: currentIndex === 1 }">
                    <div class="box" style="background-color:#0076CC;color:azure">
                        <img src="../assets/ach222.webp" alt="" style="width:100%;height: 100%;">
                        <p class="p1">为工程学院中英海洋能研究基地制作展示网站</p>
                        <p class="p2">工程学院中英海洋能研究基地网站</p>
                    </div>
                    <div class="box" style="background-color:#E19F73;color:azure">
                        <img src="../assets/ach223.webp" alt="" style="width:100%;height: 100%;">
                        <p class="p1">游戏部门独立完成一款横板闯关类游戏《大地之歌》</p>
                        <p class="p2">《大地之歌》</p>
                    </div>
                    <div class="box" style="background-color:#C1DBF4 ;">
                        <img src="../assets/ach224.webp" alt="" style="width:100%;height: 100%;">
                        <p class="p1">爱特成员为校友企业制作电商购物网站</p>
                        <p class="p2">校友企业电商购物网站</p>
                    </div>
                    <div class="box" style="background-color:#D9D9D9 ;">
                        <img src="../assets/ach225.webp" alt="" style="width:100%;height: 100%;">
                        <p class="p1">为校外企业制作物联网数据实时展示平台</p>
                        <p class="p2">校外企业物联网数据实时展示平台</p>
                    </div>
                </div>
                <div class="slide y21" :class="{ active: currentIndex === 2 }">
                    <div class="box">
                        <div class="title1">校团委网站</div>
                        <div class="title2">由爱特制作的中国海洋大学网站成功上线运行</div>
                        <img src="../assets/ach214.webp" alt="" style="width: 100%;height: 100%;">
                    </div>
                </div>
                <div class="slide y20" :class="{ active: currentIndex === 3 }">
                    <div class="box">
                        <div class="title1">作品展示</div>
                        <div class="title2">游戏部门独立完成了一款PC端的2.5D游戏《幽灵骑士》。</div>
                        <div class="title1">作品展示</div>
                        <div class="title2">程序、APP与UI合作完成了爱特展示网、海迅APP等作品。</div>
                    </div>
                </div>

                <div class="title3-3">
                    2021及以前
                    <div class="title2-3"></div>
                </div>

                <div class="slide y19" :class="{ active: currentIndex === 4 }">
                    <div class="box">
                        <div class="title1">作品展示</div>
                        <div class="title2">19年游戏部合作完成了一个可联网、能存档的俯视角射击游戏。</div>
                        <img src="../assets/ach213.webp" alt="" style="width: 100%;height: 100%;">
                        <p class="p2">《达拉崩吧》</p>
                    </div>
                    <div class="box">
                        <div class="title1-1">部门合作作品</div>
                        <div class="title2-1">
                            Ul与web开发、APP、程序合作设计了爱特读书及爱特读书APP、爱特展示网、IT日程APP。
                        </div>
                    </div>
                </div>
                <div class="slide y18" :class="{ active: currentIndex === 5 }">
                    <div class="box">
                        <div class="title1">开拓展示网</div>
                        <div class="title2">开拓爱特展示网，成功上线运行。</div>
                        <div class="title1">新网站上线</div>
                        <div class="title2">制作众创空间预约系统，成功上线运行。</div>
                    </div>
                </div>
                <div class="slide y17" :class="{ active: currentIndex === 6 }">
                    <div class="box">
                        <div class="title1">开拓信院网站</div>
                        <div class="title2">开拓信息科学与工程学院网站，成功上线运行。</div>

                    </div>
                </div>
                <div class="slide y16" :class="{ active: currentIndex === 7 }">
                    <div class="box">
                        <div class="title1">上线教育网站</div>
                        <div class="title2">爱特为中国海洋大学国际教育学院制作的新版展示网上线运行</div>
                        <img src="../assets/ach161.webp" alt="" style="width: 100%;height: 100%;">
                    </div>
                    <div class="box">
                        <div class="title1-1">上线网站</div>
                        <div class="title2-1">
                            由爱特制作的中国海洋大学计算机系网站成功上线。
                        </div>
                    </div>
                </div>
                <div class="slide y15" :class="{ active: currentIndex === 8 }">
                    <div class="box">
                        <div class="title1">制作展示页</div>
                        <div class="title2">为中国海洋大学iGEM比赛团队制作静态展示页面</div>
                        <img src="../assets/ach151.webp" alt="" style="width: 100%;height: 100%;">
                        <p class="p2">为iGEM比赛团队制作静态展示页面</p>
                    </div>
                    <div class="box">
                        <div class="title1-1">新网站上线</div>
                        <div class="title2-1">中国海洋大学海洋技术系网站成功上线运行</div>
                        <img src="../assets/ach152.webp" alt="" style="width: 100%;height: 100%;">
                    </div>
                </div>
                <div class="slide y14" :class="{ active: currentIndex === 9 }">
                    <div class="box">
                        <div class="title1">新网站上线</div>
                        <div class="title2">设计信息科学与工程学部网站，成功上线运行</div>
                        <div class="img21" id="seven">
                            <img src="../assets/ach141.webp" alt="" style="width: 100%;height: 100%;">
                            <p class="p2">信息科学与工程学部网站</p>
                        </div>
                    </div>
                </div>

                <div class="di">
                    <p class="p3">完整列表请访问电脑端网站</p>
                    <div class="title2-4"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import navHead from "./nav-head.vue";

const texts = ref(['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014']);
const currentIndex = ref(0);
const scrollContainer = ref(null);

const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

if (!isMobile) {

    console.log('这是电脑');
} else {
    console.log('这不是电脑');
}

const handleWheel = (event) => {

    if (!isMobile) {
        // 如果不是移动设备，则阻止默认行为  
        event.preventDefault();
    }

    const delta = event.deltaY;

    if (delta > 0 && currentIndex.value < texts.value.length - 1) {
        currentIndex.value++;
    } else if (delta < 0 && currentIndex.value > 0) {
        currentIndex.value--;
    }

    const itemHeight = scrollContainer.value.offsetHeight / texts.value.length;
    const scrollToPosition = currentIndex.value * itemHeight - (scrollContainer.value.offsetHeight - itemHeight) / 2;
    scrollContainer.value.scrollTop = scrollToPosition;
};

function setCurrentIndex(index) {
    this.currentIndex = index;
}

onMounted(() => {
    if (scrollContainer.value) {
        scrollContainer.value.addEventListener('wheel', handleWheel);
    }
});

onBeforeUnmount(() => {
    if (scrollContainer.value) {
        scrollContainer.value.removeEventListener('wheel', handleWheel);
    }
});

</script>

<style scoped>
@media (min-width: 1025px) {
    .title {
        display: none;
    }

    .p2 {
        display: none;
    }

    .title3-1 {
        display: none;
    }

    .title3-2 {
        display: none;
    }

    .di {
        display: none;
    }

    #four {
        display: none;
    }

    * {
        margin: 0;
        padding: 0;
    }

    *::-webkit-scrollbar {
        display: none;
    }

    .Main {
        position: relative;
        width: 100vw;
        height: 100vh;
        /* background-color: skyblue; */
        /* background: transparent; */
        background-image: url(../assets/achbg.webp);
        background-size: 100% 100%;
    }

    .mask {
        position: absolute;
        right: 0px;
        /* padding-right: 100px; */
        /* transform: translateY(-20px); */
        width: 30vh;
        height: 100vh;
        box-sizing: border-box;
        /* overflow: hidden; */
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        z-index: 100;
        background: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        opacity: 0;
    }

    .mask .scroll-container p {
        cursor: pointer;
    }

    .scroll-container {
        position: absolute;
        /* right: 100px; */
        padding-right: 100px;
        transform: translateY(-20px);
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
        /* overflow: hidden; */
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
    }

    .scroll-container p {
        position: relative;
        text-align: right;
        font-size: 36px;
        /* top: 50%; */
        /* transform: translateY(-50%); */
        margin: 0;
        opacity: 0.65;
        font-family: "HarmonyOS Sans SC";
        transition: 0.5S;
        background: linear-gradient(to right, #313131 0%, black 100%);
        background-clip: text;
        color: transparent;
    }


    p:before {
        content: "";
        position: absolute;
        left: -220px;
        top: -45px;
        display: inline-block;
        background-image: url(../assets/下.webp);
        width: 100px;
        height: 100px;
        background-size: cover;
        background-repeat: no-repeat;
        margin-right: 10px;
        vertical-align: middle;
        transform: rotate(180deg) scale(0.8);
        opacity: 0;
        transition: 0.5S;
    }

    .scroll-container .active-text {
        font-family: "HarmonyOS Sans SC";
        font-weight: bold;
        font-size: 114px;
        transform: translateX(50px);
        position: relative;
        opacity: 1;
        background: linear-gradient(to right, #313131 0%, black 100%);
        background-clip: text;
        color: transparent;
    }

    .active-text:before {
        content: "";
        position: absolute;
        left: -70px;
        top: 36px;
        display: inline-block;
        background-image: url(../assets/下.webp);
        width: 100px;
        height: 100px;
        background-size: cover;
        background-repeat: no-repeat;
        margin-right: 10px;
        vertical-align: middle;
        transform: rotate(180deg) scale(0.8);
        opacity: 1;
    }

    .achmain {
        position: absolute;
        left: 2vw;
        top: 50%;
        height: 84vh;
        margin-top: -42vh;
        width: 70vw;
    }

    .slider-container {
        position: relative;
        height: 80vh;
        /* 或其他固定高度 */
        overflow: hidden;
        /* 隐藏超出容器的部分 */
    }

    .slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 70vw;
        height: 80vh;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        pointer-events: none;
        /* 防止在非活动幻灯片上触发点击事件 */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slide.active {
        opacity: 1;
        pointer-events: auto;
        /* 允许在活动幻灯片上触发点击事件 */
    }

    .achmain .eles {
        display: flex;
        width: 70vw;
        justify-content: start;
        align-items: center;
        position: relative;
    }

    .eles p {
        height: 60vh;
        color: black !important;
        width: 18vw;
        position: absolute;
        right: -2vw;
        opacity: 1;
        writing-mode: vertical-lr;
        font-size: 22px;
    }

    .slide p {
        opacity: 1 !important;
        font-weight: bold !important;
    }

    .eles .ima {
        /* height: 65vh; */
        width: 20vw;
        margin-left: 5vw;
    }

    .else .ima img {
        width: 100% !important;
        height: 100% !important;
    }

    .slide {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }

    .y22 .box {
        width: 20vw;
        display: inline-block;
        flex: 0 0 45%;
        border-radius: 15px;
        text-align: center;
        padding-bottom: 5px;
    }

    .y21 .box {
        flex: 0 0 80%;
        font-weight: bold;
    }

    .y21 .box .title1 {
        font-size: 32px;
        color: #2E1117;
        margin-bottom: 10px;
    }

    .y21 .box .title2 {
        text-align: center;
        color: #2E1117;
        font-size: 20px;
        margin-bottom: 10px;
    }

    .y20 {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 80vh;
    }

    .y20 .box {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 50%;
        font-weight: bold;
    }

    .y20 .box .title1 {
        font-size: 32px;
        color: #2E1117;
        margin-bottom: 10px;
        width: 100%;
    }

    .y20 .box .title2 {
        text-align: center;
        color: #2E1117;
        font-size: 20px;
        margin-bottom: 10px;
    }

    .y19 .box {
        flex: 0 0 40%;
        margin-right: 50px;
        margin-left: 50px;
    }

    .y19 .box .title1,
    .y19 .box .title1-1 {
        font-size: 32px;
        color: #2E1117;
        margin-bottom: 20px;
        width: 100%;
        font-weight: bold;
    }

    .y19 .box .title2,
    .y19 .box .title2-1 {
        font-size: 20px;
        color: #2E1117;
        margin-bottom: 10px;
        width: 100%;
        font-weight: bold;
        text-align: center;
    }

    .y18 .box {
        flex: 0 0 50%;
        font-weight: bold;
    }

    .y18 .box .title1 {
        font-size: 32px;
        color: #2E1117;
        margin-bottom: 40px;
    }

    .y18 .box .title2 {
        text-align: center;
        color: #2E1117;
        font-size: 20px;
        margin-bottom: 30px;
    }

    .y17 .box {
        flex: 0 0 50%;
        font-weight: bold;
    }

    .y17 .box .title1 {
        font-size: 32px;
        color: #2E1117;
        margin-bottom: 40px;
    }

    .y17 .box .title2 {
        text-align: center;
        color: #2E1117;
        font-size: 20px;
        margin-bottom: 30px;
    }

    .y16 .box {
        flex: 0 0 40%;
        margin-right: 50px;
        margin-left: 50px;
    }

    .y16 .box .title1,
    .y16 .box .title1-1 {
        font-size: 32px;
        color: #2E1117;
        margin-bottom: 20px;
        width: 100%;
        font-weight: bold;
    }

    .y16 .box .title2,
    .y16 .box .title2-1 {
        font-size: 20px;
        color: #2E1117;
        margin-bottom: 10px;
        width: 100%;
        font-weight: bold;
        text-align: center;
    }

    .y15 .box {
        flex: 0 0 40%;
        margin-right: 50px;
        margin-left: 50px;
    }

    .y15 .box .title1,
    .y15 .box .title1-1 {
        font-size: 32px;
        color: #2E1117;
        margin-bottom: 20px;
        width: 100%;
        font-weight: bold;
    }

    .y15 .box .title2,
    .y15 .box .title2-1 {
        font-size: 20px;
        color: #2E1117;
        margin-bottom: 10px;
        width: 100%;
        font-weight: bold;
        text-align: center;
    }

    .y14 .box {
        flex: 0 0 60%;
        margin-right: 50px;
        margin-left: 50px;
    }

    .y14 .box .title1 {
        font-size: 32px;
        color: #2E1117;
        margin-bottom: 20px;
        width: 100%;
        font-weight: bold;
    }

    .y14 .box .title2 {
        font-size: 20px;
        color: #2E1117;
        margin-bottom: 10px;
        width: 100%;
        font-weight: bold;
        text-align: center;
    }
}

@media (max-width: 1024px) {
    .bottom {
        display: none;
    }

    .mask {
        display: none;
    }

    .scroll-container {
        display: none;
    }

    .Main {
        margin: 0px;
        padding: 0px;
        height: 300vh;
        background-image: url(../assets/achbg.webp);
        height: 100%;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        background-size: cover;
        background-attachment: fixed;
        width: 100vw;
        transition: 1s ease 0s;
        animation: load 1s;
        overflow: scroll;
    }

    .title {
        color: rgba(0, 0, 0, 0.90);
        font-family: "Microsoft YaHei UI";
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position: absolute;
        top: 110px;
        left: 40px;
        /* transform: translate(70vw, 5vw); */
        z-index: 10;
    }

    .title3-1 {
        height: 100px;
        color: black;
        font-family: "Microsoft New Tai Lue";
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position: absolute;
        top: 155px;
        left: 40px;
        z-index: 10;
        /* transform: translate(60vw, 24vh); */
    }


    .title2-1-1 {
        width: 72px;
        height: 6px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #39F;
        content: "";
        margin-top: -1vh;
    }




    .part4 {
        display: none;
    }

    .part4-1 {
        display: none;
    }


    #two {
        display: none;
    }

    #three {
        width: 80vw;
        height: 32vh;
        margin: 22vh 10vw 5vw 10vw;
        border-radius: 10px;
        overflow: hidden;
        z-index: 1;
    }

    #one {
        display: none;


    }

    #four {
        width: 80vw;
        margin-left: 10vw;
        border-radius: 0px 0px 10px 10px;
        background: rgba(0, 0, 0, 0.5);
        transform: translate(0, 54vh);
        z-index: 5;
        color: rgba(255, 255, 255, 0.8);
        text-indent: 1em;
    }

    .title2-2 {
        width: 72px;
        height: 6px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #E19F73;
        content: "";
        margin-top: -1vh;
    }

    .title3-2 {
        height: 100px;
        color: black;
        font-family: "Microsoft New Tai Lue";
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position: absolute;
        top: 450px;
        left: 40px;
        z-index: 10;
        /* transform: translate(60vw, 24vh); */
    }

    .part5 {
        width: 80vw;
        height: 30vh;
        margin: 8vh 10vw 0vw 10vw;
        z-index: 1;
    }

    .p1 {
        display: none;
    }

    .p2 {
        border-radius: 0px 0px 5px 5px;
        background: rgba(0, 0, 0, 0.5);
        transform: translate(0, -5.5vh);
        z-index: 5;
        color: rgba(255, 255, 255, 0.8);
        text-indent: 1em;
    }

    .part6 {
        width: 80vw;
        height: 30vh;
        margin: 0vh 10vw 0vw 10vw;
    }

    .part7 {
        width: 80vw;
        height: 30vh;
        margin: 0vh 10vw 0vw 10vw;
    }

    .part8 {
        width: 80vw;
        height: 30vh;
        margin: 0vh 10vw 0vw 10vw;
    }

    .four {
        display: none;
    }

    .three {
        display: none;
    }

    .title2-3 {
        width: 72px;
        height: 6px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #C1DBF4;
        content: "";
        margin-top: -1vh;
    }

    .title3-3 {
        height: 100px;
        color: black;
        font-family: "Microsoft New Tai Lue";
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position: absolute;
        top: 1400px;
        left: 40px;
        z-index: 10;
        /* transform: translate(60vw, 24vh); */
    }

    .title1 {
        display: none;
    }

    .title2 {
        display: none;
    }

    .img21 {
        width: 80vw;
        height: 32vh;
        margin: 10vh 10vw 5vw 10vw;
        border-radius: 10px;
        overflow: hidden;
        z-index: 1;
    }

    .title1-1 {
        display: none;
    }

    .title2-1 {
        display: none;
    }

    .img22 {
        display: none;
    }

    #five {
        margin-top: 0;
        display: none;
    }

    #six {
        margin-top: 0;
    }

    #seven {
        margin-top: 0;
    }


    .title2-4 {
        width: 45.5vw;
        height: 6px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #9999F1;
        content: "";
        margin-top: -1vh;
        margin-left: 7vw;
    }

    .di {
        color: black;
        font-family: "Microsoft YaHei UI";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
        width: 60vw;
        margin: 0 auto 3vh;
    }
}
</style>