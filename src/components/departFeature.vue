<template>
    <navHead :locate="332"></navHead>
    <div class="container">
        <div class="feature labtop">
            <swiper :initialSlide="Inid" :modules="modules" class="hero-icon-swiper" :slides-per-view="'auto'"
                :space-between="-80" :centered-slides="true" :center-insufficient-slides="true" :pagination="{
                    clickable: true,
                    el: '.swiper-pagination',
                }" effect="coverflow" :coverflowEffect="{
                    rotate: 50,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: false,
                }" loop @swiper="onSwiper">
                <swiper-slide>
                    <img src="../assets/b1.webp" alt="" class="icon" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/b2.webp" alt="" class="icon" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/b3.webp" alt="" class="icon" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/b4.webp" alt="" class="icon" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/b5.webp" alt="" class="icon" />
                </swiper-slide>
                <!-- <swiper-slide>
                    <img src="../assets/b1.webp" alt="" class="icon" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/b2.webp" alt="" class="icon" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/b3.webp" alt="" class="icon" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/b4.webp" alt="" class="icon" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/b5.webp" alt="" class="icon" />
                </swiper-slide> -->
                <!-- <div class="swiper-pagination"></div> -->
            </swiper>
        </div>
        <div class="feature mobile">
            <swiper :modules="modules" class="hero-icon-swiper" :slides-per-view="'auto'" :space-between="-80"
                :centered-slides="true" :center-insufficient-slides="true" :pagination="{
                    clickable: true,
                    el: '.swiper-pagination',
                }" effect="coverflow" :coverflowEffect="{
                    rotate: 50,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: false,
                }" loop @swiper="onSwiper">
                <swiper-slide>
                    <img src="../assets/s1.webp" alt="" class="icon" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/s2.webp" alt="" class="icon" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/s3.webp" alt="" class="icon" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/s4.webp" alt="" class="icon" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/s5.webp" alt="" class="icon" />
                </swiper-slide>
                <!-- <swiper-slide>
                    <img src="../assets/s1.webp" alt="" class="icon" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/s2.webp" alt="" class="icon" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/s3.webp" alt="" class="icon" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/s4.webp" alt="" class="icon" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/s5.webp" alt="" class="icon" />
                </swiper-slide> -->
                <!-- <div class="swiper-pagination"></div> -->
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

import navHead from './nav-head.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
const modules = [Pagination, Autoplay, EffectCoverflow];

const Inid = ref(0);

// onMounted(() => {
Inid.value = route.query.id
console.log(Inid.value)
// })

// const onSwiper = (swiper) => {
//     swiper.activeIndex = Inid;
// };

</script>

<style scoped>
@media screen and (orientation: landscape) {
    .mobile {
        display: none;
    }

    .container {
        width: 100vw;
        height: 100vh;
        background-image: url(../assets/bgmh.webp);
    }

    .feature {
        width: 100vw;
        z-index: 100;
        position: relative;
        /* padding-top: 1.2667rem; */
    }

    .feature .swiper {
        padding: 0.28rem 0;
    }

    .feature .swiper-wrapper {
        width: 100vw;
    }

    .feature .swiper-slide.swiper-slide-active {
        transform: scale(1) !important;
        z-index: 3;
    }

    .feature .swiper-slide.swiper-slide-active img {
        filter: brightness(1);
    }

    .feature .swiper-slide {
        margin-top: 15vh;
        width: 70vw !important;
        transform: scale(0.6) !important;
        padding-top: 20px;
        cursor: pointer;
    }

    .feature .swiper-slide img {
        width: 100%;
        filter: brightness(0.5);
        box-shadow: 4px 4px 20px #98a1e1;
        border-radius: 34px;
    }

    .feature .swiper-slide.swiper-slide-prev,
    .feature .swiper-slide.swiper-slide-next {
        transform: scale(0.8) !important;
        z-index: 2;
    }

    .swiper-pagination-bullet {
        background-color: #fff !important;
    }

    .swiper-pagination-bullet-active {
        opacity: 1;
        background-color: #007aff;
    }

    .swiper-horizontal>.swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
        transform: scale(1.5);
        height: 60px;
        position: relative;
        margin-top: 40px;
        z-index: 3;
    }
}

@media screen and (orientation: portrait) {
    .labtop {
        display: none;
    }

    .container {
        width: 100vw;
        height: 100vh;
        background-image: url(../assets/bgmh.webp);
    }

    .feature {
        width: 100vw;
        z-index: 100;
        position: relative;
        /* padding-top: 1.2667rem; */
    }

    .feature .swiper {
        padding: 0.28rem 0;
    }

    .feature .swiper-wrapper {
        width: 100vw;
    }

    .feature .swiper-slide.swiper-slide-active {
        transform: scale(1) !important;
        z-index: 3;
    }

    .feature .swiper-slide.swiper-slide-active img {
        filter: brightness(1);
    }

    .feature .swiper-slide {
        margin-top: 100px;
        width: 350px !important;
        transform: scale(0.5) !important;
        padding-top: 20px;
    }

    .feature .swiper-slide img {
        width: 100%;
        filter: brightness(0.5);
    }

    .feature .swiper-slide.swiper-slide-prev,
    .feature .swiper-slide.swiper-slide-next {
        transform: scale(0.8) !important;
        z-index: 2;
    }

    .feature .swiper-pagination-bullet {
        /* background: url("../assets/images/pagination.png") no-repeat; */
        background-size: 100%;
        opacity: 1;
    }

    .feature .swiper-pagination-bullet.swiper-pagination-bullet-active {
        /* background: url("../assets/images/pagination-active.png") no-repeat; */
        background-size: 100%;
    }

    .swiper-horizontal>.swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
        position: relative;
        margin-top: 0.5rem;
        height: 0.32rem;
        z-index: 3;
    }
}
</style>
