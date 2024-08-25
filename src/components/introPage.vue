<template>
    <!-- head随滚动消失 不固定 -->
    <div class="back">
        <div class="back_up">
            <div class="head">
                <navHead></navHead>
            </div>
            <div class="content">
                <div class="back_left scale-in-bl_0">
                    <div class="left_head scale-in-bl" :class="{ 'blur': showIntro }">关于爱特</div>
                    <div class="left_content scale-in-tl">
                        # 团队合作&nbsp;&nbsp;&nbsp;&nbsp;# 技术人才&nbsp;&nbsp;&nbsp;&nbsp;#
                        发掘潜力&nbsp;&nbsp;&nbsp;&nbsp;#酷炫代码<br>
                        <br>
                        爱特工作室成立于2002年，是一个在中国海洋大学信息科学与工程学部领导主持下，以计算机技术人才培养，网络开发为特色的技术性团体。<br>
                        <br>
                        爱特一直以凝聚和培养计算机人才为己任，发掘技术潜力，感受合作乐趣，让代码高效执行，让大家更进一步。<br>
                        <br>
                        用创意打磨精巧设计，用智慧实现炫酷交互；用热情呈现高效代码，以交流触碰灵感火花；以创造激发全新想象，用双手创造改变未来。<br>
                        <br>
                        汇聚技术力量，解剖程序内核，研究代码本质，巧解应用难题。以逻辑洞察数据，以细节战胜漏洞。<br>
                        <br>
                        OUC
                        Hackday，是中国海洋大学爱特工作室（ITStudio）举办的Hackday活动。不同于国内各大互联网公司举办的面向全社会的Hackday，OUC
                        Hackday主要面向群体是全国各大高校在读生，为大学生极客们提供了一个展示自己、相互交流、开阔视野的平台。<br>
                    </div>
                </div>
                <div class="back_right" v-if="!showIntro">
                    <div class="swiper-container scale-in-center">
                        <div class="swiper-wrapper ">
                            <div class="swiper-slide" v-for="(image, index) in images" :key="index">
                                <img :src="image" alt="Image Slide" />
                            </div>
                        </div>
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
                        爱特工作室成立于2002年，是一个在中国海洋大学信息科学与工程学部领导主持下，以计算机技术人才培养，网络开发为特色的技术性团体。<br><br>
                        爱特一直以凝聚和培养计算机人才为己任，发掘技术潜力，感受合作乐趣，让代码高效执行，让大家更进一步。<br><br>
                        用创意打磨精巧设计，用智慧实现炫酷交互；用热情呈现高效代码，以交流触碰灵感火花；以创造激发全新想象，用双手创造改变未来。<br><br>
                        汇聚技术力量，解剖程序内核，研究代码本质，巧解应用难题。以逻辑洞察数据，以细节战胜漏洞。<br><br>
                        OUC
                        Hackday，是中国海洋大学爱特工作室（ITStudio）举办的Hackday活动。不同于国内各大互联网公司举办的面向全社会的Hackday，OUC
                        Hackday主要面向群体是全国各大高校在读生，为大学生极客们提供了一个展示自己、相互交流、开阔视野的平台。<br>
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
            spaceBetween: 0,
        });
    },
};
</script>

<style scoped>
@media screen and (orientation: portrait) {
    .back {
        width: 100%;
        height: 100%;
        /* height: 99vh; */
        background: url('../assets/bg.webp') no-repeat fixed;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
    }

    .back_up {
        height: 100%;
        width: 100%;
        backdrop-filter: blur(10px);
        /* overflow-y: auto; */
    }

    .content {
        height: 100%;
        margin-top: 29%;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .back_left {
        /* border: 4px, solid, rgb(195, 179, 40); */
        width: 95%;
        margin-left: 6%;
    }

    .left_head {
        color: white;
        font-weight: 700;
        font-size: 11vw;
    }

    .left_content {
        display: none;
    }

    .back_right {
        /* border: 4px, solid, rgb(195, 179, 40); */
        width: 100%;
        /* height: 35%; */
        margin-top: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .swiper-container {
        /* border: 1px, solid, rgb(122, 33, 194); */
        width: 89%;
        border-radius: 10px;
        height: 29vh;
        overflow: hidden;
        margin-top: 2%;
    }

    .swiper-wrapper {
        /* border: 1px, solid, rgb(122, 33, 194); */
        width: 100%;
        height: 100%;
        display: flex;
    }

    .swiper-slide {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .swiper-slide img {
        /* border: 1px, solid, rgb(95, 209, 33); */
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .swiper_button {
        display: none;
    }

    .mobile_intro {
        /* border: 1px, solid, rgb(194, 33, 33); */
        width: 90%;
        height: 40%;
        margin-left: 5%;
        margin-top: 5%;
        margin-bottom: 2%;
        overflow: auto;
    }

    .mobile_content {
        font-size: 4.1vw;
        color: white;
        /* margin-top: 4%; */
        margin-bottom: 4%;
    }

    .mobile_content::-webkit-scrollbar {
        display: none;
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
        margin-top: 70px;
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .head {
        color: white;
    }

    .back_left {
        width: 35%;
        margin-left: 14%;
        margin-top: 6%;
    }

    .left_head {
        color: white;
        font-weight: 700;
        font-size: 4vw;
        margin-left: 1%;
    }

    .left_content {
        margin-top: 7%;
        height: 53%;
        width: 110%;
        color: white;
        font-weight: 400;
        font-size: 1.11vw;
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
        width: 89%;
        height: 55%;
        margin-top: 26%;
        margin-left: -18%;
        overflow: hidden;
        border-radius: 20px;
    }

    .swiper-slide {
        height: 100%;
        width: 100%;
    }

    .swiper-slide img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }

    .swiper_button {
        display: flex;
        flex-direction: row;
        margin-top: 4%;
        margin-left: 16%;

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
