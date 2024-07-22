<template>
    <div class="back">
        <div class="head">
            <navHead :locate="540"></navHead>
        </div>
        <div class="content">
            <div class="back_left">
                <div class="left_head">
                    爱特工作室
                </div>
                <div class="left_content">
                    &nbsp;&nbsp;&nbsp;&nbsp;爱特工作室是中国海洋大学的校级社团，以开发为主，拥有程序设计、web开发、UI设计、app开发、游戏开发五大部门。欢迎加入爱特工作室！！！<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;中国海洋大学（Ocean University of China,
                    OUC），位于山东省青岛市，是中华人民共和国教育部直属的综合性全国重点大学，位列国家“双一流”
                    “985工程”
                    “211工程”，入选“2011计划” “111计划”
                    “强基计划”、卓越工程师教育培养计划、卓越农林人才教育培养计划、国家大学生创新性实验计划、国家建设高水平大学公派研究生项目、新工科研究与实践项目、中国政府奖学金来华留学生接收院校，为中欧精英大学联盟、北极大学、国际南极学院、国际涉海大学·联盟成员，全国首批博士、硕士学位授予单位。学校前身是创办于1924年的私立青岛大学。1930年，在省立山东大学和私立青岛大学基础上成立国立青岛大学。后历经国立山东大学、山东大学时期，1958年山东大学主体迁往济南，以留青的海洋系、水产系、地质系、生物系等为基础，于1959年3月成立山东海洋学院。1960年被国家确定为全国13所重点综合性大学之一。1988年更名为青岛海洋大学。2002年更名为中国海洋大学。
                    截至2023年12月，学校有崂山、鱼山、浮山、西海岸4个校区，占地5200余亩；设有1个学部、20个学院和1个基础教学中心，开设本科招生专业74个；拥有博士后流动站17个、博士学位授权一级学科17个、博士专业学位授权类别4个、硕士学位授权一级学科34个、硕士专业学位授权类别25个；有教职工4048人，其中专任教师2167人；在校生35400余人，其中本科生17200余人、硕士研究生14500余人、博士研究生3400余人、外国留学生330余人。
                </div>
            </div>
            <div class="back_right">
                <div class="swiper_total">
                    <div class="swiper">

                    </div>
                    <div>

                    </div>
                </div>
                <div class="nav">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navHead from './nav-head.vue'

export default {
    name: "introPage",
    components: {
        navHead,
    },
}
</script>

<style scoped>
.back {
    background-color: beige;
    width: 100%;
    height: 100vh;
    background-image: url('../assets/bg.jpg');
    background-size: 100% 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    /* filter: blur(10px); */
}

/* .back::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(226, 223, 223, 0.5); */
/* 背景颜色 */
/* filter: blur(10px); */
/* 调整虚化程度 */
/* z-index: 0; */
/* } */

.content {
    /* background-color: blue; */
    height: 95%;
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    width: 100%;
}

.head {
    color: white;
}

.back_left {
    width: 31%;
    /* height: 57%; */
    margin-left: 13%;
    margin-top: 10%;
    /* overflow: auto;
    position: relative; */
}


.left_head {
    color: white;
    font-weight: 700;
    font-size: 60px;
    margin-left: 1%;

}


.left_content {
    margin-top: 7%;
    height: 53%;
    color: white;
    font-weight: 400;
    /* font-size: 24px; */
    font-family: Microsoft New Tai Lue;
    /* 字体还没找到 */
    overflow: auto;
    position: relative;
}

.left_content::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.back_right {
    background-color: #04132c;
    width: 40%;
    /* height: 100%; */
    margin-top: -3.2%;
    /* margin-right: 0px; */
    margin-left: 16%;
    display: flex;
    flex-direction: row;
    /* height: 5%; */
    margin-top: 4%;
    margin-left: 12%;
    /* width: 20%; */

}

.prev{
    /* background-color: rgba(69, 12, 12, 0.5); */
    /* color: white; */
    /* padding: 10px; */
    cursor: pointer;
    /* height: 10%; */
    /* height: auto; */
    /* width: ; */
    /* display: none; */
    /* background-image: url('../assets/left.png'); */
}

.prev img{
    height: 60%;
    /* bug 可识别区域大于箭头区域 */
}

.swiper_total {
    width: 90%;
    height: 65%;
    margin-top: 15%;
    background-image: url('../assets/introTry.png');
    margin-left: -20%;

}

.nav {
    background-color: #e2dfdf;
    border-radius: 30px;
    height: 20%;
    width: 8%;
    margin-left: 17%;
    margin-top: 45%;
    /* border: 1px, solid, blue; */
}
</style>