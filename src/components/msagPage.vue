
<template>
    <!-- remain: 留言展示列表ui待改 -->
    <!-- bug: 发布的动画用element-plus失效//左右缩放时"发布"文字超出-->
    <div class="back">
        <div class="head">
            <navHead :locate="-4000"></navHead>
        </div>
        <div class="content">
            <div class="back_left">

                <div v-if="currentContent === 'content1'" class="left_board">
                    <div class="board_head">
                        <div class="text_1">
                            留言板
                        </div>
                    </div>
                    <div class="board_content">
                        <textarea ref="input" :placeholder="isPlaceholder1 ? '有什么想说的，就在这里留下吧~' : ''" v-model="content1"
                            @focus="clearPlaceholder1" @blur="setPlaceholder1" @input="checkInput" rows="9">
                            有什么想说的，就在这里留下吧~
                        </textarea>
                    </div>
                    <div class="submitC">
                        <button class="inner" @click="submitMessage">发&nbsp;&nbsp;&nbsp;&nbsp;布</button>
                    </div>
                </div>
                <div v-if="currentContent === 'content2'" class="left_board">
                    <div class="board_head">
                        <div class="text_1">
                            回复游客
                        </div>
                    </div>
                    <div class="board_content_1">
                        <textarea ref="input" v-model="content2" @focus="clearPlaceholder2" @blur="setPlaceholder2"
                            @input="checkInput" rows="5">
                            有什么想说的，就在这里留下吧~
                        </textarea>
                    </div>
                    <div class="submitButton">
                        <div class="submitA">
                            <button class="inner" @click="cancelAndSwitch">取&nbsp;&nbsp;&nbsp;&nbsp;消</button>
                        </div>
                        <div class="submitB">
                            <button class="inner" @click="submitTalk">发&nbsp;&nbsp;&nbsp;&nbsp;布</button>
                        </div>
                    </div>
                </div>

            </div>
            <div class="back_right">
                <div class="goBack">
                    <router-link to="/">
                        <img src="../assets/Go Back.png" class="backImg" />
                    </router-link>
                </div>
                <div class="right_board">
                    <div class="inner_board" v-for="item in total_Messages" :key="item.id">
                        <!-- <div @click="showContent('content2'); clearPlaceholder1" class="author_inner"> -->
                        <div @click="() => { showContent('content2'); clearPlaceholder1; getParentID(item.id);}"
                            class="author_inner">
                            <div class="author_head_fixed">
                                <img src="../assets/author_head.png" />
                            </div>
                            <div class="author_right">
                                <div class="author_name">
                                    游1234567
                                </div>
                                <div class="author_content">
                                    {{ item.content }}
                                    <!-- （可放90个中文字符） -->
                                </div>
                            </div>

                            <!-- <div class="repay">

                            </div> -->
                        </div>

                        <div class="traveller_total">
                            <!-- <div class="traveller_inner">
                                <div class="traveller_head_fixed">
                                    <img src="../assets/traveller_head.png" />
                                </div>
                                <div class="traveller_right">
                                    <div class="traveller_name_fixed">
                                        游客
                                    </div>
                                    <div class="traveller_content">
                                        测试留言内容留言板欢迎加入爱特工作室
                                    </div>
                                </div>
                            </div> -->
                            <!-- // eslint-disable-next-line vue/require-v-for-key -->
                            <div class="traveller_inner" v-for="child in item.children" :key="child">
                                <div class="traveller_head_fixed">
                                    <img src="../assets/traveller_head.png" />
                                </div>
                                <div class="traveller_right">
                                    <div class="traveller_name_fixed">
                                        游客
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
</template>

<script>
import navHead from "./nav-head.vue"
// import axios from 'axios'
import { ElNotification } from 'element-plus'

export default {
    name: "msagPage",
    components: {
        navHead,
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
        }
    },
    created() {
        this.getMessages();
    },
    methods: {
        clearPlaceholder1() {
            // this.isFocused = true;
            if (this.isPlaceholder1 || this.content2 === '有什么想说的，就在这里留下吧~') {
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
            if (this.content2 === '' ) {
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
            this.currentContent = content;
        },
        getMessages(){
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
                    // this.filterMessages();
                    console.log('获取信息成功', response.data);
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
                });

        },
        // filterMessages(){
        //     this.top_Messages = this.total_Messages.filter(item => item.id === null);
        //     this.repay_Messages = this.total_Messages.filter(item => item.id !== null);
        // },
        submitMessage() {
            if (this.content1.trim() === '有什么想说的，就在这里留下吧~') {
                alert('还没有说点什么哇');
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
                        console.log('消息发布成功', response.status, this.content1);
                        ElNotification.success({
                            title: '发布成功！',
                            message: '继续逛逛吧~',
                            offset: 100,
                        });
                        // alert('竟然发布成功了？?');
                        this.content1 = '有什么想说的，就在这里留下吧~';
                    } else{
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
                            ElNotification.warning({
                                title: '出错了',
                                message: '请联系前端小白or后端大佬…',
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
                });
            window.location.reload();
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
                alert('还没有说点什么哇');
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
                        ElNotification.success({
                            title: '回复成功！',
                            message: '继续逛逛吧~',
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
                            ElNotification.warning({
                                title: '出错了',
                                message: '请联系前端小白or后端大佬…',
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
                });
            window.location.reload();

        },
        
    }

};
</script>


<style scoped>
.head {
    height: 36px;
}

.back {
    background-color: beige;
    width: 100%;
    height: 100vh;
    background-image: url('../assets/bg.jpg');
    background-size: 100% 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
}

.content {
    height: 95%;
    margin-top: 2%;
    display: flex;
    flex-direction: row;
}

.head {
    color: white;
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



    /* width: 351px; */
    /* height: 695px; */
    /* margin-left: 137px; */
    /* margin: 150px 90px 235px 137px; */
    /* margin-top: 40px; */
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
    font-size: 25px;
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
    /* bug 左右缩放时"发布"文字超出 */
    font-weight: bold;
    font-family: "Microsoft New Tai Lue-Bold", Helvetica;

}


.back_right {
    background-color: #d9d9d91a;
    width: 70%;
    height: 95%;
    margin-top: 2.3%;
    /* 右下部分单独 少一个背景虚化 */
    /* filter: blur(10px); */
    /* backdrop-filter: blur(100px); */
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

.right_board {
    /* background-color: #ffffff; */
    /* border: 1px, solid, greenyellow; */
    height: 88%;
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
    height: 40%;
    width: 80%;
    display: flex;
    flex-direction: row;
    cursor: pointer;
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

.author_content {
    /* border: 1px, solid, black; */
    height: 70%;
    margin-top: 2%;
    font-size: 2vh;
    font-weight: bold;
    font-family: 'Microsoft New Tai Lue';
    overflow: auto;
}

.author_content::-webkit-scrollbar {
    display: none;
    /* width: 0; */
    /* height: 0; */
}

/* .repay { */
/* border: 1px, solid, black; */
/* background-image: url('../assets/repay.png'); */
/* height: 3%;
    width: 3%;
    margin-top: 1%;
    margin-left: 87%; */
/* } */

.traveller_total {
    /* border: 1px, solid, greenyellow; */
    height: 49%;
    width: 66%;
    margin-left: 23%;
    margin-top: 2%;
    overflow: auto;

}

.traveller_total::-webkit-scrollbar {
    display: none;
    /* width: 0; */
    /* height: 0; */
}

.traveller_inner {
    /* border: 1px, solid, blue; */
    height: 55%;
    /* width: 66%; */
    margin-top: 3%;
    /* margin-left: 23%; */
    display: flex;
    flex-direction: row;
    overflow: auto;
    text-overflow: ellipsis;
}

/* .traveller_inner::-webkit-scrollbar {
    width: 0;
    height: 0;
} */

.traveller_head_fixed {
    /* border: 1px, solid, black; */
    /* border-image: url('../assets/traveller_head.png'); */
    width: 15%;
}

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

.traveller_name_fixed {
    /* border: 1px, solid, black; */
    font-family: 'Microsoft New Tai Lue';
    font-weight: 700;
}

.traveller_content {
    /* border: 1px, solid, black; */
    height: 80%;
    margin-top: 3%;
    font-size: 1.7vh;
    overflow: auto;
}

.traveller_content::-webkit-scrollbar {
    width: 0;
    height: 0;
}
</style>
