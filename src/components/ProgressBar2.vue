<template>
    <div class="box">
        <div class="shadow">
            <div class="back">
                <router-link to="/">
                    <img src="../assets/Arrow back.png" alt="" width="20px" />
                    <p>返回</p>
                </router-link>
            </div>
            <div class="line-container">
                <div class="line highlight-line">
                    <div class="point highlight-point"></div>
                </div>
                <div class="line highlight-line">
                    <div class="point highlight-point"></div>
                </div>
                <div class="line common-line">
                    <div class="point common-point"></div>
                </div>
                <div class="line common-line">
                    <div class="point common-point"></div>
                </div>
            </div>
            <div class="person">
                <img src="../assets/person2.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProgressBar2'
}
</script>

<style scoped>
body,
.box {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
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

.line-container {
    width: 76%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
}

.line {
    position: relative;
    width: 365px;
    height: 5px;
    margin: 20px 0;
}

.highlight-line {
    background-color: #fff;
}

.common-line {
    background-color: #808DA5;
}

.point {
    position: absolute;
    top: -7px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
}

.highlight-point {
    background-color: #fff;
}

.common-point {
    background-color: #808DA5;
}

.person {
    margin-top: -10px;
    width: 329px;
    height: 710px;
    margin-left: 40%;
}

.person img {
    width: 100%;
    height: 100%;
}
</style>