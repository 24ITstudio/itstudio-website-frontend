<template>
    <div class="back">
        <div class="back_up">
            <div class="head">
                <navHead :locate="-4000"></navHead>
            </div>
            <div class="content">
                <div class="back_left">
                    <transition name="slide-left">
                        <div v-if="currentContent === 'content1'" class="left_board slide-in-left ">
                            <div class="board_head">
                                <div class="text_1">
                                    留言
                                </div>
                            </div>
                            <div class="board_content">
                                <textarea ref="input" placeholder="有什么想说的，就在这里留下吧~" v-model="content1" rows="9"
                                    class="textarea_1" maxlength="100">
                            </textarea>
                            </div>
                            <div class="submitC_1">
                                <button class="inner pulsate-bck" @click="submitMessage"><img
                                        src="../assets/submit.webp" /></button>
                            </div>
                            <div class="submitC">
                                <button class="inner pulsate-bck"
                                    @click="submitMessage">发&nbsp;&nbsp;&nbsp;&nbsp;布</button>
                            </div>
                        </div>
                    </transition>
                    <transition name="slide-left">
                        <div v-if="currentContent === 'content2'" :key="contentKey" class="left_board slide-in-left">
                            <div class="board_head">
                                <div class="text_1">
                                    回复
                                </div>
                            </div>
                            <div class="board_content_1">
                                <textarea ref="input" v-model="content2" placeholder="有什么想说的，就在这里留下吧~" maxlength="100"
                                    rows="5">
                            </textarea>
                            </div>
                            <div class="submitButton">
                                <div class="submitA_1">
                                    <button class="inner pulsate-bck" @click="cancelAndSwitch"><img
                                            src="../assets/Go Back.webp" /></button>
                                </div>
                                <div class="submitA">
                                    <button class="inner pulsate-bck"
                                        @click="cancelAndSwitch">取&nbsp;&nbsp;&nbsp;&nbsp;消</button>
                                </div>
                                <div class="submitB_1">
                                    <button class="inner pulsate-bck" @click="submitTalk"><img
                                            src="../assets/submit.webp" /></button>
                                </div>
                                <div class="submitB">
                                    <button class="inner pulsate-bck"
                                        @click="submitTalk">发&nbsp;&nbsp;&nbsp;&nbsp;布</button>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="back_right">
                    <div class="goBack">
                        <router-link to="/">
                            <img src="../assets/Go Back.webp" class="backImg" />
                        </router-link>
                    </div>
                    <LoadingSpinner v-if="isLoading" />
                    <div class="right_board slide-in-blurred-bottom" v-if="!isLoading" :key="submitKey">
                        <div class="inner_board" v-for="item in total_Messages" :key="item.id">
                            <!-- <div @click="showContent('content2'); clearPlaceholder1" class="author_inner"> -->
                            <div @click="() => { showContent('content2');  getParentID(item.id); }"
                                class="author_inner pulsate-bck">
                                <!-- <div class="author_head_fixed">
                                <img src="../assets/author_head.webp" />
                            </div> -->
                                <div class="author_right">
                                    <div class="author_name">
                                        留言
                                    </div>
                                    <div class="author_time">
                                        {{ item.datetime }}
                                    </div>
                                    <div class="author_content">
                                        {{ item.content }}
                                    </div>
                                </div>
                            </div>

                            <div class="traveller_total">
                                <!-- // eslint-disable-next-line vue/require-v-for-key -->
                                <div class="traveller_inner" v-for="child in item.children" :key="child">
                                    <!-- <div class="traveller_head_fixed">
                                    <img src="../assets/traveller_head.webp" />
                                </div> -->
                                    <div class="traveller_right">
                                        <div class="traveller_name_fixed">
                                            <div class="traveller_name_fixed_1">回复</div>
                                            <div class="traveller_time">
                                                {{ formateTime(child.datetime) }}
                                            </div>
                                        </div>
                                        <div class="traveller_content">
                                            {{ child.content }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import navHead from "./nav-head.vue"
import LoadingSpinner from "../components/LoadingSpinner.vue";
import { ElNotification } from 'element-plus'
// import axios from 'axios';
// import { ref } from 'vue';

// const contentKey = ref(0);
export default {
    name: "msagPage",
    components: {
        navHead,
        LoadingSpinner,
    },
    data() {
        return {
            content1: '',
            content2: '',
            parentID: null,   // 顶级留言设为null,评论则提供id
            currentContent: 'content1',
            total_Messages: [],
            isLoading: true,
            contentKey: 0,
            submitKey: 0,
        }
    },
    created() {
        this.getMessages();
    },
    methods: {
        cancelAndSwitch() {
            this.content2 = '';
            this.content1 = '';
            this.isplaceholder2 = true;
            this.showContent('content1');
        },
        showContent(content) {
            this.content1 = '';
            this.content2 = '';
            this.currentContent = '';
            setTimeout(() => {
                this.currentContent = content;
                this.contentKey++;
            }, 100);
        },
        formateTime(time) {
            if (!time) return '';
            let date = new Date(time);
            return date.toLocaleString('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
        },
        getMessages() {
            var axios = require('axios');
            var config = {
                method: 'get',
                url: 'https://www.itstudio.club/api/bbs/',
            };


            axios(config)
                .then(response => {
                    console.log(response.data);
                    this.total_Messages = response.data;
                    this.total_Messages.forEach(message => {
                        message.datetime = new Date(message.datetime).toLocaleString();
                    })
                    console.log('获取信息成功', response.data);
                })
                .catch(error => {
                    if (error.response) {
                        // 服务器返回状态码不是 2xx
                        if (error.response.status === 404) {
                            console.error('资源未找到', error.response.status);
                        } else {
                            console.error('信息获取失败', error.response.status);
                        }
                    } else if (error.request) {
                        // 请求已发出，但没有收到响应
                        console.error('没有收到响应', error.request);
                    } else {
                        console.error('请求设置错误', error.message);
                    }
                })
                .finally(() => {
                    this.isLoading = false;  // 无论请求成功或失败，都将 loading 状态设为 false
                });

        },
        submitMessage() {
            if (this.content1.trim() === '') {
                ElNotification({
                    title: '嗯？',
                    message: '还没有说点什么哇',
                    type: 'warning',
                    duration: 2000,
                    offset: 100,
                });
                return;
            }

            var axios = require('axios');
            var data = JSON.stringify({
                "content": this.content1,
                "parent": null
            });

            var config = {
                method: 'post',
                // url: 'https://www.itstudio.club/bbs/',
                url: '/api/bbs/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(response => {
                    if (response.status === 200) {
                        ElNotification({
                            title: '发布成功',
                            message: '继续逛逛吧',
                            type: 'success',
                            duration: 1500,
                            offset: 100,
                        });
                    } else {
                        console.log('出错了…');
                    }
                })
                .catch(error => {
                    if (error.response) {
                        // 服务器返回了状态码，但状态码不是 2xx
                        if (error.response.status === 404) {
                            console.error('信息获取失败: 资源未找到', error.response.status);
                            ElNotification({
                                title: '出错了',
                                message: '请联系前端小白or后端大佬…',
                                type: 'warning',
                                duration: 3000,
                                offset: 100,
                            });
                        } else {
                            console.error('信息获取失败', error.response.status);
                        }
                    } else if (error.request) {
                        // 请求已发出，但没有收到响应

                        console.error('没有收到响应', error.request);
                    } else {
                        // 设置请求时发生错误

                        console.error('请求设置错误', error.message);
                    }
                }).finally(() => {
                    // new Promise(resolve => setTimeout(resolve, 1500))
                    //     .then(() => {
                    //         window.location.reload(); // 刷新页面
                    //     });
                    // this.submitKey++;
                    this.getMessages();
                    this.content1 = '';
                });
        },
        getParentID(id) {
            this.parentID = id;
            this.parentID = parseInt(this.parentID, 10);
        },
        submitTalk() {

            if (this.content2.trim() === '') {
                ElNotification({
                    title: '嗯？',
                    message: '还没有说点什么哇',
                    type: 'warning',
                    duration: 2000,
                    offset: 100,
                });
                return;
            }

            var axios = require('axios');
            var data = JSON.stringify({
                "content": this.content2,
                "parent": parseInt(this.parentID, 10)
            });

            var config = {
                method: 'post',
                // url: 'https://www.itstudio.club/bbs/',
                url: '/api/bbs/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(response => {
                    if (response.status === 200) {
                        console.log('评论成功', response.status, this.content2);
                        ElNotification({
                            title: '回复成功！',
                            message: '继续逛逛吧~',
                            type: 'success',
                            duration: 1500,
                            offset: 100,
                        });
                    } else {
                        console.log('状态码变为 ', response.status);
                    }
                })
                .catch(error => {
                    if (error.response) {
                        if (error.response.status === 404) {
                            ElNotification({
                                title: '出错了',
                                message: '请联系前端小白or后端大佬…',
                                type: 'warning',
                                duration: 3000,
                                offset: 100,
                            });
                            console.error('parentID不存在', error.response.data);
                        } else {
                            console.error('信息获取失败', error.response.status);
                        }
                    } else if (error.request) {
                        console.error('无响应', error.request);
                    } else {
                        console.error('请求设置错误', error.message);
                    }
                }).finally(() => {
                    // new Promise(resolve => setTimeout(resolve, 1500))
                    //     .then(() => {
                    //         window.location.reload(); // 刷新页面
                    //     });
                    // this.submitKey++;
                    this.getMessages();
                    this.content2 = '';
                    this.showContent('content1');
                });
        },

    }

};
</script>


<style scoped>
@media screen and (orientation: portrait) {
    .back {
        height: 100vh;
        position: relative;
        background: url("../assets/bg.webp") no-repeat fixed;
        background-size: 100% 100%;
        padding: 1px;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
    }

    .back_up {
        height: 100%;
        width: 100%;
        backdrop-filter: blur(10px);
    }

    .content {
        height: 95%;
        margin-top: 2%;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        z-index: 1;
    }

    .back_left {
        /* background-color: #5ed210; */
        width: 90%;
        height: 8%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .left_board {
        background-color: #d9d9d9;
        /* width: 80%; */
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        border-radius: 15px;
        /* position: fixed; */
    }

    .board_head {
        /* background-color: #b01515; */
        display: flex;
        /* flex-direction: row; */
        align-items: center;
        justify-content: center;
        width: 5%;
        margin-left: 3%;
        /* border: 1px, solid, #ab226f; */
    }

    .text_1 {
        text-align: center;
    }

    .board_content {
        display: flex;
        margin-left: 3%;
        /* height: 100%; */
        width: 74%;
        /* border: 1px, solid, #2253e4; */
    }

    .board_content .textarea_1 {
        border: none;
        resize: none;
        outline: none;
        background-color: transparent;
        width: 100%;
        /* border: 1px, solid, #16c461; */
        color: black;
    }

    .submitC {
        display: none;
    }

    .submitC_1 {
        height: 100%;
    }

    .submitC_1 .inner {
        height: 100%;
        /* width: 100%; */
        border: none;
        background-color: transparent;
        /* border: 1px, solid, #b016c4; */
    }

    .submitC_1 .inner img {
        height: 8vw;
        width: 8vw;
        /* border: 1px, solid, #1fc1d6; */
    }

    .submitC_1 .inner img:active {
        animation: pulsate-bck 1s ease;
    }

    .board_content_1 {
        display: flex;
        margin-left: 3%;
        /* height: 100%; */
        width: 74%;
        /* border: 1px, solid, #2253e4; */
    }

    .board_content_1 textarea {
        border: none;
        resize: none;
        outline: none;
        background-color: transparent;
        width: 100%;
        /* border: 1px, solid, #16c461; */
        color: black;
    }

    .submitButton {
        /* border: 1px solid rebeccapurple; */
        display: flex;
        flex-direction: row;
        /* height: 10%; */
    }

    .submitButton {
        /* border: 1px solid rebeccapurple; */
        display: flex;
        flex-direction: row;
        /* margin-top: 4%; */
        /* height: 10%; */
    }

    .submitA {
        display: none;
    }

    .submitB {
        display: none;
    }

    .submitA_1 {
        height: 100%;
    }

    .submitA_1 .inner {
        height: 100%;
        /* width: 100%; */
        border: none;
        background-color: transparent;
        /* border: 1px, solid, #b016c4; */
    }

    .submitA_1 .inner img {
        height: 8vw;
        width: 8vw;
        /* border: 1px, solid, #1fc1d6; */
    }

    .submitA_1 .inner img:active {
        animation: pulsate-bck 1s ease;
    }

    .submitB_1 {
        height: 100%;
    }


    .submitB_1 .inner {
        height: 100%;
        /* width: 100%; */
        border: none;
        background-color: transparent;
        /* border: 1px, solid, #b016c4; */
    }

    .submitB_1 .inner img {
        height: 8vw;
        width: 8vw;
        /* border: 1px, solid, #1fc1d6; */
    }

    .submitB_1 .inner img:active {
        animation: pulsate-bck 1s ease;
    }

    .back_right {
        /* background-color: #d9d9d91a; */
        width: 100%;
        height: 82%;
    }

    .goBack {
        /* background-color: violet; */
        margin-left: 2%;
        margin-top: 2%;
    }

    .backImg {
        height: 6%;
        width: 6%;
    }

    .loading {
        color: #ffffff;
        height: 88%;
        width: 85%;
        margin-left: 10%;
    }

    .right_board {
        /* border: 1px, solid, greenyellow; */
        height: 88%;
        width: 100%;
        margin-top: 1%;
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        justify-content: center;
    }

    .right_board::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .inner_board {
        background-color: #ffffff;
        width: 80%;
        /* height: 40%; */
        height: auto;
        border-radius: 40px;
        margin-top: 5%;
    }

    .inner_board:first-child {
        margin-top: 0;
    }

    .author_inner {
        /* border: 1px, solid, rgb(40, 50, 26); */
        margin-top: 3%;
        margin-left: 9%;
        /* height: 34%; */
        width: 78%;
        display: flex;
        flex-direction: row;
        cursor: pointer;
    }

    .author_inner:active {
        animation: pulsate-bck 0.4s ease;
        /* animation: slide-in-blurred-left 0.4s ease; */
    }

    .author_right {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-left: 3%;
    }

    .author_name {
        /* border: 1px, solid, black; */
        margin-top: 1px;
        font-weight: 700;
        font-family: 'Microsoft New Tai Lue';
        /* height: 20%; */
    }

    .author_time {
        font-size: 1.5vh;
        color: #8d8989;
    }

    .author_content {
        /* border: 1px, solid, black; */
        /* height: 70%; */
        margin-top: 2%;
        font-size: 1.8vh;
        font-family: 'Microsoft New Tai Lue';
        overflow: auto;
    }

    .author_content::-webkit-scrollbar {
        display: none;
    }

    .traveller_total {
        /* border: 1px, solid, greenyellow; */
        /* height: 80%; */
        max-height: 20vh;
        width: 90%;
        margin-left: 4%;
        margin-top: 2%;
        margin-bottom: 2%;
        overflow: auto;
    }

    .traveller_inner {
        /* border: 1px, solid, blue; */
        /* height: 45%; */
        width: 85%;
        margin-top: 2%;
        margin-left: 12%;
        display: flex;
        flex-direction: column;
        overflow: auto;
        text-overflow: ellipsis;
    }

    .traveller_head_fixed img {
        width: 100%;
    }

    .traveller_right {
        display: flex;
        flex-direction: column;
        width: 82%;
        margin-left: 4%;
    }


    .traveller_name_fixed_1 {
        /* border: 1px, solid, black; */
        font-family: 'Microsoft New Tai Lue';
        font-weight: 700;
    }

    .traveller_name_fixed {
        display: flex;
        flex-direction: row;
    }

    .traveller_time {
        font-size: 1.5vh;
        color: #8d8989;
        margin-top: 3.5%;
        margin-left: 2%;
    }

    .traveller_content {
        /* border: 1px, solid, black; */
        height: 80%;
        /* width: 100%; */
        margin-top: 3%;
        font-size: 1.7vh;
        overflow: auto;
    }


    /* 动画部分 */
    /* 留言板从左侧飞出（同报名） */
    .slide-in-blurred-left {
        -webkit-animation: slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
        animation: slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    }

    @-webkit-keyframes slide-in-blurred-left {
        0% {
            -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
            -webkit-filter: blur(40px);
            filter: blur(40px);
            opacity: 0;
        }

        100% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-blurred-left {
        0% {
            -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
            -webkit-filter: blur(40px);
            filter: blur(40px);
            opacity: 0;
        }

        100% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
        }
    }

    /* 点击效果 */
    /* .pulsate-bck {
    -webkit-animation: pulsate-bck 0.5s ease-in-out both;
    animation: pulsate-bck 0.5s ease-in-out both;
} */

    @-webkit-keyframes pulsate-bck {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        50% {
            -webkit-transform: scale(0.9);
            transform: scale(0.9);
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @keyframes pulsate-bck {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        50% {
            -webkit-transform: scale(0.9);
            transform: scale(0.9);
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
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

    .slide-in-left {
        -webkit-animation: slide-in-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slide-in-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
                
    @-webkit-keyframes slide-in-left {
        0% {    
            -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
            opacity: 0;
        }
                
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
    }
                
    @keyframes slide-in-left {
        0% {
            -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
            opacity: 0;
        }
                
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
    }

    .slide-left-enter-active {
        animation: slide-in-left 1.5s ease;
    } 
        
    .slide-left-leave-active {
        animation: slide-out-left 0.6s ease;
    }

        
    .slide-out-left {
        -webkit-animation: slide-out-left 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        animation: slide-out-left 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    @-webkit-keyframes slide-out-left {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }

        100% {
            -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
            opacity: 0;
        }
    }

    @keyframes slide-out-left {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }

        100% {
            -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
            opacity: 0;
        }
    }

    .slide-out-blurred-left {
        -webkit-animation: slide-out-blurred-left 0.4s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
        animation: slide-out-blurred-left 0.4s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
    }

    @-webkit-keyframes slide-out-blurred-left {
        0% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
        }

        100% {
            -webkit-transform: translateX(-1000px) scaleX(2) scaleY(0.2);
            transform: translateX(-1000px) scaleX(2) scaleY(0.2);
            -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
            -webkit-filter: blur(40px);
            filter: blur(40px);
            opacity: 0;
        }
    }

    @keyframes slide-out-blurred-left {
        0% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
        }

        100% {
            -webkit-transform: translateX(-1000px) scaleX(2) scaleY(0.2);
            transform: translateX(-1000px) scaleX(2) scaleY(0.2);
            -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
            -webkit-filter: blur(40px);
            filter: blur(40px);
            opacity: 0;
        }
    }
}

@media screen and (orientation: landscape) {
    .head {
        height: 1%;
    }

    .back {
        height: 100vh;
        position: relative;
        background: url("../assets/bg.webp") no-repeat fixed;
        background-size: 100% 100%;
        padding: 1px;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
    }

    .back_up {
        height: 100%;
        width: 100%;
        backdrop-filter: blur(10px);
    }

    .content {
        height: 95%;
        margin-top: 2%;
        display: flex;
        flex-direction: row;
        z-index: 1;
    }

    .back_left {
        background-color: #04132c;
        width: 30%;
        margin-left: 0%;
        margin-right: 0%;
        margin-top: -3.2%;
    }

    .left_board {
        background-color: #d9d9d9;
        width: 60%;
        height: 75%;
        margin-left: 25%;
        margin-top: 25%;
        position: relative;
    }

    .board_head {
        height: 70px;
        line-height: 100px;
        margin-left: 10%;
        /* border: 1px, solid, #04132c; */
    }

    .text_1 {
        /* margin-left: 10px; */
        font-size: 4vh;
        font-family: "Microsoft New Tai Lue-Bold", Helvetica;
        font-weight: bold;
        /* color: #d9d9d9; */
    }

    .board_content {
        display: flex;
        justify-content: center;
        align-items: center;
        /* height: 40%; */
        margin-left: 10%;
        margin-right: 10%;
        height: 73%;
        margin-top: 6%;
        /* border: 1px, solid, #04132c; */
    }

    .board_content_1 {
        /* border: 1px, solid, #04132c; */
        display: flex;
        justify-content: center;
        /* height: 40%; */
        margin-left: 10%;
        margin-right: 10%;
        height: 44%;
        margin-top: 6%;
        /* margin-top: 2%; */
    }

    .board_content_1 textarea {
        width: 100%;
        height: 100%;
    }

    .placeholder {
        color: #999;
    }

    textarea {
        width: 100%;
        height: 100%;
        /* height: calc(1.5em * 9);   */
        line-height: 2.9em;
        border: none;
        outline: none;
        resize: none;
        background: none;
        padding: 0;
        margin: 0;
        font-family: inherit;
        font-size: 1.9vh;
        overflow: hidden;
        box-sizing: border-box;
        background: linear-gradient(to right, #d9d9d9 2px, transparent 0) 0 -4px/8px 100%,
            linear-gradient(#666 1px, transparent 0) 0 -1px/100% 2.9em;
    }

    textarea::placeholder {
        color: #999;
    }

    textarea:focus::placeholder {
        color: transparent;
    }

    .submitButton {
        /* border: 1px solid rebeccapurple; */
        display: flex;
        flex-direction: row;
        margin-top: 4%;
        height: 10%;
    }

    .submitA_1 {
        display: none;
    }

    .submitA {
        width: 28%;
        height: 45%;
        line-height: 3%;
        border-radius: 100px;
        margin-left: 30%;
        margin-top: 2%;
        background-color: #04132c;
        display: flex;
        justify-content: center;
    }

    .submitB_1 {
        display: none
    }

    .submitB {
        /* border: 1px solid rgb(216, 33, 33); */
        width: 28%;
        height: 45%;
        line-height: 3%;
        border-radius: 100px;
        margin-left: 5%;
        margin-top: 2%;
        background-color: #04132c;
        display: flex;
        justify-content: center;
    }

    .submitA .inner {
        background-color: transparent;
        color: #ffffff;
        height: 100%;
        /* width: 100%; */
        border: none;
        /* margin-left: 18%; */
        font-size: 1.7vh;
        font-weight: bold;
        font-family: "Microsoft New Tai Lue-Bold", Helvetica;
        cursor: pointer;
    }

    .submitA .inner:active {
        animation: pulsate-bck 1s ease;
    }

    .submitB .inner {
        background-color: transparent;
        color: #ffffff;
        height: 100%;
        /* width: 100%; */
        border: none;
        /* margin-left: 18%; */
        font-size: 1.7vh;
        font-weight: bold;
        font-family: "Microsoft New Tai Lue-Bold", Helvetica;
        cursor: pointer;

    }

    .submitB .inner:active {
        animation: pulsate-bck 0.3s ease;
    }

    .submitC {
        width: 28%;
        height: 5%;
        line-height: 3%;
        border-radius: 100px;
        margin-left: 62%;
        margin-top: 2%;
        background-color: #04132c;
        display: flex;
        justify-content: center;
    }

    .submitC .inner {
        background-color: transparent;
        color: #ffffff;
        height: 100%;
        width: 100%;
        border: none;
        /* margin-left: 18%; */
        font-size: 1.7vh;
        font-weight: bold;
        font-family: "Microsoft New Tai Lue-Bold", Helvetica;
        cursor: pointer;

    }

    .submitC .inner:active {
        animation: pulsate-bck 1s ease;
    }

    .submitC_1 {
        display: none;
    }

    .back_right {
        background-color: #d9d9d91a;
        width: 70%;
        height: 95%;
        margin-top: 2.3%;
    }

    .goBack {
        /* background-color: violet; */
        margin-left: 2%;
        margin-top: 1%;
    }

    .backImg {
        height: 3%;
        width: 3%;
    }

    .loading {
        color: #ffffff;
        margin-left: 20%;
        height: 88%;
        width: 85%;
        margin-left: 10%;
        margin-top: 1%;
    }

    .right_board {
        /* border: 1px, solid, greenyellow; */
        height: 87%;
        width: 85%;
        margin-left: 10%;
        margin-top: 1%;
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
    }

    .right_board::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .inner_board {
        background-color: #ffffff;
        width: 43%;
        height: 53%;
        border-radius: 40px;
        margin-left: 1%;
        margin-right: 6%;
        margin-top: 5%;
    }

    .inner_board:first-child {
        margin-top: 0;
    }

    .inner_board:nth-child(2) {
        margin-top: 0;
    }

    .author_inner {
        /* border: 1px, solid, rgb(40, 50, 26); */
        margin-top: 3%;
        margin-left: 9%;
        height: 34%;
        width: 89%;
        display: flex;
        flex-direction: row;
        cursor: pointer;
    }

    .author_inner:active {
        animation: pulsate-bck 0.4s ease;
        /* animation: slide-in-blurred-left 0.4s ease; */
    }

    .author_head_fixed {
        /* border: 1px, solid, black; */
        /* border-image: url('../assets/author_head.webp'); */
        /* height: 20%; */
        width: 17%;
    }

    .author_head_fixed img {
        /* height: 100%; */
        width: 100%;

    }

    .author_right {
        display: flex;
        flex-direction: column;
        width: 79%;
        margin-left: 3%;
    }

    .author_name {
        /* border: 1px, solid, black; */
        margin-top: 1px;
        font-weight: 700;
        font-family: 'Microsoft New Tai Lue';
    }

    .author_time {
        font-size: 1.5vh;
        color: #8d8989;
    }

    .author_content {
        /* border: 1px, solid, black; */
        height: 70%;
        margin-top: 2%;
        font-size: 1.8vh;
        font-family: 'Microsoft New Tai Lue';
        overflow: auto;
    }

    .traveller_total {
        /* border: 1px, solid, greenyellow; */
        height: 49%;
        width: 90%;
        margin-top: 2%;
        overflow: auto;

    }



    .traveller_inner {
        /* border: 1px, solid, blue; */
        /* height: 45%; */
        width: 80%;
        margin-top: 2%;
        margin-left: 20%;
        display: flex;
        flex-direction: column;
        /* overflow: auto; */
    }

    .traveller_right {
        display: flex;
        flex-direction: column;
        width: 87%;
        margin-left: 4%;
        /* overflow: auto; */
    }

    .traveller_name_fixed_1 {
        /* border: 1px, solid, black; */
        font-family: 'Microsoft New Tai Lue';
        font-weight: 700;
    }

    .traveller_name_fixed {
        display: flex;
        flex-direction: row;
    }

    .traveller_time {
        font-size: 1.5vh;
        color: #8d8989;
        margin-top: 2.6%;
        margin-left: 2%;
    }

    .traveller_content {
        /* border: 1px, solid, black; */
        /* height: 80%; */
        height: auto;
        /* width: 100%; */
        margin-top: 2%;
        font-size: 1.7vh;
        /* overflow: auto; */
    }

    /* 动画部分 */
    /* 留言板左侧飞出 */

        .slide-in-left {
            -webkit-animation: slide-in-left 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            animation: slide-in-left 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }

    @-webkit-keyframes slide-in-left {
        0% {
            -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
            opacity: 0;
        }

        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-left {
        0% {
            -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
            opacity: 0;
        }

        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
    }

    .slide-in-blurred-left {
        -webkit-animation: slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
        animation: slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    }

    @-webkit-keyframes slide-in-blurred-left {
        0% {
            -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
            -webkit-filter: blur(40px);
            filter: blur(40px);
            opacity: 0;
        }

        100% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-blurred-left {
        0% {
            -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
            -webkit-filter: blur(40px);
            filter: blur(40px);
            opacity: 0;
        }

        100% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
        }
    }

    /* 点击效果 */
    /* .pulsate-bck {
    -webkit-animation: pulsate-bck 0.5s ease-in-out both;
    animation: pulsate-bck 0.5s ease-in-out both;
} */

    @-webkit-keyframes pulsate-bck {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        50% {
            -webkit-transform: scale(0.9);
            transform: scale(0.9);
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @keyframes pulsate-bck {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        50% {
            -webkit-transform: scale(0.9);
            transform: scale(0.9);
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
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

    .slide-left-enter-active {
        animation: slide-in-left 1.5s ease;
    }
    .slide-left-leave-active {
        animation: slide-out-left 0.6s ease;
    } 

        /* .slide-left-1-enter-active {
            animation: slide-in-left 1.5s ease;
        }
        .slide-left-1-leave-active {
            animation: slide-out-left 0.6s ease;
        }  */

    .slide-out-left {
        -webkit-animation: slide-out-left 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        animation: slide-out-left 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    @-webkit-keyframes slide-out-left {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
                
        100% {
            -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
            opacity: 0;
        }
    }
                
    @keyframes slide-out-left {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
                
        100% {
            -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
            opacity: 0;
        }
    }

    .slide-out-blurred-left {
        -webkit-animation: slide-out-blurred-left 0.4s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
        animation: slide-out-blurred-left 0.4s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
    }
    
    @-webkit-keyframes slide-out-blurred-left {
        0% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
        }
    
        100% {
            -webkit-transform: translateX(-1000px) scaleX(2) scaleY(0.2);
            transform: translateX(-1000px) scaleX(2) scaleY(0.2);
            -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
            -webkit-filter: blur(40px);
            filter: blur(40px);
            opacity: 0;
        }
    }
    
    @keyframes slide-out-blurred-left {
        0% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
        }
    
        100% {
            -webkit-transform: translateX(-1000px) scaleX(2) scaleY(0.2);
            transform: translateX(-1000px) scaleX(2) scaleY(0.2);
            -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
            -webkit-filter: blur(40px);
            filter: blur(40px);
            opacity: 0;
        }
    }
}
</style>
