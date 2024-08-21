<template>
    <nav class="homenav">
        <div class="navtitle"><router-link to="/"><img src="../assets/Home.svg" alt=""></router-link></div>
        <el-icon :class="['fold', { 'onShow': show }]" @click="unFold">
            <Expand />
        </el-icon>
        <div class="main" v-show="show">
            <router-link to="/intro">关于爱特</router-link>
            <router-link :to="'/feature?id=0'">部门特色</router-link>
            <router-link to="/number">成员组成</router-link>
            <router-link to="/achieve">项目成果</router-link>
            <div class="navanim home" :style="{ left: locate + 'px' }"></div>
        </div>
        <div class="none"></div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    props: {
        locate: {
            type: Number,
        },
    },
    methods: {
        unFold() {
            this.show = !this.show
        }
    }
};  
</script>

<style scoped>
@media (min-width: 1301px) {

    a {

        text-decoration: none;
        color: rgba(212, 220, 226);
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

    nav {
        position: fixed;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100vw;
        height: 70px;
        top: 0px;
        background-color: rgba(43, 51, 77, .6);
        overflow: hidden;
        font-size: 20px;
        color: white;
        z-index: 1000;
    }

    nav .main {
        display: flex !important;
        justify-content: space-around;
        position: relative;
        width: 1000px;
    }

    .homenav {
        animation: load2 1s linear;
    }

    nav .navtitle {
        padding-right: 50px;
        width: 25%;
        margin-right: 1.2%;
        /* transform: translateX(-100px); */
    }

    nav .navtitle strong {
        font-size: 50px;
        font-weight: bolder;
    }

    nav a {
        display: block;
        justify-content: center;
        text-decoration: none;
        z-index: 1;
        height: inherit;
        line-height: 70px;
        width: 180px;
        text-align: center;
        font-weight: bolder;
        color: white;
        opacity: 1;
        transition: 0.5s;
        padding-right: 100px;
        transform: translateX(70px);
    }

    nav .navanim {
        position: absolute;
        height: inherit;
        z-index: 0;
        background: rgb(155, 200, 240);
        border-radius: 5px;
        opacity: 0.5;
        transition: all .5s ease 0s;
        width: 120px;
        height: 100%;
    }


    .main a:nth-child(1):hover~.navanim {
        width: 120px;
        left: 84px !important;
    }

    .main a:nth-child(2):hover~.navanim {
        width: 120px;
        left: 332px !important;
    }

    .main a:nth-child(3):hover~.navanim {
        width: 120px;
        left: 584px !important;
    }

    .main a:nth-child(4):hover~.navanim {
        width: 120px;
        left: 834px !important;
    }

    nav .none {
        width: 20%;
    }

    .fold {
        display: none;
    }
}

@media (max-width:1300px) {
    * {
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: rgba(212, 220, 226);
    }

    body {
        margin: 0;
        padding: 0;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        z-index: 1000;
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

    nav {
        position: fixed;
        display: flex;
        justify-content: start;
        align-items: center;
        width: 100vw;
        height: 100px;
        top: 0px;
        background-color: rgba(43, 51, 77, .6);
        font-size: 16px;
        color: white;
        z-index: 1000;
    }

    nav .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-self: center;
        position: absolute;
        top: 70px;
        right: 0;
        width: 160px;
        height: 300px;
        background-color: rgba(43, 51, 77, .99);
        border-radius: 0 0 10px 10px;
        transition: 0.5s;
    }

    .main a {
        font-size: 18px;
        font-weight: bold;
    }

    nav .navtitle {
        display: flex;
        width: 50px;
        height: 50px;
        margin-left: 40px;
    }

    .navtitle a {
        display: flex;
        justify-content: center;
        text-decoration: none;
        z-index: 1;
        height: inherit;
        line-height: 70px;
        opacity: 1;
        transition: 0.5s;
        margin: 0;
        padding: 0;
    }


    nav a {
        display: flex;
        justify-content: center;
        text-decoration: none;
        z-index: 1;
        height: inherit;
        line-height: 70px;
        opacity: 1;
        transition: 0.5s;
    }

    nav .navanim {
        display: none;
    }

    nav .none {
        width: 20%;
    }

    .fold {
        position: absolute;
        right: 26px;
        height: 70px;
        width: 60px;
        font-size: 50px;
        transition: 0.5s;
    }

    .onShow {
        transition: 0.5s;
        position: absolute;
        right: 26px;
        height: 70px;
        width: 60px;
        font-size: 30px;
        transform: rotate3d(0, 1, 0, 180deg);
    }
}
</style>