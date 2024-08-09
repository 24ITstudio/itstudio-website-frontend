<template>
    <div class="back">
        <div class="back_up">
            <div class="head">
                <navHead :locate="84"></navHead>
            </div>
            <div class="content">
                <div class="back_left scale-in-bl_0">
                    <div class="left_head scale-in-bl" :class="{ 'blur': showIntro }">爱特工作室</div>
                    <div class="left_content scale-in-tl">
                        &nbsp;&nbsp;&nbsp;&nbsp;爱特工作室是中国海洋大学的校级社团，以开发为主，拥有程序设计、web开发、UI设计、app开发、游戏开发五大部门。欢迎加入爱特工作室！！！<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;中国海洋大学（Ocean University of China,
                        OUC）位于山东省青岛市，是中华人民共和国教育部直属的综合性全国重点大学，位列国家“双一流”
                        “985工程”
                        “211工程”，入选“2011计划” “111计划”
                        “强基计划”、卓越工程师教育培养计划、卓越农林人才教育培养计划、国家大学生创新性实验计划、国家建设高水平大学公派研究生项目、新工科研究与实践项目、中国政府奖学金来华留学生接收院校，为中欧精英大学联盟、北极大学、国际南极学院、国际涉海大学·联盟成员，全国首批博士、硕士学位授予单位。学校前身是创办于1924年的私立青岛大学。1930年，在省立山东大学和私立青岛大学基础上成立国立青岛大学。后历经国立山东大学、山东大学时期，1958年山东大学主体迁往济南，以留青的海洋系、水产系、地质系、生物系等为基础，于1959年3月成立山东海洋学院。1960年被国家确定为全国13所重点综合性大学之一。1988年更名为青岛海洋大学。2002年更名为中国海洋大学。
                        截至2023年12月，学校有崂山、鱼山、浮山、西海岸4个校区，占地5200余亩；设有1个学部、20个学院和1个基础教学中心，开设本科招生专业74个；拥有博士后流动站17个、博士学位授权一级学科17个、博士专业学位授权类别4个、硕士学位授权一级学科34个、硕士专业学位授权类别25个；有教职工4048人，其中专任教师2167人；在校生35400余人，其中本科生17200余人、硕士研究生14500余人、博士研究生3400余人、外国留学生330余人。
                    </div>
                </div>
                <div class="back_right" v-if="!showIntro">
                    <div class="swiper-container scale-in-center">
                        <div class="swiper-wrapper ">
                            <div class="swiper-slide" v-for="(image, index) in images" :key="index">
                                <img :src="image" alt="Image Slide" />
                            </div>
                        </div>
                        <!-- <div class="swiper_button">
                        <div class="prev">
                            <img src="@/assets/left.webp" alt="Previous" />
                        </div>
                        <div class="next">
                            <img src="@/assets/right.webp" alt="Next" />
                        </div>
                    </div> -->
                    </div>
                    <div class="swiper_button">
                        <div>
                            <img src="@/assets/left.webp" alt="Previous" class="prev" />
                        </div>
                        <div class="next1">
                            <img src="@/assets/right.webp" alt="Next" class="next" />
                        </div>
                    </div>
                </div>
                <div class="mobile_intro scale-in-center" @click="hideIntro">
                    <div class="mobile_content">
                        &nbsp;&nbsp;&nbsp;&nbsp;爱特工作室是中国海洋大学的校级社团，以开发为主，拥有程序设计、web开发、UI设计、app开发、游戏开发五大部门。欢迎加入爱特工作室！！！<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;中国海洋大学（Ocean University of China,
                        OUC）位于山东省青岛市，是中华人民共和国教育部直属的综合性全国重点大学，位列国家“双一流”
                        “985工程”
                        “211工程”，入选“2011计划” “111计划”
                        “强基计划”、卓越工程师教育培养计划、卓越农林人才教育培养计划、国家大学生创新性实验计划、国家建设高水平大学公派研究生项目、新工科研究与实践项目、中国政府奖学金来华留学生接收院校，为中欧精英大学联盟、北极大学、国际南极学院、国际涉海大学·联盟成员，全国首批博士、硕士学位授予单位。学校前身是创办于1924年的私立青岛大学。1930年，在省立山东大学和私立青岛大学基础上成立国立青岛大学。后历经国立山东大学、山东大学时期，1958年山东大学主体迁往济南，以留青的海洋系、水产系、地质系、生物系等为基础，于1959年3月成立山东海洋学院。1960年被国家确定为全国13所重点综合性大学之一。1988年更名为青岛海洋大学。2002年更名为中国海洋大学。
                        截至2023年12月，学校有崂山、鱼山、浮山、西海岸4个校区，占地5200余亩；设有1个学部、20个学院和1个基础教学中心，开设本科招生专业74个；拥有博士后流动站17个、博士学位授权一级学科17个、博士专业学位授权类别4个、硕士学位授权一级学科34个、硕士专业学位授权类别25个；有教职工4048人，其中专任教师2167人；在校生35400余人，其中本科生17200余人、硕士研究生14500余人、博士研究生3400余人、外国留学生330余人。
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navHead from './nav-head.vue'
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

// Swiper.use([Navigation]);
// SwiperCore.use([Navigation]);

export default {
    name: 'introPage',
    components: {
        navHead,
        // Swiper,
        // SwiperSlide
    },
    data() {
        return {
            images: [
                require('@/assets/introTry_0.webp'),
                require('@/assets/introTry_1.webp'),
                require('@/assets/introTry_2.webp'),
                require('@/assets/introTry_3.webp'),
            ],
            showIntro: false,
        };
    },
    methods: {
        hideIntro() {
            this.showIntro = false;
        }
    },
    mounted() {
        new Swiper('.swiper-container', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.next',
                prevEl: '.prev',
            },
            loop: true,
            autoplay: {
                delay: 2000, // 单位毫秒
            },
            speed: 500, // 单位毫秒
        });
    },
};
</script>

<style scoped>
@media screen and (orientation: portrait) {
    .back {
        width: 100%;
        /* height: 100vh; */
        background-image: url('../assets/bg.webp');
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
    }

    .back_up {
        height: 100%;
        width: 100%;
        backdrop-filter: blur(10px);
        overflow-y: auto;
    }

    .content {
        height: 95%;
        margin-top: 10%;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .head {
        color: white;
        position: fixed;
        z-index: 1000;
    }

    .back_left {
        width: 95%;
        margin-left: 6%;
        margin-top: 12%;
        display: flex;
        flex-direction: row;
    }

    .left_head {
        color: white;
        font-weight: 700;
        font-size: 10vw;
    }

    .intro_hidden {
        color: aliceblue;
        font-weight: 600;
        font-size: 4vw;
        height: 45%;
        margin-top: 7%;
        margin-left: 2%;
        cursor: pointer;
    }

    .intro_hidden:active {
        animation: pulsate-bck 1s ease;
    }

    .left_content {
        display: none;
    }



    .left_head.blur {
        filter: blur(5px);
    }

    .intro_hidden.blur {
        filter: blur(5px);
    }

    .back_right {
        /* border: 1px, solid, rgb(195, 179, 40); */
        width: 100%;
        /* height: 43%; */
        margin-top: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .swiper-container {
        /* border: 1px, solid, rgb(122, 33, 194); */
        width: 89%;
        /* height: 10%; */
        overflow: hidden;
    }

    .swiper-slide img {
        /* border: 1px, solid, rgb(95, 209, 33); */
        border-radius: 10px;
        width: 100%;
        /* height: 10%; */
    }

    .swiper_button {
        display: none;
    }

    .mobile_intro {
        /* border: 1px, solid, rgb(194, 33, 33); */
        width: 90%;
        height: 50vh;
        margin-left: 5%;
    }

    /* .mobile_intro_inner {
    margin-left: -5%;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    z-index: 10;
    height: 70%;
    overflow: auto;
} */

    /* .mobile_intro_inner::-webkit-scrollbar {
    width: 0;
    height: 0;
} */

    /* .close {
    color: white;
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 3.2vw;
    cursor: pointer;
} */

    /* .close:active {
    animation: pulsate-bck 1s ease;
} */

    .mobile_content {
        font-size: 3vw;
        color: white;
        margin-top: 4%;
    }

    .scale-in-bl_0 {
        -webkit-animation: scale-in-bl 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: scale-in-bl 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @-webkit-keyframes scale-in-bl {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
            opacity: 1;
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
            opacity: 1;
        }
    }

    @keyframes scale-in-bl {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
            opacity: 1;
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
            opacity: 1;
        }
    }


    .scale-in-center {
        -webkit-animation: scale-in-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: scale-in-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @-webkit-keyframes scale-in-center {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 1;
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes scale-in-center {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 1;
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
    }

    .scale-in-center_0 {
        -webkit-animation: scale-in-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: scale-in-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @-webkit-keyframes scale-in-center_0 {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 1;
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes scale-in-center_0 {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 1;
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
    }

    .pulsate-bck {
        -webkit-animation: pulsate-bck 0.5s ease-in-out both;
        animation: pulsate-bck 0.5s ease-in-out both;
    }

    @-webkit-keyframes pulsate-bck {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        50% {
            -webkit-transform: scale(0.7);
            transform: scale(0.7);
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
            -webkit-transform: scale(0.7);
            transform: scale(0.7);
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

}


@media screen and (orientation: landscape) {
    .back {
        /* background-color: beige; */
        width: 100%;
        height: 100vh;
        background-image: url('../assets/bg.webp');
        background-size: 100% 100%;
        position: fixed;
        display: flex;
        flex-direction: column;
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
        font-size: 5vw;
        margin-left: 1%;
    }

    .intro_hidden {
        display: none;
    }

    .left_content {
        /* background-color: greenyellow; */
        margin-top: 7%;
        height: 53%;
        color: white;
        font-weight: 400;
        font-size: 1vw;
        font-family: 'Microsoft New Tai Lue';
        overflow: auto;
        position: relative;
        /* animation: scroll 10s linear infinite; */
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
        margin-top: 23%;
        margin-left: -20%;
        overflow: hidden;
    }

    .swiper-slide img {
        height: 100%;
    }

    .swiper_button {
        /* background-color: greenyellow; */
        display: flex;
        flex-direction: row;
        /* height: 5%; */
        margin-top: 4%;
        margin-left: 12%;
        /* width: 20%; */

    }

    .prev {
        height: 60%;
        cursor: pointer;
    }

    .prev:active {
        animation: pulsate-bck 1s ease;
    }

    .next1 {
        margin-left: 4%;
        /* display: none; */
        /* background-image: url('../assets/right.webp'); */
    }

    .next {
        height: 60%;
        cursor: pointer;
    }

    .next:active {
        animation: pulsate-bck 1s ease;
    }

    .mobile_intro {
        display: none;
    }

    .scale-in-bl {
        -webkit-animation: scale-in-bl 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: scale-in-bl 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @-webkit-keyframes scale-in-bl {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
            opacity: 1;
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
            opacity: 1;
        }
    }

    @keyframes scale-in-bl {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
            opacity: 1;
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
            opacity: 1;
        }
    }

    .scale-in-tl {
        -webkit-animation: scale-in-tl 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: scale-in-tl 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @-webkit-keyframes scale-in-tl {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
            opacity: 1;
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
            opacity: 1;
        }
    }

    @keyframes scale-in-tl {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
            opacity: 1;
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
            opacity: 1;
        }
    }

    .scale-in-center {
        -webkit-animation: scale-in-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: scale-in-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @-webkit-keyframes scale-in-center {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 1;
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes scale-in-center {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 1;
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
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
            -webkit-transform: scale(0.7);
            transform: scale(0.7);
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
            -webkit-transform: scale(0.7);
            transform: scale(0.7);
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
}
</style>
