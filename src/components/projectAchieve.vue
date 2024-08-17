<template>
    <navHead :locate="834"></navHead>
    <div class="Main">
        <div class="scroll-container" ref="scrollContainer" @wheel="handleWheel" style="overflow-y: scroll;">
            <p v-for="(text, index) in texts" :key="index" :class="{ 'active-text': currentIndex === index }">
                {{ text }}
            </p>
        </div>
        <div class="achmain">
            <div class="slider-container" @wheel="handleWheel">
                <div class="slide" :class="{ active: currentIndex === 0 }">
                    板块一
                </div>
                <div class="slide" :class="{ active: currentIndex === 1 }">
                    板块二
                </div>
                <div class="slide" :class="{ active: currentIndex === 2 }">
                    板块三
                </div>
                <div class="slide" :class="{ active: currentIndex === 3 }">
                    板块四
                </div>
                <div class="slide" :class="{ active: currentIndex === 4 }">
                    板块五
                </div>
                <div class="slide" :class="{ active: currentIndex === 5 }">
                    板块六
                </div>
                <div class="slide" :class="{ active: currentIndex === 6 }">
                    板块七
                </div>
                <div class="slide" :class="{ active: currentIndex === 7 }">
                    板块八
                </div>
                <div class="slide" :class="{ active: currentIndex === 8 }">
                    板块九
                </div>
                <div class="slide" :class="{ active: currentIndex === 9 }">
                    板块十
                </div>
            </div>
        </div>
        <div class="bottom">
            <img src="../assets/cover.webp" alt="">
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import navHead from "./nav-head.vue";
const texts = ref(['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014']);
const currentIndex = ref(0);
const scrollContainer = ref(null);

const handleWheel = (event) => {
    event.preventDefault();

    const delta = event.deltaY;

    if (delta > 0 && currentIndex.value < texts.value.length - 1) {
        currentIndex.value++;
    } else if (delta < 0 && currentIndex.value > 0) {
        currentIndex.value--;
    }

    const itemHeight = scrollContainer.value.offsetHeight / texts.value.length;
    const scrollToPosition = currentIndex.value * itemHeight - (scrollContainer.value.offsetHeight - itemHeight) / 2;
    scrollContainer.value.scrollTop = scrollToPosition;
};

onMounted(() => {
    if (scrollContainer.value) {
        scrollContainer.value.addEventListener('wheel', handleWheel);
    }
});

onBeforeUnmount(() => {
    if (scrollContainer.value) {
        scrollContainer.value.removeEventListener('wheel', handleWheel);
    }
});

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

*::-webkit-scrollbar {
    display: none;
}

.Main {
    position: relative;
    width: 100vw;
    height: 100vh;
    /* background-color: skyblue; */
    /* background: transparent; */
    background-image: url(../assets/achbg.webp);
    background-size: 100% 100%;
}

.scroll-container {
    position: absolute;
    /* right: 100px; */
    padding-right: 100px;
    transform: translateY(-20px);
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    /* overflow: hidden; */
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
}

p {
    position: relative;
    text-align: right;
    font-size: 36px;
    /* top: 50%; */
    /* transform: translateY(-50%); */
    margin: 0;
    opacity: 0.7;
    font-family: "HarmonyOS Sans SC";
    transition: 0.5S;
}

p:before {
    content: "";
    position: absolute;
    left: -230px;
    top: -45px;
    display: inline-block;
    background-image: url(../assets/左.webp);
    width: 100px;
    height: 100px;
    background-size: cover;
    background-repeat: no-repeat;
    margin-right: 10px;
    vertical-align: middle;
    transform: rotate(180deg);
    opacity: 0;
    transition: 0.5S;
}

.active-text {
    font-family: "HarmonyOS Sans SC";
    font-weight: bold;
    font-size: 114px;
    transform: translateX(50px);
    position: relative;
    opacity: 1;
}

.active-text:before {
    content: "";
    position: absolute;
    left: -80px;
    top: 36px;
    display: inline-block;
    background-image: url(../assets/左.webp);
    width: 100px;
    height: 100px;
    background-size: cover;
    background-repeat: no-repeat;
    margin-right: 10px;
    vertical-align: middle;
    transform: rotate(180deg);
    opacity: 1;
}

.achmain {
    position: absolute;
    left: 2vw;
    top: 50%;
    height: 84vh;
    margin-top: -42vh;
    width: 70vw;
}

.slider-container {
    position: relative;
    height: 80vh;
    /* 或其他固定高度 */
    overflow: hidden;
    /* 隐藏超出容器的部分 */
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 70vw;
    height: 80vh;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    pointer-events: none;
    /* 防止在非活动幻灯片上触发点击事件 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.slide.active {
    opacity: 1;
    pointer-events: auto;
    /* 允许在活动幻灯片上触发点击事件 */
}

.bottom {
    position: absolute;
    bottom: 0px;
    width: 100vw;
}

.bottom img {
    width: 100%;
    height: 70px;
}
</style>