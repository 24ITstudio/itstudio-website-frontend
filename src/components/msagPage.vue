<template>
    <!-- bug: 缩放时"发布"文字超出-->
    <div class="back">
        <div class="back_up">
            <div class="head">
                <navHead :locate="-4000"></navHead>
            </div>
            <div class="content">
                <div class="back_left">
                    <!-- <transition name="fade"> -->
                    <div v-if="currentContent === 'content1'" class="left_board slide-in-blurred-left">
                        <div class="board_head">
                            <div class="text_1">
                                留言
                            </div>
                        </div>
                        <div class="board_content">
                            <textarea ref="input" :placeholder="isPlaceholder1 ? '有什么想说的，就在这里留下吧~' : ''"
                                v-model="content1" @focus="clearPlaceholder1" @blur="setPlaceholder1"
                                @input="checkInput" rows="9" class="textarea_1" >
                            </textarea>
                        </div>
                        <div class="submitC_1">
                            <button class="inner pulsate-bck" @click="submitMessage"><img
                                    src="../assets/submit.png" /></button>
                        </div>
                        <div class="submitC">
                            <button class="inner pulsate-bck" @click="submitMessage">发&nbsp;&nbsp;&nbsp;&nbsp;布</button>
                        </div>
                    </div>
                    <!-- </transition> -->
                    <!-- <transition name="fade"> -->
                    <div v-if="currentContent === 'content2'" :key="contentKey"
                        class="left_board slide-in-blurred-left">
                        <div class="board_head">
                            <div class="text_1">
                                回复
                            </div>
                        </div>
                        <div class="board_content_1">
                            <textarea ref="input" v-model="content2" @focus="clearPlaceholder2" @blur="setPlaceholder2"
                                @input="checkInput" rows="5" >
                            有什么想说的，就在这里留下吧~
                            </textarea>
                        </div>
                        <div class="submitButton">
                            <div class="submitA_1">
                                <button class="inner pulsate-bck" @click="cancelAndSwitch"><img
                                        src="../assets/Go Back.png" /></button>
                            </div>
                            <div class="submitA">
                                <button class="inner pulsate-bck"
                                    @click="cancelAndSwitch">取&nbsp;&nbsp;&nbsp;&nbsp;消</button>
                            </div>
                            <div class="submitB_1">
                                <button class="inner pulsate-bck" @click="submitTalk"><img
                                        src="../assets/submit.png" /></button>
                            </div>
                            <div class="submitB">
                                <button class="inner pulsate-bck"
                                    @click="submitTalk">发&nbsp;&nbsp;&nbsp;&nbsp;布</button>
                            </div>
                        </div>
                    </div>
                    <!-- </transition> -->

                </div>
                <div class="back_right">
                    <div class="goBack">
                        <router-link to="/">
                            <img src="../assets/Go Back.png" class="backImg" />
                        </router-link>
                    </div>
                    <LoadingSpinner v-if="isLoading" />
                    <!-- Loading... -->
                    <!-- <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div> -->
                    <!-- </LoadingSpinner> -->
                    <!-- <div class="loading" v-if="isLoading">
                        Loading...
                    </div> -->
                    <div class="right_board" v-if="!isLoading">
                        <div class="inner_board" v-for="item in total_Messages" :key="item.id">
                            <!-- <div @click="showContent('content2'); clearPlaceholder1" class="author_inner"> -->
                            <div @click="() => { showContent('content2'); clearPlaceholder1; getParentID(item.id); }"
                                class="author_inner pulsate-bck">
                                <!-- <div class="author_head_fixed">
                                <img src="../assets/author_head.png" />
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
                                        <!-- （可放90个中文字符） -->
                                    </div>
                                </div>
                            </div>

                            <div class="traveller_total">
                                <!-- // eslint-disable-next-line vue/require-v-for-key -->
                                <div class="traveller_inner" v-for="child in item.children" :key="child">
                                    <!-- <div class="traveller_head_fixed">
                                    <img src="../assets/traveller_head.png" />
                                </div> -->
                                    <div class="traveller_right">
                                        <div class="traveller_name_fixed">
                                            回复
                                        </div>
                                        <div class="traveller_content">
                                            {{ child.content }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!-- <div class="inner_board">

                    </div> -->
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import navHead from "./nav-head.vue"
import LoadingSpinner from "../components/LoadingSpinner.vue";
// import axios from 'axios'
import { ElNotification } from 'element-plus'
// import { Warning } from '@element-plus/icons-vue/dist/types';
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
            content1: '有什么想说的，就在这里留下吧~',
            content2: '有什么想说的，就在这里留下吧~',
            parentID: null,   // 顶级留言设为null,评论则提供id
            isPlaceholder1: true,
            isPlaceholder2: true,
            // isFocused: false,
            hasInput: false,
            // focusWithoutInput: false,
            currentContent: 'content1',
            total_Messages: [],
            top_Messages: [],
            repay_Messages: [],
            isLoading: true,
            contentKey: 0,
        }
    },
    created() {
        this.getMessages();
    },
    methods: {
        clearPlaceholder1() {
            // this.isFocused = true;
            if (this.isPlaceholder1 || this.content1 === '有什么想说的，就在这里留下吧~') {
                this.content1 = '';
                this.isPlaceholder1 = false;
                // alert(this.isPlaceholder1,this.content1);
            }
            console.log("clear1")
        },
        // handleFocus() {
        //     if (this.focusWithoutInput) {
        //         this.content2 = '';
        //         this.focusWithoutInput = false;
        //     }
        //     this.isFocused = true;
        //     // this.updateMessage();
        // },
        clearPlaceholder2() {
            // this.isFocused = true;
            // console.log('clear前isPlaceholder2状态', this.isPlaceholder2)
            if (this.isPlaceholder2 || this.content2 === '有什么想说的，就在这里留下吧~') {
                this.content2 = '';
                this.isPlaceholder2 = false;
            }
            // console.log("clear结束isPlaceholder2状态", this.isPlaceholder2)
        },
        setPlaceholder1() {
            if (this.content1 === '') {
                this.content1 = '有什么想说的，就在这里留下吧~';
                this.isplaceholder1 = true;
            }
            console.log("set1")
        },
        // handleBlur() {
        //     this.isFocused = false;
        //     if (!this.hasInput) {
        //         this.focusWithoutInput = true;
        //     }

        //     // this.updateMessage();
        // },
        setPlaceholder2() {
            // console.log('set前content2 isPlaceholder2 hasInput', this.content2, this.isPlaceholder2, this.hasInput)
            if (this.content2 === '') {
                this.content2 = '有什么想说的，就在这里留下吧~';
                this.isplaceholder2 = true;
            }
            // console.log("set结束content2 isPlaceholder2 hasInput", this.content2, this.isPlaceholder2, this.hasInput)
        },
        cancelAndSwitch() {
            this.content2 = '有什么想说的，就在这里留下吧~';
            this.isplaceholder2 = true;
            this.showContent('content1');
        },
        checkInput() {
            // this.hasInput = this.content2 !== '';
            // this.focusWithoutInput = false;  // 有输入时，重置标志位
            // this.updateMessage();
            this.isPlaceholder1 = !(this.content1 !== '');
            this.isPlaceholder2 = !(this.content2 !== '');
            // this.hasInput = this.content2 !== '';


        },
        showContent(content) {
            setTimeout(() =>{
                this.currentContent = content;
                this.contentKey++;
            }, 0);
            // this.currentContent = content;
        },
        getMessages() {
            var axios = require('axios');
            var config = {
                method: 'get',
                // url: 'http://127.0.0.1:4523/m1/4511878-4159176-default/bbs/',
                // url: 'https://www.itstudio.club/bbs/',
                url: '/api/bbs/',
                // url: 'https://itstudio.bai3401.eu.org/',  
                // 正式 但内容为空不宜用于测试
                headers: {
                    // 'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
                }
            };

            axios(config)
                .then(response => {
                    this.total_Messages = response.data;
                    this.total_Messages.forEach(message => {
                        message.datetime = new Date(message.datetime).toLocaleString()
                    })
                    console.log('获取信息成功', response.data);
                    // this.total_Messages.forEach(message => {
                    //     console.log(message.datetime);
                    // });

                })
                .catch(error => {
                    if (error.response) {
                        // 服务器返回了状态码，但状态码不是 2xx
                        if (error.response.status === 404) {

                            console.error('信息获取失败: 资源未找到', error.response.status);
                        } else {

                            console.error('信息获取失败', error.response.status);
                        }
                    } else if (error.request) {
                        // 请求已发出，但没有收到响应

                        console.error('没有收到响应', error.request);
                    } else {
                        // 设置请求时发生错误
                        this.errorMessage = '信息获取失败: 请求设置错误';
                        console.error('请求设置错误', error.message);
                    }
                })
                .finally(() => {
                    this.isLoading = false;  // 确保无论请求成功或失败，都将 loading 状态设为 false
                });

        },
        // filterMessages(){
        //     this.top_Messages = this.total_Messages.filter(item => item.id === null);
        //     this.repay_Messages = this.total_Messages.filter(item => item.id !== null);
        // },
        submitMessage() {
            if (this.content1.trim() === '有什么想说的，就在这里留下吧~') {
                // ElMessage.success('还没有说点什么哇');
                // alert('还没有说点什么哇');
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
                // url: 'http://127.0.0.1:4523/m1/4511878-4159176-default/bbs/',
                // url: 'https://www.itstudio.club/bbs/',
                url: '/api/bbs/',

                headers: {
                    // 'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(response => {
                    if (response.status === 200) {
                        // console.log('消息发布成功', response.status, this.content1);
                        // ElMessage.success({
                        //     title: '发布成功！',
                        //     message: '继续逛逛吧~',
                        //     offset: 100,
                        // });
                        // ElMessage.success('发布成功，继续逛逛吧~')
                        ElNotification({
                            title: '发布成功',
                            message: '继续逛逛吧',
                            type: 'success',
                            duration: 1500,
                            offset: 100,
                        });
                        // alert('竟然发布成功了？?');
                        this.content1 = '有什么想说的，就在这里留下吧~';
                    } else {
                        console.log('出错了…');
                    }
                    // console.log(JSON.stringify(response.data));
                    // alert(JSON.stringify(response.data));
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
                    new Promise(resolve => setTimeout(resolve, 1500))
                        .then(() => {
                            window.location.reload(); // 刷新页面
                        });
                });
            // alert('发布成功');
        },
        getParentID(id) {
            this.parentID = id;
            this.parentID = parseInt(this.parentID, 10);
            this.content2 = '有什么想说的，就在这里留下吧~';
            this.isplaceholder2 = true;
            // console.log('getParentID结束 ', this.parentID, typeof this.parentID, this.content2)
        },
        submitTalk() {
            console.log('待上传回复: ', this.parentID, this.content2);
            // console.log(typeof this.parentID);   // 返回number

            if (this.content2.trim() === '有什么想说的，就在这里留下吧~') {
                // ElMessage.success('还没有说点什么哇');
                ElNotification({
                    title: '嗯？',
                    message: '还没有说点什么哇',
                    type: 'warning',
                    duration: 2000,
                    offset: 100,
                });
                // alert('还没有说点什么哇');
                return;
            }

            var axios = require('axios');
            var data = JSON.stringify({
                "content": this.content2,
                // "parent": 1
                // "parent": null
                "parent": parseInt(this.parentID, 10)
            });

            var config = {
                method: 'post',
                // url: 'http://127.0.0.1:4523/m1/4511878-4159176-default/bbs/',
                // url: 'https://www.itstudio.club/bbs/',
                url: '/api/bbs/',
                headers: {
                    // 'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
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
                        this.content2 = '有什么想说的，就在这里留下吧~';
                    } else {
                        console.log('状态码变为 ', response.status);
                    }
                })
                .catch(error => {
                    // console.error('错误响应数据:', error.response.data);
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
                    new Promise(resolve => setTimeout(resolve, 1500))
                        .then(() => {
                            window.location.reload(); // 刷新页面
                        });
                    // setTimeout(() => {
                    //     window.location.reload(); // 刷新页面
                    // }, 3000); // 设置延迟，确保消息可见
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
        background: url("../assets/bg.jpg") no-repeat fixed;
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
    /* margin-left: 10%; */
    /* margin-right: 10%; */
    /* margin-bottom: 3%; */
    /* margin-top: -3.2%; */
}

.left_board {
    background-color: #d9d9d9;
    /* width: 80%; */
    height: 100%;
    width: 100%;
    /* margin-left: 25%; */
    display: flex;
    flex-direction: row;
    border-radius: 15px;
    /* justify-content: center; */
    /* margin-right: 2%; */
    /* margin-top: 25%; */
}

.board_head{
    /* display: none; */
    /* background-color: #b01515; */
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    justify-content: center;
    width: 5%;
    margin-left: 3%;
    /* border-radius: 15px; */
    /* border: 1px, solid, #ab226f; */
}

.text_1{ 
    text-align: center;
}

.board_content {
    display: flex;
    margin-left: 3%;
    /* height: 100%; */
    width: 74%;
    /* border: 1px, solid, #2253e4; */
}

.board_content .textarea_1{
    border: none;
    resize: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    /* margin-top: 2%; */
    /* border: 1px, solid, #16c461; */
    color: black;
}

/* .textarea_1::placeholder {
    color: gray;
} */

.submitC{
    display: none;
}

.submitC_1 {
    /* width: 28%; */
    height: 100%;
    /* cursor: pointer; */
    /* width: 20%; */
    /* line-height: 3%; */
    /* border-radius: 100px; */
    /* margin-left: 62%; */
    /* margin-top: 3.3%; */
    /* text-align: center; */
    /* border: none; */
    /* background-color: #04132c; */
    /* display: flex; */
    /* justify-content: center; */
    /* border: 1px, solid, #16c461; */
}

.submitC_1 .inner{
    height: 100%;
    /* width: 100%; */
    border: none;
    /* text-align: center; */
    background-color: transparent;
    /* border: 1px, solid, #b016c4; */
}

.submitC_1 .inner img{
    height: 8vw;
    width: 8vw;
    /* border: 1px, solid, #1fc1d6; */
}

.submitC_1 .inner img:active{
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
    /* margin-top: 2%; */
    /* border: 1px, solid, #16c461; */
    color: black;
}

.submitButton {
    /* border: 1px solid rebeccapurple; */
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    /* margin-top: 2%; */
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

.submitA_1{
    height: 100%;
}

.submitA_1 .inner {
    height: 100%;
    /* width: 100%; */
    border: none;
    /* text-align: center; */
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

.submitB_1{
    height: 100%;
}


.submitB_1 .inner {
    height: 100%;
    /* width: 100%; */
    border: none;
    /* text-align: center; */
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


/* .placeholder {
    color: #999;
} */

.back_right {
    /* background-color: #d9d9d91a; */
    width: 100%;
    height: 82%;
    /* margin-top: 15%; */
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
    /* margin-left: 20%; */
    height: 88%;
    width: 85%;
    margin-left: 10%;
}

.right_board {
    /* background-color: #ffffff; */
    /* border: 1px, solid, greenyellow; */
    height: 88%;
    width: 100%;
    /* margin-left: 3%; */
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
    /* word-wrap: break-word; */
    border-radius: 40px;
    /* margin-left: 1%; */
    /* margin-right: 6%; */
    margin-top: 5%;
}

.inner_board:first-child {
    margin-top: 0;
}

/* .inner_board:nth-child(2) {
    margin-top: 0;
} */

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

/* .author_head_fixed { */
    /* border: 1px, solid, black; */
    /* border-image: url('../assets/author_head.png'); */
    /* height: 20%; */
    /* width: 17%; */
/* } */

/* .author_head_fixed img { */
    /* height: 100%; */
    /* width: 100%; */

/* } */

.author_right {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 3%;
    /* 加和为82% */
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
    /* font-weight: bold; */
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
    /* width: 100%; */
    width: 90%;
    margin-left: 4%;
    margin-top: 2%;
    margin-bottom: 2%;
    overflow: auto;


}

.traveller_total::-webkit-scrollbar {
    display: none;
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

.traveller_inner::-webkit-scrollbar {
    width: 0;
    height: 0;
}

/* .traveller_head_fixed { */
/* border: 1px, solid, black; */
/* border-image: url('../assets/traveller_head.png'); */
/* width: 15%; */
/* } */

.traveller_head_fixed img {
    width: 100%;
}

.traveller_right {
    display: flex;
    flex-direction: column;
    width: 82%;
    margin-left: 4%;
    /* 加和86% */
}

/* .traveller_right::-webkit-scrollbar {
    width: 0;
    height: 0;
} */

.traveller_name_fixed {
    /* border: 1px, solid, black; */
    font-family: 'Microsoft New Tai Lue';
    font-weight: 700;
}

.traveller_content {
    /* border: 1px, solid, black; */
    height: 80%;
    /* width: 100%; */
    margin-top: 3%;
    font-size: 1.7vh;
    overflow: auto;
}

.traveller_content::-webkit-scrollbar {
    width: 0;
    height: 0;
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
}
@media screen and (orientation: landscape) {
.head {
    /* height: 36px; */
    height: 1%;
}

.back {
    height: 100vh;
    position: relative;
    background: url("../assets/bg.jpg") no-repeat fixed;
    background-size: 100% 100%;
    padding: 1px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
}

.back_up{
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
    /* height: 100%; */
    margin-left: 0%;
    margin-right: 0%;
    margin-top: -3.2%;
}

.left_board {
    background-color: #d9d9d9;
    width: 60%;
    height: 75%;
    margin-left: 25%;
    /* margin-right: 2%; */
    margin-top: 25%;
}

.board_head {
    height: 70px;
    line-height: 100px;
    margin-left: 10%;
    /* margin-top: 20px; */
    /* border: 1px, solid, #04132c; */
    /* margin-top: 5%; */
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
    /* align-items: center; */
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
    /* border-bottom: 1px solid rebeccapurple; */
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

.submitA_1{
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

.submitB_1{
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
    /* font-size: 12px; */
    font-weight: bold;
    font-family: "Microsoft New Tai Lue-Bold", Helvetica;
    cursor: pointer;
}

.submitA .inner:active{
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

.submitC_1{
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
    /* background-color: #ffffff; */
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
    /* border-image: url('../assets/author_head.png'); */
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
    /* 加和为82% */
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
    color:#8d8989;
}

.author_content {
    /* border: 1px, solid, black; */
    height: 70%;
    margin-top: 2%;
    font-size: 1.8vh;
    /* font-weight: bold; */
    font-family: 'Microsoft New Tai Lue';
    overflow: auto;
}

.author_content::-webkit-scrollbar {
    display: none;
}

.traveller_total {
    /* border: 1px, solid, greenyellow; */
    height: 49%;
    width: 90%;
    /* margin-left: 10%; */
    margin-top: 2%;
    overflow: auto;

}

.traveller_total::-webkit-scrollbar {
    display: none;
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
    /* text-overflow: ellipsis; */
}

/* .traveller_inner::-webkit-scrollbar {
    width: 0;
    height: 0;
} */

/* .traveller_head_fixed { */
/* border: 1px, solid, black; */
/* border-image: url('../assets/traveller_head.png'); */
/* width: 15%; */
/* } */

/* .traveller_head_fixed img {
    width: 100%;
} */

.traveller_right {
    display: flex;
    flex-direction: column;
    width: 87%;
    margin-left: 4%;
    /* 加和86% */
    /* overflow: auto; */
}

/* .traveller_right::-webkit-scrollbar {
    width: 0;
    height: 0;
} */

.traveller_name_fixed {
    /* border: 1px, solid, black; */
    font-family: 'Microsoft New Tai Lue';
    font-weight: 700;
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

/* .traveller_content::-webkit-scrollbar {
    width: 0;
    height: 0;
} */

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
}
</style>
