<template>
    <!-- change: 展示区头像名称去掉&添加日期（id）显示 -->
    <div class="back">
        <div class="head">导航栏组件</div>
        <div class="content">
            <div class="back_left">
                <div class="left_head">爱特工作室</div>
                <div class="left_content">
                    &nbsp;&nbsp;&nbsp;&nbsp;爱特工作室是中国海洋大学的校级社团，以开发为主，拥有程序设计、web开发、UI设计、app开发、游戏开发五大部门。欢迎加入爱特工作室！！！<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;中国海洋大学（Ocean University of China,
                    OUC）位于山东省青岛市，是中华人民共和国教育部直属的综合性全国重点大学，位列国家“双一流”
                    “985工程”
                    “211工程”，入选“2011计划” “111计划”
                    “强基计划”、卓越工程师教育培养计划、卓越农林人才教育培养计划、国家大学生创新性实验计划、国家建设高水平大学公派研究生项目、新工科研究与实践项目、中国政府奖学金来华留学生接收院校，为中欧精英大学联盟、北极大学、国际南极学院、国际涉海大学·联盟成员，全国首批博士、硕士学位授予单位。学校前身是创办于1924年的私立青岛大学。1930年，在省立山东大学和私立青岛大学基础上成立国立青岛大学。后历经国立山东大学、山东大学时期，1958年山东大学主体迁往济南，以留青的海洋系、水产系、地质系、生物系等为基础，于1959年3月成立山东海洋学院。1960年被国家确定为全国13所重点综合性大学之一。1988年更名为青岛海洋大学。2002年更名为中国海洋大学。
                    截至2023年12月，学校有崂山、鱼山、浮山、西海岸4个校区，占地5200余亩；设有1个学部、20个学院和1个基础教学中心，开设本科招生专业74个；拥有博士后流动站17个、博士学位授权一级学科17个、博士专业学位授权类别4个、硕士学位授权一级学科34个、硕士专业学位授权类别25个；有教职工4048人，其中专任教师2167人；在校生35400余人，其中本科生17200余人、硕士研究生14500余人、博士研究生3400余人、外国留学生330余人。
                </div>
            </div>
            <div class="back_right">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <!-- <img src="@/assets/introTry_0.png" /> -->
                        <div class="swiper-slide" v-for="(image, index) in images" :key="index">
                            <img :src="image" alt="Image Slide" />
                        </div>
                    </div>
                    <!-- <div class="swiper_button">
                        <div class="prev">
                            <img src="@/assets/left.png" alt="Previous" />
                        </div>
                        <div class="next">
                            <img src="@/assets/right.png" alt="Next" />
                        </div>
                    </div> -->
                </div>
                <div class="swiper_button">
                    <div class="prev">
                        <img src="@/assets/left.png" alt="Previous" />
                    </div>
                    <div class="next">
                        <img src="@/assets/right.png" alt="Next" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import  Swiper, { Navigation } from 'swiper';
// import Swiper from 'swiper/bundle';
// import {Navigation} from 'swiper';
// import SwiperCore, {Navigation} from 'swiper/core';
import 'swiper/swiper-bundle.css';
// import 'swiper/css';

Swiper.use([Navigation]);
// SwiperCore.use([Navigation]);


export default {
    name: 'introPage',
    data() {
        return {
            images: [
                require('@/assets/introTry_0.png'),
                require('@/assets/introTry_1.png'),
                require('@/assets/introTry_2.png'),
                require('@/assets/introTry_3.png'),
            ],
        };
    },
    mounted() {
        new Swiper('.swiper-container', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.next',
                prevEl: '.prev',
            },
            loop: true,
            // autoplay: {
            //     delay: 10000, // 单位毫秒
            // },
        });
    },
};
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
}

.content {
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
    margin-left: 13%;
    margin-top: 10%;
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
    font-family: 'Microsoft New Tai Lue';
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
    margin-top: -3.2%;
    margin-left: 16%;
    /* display: flex; */
    /* flex-direction: row; */
}

.swiper-container {
    /* background-color: greenyellow; */
    width: 89%;
    height: 65%;
    margin-top: 20%;
    margin-left: -20%;
    /* margin-right: 30%; */
    overflow: hidden;
}

 /* .swiper-wrapper{  */
    /* background-color: blue; */

    /* width: auto; */
    /* display: flex; */
    /* flex-direction: column; */
    /* overflow: hidden; */
/* }  */

/* .swiper-wrapper img{
    width: auto;
    height: auto;
} */

/* .swiper-slide {  */
    /* background-color: greenyellow; */
    /* border: 1px, solid, #04132c; */
    /* width: 10%; */
    /* height: 10%; */
    /* width: auto; */
/* }  */

.swiper-slide img{
    height: 100%;
}

.swiper_button{
    /* background-color: greenyellow; */
    display: flex;
    flex-direction: row;
    /* height: 5%; */
    margin-top: 4%;
    margin-left: 12%;
    /* width: 20%; */

}

.prev{
    /* background-color: rgba(0, 0, 0, 0.5); */
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

.next {
    color: white;
    /* padding: 10px; */
    cursor: pointer;
    margin-left: 4%;
    /* display: none; */
    /* background-image: url('../assets/right.png'); */
}

.next img{
    height: 60%;    
}

.nav {
    background-color: #e2dfdf;
    border-radius: 30px;
    height: 20%;
    width: 8%;
    margin-left: 17%;
    margin-top: 45%;
}
</style>
