<template>
    <div class="back">
        <div class="head">
            <navHead></navHead>
        </div>
        <div class="content">
            <div class="back_left">
                <div class="left_board">
                    <div class="board_head">
                        <div class="text_1">
                            留言板
                        </div>
                    </div>
                    <div class="board_content">
                        <textarea ref="input" v-bind="{ placeholder: isPlaceholder }" v-model="content"
                            @focus="clearPlaceholder" @blur="setPlaceholder" @input="checkInput" rows="9">
                            有什么想说的，就在这里留下吧~
                        </textarea>
                    </div>
                    <div class="submitB">
                        <button class="inner" @click="submitMessage">发&nbsp;&nbsp;&nbsp;&nbsp;布</button>
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
            content: '有什么想说的，就在这里留下吧~',
            isPlaceholder: true
        }
    },
    // bug:不输入内容的话，再次调用时失灵
    methods: {
        clearPlaceholder() {
            if (this.isPlaceholder) {
                this.content = '';
                this.isPlaceholder = false;
            }
            console.log("clear")
        },
        setPlaceholder() {
            if (this.content === '') {
                this.content = '有什么想说的，就在这里留下吧~';
                this.isplaceholder = true;
            }
            console.log("set")
        },
        // checkInput() {
        //     this.isPlaceholder = this.content === '';
        // },
        submitMessage() {
            alert('发布成功');
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
    margin-top: 20%;



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

.submitB {
    width: 28%;
    height: 5%;
    line-height: 3%;
    border-radius: 100px;
    margin-left: 62%;
    /* margin-top: 1%; */

    background-color: #04132c;
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
    border: 0px, solid, #04132c;
    height: 85%;
}
</style>