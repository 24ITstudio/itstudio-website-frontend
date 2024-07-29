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
                <div class="words">未报名</div>
                <div class="words">报名中</div>
                <div class="words">一审中</div>
                <div class="words">面试中</div>
                <div class="words">二审中</div>
                <div class="words">成功录取</div>
            </div>
            <div class="mid">
                <div class="highlight">
                    <img src="../assets/Line 14.png" alt="">
                </div>
                <div class="common">
                    <img src="../assets/Line 13.png" alt="">
                </div>
            </div>
            <div class="bottom">
                <div class="words">&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div class="words">&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div class="words">一审失败</div>
                <div class="words">面试失败</div>
                <div class="words">二审失败</div>
                <div class="words">未录取</div>
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
    transform: translateY(70px);
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
    color: white;
    font-size: 36px;
    font-family: Microsoft JhengHei UI;
    font-weight: 400;
    word-wrap: break-word;
    padding-bottom: 30px;
    padding-top: 30px;
}

.highlight {
    position: relative;
}

.highlight img {
    width: 100%;
    height: 100%;
    margin-left: -750%;
}

.common {
    width: 78%;
    height: 30px;
    position: absolute;
    margin-left: -36%;
    margin-top: -34px;
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
</style>
