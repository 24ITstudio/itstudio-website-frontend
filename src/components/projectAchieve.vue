<template>
    <navHead :locate="834"></navHead>
    <div class="main">
        <div class="background1" id="1">
            <div class="title">项目展示</div>
            <div class="title2">
                2023
                <img src="../assets/左.webp" alt="" style="transform: translate(-2vw,1vh);">
                <div class="title2-1"></div>
            </div>
            <div class="part1">
                <p>小说APP</p>
                <div class="p1img">
                    <img src="../assets/ach232.webp" alt="" style="width:100%;height: 100%;">

                </div>
            </div>
            <div class="part2">
                <div class="p1img">
                    <img src="../assets/ach233.webp" alt="" style="width:100%;height: 100%;">
                </div>
                <p>记账APP</p>
            </div>
            <div class="part3">
                <p>博客网站</p>
                <div class="p3img">
                    <img src="../assets/achieve2.webp" alt="" style="width:100%;height: 100%;">
                </div>
            </div>
            <div class="part4"></div>
        </div>

        <div class="background2" id="two">
            <div class="title">项目展示</div>
            <div class="title2">
                2022
                <img src="../assets/左.webp" alt="" style="transform: translate(-2vw,1vh);">
                <div class="title2-1"></div>
            </div>
            <div class="part5">
                <div class="p4img">
                    <img src="../assets/ach222.webp" alt="" style="width:100%;height: 100%;">
                </div>
                <p>为工程学院中英海洋能研究基地制作展示网站</p>
            </div>
            <div class="part6">
                <div class="p4img">
                    <img src="../assets/ach223.webp" alt="" style="width:100%;height: 100%;">
                </div>
                <p>游戏部门独立完成一款横板闯关类游戏《大地之歌》</p>
            </div>
            <div class="part7">
                <div class="p4img">
                    <img src="../assets/ach224.webp" alt="" style="width:100%;height: 100%;">
                </div>
                <p>爱特成员为校友企业制作电商购物网站</p>
            </div>
            <div class="part8">
                <div class="p4img">
                    <img src="../assets/ach225.webp" alt="" style="width:100%;height: 100%;">
                </div>
                <p>为校外企业制作物联网数据实时展示平台</p>
            </div>
            <div class="part4"></div>
        </div>

        <div class="background3">
            <div class="title">项目展示</div>
            <div class="title2">
                2021及以前
                <img src="../assets/左.webp" alt="" style="transform: translate(-1.5vw,2vh);">
                <div class="title2-1"></div>
            </div>
            <div class="part9">
                <span class="sp1">
                    设计信息科学与工程学部网站，成功上线运行
                </span>
                <p>信息科学与工程学部网站</p>
                <span class="sp2">2017</span>
                <div class="p5img">
                    <img src="../assets/ach212.webp" alt="" style="width:100%;height: 100%;">
                </div>
            </div>
            <div class="part10">
                <span class="sp1">
                    合作完成了一个可联网、能存档的俯视角射击游戏
                </span>
                <p>《达拉崩吧射击游戏》</p>
                <span class="sp2">2019</span>
                <div class="p6img">
                    <img src="../assets/ach213.webp" alt="" style="width:100%;height: 100%;">
                </div>

            </div>
            <div class="part11">
                <span class="sp1">
                    由爱特制作的中国海洋大学委员站成功上线运行
                </span>
                <p>中国海洋大学委员站</p>
                <span class="sp2">2021</span>
                <div class="p7img">
                    <img src="../assets/ach214.webp" alt="" style="width:100%;height: 100%;">
                </div>
            </div>
            <div class="part4"></div>
        </div>

    </div>
</template>
<script>
import navHead from "./nav-head.vue";
export default {
    components: {

        navHead
    },
}
</script>

<style scoped>
@media (min-width: 1025px) {

    * {
        margin: 0px;
        padding: 0px;
    }

    .main {
        margin: 0px;
        padding: 0px;
        height: 100vh;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
    }

    .background1 {
        scroll-snap-align: start;
        scroll-snap-stop: always;
        display: flex;
        position: relative;
        width: 100%;
        height: 100vh;
        z-index: -1;
        background: url('../assets/achieve231.webp') center no-repeat;
        background-image: url('../assets/achieve231.webp');
        background-position-x: center;
        background-position-y: center;
        background-color: rgba(0, 0, 0, 1);
        background-size: cover;
    }

    .title {
        color: rgba(0, 0, 0, 0.90);
        font-family: "Microsoft YaHei UI";
        font-size: 100px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position: absolute;
        top: 90px;
        right: 40px;
        /* transform: translate(70vw, 5vw); */
        z-index: 10;
    }

    .title2 {
        height: 100px;
        color: #FFF;
        font-family: "Microsoft New Tai Lue";
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position: absolute;
        top: 220px;
        right: 40px;
        z-index: 10;
        /* transform: translate(60vw, 24vh); */
    }

    .background1 .title2-1 {
        width: 149px;
        height: 10px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #39F;
        content: "";
        margin-top: -1.5vh;
    }

    .part1 {
        transform: translate(6vw, 8vw);
        height: 70vh;
        width: 16vw;
        overflow: hidden;
        position: absolute;
        z-index: 2;

    }

    .part2 {
        transform: translate(25vw, 6vw);
        position: absolute;
        z-index: 2;
    }

    .part3 {
        transform: translate(44vw, 10vw);
        position: absolute;
        z-index: 2;
    }

    .part4 {
        width: 100%;
        height: 15vh;
        background: rgba(0, 0, 0, 0.50);
        position: absolute;
        transform: translate(0, 85vh);
        z-index: 1;
    }

    .background1 p {
        color: #FFF;
        font-family: "Microsoft YaHei UI";
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
    }

    .p1img {
        border: 5px solid rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        height: 65vh;
        width: 15vw;
        flex-shrink: 0;
    }

    .p3img {
        border: 5px solid rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        overflow: hidden;
        width: 30vw;
        height: 60vh;
        flex-shrink: 0;
    }

    .background2 {
        scroll-snap-align: start;
        scroll-snap-stop: always;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        /* top: 100vh; */
        width: 100%;
        height: 100vh;
        z-index: -1;
        overflow: hidden;
        background: url('../assets/ach221.webp') center no-repeat;
        background-image: url('../assets/ach221.webp');
        background-position-x: center;
        background-position-y: center;
        background-color: rgba(0, 0, 0, 0.3);
        background-size: cover;
    }

    .background2 .title {
        width: 5vw;
        color: rgba(0, 0, 0, 0.90);
        font-family: "Microsoft YaHei UI";
        font-size: 100px;
        font-style: normal;
        font-weight: 700;
        line-height: 110px;
        /* transform: translate(5vw, 6vw); */
        position: absolute;
        top: 90px;
        left: 40px;
    }

    .background2 .title2 {
        height: 100px;
        color: #FFF;
        font-family: "Microsoft New Tai Lue";
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position: absolute;
        /* transform: translate(3vw, 68vh); */
        position: absolute;
        top: 560px;
        left: 40px;
    }

    .background2 .title2-1 {
        width: 149px;
        height: 10px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #E19F73;
        content: "";
        margin-top: -1.5vh;
    }


    .background2 p {
        color: #FFF;
        margin-top: 5px;
        font-family: "Microsoft YaHei UI";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        text-align: center;
        line-height: 16px;
    }

    .part7 p,
    .part8 p {
        color: rgba(0, 0, 0, 0.70);
    }

    .background2 .part5 {
        overflow: hidden;
        margin-left: 20vw;
        margin-right: 3vw;
        margin-top: 10vh;
        margin-bottom: 5vh;
        width: 30vw;
        height: 33vh;
        border-radius: 10px;

        background: rgba(0, 118, 204, 0.5);
    }

    .part6 {
        overflow: hidden;
        margin-left: 0vw;
        margin-right: 5vw;
        margin-top: 10vh;
        margin-bottom: 5vh;
        width: 30vw;
        height: 33vh;
        border-radius: 10px;

        background: rgba(225, 159, 115, 0.5);
    }

    .part7 {
        overflow: hidden;
        margin-left: 26vw;
        margin-right: 3vw;
        margin-top: 0vh;
        margin-bottom: 10vh;
        width: 30vw;
        height: 33vh;
        border-radius: 10px;
        z-index: 2;
        background: rgba(193, 219, 244, 0.75);
    }

    .part8 {
        overflow: hidden;
        margin-left: 0vw;
        margin-right: 5vw;
        margin-top: 0vh;
        margin-bottom: 0vh;
        width: 30vw;
        height: 33vh;
        border-radius: 10px;
        z-index: 2;
        background: rgba(217, 217, 217, 0.75);
    }

    .background2 .p4img {
        width: 100%;
        height: 30vh;
        opacity: 1;
    }

    .background3 {
        scroll-snap-align: start;
        scroll-snap-stop: always;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        /* top: 200vh; */
        width: 100%;
        height: 100vh;
        z-index: -1;

        overflow: hidden;
        background: url('../assets/ach211.webp') center no-repeat;
        background-image: url('../assets/ach211.webp');
        background-position-x: center;
        background-position-y: center;
        background-size: initial;

        background-color: rgba(0, 0, 0, 0.3);
        background-size: cover;
    }

    .background3 .title {
        /* transform: translate(53vw, 63vh); */
        height: 150px;
        position: absolute;
        top: 60vh;
        right: 15vw;
        color: white;
        z-index: 10;
    }

    .background3 p {
        display: none;
    }

    .background3 .title2 {
        /* transform: translate(29vw, 77vh); */
        position: absolute;
        top: 74vh;
        right: 15vw;
        color: white;
        z-index: 10;
        font-size: 45px;
    }

    .background3 .title2-1 {
        width: 235px;
        height: 10px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #C1DBF4;
        content: "";
        margin-top: 0.5vh;
    }

    .sp1 {
        margin-left: 20px;
        color: #FFF;
        font-family: "Microsoft YaHei UI";
        font-size: 16px;
        font-style: normal;
        font-weight: 100;
        line-height: 40px;
        /* 20px */
    }

    .sp2 {
        text-align: right;
        margin-left: 160px;
        color: rgba(255, 255, 255, 0.87);
        font-family: "Microsoft YaHei UI";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%;
        /* 32px */
    }

    .part9 {
        overflow: hidden;
        position: absolute;
        margin-left: 8vw;
        margin-right: 5vw;
        margin-top: 10vh;
        margin-bottom: 5vh;
        width: 34vw;
        height: 45vh;
        border-radius: 10px;
        border: 5px solid rgba(0, 0, 0, 0.01);
        background: rgba(0, 0, 0, 0.25);
    }

    .p5img {
        width: 100%;
        height: 45vh;
        opacity: 1;
    }

    .part10 {
        overflow: hidden;
        position: absolute;
        margin-left: 53vw;
        margin-right: 3vw;
        margin-top: 10vh;
        margin-bottom: 5vh;
        width: 36vw;
        height: 45vh;
        border-radius: 10px;
        border: 5px solid rgba(0, 0, 0, 0.01);
        background: rgba(0, 0, 0, 0.25);
    }

    .p6img {
        width: 100%;
        height: 40vh;
        opacity: 1;
    }

    .part11 {
        z-index: 2;
        overflow: hidden;
        position: absolute;
        margin-left: 8vw;
        margin-right: 3vw;
        margin-top: 60vh;
        margin-bottom: 5vh;
        width: 34vw;
        height: 30vh;
        border-radius: 10px;
        border: 5px solid rgba(217, 217, 217, 0);

        background: rgba(217, 217, 217, 0.10);
    }

    .p7img {
        width: 34vw;
        height: 26vh;
        opacity: 1;
    }
}

@media (max-width: 1024px) {

    * {
        margin: 0px;
        padding: 0px;
    }

    .main {
        margin: 0px;
        padding: 0px;
        height: 300vh;
    }

    .background1 {
        display: flex;
        align-items: start;
        justify-content: space-around;
        flex-wrap: wrap;
        position: relative;
        width: 100%;
        height: auto;
        z-index: -1;
        background-color: aliceblue;
    }

    .title {
        color: rgba(0, 0, 0, 0.90);
        font-family: "Microsoft YaHei UI";
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position: absolute;
        top: 90px;
        left: 40px;
        /* transform: translate(70vw, 5vw); */
        z-index: 10;
    }

    .title2 {
        height: 100px;
        color: black;
        font-family: "Microsoft New Tai Lue";
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position: absolute;
        top: 180px;
        left: 40px;
        z-index: 10;
        /* transform: translate(60vw, 24vh); */
    }

    .title2 img {
        display: none;
    }

    .background1 .title2-1 {
        width: 90px;
        height: 6px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #39F;
        content: "";
        margin-top: -1vh;
    }

    .part1 {
        margin-bottom: 20px;
        /* height: 26vh; */
        width: 40vw;
        position: relative;
        overflow: hidden;
        z-index: 2;
        margin-top: 260px;
    }

    .part1 p {
        position: absolute;
        padding: 10px 0 10px 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        bottom: 0px;
        border-radius: 0 0 10px 10px;
        text-align: center;
    }

    .part2 {
        margin-bottom: 20px;
        /* height: 26vh; */
        width: 40vw;
        position: relative;
        z-index: 2;
        margin-top: 260px;
    }

    .part2 p {
        position: absolute;
        padding: 10px 0 10px 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        bottom: 0px;
        border-radius: 0 0 10px 10px;
        text-align: center;
    }

    .part3 {
        margin-bottom: 20px;
        width: 90vw;
        /* height: 40vh; */
        position: relative;
        z-index: 2;
    }

    .part3 p {
        position: absolute;
        padding: 10px 0 10px 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        bottom: 0px;
        border-radius: 0 0 10px 10px;
        text-align: center;
    }

    .part4 {
        display: none;
    }

    .background1 p {
        color: #FFF;
        font-family: "Microsoft YaHei UI";
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
    }

    .p1img {
        /* border: 5px solid rgba(0, 0, 0, 0.25); */
        border-radius: 15px;
        height: 100%;
        width: 100%;
        flex-shrink: 0;
    }

    .p3img {
        border: 5px solid rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        overflow: hidden;
        width: 100%;
        height: 100%;
        flex-shrink: 0;
    }

    .background2 {
        display: flex;
        align-items: start;
        justify-content: space-around;
        flex-wrap: wrap;
        position: relative;
        width: 100%;
        height: auto;
        z-index: -1;
        background-color: aliceblue;
    }

    .background2 .title {
        display: none;
    }

    .background2 .title2 {
        height: 100px;
        color: black;
        font-family: "Microsoft New Tai Lue";
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position: absolute;
        top: 10px;
        left: 40px;
    }

    .background2 .title2-1 {
        width: 90px;
        height: 6px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #E19F73;
        content: "";
        margin-top: -1vh;
    }


    .background2 p {
        color: #FFF;
        margin-top: 5px;
        font-family: "Microsoft YaHei UI";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        text-align: center;
        line-height: 16px;
    }

    .part5 {
        margin-top: 100px;
        margin-bottom: 20px;
        overflow: hidden;
        width: 90vw;
        /* height: 20vh; */
        border-radius: 10px;
        position: relative;
        background: rgba(0, 118, 204, 0.5);
    }

    .part6 {
        margin-bottom: 20px;
        width: 90vw;
        /* height: 20vh; */
        border-radius: 10px;
        position: relative;
        background: rgba(225, 159, 115, 0.5);
    }

    .part7 {
        margin-bottom: 20px;
        width: 90vw;
        /* height: 20vh; */
        border-radius: 10px;
        position: relative;
        background: rgba(193, 219, 244, 0.75);
    }

    .part8 {
        margin-bottom: 20px;
        width: 90vw;
        /* height: 20vh; */
        border-radius: 10px;
        position: relative;
        background: rgba(217, 217, 217, 0.75);
    }

    .part5 p,
    .part6 p,
    .part7 p,
    .part8 p {
        position: absolute;
        padding: 10px 0 10px 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        bottom: 0px;
        border-radius: 0 0 10px 10px;
        text-align: center;
    }

    .background2 .p4img {
        width: 100%;
        height: 100%;
        opacity: 1;
    }

    .background3 {
        display: flex;
        align-items: start;
        justify-content: space-around;
        flex-wrap: wrap;
        position: relative;
        width: 100%;
        height: auto;
        z-index: -1;
        background-color: aliceblue;
    }

    .background3 .title {
        display: none;
    }

    .background3 .title2 {
        height: 100px;
        color: black;
        font-family: "Microsoft New Tai Lue";
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position: absolute;
        top: 10px;
        left: 40px;
    }

    .background3 .title2-1 {
        width: 215px;
        height: 6px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #C1DBF4;
        content: "";
        margin-top: -0.5vh;
    }

    .sp1 {
        display: none;
    }

    .sp2 {
        display: none;
    }

    .background3 p {
        position: absolute;
        padding: 10px 0 10px 0;
        width: 100%;
        color: #FFF;
        background-color: rgba(0, 0, 0, 0.7);
        bottom: 0px;
        border-radius: 0 0 10px 10px;
        text-align: center;
    }

    .part9 {
        margin-top: 100px;
        margin-bottom: 20px;
        width: 90vw;
        /* height: 20vh; */
        border-radius: 10px;
        position: relative;
        /* border: 5px solid rgba(0, 0, 0, 0.01); */
        background: rgba(0, 0, 0, 0.25);
    }

    .p5img {
        width: 100%;
        height: 100%;
        opacity: 1;
    }

    .part10 {
        margin-bottom: 20px;
        width: 90vw;
        /* height: 20vh; */
        position: relative;
        border-radius: 10px;
        /* border: 5px solid rgba(0, 0, 0, 0.01); */
        background: rgba(0, 0, 0, 0.25);
    }

    .p6img {
        width: 100%;
        height: 100%;
        opacity: 1;
    }

    .part11 {
        margin-bottom: 20px;
        width: 90vw;
        /* height: 20vh; */
        border-radius: 10px;
        position: relative;
        border: 5px solid rgba(217, 217, 217, 0);
        background: rgba(217, 217, 217, 0.10);
    }

    .p7img {
        width: 100%;
        height: 100%;
        opacity: 1;
    }
}
</style>