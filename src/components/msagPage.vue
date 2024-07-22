<template>
    <!-- remain: 留言块静态位置待改(head&name删除/添加日期) -->
    <!-- Q: traveller部分滚动条设置失败/点击但不输入内容后，二次调用clear函数会失效-->
    <!-- need: 点击不同留言后将之前的回复清除并带对应留言id提交 -->
    <div class="back">
        <div class="head">
            <navHead :locate="-200"></navHead>
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
                        <textarea ref="input" :placeholder="isPlaceholder2 ? '有什么想说的，就在这里留下吧~' : ''" v-model="content2"
                            @focus="clearPlaceholder2" @blur="setPlaceholder2" @input="checkInput" rows="5">
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
                    <div class="inner_board">
                        <div @click="showContent('content2'); clearPlaceholder1" class="author_inner">
                            <div class="author_head_fixed">
                                <img src="../assets/author_head.png" />
                            </div>
                            <div class="author_right">
                                <div class="author_name">
                                    游1234567
                                </div>
                                <div class="author_content">
                                    测试讨论内容留言板欢迎加入爱特工作室
                                    测试讨论内容留言板欢迎加入爱特工作室
                                    测试讨论内容留言板欢迎加入爱特工作室
                                    测试讨论内容留言板欢迎加入爱特工作室
                                    测试讨论内容留言板欢迎加入爱特工作室
                                    <!-- （可放90个中文字符） -->
                                </div>
                            </div>

                            <!-- <div class="repay">

                            </div> -->
                        </div>
                        <div class="traveller_total">
                            <div class="traveller_inner">
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
                            </div>
                            <div class="traveller_inner">
                                <div class="traveller_head_fixed">
                                    <img src="../assets/traveller_head.png" />
                                </div>
                                <div class="traveller_right">
                                    <div class="traveller_name_fixed">
                                        游客
                                    </div>
                                    <div class="traveller_content">
                                        测试滚动内容 留言板 欢迎加入爱特工作室
                                        测试滚动内容 留言板 欢迎加入爱特工作室
                                        测试滚动内容 留言板 欢迎加入爱特工作室
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="inner_board">

                    </div>
                    <div class="inner_board">

                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import navHead from "./nav-head.vue"
export default {
    name: "msagPage",
    components: {
        navHead,
    },
    data() {
        return {
            content1: '有什么想说的，就在这里留下吧~',
            content2: '有什么想说的，就在这里留下吧~',
            isPlaceholder1: true,
            isPlaceholder2: true,
            currentContent: 'content1'
        }
    },
    methods: {
        clearPlaceholder1() {
            if (this.isPlaceholder1) {
                this.content1 = '';
                this.isPlaceholder1 = false;
                // alert(this.isPlaceholder1,this.content1);
            }
            console.log("clear")
        },
        clearPlaceholder2() {
            if (this.isPlaceholder2) {
                this.content2 = '';
                this.isPlaceholder2 = false;
                
            }
            console.log("clear")
        },
        setPlaceholder1() {
            if (this.content1 === '') {
                this.content1 = '有什么想说的，就在这里留下吧~';
                this.isplaceholder1 = true;
            }
            console.log("set")
        },
        setPlaceholder2() {
            if (this.content2 === '') {
                this.content2 = '有什么想说的，就在这里留下吧~';
                this.isplaceholder2 = true;
            }
            console.log("set")
        },
        cancelAndSwitch() {
            this.content2 = '有什么想说的，就在这里留下吧~';
            this.isplaceholder2 = true;
            this.showContent('content1'); // 切换到 content1 页面
        },
        checkInput() {
            this.isPlaceholder1 = this.content1 === '';
            this.isPlaceholder2 = this.content2 === '';
        },
        submitMessage() {
            alert('发布成功');

        },
        showContent(content){
            this.currentContent = content;
        }
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

.board_content_1{
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

.board_content_1 textarea{
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

.submitButton{
    /* border: 1px solid rebeccapurple; */
    display: flex;
    flex-direction: row;
    margin-top: 4%;
}

.submitA{
    width: 28%;
    height: 5%;
    line-height: 3%;
    border-radius: 100px;
    margin-left: 30%;
    margin-top: 2%;
    background-color: #04132c;
}

.submitB {
    /* border: 1px solid black; */
    width: 28%;
    height: 5%;
    line-height: 3%;
    border-radius: 100px;
    margin-left: 5%;
    margin-top: 2%;
    background-color: #04132c;
}

.submitA .inner{
    background-color: transparent;
        color: #ffffff;
        height: 100%;
        border: none;
        margin-left: 18%;
        font-size: 12px;
        font-weight: bold;
        font-family: "Microsoft New Tai Lue-Bold", Helvetica;
}

.submitB .inner {
    background-color: transparent;
    color: #ffffff;
    height: 100%;
    border: none;
    margin-left: 18%;
    font-size: 12px;
    font-weight: bold;
    font-family: "Microsoft New Tai Lue-Bold", Helvetica;

}

.submitC{
    width: 28%;
        height: 5%;
        line-height: 3%;
        border-radius: 100px;
        margin-left: 62%;
        margin-top: 2%;
        background-color: #04132c;
}

.submitC .inner {
    background-color: transparent;
    color: #ffffff;
    height: 100%;
    border: none;
    margin-left: 18%;
    font-size: 12px;
    font-weight: bold;
    font-family: "Microsoft New Tai Lue-Bold", Helvetica;

}

/* textarea { */
/* background-image: linear-gradient(to bottom, transparent 1.5em, #ccc 1.5em); */
/* background-size: 100% 1.5em; */
/* background-repeat: repeat-y; */
/* } */

/* .dotted-textarea {
    width: 100%;
    height: 350px;
    padding: 10px;
    border: none;
    resize: none;
    font-size: 16px;
    line-height: 1.5;
    background: repeating-linear-gradient(to bottom,
            transparent,
            transparent 28px,
            #000 28px,
            #000 29px);
} */


.back_right {
    background-color: #d9d9d91a;
    width: 70%;
    height: 100%;
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

.inner_board{
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

.inner_board:nth-child(2){
    margin-top: 0;
}

.author_inner{
    /* border: 1px, solid, rgb(40, 50, 26); */
    margin-top: 3%;
    margin-left: 9%;
    height: 40%;
    width: 80%;
    display: flex;
    flex-direction: row;
    cursor: pointer;
}

.author_head_fixed{
    /* border: 1px, solid, black; */
    /* border-image: url('../assets/author_head.png'); */
    /* height: 20%; */
    width: 17%;
}

.author_head_fixed img{
    /* height: 100%; */
    width: 100%;

}

.author_right{
    display: flex;
    flex-direction: column;
    width: 79%;
    margin-left: 3%;
    /* 加和为82% */
}

.author_name{
    /* border: 1px, solid, black; */
    margin-top: 1px;
    font-weight: 700;
    font-family: 'Microsoft New Tai Lue';
    /* height: 20%; */
}

.author_content{
    /* border: 1px, solid, black; */
    height: 70%;
    margin-top: 2%;
    font-size: 13px;
    /* font-weight:normal; */
    font-family: 'Microsoft New Tai Lue';
}

.repay{
    border: 1px, solid, black;
    /* background-image: url('../assets/repay.png'); */
    /* height: 3%;
    width: 3%;
    margin-top: 1%;
    margin-left: 87%; */
}

.traveller_total{
    /* border: 1px, solid, greenyellow; */
    height: 49%;
    width: 66%;
    margin-left: 23%;
    margin-top: 3%;
    overflow: hidden;
}

.traveller_inner{
    /* border: 1px, solid, blue; */
    height: 55%;
    /* width: 66%; */
    /* margin-top: 2%; */
    /* margin-left: 23%; */
    display: flex;
    flex-direction: row;
    overflow: auto;
}

.traveller_inner::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.traveller_head_fixed{
    /* border: 1px, solid, black; */
    /* border-image: url('../assets/traveller_head.png'); */
    width: 15%;
}

.traveller_head_fixed img{
    width: 100%;
}

.traveller_right{
    display: flex;
    flex-direction: column;
    width: 82%;
    margin-left: 4%;
    /* 加和86% */
}

.traveller_name_fixed{
    /* border: 1px, solid, black; */
    font-family: 'Microsoft New Tai Lue';
    font-weight: 700;
}

.traveller_content{
    /* border: 1px, solid, black; */
    height: 80%;
    margin-top: 3%;
    font-size: 12px;
}



</style>

