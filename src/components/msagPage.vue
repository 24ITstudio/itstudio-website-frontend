<template>
    <div class="back">
        <div class="back_up">
            <div class="head">
                <navHead></navHead>
            </div>
            <div class="content">
                <div class="back_left">
                    <div :class="['call', {slideinleft: shouldEnter}, {shake: shouldShake}]">
                        <textarea placeholder="请输入QQ号或邮箱发表留言" class="callText" v-model="call_liu" ref="input"
                            key="callKey"></textarea>
                    </div>
                    <transition name="slide-left">
                        <div v-if="currentContent === 'content1'" class="left_board slideinleft ">
                            <div class="board_head">
                                <div class="text_1">
                                    留言
                                </div>
                            </div>
                            <div class="board_content">
                                <textarea ref="input" placeholder="有什么想说的，就在这里留下吧" v-model="content1" rows="9"
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
                </div>

                <div class="mobile_Input" v-if="inputVisible" ref="mobile_Input">
                    <div class="mobile_subText">
                        <textarea v-model="content1" placeholder="" ref="inputField"></textarea>
                    </div>

                    <button class="mobile_subButton pulsate-bck" @click="submitMessage">发&nbsp;&nbsp;布</button>
                </div>
                <div class="back_right">
                    <div class="goBack">
                        <router-link to="/">
                            <img src="../assets/Go Back.webp" class="backImg" />
                        </router-link>
                    </div>
                    <div class="mobile_add">
                        <div class="mobile_title">留言板</div>
                        <button class="mobile_button pulsate-bck" @click="showInput">+ 点击留言</button>
                    </div>
                    <div :class="['mobile_call', { slideinleft: shouldEnter }, { shake: shouldShake }]">
                        <textarea placeholder="请输入QQ号或邮箱发表留言" class="callText" v-model="call_liu" ref="input"
                            key="callKey"></textarea>
                    </div>
                    <LoadingSpinner v-if="isLoading" />

                    <div class="right_board_0 slide-in-blurred-bottom" v-if="!isLoading" :key="submitKey">
                        <div @scroll="onScroll" ref="scrollContainer" class="right_board">
                            <div class="inner_board" v-for="item in total_Messages" :key="item.id">
                                <div class="author_inner ">
                                    <div class="author_info">
                                        <div class="author_avatar">
                                            <img :src="confirmImageUrl(item.qq)" />
                                        </div>
                                        <div class="author_info_right">
                                            <div class="author_call">{{ item.qq ? maskQQNumber(item.qq) :
                                                maskEmail(item.email) }}</div>
                                            <div class="author_time">{{ item.datetime }}</div>
                                        </div>
                                    </div>
                                    <div class="author_content">
                                        {{ item.content }}
                                    </div>
                                </div>

                                <div class="reply_new" v-if="isVisible">
                                    <div :class="['reply_call', {shake: shouldShake}]">
                                        <textarea placeholder="请输入QQ号或邮箱发布回复" v-model="call_reply" ref="input"
                                            maxlength="27" type="text" key="callKey" ></textarea>
                                        <!-- </input> -->

                                    </div>

                                    <div class="reply_content">
                                        <textarea placeholder="回复点什么吧~" v-model="replyContents[item.id]" maxlength="100"
                                            ref="input" :key="item.id">
                                        </textarea>
                                    </div>

                                    <div class="reply_button">
                                        <button @click="hideReply">退&nbsp;出</button>
                                        <button @click="submitTalk(item.id)">发&nbsp;布</button>
                                    </div>
                                </div>

                                <div class="repay_mobile" @click="showReply(); getParentID(item.id)">
                                    <div class="repay_1">
                                        <!-- <textarea placeholder="回复" v-model="replyContents[item.id]" maxlength="100"
                                            class="repayText" ref="input" :key="item.id"
                                            @click="getParentID(item.id)"></textarea> -->
                                        <div class="repayText">回复</div>
                                    </div>
                                    <div class=" repay_2">
                                        <img src="../assets/repay_logo.webp" />
                                    </div>
                                </div>
                                <div class="repay_pc" @click="showReply(); getParentID(item.id)">
                                    <div class="repay_1">
                                        <!-- <textarea placeholder="回复" v-model="replyContents[item.id]" maxlength="100"
                                            class="repayText" ref="input" :key="item.id"
                                            @click="getParentID(item.id)"></textarea> -->
                                        <div class="repayText">回复</div>
                                    </div>
                                    <div class=" repay_2">
                                        <img src="../assets/repay_logo.webp" />
                                    </div>
                                </div>
                                <div class="traveller_total">
                                    <div class="traveller_inner" v-for="child in item.children" :key="child">
                                        <div class="traveller_info">
                                            <div class="traveller_avatar"><img :src="confirmImageUrl(child.qq)" /></div>
                                            <div class="traveller_info_right">
                                                <div class="traveller_call">{{ child.qq ? maskQQNumber(child.qq) :
                                                    maskEmail(child.email) }}
                                                </div>
                                                <div class="traveller_time">{{ formateTime(child.datetime) }}</div>
                                            </div>
                                        </div>
                                        <div class="traveller_content">{{ child.content }}</div>
                                    </div>
                                </div>

                            </div>
                            <p class="loaded_2" v-if="allDataLoaded">全部留言加载完毕</p>
                        </div>

                        <!-- <p v-if="!allDataLoaded">加载中...</p> -->
                        <p class="loaded_1" v-if="allDataLoaded">全部留言加载完毕</p>
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
// import { ref } from "vue";
// import axios from 'axios';

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
            submitKey: 0,
            inputVisible: false,
            replyContents: {},
            call_liu: '',
            call_reply: '',
            qq: '',
            email: '',
            callKey: 0,
            allDataLoaded: false,
            // loadNum: 20,
            startNum: 0,
            lastScrollTop: 0,
            shouldShake: false,
            isVisible: false,
        }
    },
    created() {
        this.getMessages();
    },
    mounted() {
        this.lastScrollTop = 0; // 初始化 lastScrollTop
        this.$nextTick(() => {
            this.shouldEnter = true;
        });
        setTimeout(() => {
            this.shouldEnter = false;
        }, 500);
    },
    methods: {
        showReply(){
            this.isVisible = true;
        },
        hideReply(){
            this.isVisible = false;
            this.replyContents = {};
        },
        showInput() {
            this.inputVisible = !this.inputVisible;
            if (this.inputVisible) {
                this.$nextTick(() => {
                    this.$refs.inputField.focus();
                })
            }
        },
        hideInput() {
            this.inputVisible = false;
        },
        formateTime(time) {
            if (!time) return '';
            let date = new Date(time);
            return date.toLocaleString('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
        },
        confirmImageUrl(nowQQ) {
            // console.log("nowQQ:",nowQQ);
            if (nowQQ == null) {
                return require('@/assets/reply_avatar.webp');
            }
            else {
                return `https://q1.qlogo.cn/g?b=qq&nk=${nowQQ}&s=100`;
            }

        },
        maskQQNumber(qq) {
            const qqq = String(qq);
            if (qqq.length < 5) {
                // 如果 QQ 号太短，则不进行任何处理
                return qqq;
            }
            const visibleStart = qqq.slice(0, 3); // 显示前3位
            const visibleEnd = qqq.slice(-3);     // 显示后3位
            const maskedPart = '*'.repeat(qqq.length - 6); // 中间用*号替代
            return `${visibleStart}${maskedPart}${visibleEnd}`;
        },
        maskEmail(email) {
            const atIndex = email.indexOf('@');
            if (atIndex === -1) {
                throw new Error('Invalid email address');
            }
            const localPart = email.substring(0, atIndex);
            const domainPart = email.substring(atIndex);
            let le = localPart.length;
            let sideLen = 1;
            if (le >= 9) sideLen = 3;
            else if (le >= 6) sideLen = 2;
            return localPart.substr(0, sideLen) + '*'.repeat(le - sideLen * 2) + localPart.substr(-sideLen) + domainPart;
            // if (localPart.length <= 2) {
            //     return email;
            // }

            // const firstChar = localPart.charAt(0);
            // const lastChar = localPart.charAt(localPart.length - 1);
            // const obscuredMiddle = '*'.repeat(localPart.length - 2);
            // return `${firstChar}${obscuredMiddle}${lastChar}${domainPart}`;
            // const atIndex = email.indexOf('@');
            // if (atIndex > 0) {
            //     const maskedPart = '*'.repeat(atIndex);
            //     return `${maskedPart}${email.slice(atIndex-1)}`;
            // }
            // return email; // 如果没有找到 @ 则返回原始邮箱
        },
        getMessages() {
            var axios = require('axios');
            var config = {
                method: 'get',
                url: '/api/bbs/',
                // url: 'http://10.140.33.49:10001/bbs/',
                params: {
                    start: this.startNum,
                    limit: 10,
                }
            };

            axios(config)
                .then(response => {
                    // console.log(response.data);
                    if (response.data.length > 0) {
                        // this.total_Messages = response.data;
                        this.total_Messages.push(...response.data);
                        this.total_Messages.forEach(message => {
                            message.datetime = new Date(message.datetime).toLocaleString();
                        })
                        this.startNum += 10;
                        console.log('获取信息成功', this.total_Messages);
                    } else {
                        // setTimeout(() =>{
                        //     this.allDataLoaded = true;
                        // }, 6000);
                        this.allDataLoaded = true;
                    }
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
        onScroll() {
            const container = this.$refs.scrollContainer;
            const currentScrollTop = container.scrollTop;
            // if (typeof this.lastScrollTop === 'undefined') {
            //     this.lastScrollTop = 0;
            // }
            // console.log('scrollTop:', container.scrollTop);
            // console.log('clientHeight:', container.clientHeight);
            // console.log('scrollHeight:', container.scrollHeight);
            // if(container.scrollTop + container.clientHeight >= container.scrollHeight -1){
            //     if(!this.allDataLoaded){
            //         this.getMessages();
            //     }
            //     console.log("已到底端")
            // }
            if (currentScrollTop > this.lastScrollTop) {
                // 向下滚动
                if (container.scrollTop + container.clientHeight >= container.scrollHeight - 3) {
                    if (!this.allDataLoaded) {
                        this.getMessages();
                    }
                    console.log("已到底端")
                }
            } else {
                // 向上滚动
                if (this.allDataLoaded) {
                    this.allDataLoaded = false; // 隐藏“加载完毕”提示
                }
            }
            this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        },
        validateInput(input) {
            const qqPattern = /^[1-9][0-9]{4,10}$/;
            const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            if (qqPattern.test(input)) {
                this.qq = input;
            }
            else if (emailPattern.test(input)) {
                this.email = input;
            }
            return;
        },
        submitMessage() {
            if (this.content1.trim() === '') {
                ElNotification({
                    title: '嗯？',
                    message: '还没有说点什么哇',
                    type: 'warning',
                    duration: 1000,
                    offset: 100,
                });
                return;
            }

            if (this.call_liu.trim() === '') {
                ElNotification({
                    title: '嗯？',
                    message: '还没有留下qq或email哇',
                    type: 'warning',
                    duration: 2000,
                    offset: 100,
                });
                this.shouldShake = true;
                setTimeout(() => {
                    this.shouldShake = false;
                }, 500);
                return;
            }
            this.validateInput(this.call_liu);
            if (!(this.qq || this.email)) {
                ElNotification({
                    title: '嘶…',
                    message: '联系方式好像不是qq或email哇',
                    type: 'warning',
                    duration: 2000,
                    offset: 100,
                });
                return;
            }

            var axios = require('axios');
            var data = JSON.stringify({
                "content": this.content1,
                "parent": null,
                "qq": this.qq,
                "email": String(this.email),
            });

            var config = {
                method: 'post',
                //  url: 'https://www.itstudio.club/bbs/',
                // url: 'http://10.140.33.49:10001/bbs/',
                // 注：测试的时候交it失败，临时换一下用于测试

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
                            duration: 1000,
                            offset: 100,
                        });
                        console.log('发布qq为', this.qq);
                        console.log('发布email为', this.email);
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
                                message: '如果可以的话，反馈一下下',
                                type: 'warning',
                                duration: 1000,
                                offset: 100,
                            });
                        } else if (error.response.status === 400) {
                            ElNotification({
                                title: '出错了',
                                message: '没有给出联系方式',
                                type: 'warning',
                                duration: 1000,
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
                    this.startNum = 0;
                    this.total_Messages = [];
                    // this.submitKey++;
                    this.getMessages();
                    this.content1 = '';
                    // this.call_liu = '';
                    this.callKey++;
                    this.qq = null;
                    this.email = null;
                    this.inputVisible = false;
                    this.hideReply();
                });
        },
        getParentID(id) {
            this.parentID = id;
            this.parentID = parseInt(this.parentID, 10);
            // console.log("ID: ", this.parentID);
        },
        submitTalk(id) {
            // const content = this.replyContents[id];
            // console.log(typeof this.replyContents[id] === 'string' ? 1 : 0);
            this.replyContents[id] = typeof this.replyContents[id] === 'string' ? this.replyContents[id] : String(this.replyContents[id]);
            console.log("content", this.replyContents[id]);
            if (this.replyContents[id] === 'undefined') {
                this.replyContents[id] = '';
            }
            if (typeof this.replyContents[id] !== 'string') {
                ElNotification({
                    title: '嗯？',
                    message: '字符串类型出问题了2333',
                    type: 'warning',
                    duration: 2000,
                    offset: 100,
                });
                return;
            }
            if (this.replyContents[id].trim() === '') {
                ElNotification({
                    title: '嗯？',
                    message: '还没有说点什么哇',
                    type: 'warning',
                    duration: 2000,
                    offset: 100,
                });
                return;

            }
            if (this.call_reply.trim() === '') {
                ElNotification({
                    title: '嗯？',
                    message: '还没有留下qq或email哇',
                    type: 'warning',
                    duration: 2000,
                    offset: 100,
                });
                return;
            }
            this.validateInput(this.call_reply);
            if (!(this.qq || this.email)) {
                ElNotification({
                    title: '嘶…',
                    message: '联系方式好像不是qq或email哇',
                    type: 'warning',
                    duration: 2000,
                    offset: 100,
                });
                return;
            }

            var axios = require('axios');
            var data = JSON.stringify({
                "content": this.replyContents[id],
                "parent": parseInt(this.parentID, 10),
                "qq": this.qq,
                "email": this.email,
            });

            var config = {
                method: 'post',
                // url: 'http://10.140.33.49:10001/bbs/',
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
                            duration: 1000,
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
                                duration: 1000,
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
                    this.startNum = 0;
                    this.total_Messages = [];
                    // this.submitKey++;
                    this.getMessages();
                    this.content2 = '';
                    this.content1 = '';
                    // this.call_reply = '';
                    // console.log("要删除的内容", this.replyContents[this.parentID]);
                    // this.replyContents[this.parentID] = '';
                    this.replyContents = {},
                    // console.log("id为这个的内容清除了、清除后", this.parentID, this.replyContents[this.parentID]);
                    this.parentID = '';
                    this.qq = null;
                    this.email = null;
                    this.inputVisible = false;
                    this.hideReply();
                    // this.allDataLoaded = false;
                });
        },
        handleOutsideClick(event) {
            // 检查点击是否发生在悬浮框外部
            const mobile_Input = this.$refs.mobile_Input;
            if (mobile_Input && !mobile_Input.contains(event.target)) {
                this.hideInput();
            }
        },
    },
    // mounted() {
    //     this.$refs.scrollContainer.addEventListener('scroll', this.onScroll);
    // },
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
        height: 100%;
        margin-top: 2%;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        z-index: 1;
    }

    .back_left {
        display: none;
    }

    .left_board {
        display: none;
    }

    .submitC {
        display: none;
    }

    .back_right {
        /* border: 1px, solid, #1fc1d6; */
        width: 100%;
        height: 88%;
    }

    .goBack {
        display: none;
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

    .mobile_add {
        /* border: 1px, solid, rgb(161, 47, 255); */
        height: 10%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .mobile_title {
        color: white;
        font-size: 5vw;
        font-weight: 700;
        font-family: Microsoft New Tai Lue;
        margin-left: 42%;
    }

    .mobile_button {
        height: 50%;
        margin-left: 12%;
        background-color: #FFFFFF33;
        color: white;
        border: none;
        font-size: 3.5vw;
        font-weight: bold;
        border-radius: 10px;
    }

    .mobile_button:active {
        animation: pulsate-bck 10s ease;
    }

    .mobile_Input {
        position: absolute;
        background-color: #ffffff;
        width: 100%;
        height: 6%;
        bottom: 0;
        z-index: 1000;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .mobile_subText {
        width: 70%;
        height: 70%;
        /* height: calc(1.5em * 9);   */

        /* resize: none;*/
        padding: 0;
        /* margin: 0; */
        margin-left: 4%;
        /* margin-top: 1.3%; */
        background: #6A92D966;
        /* margin-top: -1.3%; */
        margin-bottom: 2%;

        border-radius: 7px;
    }

    .mobile_subText textarea {
        line-height: 1.5em;
        border: none;
        outline: none;
        background-color: transparent;
        height: 100%;
        width: 100%;
        font-family: inherit;
        font-size: 4.9vw;
        color: black;
        overflow: hidden;
        box-sizing: border-box;
        margin-left: 2%;
        margin-top: 1%;
        resize: none;
    }

    .mobile_subButton {
        background-color: #04132c;
        color: #ffffff;
        width: 17%;
        height: 60%;
        margin-left: 3%;
        margin-bottom: 2%;
        border-radius: 7px;
    }

        

    .mobile_call {
        border: 1px, solid, #ffffff;
        background-color: #6A92D966;
        ;
        /* margin-top: 23%; */
        margin-left: 11%;
        height: 5%;
        width: 77%;
        border-radius: 10px;
    }

    .mobile_call textarea {
        width: 100%;
        height: 100%;
        /* height: calc(1.5em * 9);   */
        line-height: 1.6em;
        border: none;
        outline: none;
        resize: none;
        background: none;
        padding: 0;
        /* margin: 0; */
        margin-left: 14%;
        margin-top: 1.4%;
        /* margin-top: -1.3%; */
        font-family: inherit;
        font-size: 4.3vw;
        color: #ffffff;
        overflow: hidden;
        box-sizing: border-box;
    }

    .right_board_0 {
        height: 74%;
        width: 100%;
        margin-top: 8%;
        /* margin-bottom: 2%; */
    }

    .right_board {
        /* border: 1px, solid, greenyellow; */
        /* height: 88%;
        width: 100%;
        margin-top: 8%;
        margin-bottom: 2%; */
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        justify-content: center;
    }

    .right_board::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .loaded_2 {
        /* border: 1px, solid, greesnyellow; */
        position: fixed;
        /* margin-bottom: 2%; */
        bottom: -8%;
        color: #ffffff;
        /* margin-bottom: 2%; */

    }

    .loaded_1 {
        display: none;
    }

    .inner_board {
        /* border: 1px, solid, rgb(108, 166, 26); */
        background-color: #ffffff;
        width: 80%;
        height: auto;
        border-radius: 30px;
        margin-top: 5%;
    }

    .inner_board:first-child {
        margin-top: 0;
    }

    .author_inner {
        /* border: 1px, solid, rgb(40, 50, 26); */
        margin-top: 3%;
        margin-left: 9%;
        width: 83%;
        display: flex;
        flex-direction: column;
    }


    .author_info {
        /* border: 1px, solid, rgb(119, 184, 27); */
        display: flex;
        flex-direction: row;
    }

    .author_avatar {
        /* border: 1px, solid, rgb(40, 50, 26); */
        height: 20%;
        width: 15%;

    }

    .author_avatar img {
        width: 100%;
        height: 100%;
    }

    /* .author_right {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-left: 3%;
    } */

    /* .author_name {
        margin-top: 1px;
        font-weight: 700;
        font-family: 'Microsoft New Tai Lue';
    } */

    /* .author_info{ */
    /* border: 1px, solid, rgb(40, 50, 26); */
    /* } */

    .author_info_right {
        margin-left: 4%;
    }

    .author_call {
        font-size: 4vw;
    }

    .author_time {
        font-size: 1.5vh;
        color: #8d8989;
    }

    .author_content {
        /* border: 1px, solid, black; */
        margin-top: 2%;
        font-size: 3.7vw;
        font-family: 'Microsoft New Tai Lue';
        font-weight: bold;
        overflow: auto;
        width: 100%;
    }

    .author_content::-webkit-scrollbar {
        display: none;
    }

    .reply_new{
        position: fixed;
            top: 0;
            left: 0;
            width: 87%;
            height: 50%;
            margin-left: 5%;
            margin-top: 23%;
            /* padding: 30px; */
            /* background-color: rgba(103, 110, 123, 0.09); */
            background-color: #e7e2e2c2;
            /* background-color: #ffffff; */
            /* color: #6A92D966; */
            text-align: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            /* z-index: 1000; */
            border-radius: 20px;
            
    }

                .reply_call {
                    border: 2px, solid, rgb(160, 155, 155);
                    /* border: 1px, solid, black; */
                    width: 90%;
                    height: 13%;
                    /* height: 8vw; */
                    margin-top: 7%;
                    margin-left: 5%;
                    border-radius: 20px;
                }
        
                .reply_call textarea {
                    line-height: 8vw;
                    border: none;
                    outline: none;
                    background-color: transparent;
                    height: 100%;
                    width: 94%;
                    font-family: inherit;
                    font-size: 4vw;
                    color: black;
                    overflow: hidden;
                    /* box-sizing: border-box; */
                    resize: none;
                    margin-left: 3%;
                    /* margin-right: 3%; */
                }
        
                .reply_content {
                    border: 2px,solid,  rgb(160, 155, 155);
                    /* border: 1px, solid, black; */
                    /* height: 8vw; */
                    height: 40%;
                    width: 90%;
                    margin-top: 7%;
                    margin-left: 5%;
                    border-radius: 10px;
                }
        
                .reply_content textarea {
                    line-height: 1.2em;
                    /* line-height: 8vw; */
                    /* line-height: normal; */
                    border: none;
                    outline: none;
                    background-color: transparent;
                    height: 96%;
                    width: 94%;
                    font-family: inherit;
                    font-size: 4vw;
                    color: black;
                    overflow: hidden;
                    box-sizing: border-box;
                    resize: none;
                    margin-left: 1%;
                    /* margin-right: 3%; */
                    margin-top: 1%;
                    /* margin-bottom: 3%; */
                }

                /* .reply_content textarea::placeholder {
                    color: #aaa;
                    opacity: 1;
                    
                } */
        
                .reply_button {
                    height: 15%;
        
                    margin-left: -5%;
                }
        
                .reply_button button {
                    background-color: #04132c;
                    color: #ffffff;
                    width: 18%;
                    height: 100%;
                    /* margin-bottom: 2%; */
                    margin-top: 5%;
                    border-radius: 9px;
                    cursor: pointer;
                    margin-left: 5%;
                    font-size: 4vw;
                }
        
                .reply_button button:active {
                    animation: pulsate-bck 1s ease;
                }

    .repay_pc{
        display: none;
    }

    .repay_mobile {
        /* border: 1px, solid, black; */
        background-color: #d4cece;
        margin-left: 9%;
        margin-right: 5%;
        margin-top: 2%;
        border-radius: 8px;
        height: 8vw;
        width: 82%;
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
    }

    .repay_mobile:active {
        animation: pulsate-bck 1s ease;
    }

    .repay_1 {
        /* border: 1px, solid, rgb(181, 164, 164); */
        margin-left: 3%;
        font-size: 3vw;
        width: 85%;
        height: 70%;
    }

    .repayText {
        width: 100%;
        height: 100%;
        /* height: calc(1.5em * 9);   */
        line-height: 1.6em;
        border: none;
        outline: none;
        resize: none;
        background: none;
        padding: 0;
        /* margin: 0; */
        margin-top: -1.3%;
        font-family: inherit;
        font-size: 1.9vh;
        overflow: hidden;
        box-sizing: border-box;
            font-weight: bold;
        color: #9d9ea0ef;

    }

    .repay_2 {
        margin-left: 2%;
        margin-right: 5%;
        /* margin-top: 2%; */
        width: 8%;
        height: 60%;
    }

    .repay_2 img {
        width: 100%;
        height: 100%;
    }

    .traveller_total {
        /* border: 1px, solid, greenyellow; */
        max-height: 20vh;
        /* width: 70%; */
        margin-left: 9%;
        margin-right: 7%;
        margin-top: 4%;
        margin-bottom: 2%;
        overflow: auto;
    }

    /* .traveller_total::-webkit-scrollbar {
        
    } */

    .traveller_inner {
        /* border: 1px, solid, blue; */
        /* width: 85%; */
        margin-top: 4%;
        /* margin-left: 12%; */
        display: flex;
        flex-direction: column;
        overflow: auto;
        text-overflow: ellipsis;
    }

    .traveller_info {
        /* border: 1px, solid, blue; */
        /* height: ; */
        display: flex;
        flex-direction: row;
        height: 4.5vh;
    }

    .traveller_avatar {
        width: 14%;
        height: 100%;
    }

    .traveller_avatar img {
        width: 100%;
        height: 100%;
    }

    .traveller_info_right {
        /* border: 1px, solid, blue; */
        display: flex;
        flex-direction: column;
        width: 80%;
        margin-left: 3%;

    }

    /* .traveller_head_fixed img {
        width: 100%;
    } */

    /* .traveller_right {
        display: flex;
        flex-direction: column;
        width: 82%;
        margin-left: 4%;
    } */


    /* .traveller_name_fixed_1 {
        font-family: 'Microsoft New Tai Lue';
        font-weight: 700;
    } */

    /* .traveller_name_fixed {
        display: flex;
        flex-direction: row;
    } */

    .traveller_call {
        font-size: 3.4vw;
    }

    .traveller_time {
        font-size: 1.5vh;
        color: #8d8989;
        /* margin-top: 3%; */
        /* margin-left: 2%; */
    }

    .traveller_content {
        /* border: 1px, solid, black; */
        height: 80%;
        margin-top: 3%;
        margin-left: 2%;
        font-size: 1.7vh;
        overflow-y: auto;
        overflow-x: hidden;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }


    /* 动画部分 */
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

    .slideinleft {
        -webkit-animation: slideinleft 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slideinleft 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @-webkit-keyframes slideinleft {
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

    @keyframes slideinleft {
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
        animation: slideinleft 1.5s ease;
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

        @keyframes shake {
    
            0%,
            100% {
                transform: translateX(0);
            }
    
            20%,
            60% {
                transform: translateX(-10px);
            }
    
            40%,
            80% {
                transform: translateX(10px);
            }
        }
        .shake {
            animation: shake 0.5s;
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

    .call {
        border: 1px, solid, #ffffff;
        margin-top: 23%;
        margin-left: 25%;
        height: 5%;
        width: 60%;
        border-radius: 10px;
    }

    .call textarea {
        width: 100%;
        height: 100%;
        /* height: calc(1.5em * 9);   */
        line-height: 1.6em;
        border: none;
        outline: none;
        resize: none;
        background: none;
        padding: 0;
        /* margin: 0; */
        margin-left: 7%;
        margin-top: 1.3%;
        /* margin-top: -1.3%; */
        font-family: inherit;
        font-size: 1.2vw;
        color: #ffffff;
        overflow: hidden;
        box-sizing: border-box;
    }

        

    .mobile_Input {
        display: none;
    }

    .left_board {
        background-color: #d9d9d9;
        width: 60%;
        height: 75%;
        margin-left: 25%;
        margin-top: 7%;
        position: relative;
    }

    .board_head {
        height: 70px;
        line-height: 100px;
        margin-left: 10%;
        /* border: 1px, solid, #04132c; */
    }

    .text_1 {
        font-size: 4vh;
        font-family: "Microsoft New Tai Lue-Bold", Helvetica;
        font-weight: bold;
    }

    .board_content {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10%;
        margin-right: 10%;
        height: 73%;
        margin-top: 6%;
        /* border: 1px, solid, #04132c; */
    }

    .placeholder {
        color: #999;
    }

    .board_content textarea {
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

    .mobile_add {
        display: none;
    }

    .mobile_call {
        display: none;
    }

    .right_board_0 {
        height: 87%;
        width: 85%;
        margin-left: 10%;
        margin-top: 1%;
    }

    .right_board {
        /* border: 1px, solid, greenyellow; */
        /* height: 87%; */
        /* width: 85%; */
        height: 100%;
        width: 100%;
        /* margin-left: 10%;
        margin-top: 1%; */
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
    }

    .right_board::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .loaded_1 {
        /* border: 1px, solid, greenyellow; */
        position: fixed;
        /* margin-bottom: 2%; */
        bottom: -7%;
        /* bottom: 0; */
        color: #ffffff;
        margin-left: 40%;
        /* margin-top: -0%; */

    }

    .loaded_2 {
        display: none;
    }

    .inner_board {
        background-color: #ffffff;
        width: 43%;
        height: 60%;
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
        height: 33%;
        width: 89%;
        display: flex;
        flex-direction: column;
    }

    .author_info {
        display: flex;
        flex-direction: row;
    }

    .author_avatar {
        width: 15%;
        height: 85%;
    }

    .author_avatar img {
        width: 100%;
        height: 100%;
    }

    .author_info_right {
        margin-left: 2%;
    }

    .author_call {
        font-size: 1.1vw;
        font-weight: bold;
    }

    .author_time {
        margin-top: 5%;
        font-size: 1.5vh;
        color: #8d8989;
    }

    .author_content {
        /* border: 1px, solid, black; */
        height: 70%;
        margin-top: 2%;
        font-size: 1.8vh;
        font-family: 'Microsoft New Tai Lue';
        font-weight: bold;
        overflow: auto;
        margin-right: 2%;
        width: 90%;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    .reply_new{
        position: fixed;
            top: 0;
            left: 0;
            width: 50%;
            height: 50%;
            margin-left:23% ;
            margin-top: 20%;
            background-color: #f4f1f1ef;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            border-radius: 10px;
            resize: none;
    }

    .reply_call{
        border: 2px, solid, rgb(160, 155, 155);
        width: 80%;
        height: 13%;
            margin-top: 8%;
            margin-left: 10%;
            border-radius: 20px;
    }

    .reply_call textarea{
        line-height: 1.9em;
            border: none;
            outline: none;
            background-color: transparent;
            height: 100%;
            width: 100%;
            font-family: inherit;
            font-size: 1.2vw;
            color: black;
            overflow: hidden;
            box-sizing: border-box;
            resize: none;
            margin-left: 2%;
    }

    .reply_content{
        border: 2px, solid, rgb(160, 155, 155);
        /* border: 1px, solid, black; */
        height: 40%;
            width: 80%;
            margin-top: 5%;
            margin-left: 10%;
            border-radius: 20px;
    }

    .reply_content textarea{
        /* line-height: 1.9em;*/
            line-height: 20px;
            border: none;
            outline: none;
            /* align-items: center; */
            background-color: transparent;
            height: 98%;
            /* height: auto; */
            width: 97%;
            font-family: inherit;
            font-size: 1.2vw;
            color: black;
            /* overflow: auto; */
            /* overflow: hidden; */
            box-sizing: border-box;
            resize: none;
            margin-left: 3%;
            /* margin-top: 2%; */
    }

    .reply_content textarea::-webkit-scrollbar {
        width: 0;
        height: 0;
    }



    .reply_button{
        height: 13%;
        margin-left: -3%;
    }

    .reply_button button{
        background-color: #04132c;
            color: #ffffff;
            width: 15%;
            height: 100%;
            /* margin-bottom: 2%; */
            margin-top: 3%;
            border-radius: 9px;
            cursor: pointer;
            margin-left: 7%;
            border: none;
            
    }

        .reply_button button:active{
            animation: pulsate-bck 1s ease;
        }
    
    .repay_mobile{
        display: none;
    }

    .repay_pc {
        /* border: 1px, solid, black; */
        background-color: #d4cece;
        margin-left: 8%;
        margin-right: 5%;

        border-radius: 8px;
        height: 10%;
        width: 85%;
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
    }

    .repay_pc:active {
        animation: pulsate-bck 1s ease;
    }

    .repay_1 {
        /* border: 1px, solid, rgb(181, 164, 164); */
        margin-left: 3%;
        font-size: 1vw;
        width: 85%;
        height: 70%;
    }

    .repayText {
        width: 100%;
        height: 100%;
        /* height: calc(1.5em * 9);   */
        line-height: 1.6em;
        border: none;
        outline: none;
        resize: none;
        background: none;
        padding: 0;
        /* margin: 0; */
        /* margin-top: -1.3%; */
        font-family: inherit;
        font-size: 1.9vh;
        overflow: hidden;
        box-sizing: border-box;
        color: #9d9ea0ef;
        font-weight: bold;
        /* background: linear-gradient(to right, #d9d9d9 2px, transparent 0) 0 -4px/8px 100%, */
        /* linear-gradient(#666 1px, transparent 0) 0 -1px/100% 2.9em; */
    }

    .repay_2 {
        margin-left: 2%;
        /* margin-top: 2%; */
        width: 6%;
        height: 60%;
    }

    .repay_2 img {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .traveller_total {
        /* border: 1px, solid, greenyellow; */
        height: 49%;
        width: 72%;
        margin-top: 2%;
        margin-left: 23%;
        overflow: auto;

    }

    .traveller_total::-webkit-scrollbar {
        width: 0;
        height: 0;
    }


    .traveller_inner {
        /* border: 1px, solid, blue; */
        width: 80%;
        margin-top: 3%;
        /* margin-left: 17%; */
        display: flex;
        flex-direction: column;
    }

    .traveller_info {
        display: flex;
        flex-direction: row;
    }

    .traveller_avatar {
        width: 15%;
        height: 80%;
    }

    .traveller_avatar img {
        width: 100%;
        height: 100%;
    }

    .traveller_info_right {
        margin-left: 3%;
    }

    .traveller_call {
        font-size: 1vw;
        font-weight: bold;
    }

    .traveller_time {
        font-size: 1.5vh;
        color: #8d8989;
        margin-top: 2.6%;
        margin-left: 2%;
        width: 100%;
    }

    .traveller_content {
        /* border: 1px, solid, black; */
        height: auto;
        margin-top: 2%;
        font-size: 1.7vh;
        overflow-y: auto;
        overflow-x: hidden;
        word-wrap: break-word;
        overflow-wrap: break-word;
        font-weight: bold;
    }

    /* 动画部分 */
    .slideinleft {
        -webkit-animation: slideinleft 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slideinleft 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @-webkit-keyframes slideinleft {
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

    @keyframes slideinleft {
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
        animation: slideinleft 1.5s ease;
    }

    .slide-left-leave-active {
        animation: slide-out-left 0.6s ease;
    }

    /* .slide-left-1-enter-active {
            animation: slideinleft 1.5s ease;
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

        @keyframes shake {
    
            0%,
            100% {
                transform: translateX(0);
            }
    
            20%,
            60% {
                transform: translateX(-10px);
            }
    
            40%,
            80% {
                transform: translateX(10px);
            }
        }

                .shake {
                    animation: shake 0.5s;
                }
    
        
}
</style>
