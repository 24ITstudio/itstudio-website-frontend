<template>
    <div class="body">
        <div class="putIn">
            <div class="head">
                <a href="#"><img src="../assets/Go Back.png" alt=""></a>
                <div class="text" style="display: inline-block;">信息填报</div>
            </div>
            <form action="" @submit.prevent="submitForm">
                <div class="name fill">
                    <img src="../assets/User.png" alt="" style="height: 30px;">
                    <input type="text" v-model="name" placeholder="姓名" required>
                </div>
                <div class="stuId fill">
                    <img src="../assets/Identification Documents.png" alt="" style="height: 30px;">
                    <input type="text" v-model="stuId" placeholder="学号" required>
                </div>
                <div class="tele fill">
                    <img src="../assets/Phone iphone.png" alt="" style="height: 30px;">
                    <input type="text" v-model="tele" placeholder="电话" required>
                </div>
                <div class="QQ fill">
                    <img src="../assets/Flutter dash.png" alt="" style="height: 30px;">
                    <input type="text" v-model="qq" placeholder="QQ号" required>
                </div>
                <input type="submit" class="button" value="提       交">
            </form>
        </div>
        <div class="succeed" style="z-index: 1000;" v-if="showResult">
            <div class="head">
                <a href="#" style="position: fixed;"><img src="../assets/Go Back.png" @click='back' alt=""></a>
                <div class="msg">
                    <div class="text">&nbsp;&nbsp;&nbsp;报名成功！</div>
                    <div class="pic"><img src="../assets/happy.gif" alt="" style="height:200px;"></div>
                    <div class="tip">加群关注后续</div>
                    <div class="QR"><img src="../assets/code.png" alt="" style="height: 200px;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            stuId: '',
            tele: '',
            qq: '',
            showResult: false,
        };
    },
    methods: {
        submitForm() {
            if (this.name && this.stuId && this.tele && this.qq) {
                // 表单验证通过，设置 showResult 为 true，显示结果  
                this.showResult = true;
                // 在这里可以添加将表单数据发送到服务器的代码  
                // ...  
                this.name = '';
                this.stuId = '';
                this.tele = '';
                this.qq = '';
            }
        },
        back() {
            this.showResult = false;
        },
    },
};  
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
}

input {
    outline: none;
    border: 0;
    background-color: transparent;
}

.body {
    background-color: transparent;
    background-image: url(../assets/background.png);
    background-size: 100%;
    display: flex;
    position: relative;
    height: 100vh;
    width: 100vw;
}

.body .putIn {
    width: 33.9%;
    height: 65.19%;
    background-color: #D9D9D9;
    position: absolute;
    top: 17.4%;
    left: 11.25%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.putIn .head,
.succeed .head {
    width: 84.79%;
    height: 55px;
    margin-top: 8.23%;
    display: flex;
    margin-bottom: 9.5%;
}

.putIn .head .text {
    color: var(--2, #04132D);
    font-family: "Microsoft JhengHei UI";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 55px;
    height: 55px;
    margin-left: 28px;
}

.putIn form {
    width: 84.79%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    transform: translateY(-30px);
}

.putIn form .fill {
    background-color: rgba(103, 110, 123, 0.09);
    width: 100%;
    height: 45px;
    margin-bottom: 30px;
    line-height: 45px;
    display: flex;
    align-items: center;
    border-radius: 24px;
    border: 2px solid #808DA5;
}

.putIn form .fill input {
    line-height: 45px;
    color: var(--2, #04132D);
    font-family: "Microsoft JhengHei UI";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
}

.putIn form .fill input::placeholder {
    color: #808DA5;
}

.putIn form .fill img {
    margin-left: 15px;
    margin-right: 20px;
}

.putIn form .button {
    color: #FFF;
    font-family: "Microsoft JhengHei UI";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    height: 50px;
    width: 60%;
    border: none;
    border-radius: 52px;
    background: var(--2, #04132D);
}

.putIn form .button:active {
    opacity: 0.7;
}

.succeed {
    width: 33.9%;
    height: 65.19%;
    background-color: #D9D9D9;
    position: absolute;
    top: 17.4%;
    left: 11.25%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.succeed .head .msg {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.succeed .head .text {
    color: #000;
    font-family: "Microsoft YaHei UI";
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    margin: 0 auto;
    margin-top: 13.07%;
}

.succeed .head .pic {
    height: 200px;
    margin: 0 auto;
    margin-top: 22px;
}

.tip {
    color: #000;
    font-family: "Microsoft YaHei UI";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 auto;
    margin-top: 5%;
}

.QR {
    margin: 0 auto;
    margin-top: 5%;
}
</style>