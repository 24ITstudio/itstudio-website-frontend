<template>
    <navHead :locate="-4000"></navHead>
    <div class="box">
        <div class="shadow">
            <div class="back">
                <router-link to="/">
                    <img src="../assets/Arrow back.png" alt="" width="20px" />
                    <p>返回</p>
                </router-link>
            </div>
        </div>
        <div class="main">
            <div class="top">
                <div :class="['words', { 'lightUp': up1 }]">未报名</div>
                <div :class="['words', { 'lightUp': up1 && up2 }]">报名中</div>
                <div :class="['words', { 'lightUp': up1 && up2 && up3 }]">一审中</div>
                <div :class="['words', { 'lightUp': up1 && up2 && up3 && up4 }]">面试中</div>
                <div :class="['words', { 'lightUp': up1 && up2 && up3 && up4 && up5 }]">二审中</div>
                <div :class="['words', { 'lightUp': up1 && up2 && up3 && up4 && up5 && up6 }]">成功录取</div>
            </div>
            <div class="mid">
                <div class="highlight scale-in-hor-left">
                </div>
                <div class="common">
                    <img src="../assets/Line 13.png" alt="">
                </div>
            </div>
            <div class="bottom">
                <div class="words">&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div class="words">&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div :class="['words', { 'lightDown': down1 }]">一审失败</div>
                <div :class="['words', { 'lightDown': down2 }]">面试失败</div>
                <div :class="['words', { 'lightDown': down3 }]">二审失败</div>
                <div :class="['words', { 'lightDown': down4 }]">未录取</div>
            </div>
        </div>
    </div>
</template>

<script>
import navHead from './nav-head.vue';
export default {
    components: {
        navHead,
    },
};
</script>

<style scoped>
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
    margin: 80px;
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

.top {
    position: relative;
    width: 76%;
    justify-content: space-between;
    align-items: flex-end;
    display: inline-flex
}

.words {
    width: 40px;
    color: gray;
    font-size: 36px;
    font-family: Microsoft JhengHei UI;
    font-weight: 400;
    word-wrap: break-word;
    padding-bottom: 30px;
    padding-top: 30px;
}

.lightUp {
    color: #fff;
    font-weight: 700;
}

.lightDown {
    color: rgb(169, 3, 3);
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
}

.common img {
    width: 100%;
    height: 100%;

}

.bottom {
    position: relative;
    width: 76%;
    justify-content: space-between;
    align-items: flex-start;
    display: inline-flex
}

.mid {
    height: 30px;
    width: 1209px;
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
</style>
