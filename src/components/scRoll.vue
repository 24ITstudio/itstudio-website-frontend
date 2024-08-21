<template>
    <div class="Main">
        <div class="scroll-container" ref="scrollContainer" @wheel="handleWheel" style="overflow-y: scroll;">
            <p v-for="(text, index) in texts" :key="index" :class="{ 'active-text': currentIndex === index }">
                {{ text }}
            </p>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
    setup() {
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

        return { texts, currentIndex, scrollContainer };
    },
};  
</script>

<style scoped>
*::-webkit-scrollbar {
    display: none;
}

.Main {
    position: relative;
    width: 100vw;
    height: 100vh;
    /* background-color: skyblue; */
    background: transparent;
}

.scroll-container {
    position: absolute;
    /* right: 100px; */
    padding: 100px;
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
    font-size: 48Px;
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
    font-size: 128px;
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
</style>