<template>
    <nav class="homenav">
        <div class="navtitle">
            <router-link to="/">
                <img src="../assets/Home.svg" alt="" class="default">
                <div class="default">IT Studio</div>
                <img src="../assets/homo.svg" title="返回主页" class="hoVer">
                <div class="hoVer">主页</div>
            </router-link>
        </div>
        <el-icon class="fold" @click="unFold" v-show="!show">
            <Menu />
        </el-icon>
        <el-icon class="fold" @click="unFold" v-show="show">
            <CloseBold />
        </el-icon>
        <div :class="['main', { 'close': !show }, { 'popUp': show }]">
            <router-link to="/intro" class="nochose" active-class="active">
                关于爱特
            </router-link>
            <router-link :to="'/feature?id=0'" class="nochose" active-class="active">
                部门特色
            </router-link>
            <router-link to="/member" class="nochose" active-class="active">
                成员组成
            </router-link>
            <router-link to="/achieve" class="nochose" active-class="active">
                项目成果
            </router-link>
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

    .nochose {
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-selece: none;
        /*上面都是兼容性问题，具体看浏览器版本或什么浏览器*/
        user-select: none;
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
        /* overflow: hidden; */
    }

    .homenav {
        animation: load2 1s linear;
    }

    nav .navtitle {
        padding-right: 50px;
        width: 25%;
        height: 70px;
        margin-right: 1.2%;
    }

    nav .navtitle a {
        width: 200px !important;
    }

    nav .navtitle div {
        font-size: 24px;
        font-weight: bolder;
        margin-left: 10px;
        height: 70px;
        text-align: left;
    }

    nav .navtitle img {
        height: 40px;
    }

    nav .navtitle a .default {
        display: block;
    }

    nav .navtitle a .hoVer {
        display: none;
    }

    nav .navtitle a:hover .default {
        display: none;
    }

    nav .navtitle a:hover .hoVer {
        display: block;
        width: 80px;
    }

    nav .navtitle a {
        width: 100px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: start;
        align-items: center;
        padding: 0;
        margin-left: 70px;
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
        margin-right: 100px;
        transform: translateX(70px);
    }

    nav .main a {
        width: 120px;
    }

    nav .main:hover .active {
        background-color: transparent;
    }

    nav .main a:hover {
        height: inherit;
        z-index: 0;
        background: rgba(155, 200, 240, 0.7) !important;
        border-radius: 8px;
    }

    nav .main a.active {
        height: inherit;
        z-index: 0;
        background: rgba(155, 200, 240, 0.7);
        border-radius: 8px;
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

    .nochose {
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-selece: none;
        /*上面都是兼容性问题，具体看浏览器版本或什么浏览器*/
        user-select: none;
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
        justify-content: start;
        position: absolute;
        top: 100px;
        right: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(43, 51, 77, .99);
        border-radius: 0 0 10px 10px;
        transition: 0.5s;
    }

    .main a {
        font-size: 28px;
        font-weight: bold;
        height: 80px;
        margin-top: 50px;
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

    .navtitle a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-decoration: none;
        z-index: 1;
        height: inherit;
        line-height: 70px;
        opacity: 1;
        transition: 0.5s;
        margin: 0;
        padding: 0;
        transform: translateX(-20px);
    }

    .navtitle a img {
        height: 50px;
        transform: translateY(20px);
    }

    .navtitle a div {
        font-weight: bold;
        font-size: 20px;
        width: 100px;
        text-align: center;
    }

    .navtitle .hoVer {
        display: none;
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

    .close {
        transform: translateX(100vw);
    }

    .popUp {
        transform: translateX(0);
    }
}
</style>