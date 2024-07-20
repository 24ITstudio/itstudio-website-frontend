<template>
    <div class="main" @click="handleClickOutside">
        <div class="center">
            <deBox v-for="i in 5" :key="i" :index="i" :activeIndex="activeIndex" @update:activeIndex="updateActiveIndex"
                @click.stop="" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import deBox from './departBox.vue';

export default {
    components: {
        deBox
    },
    setup() {
        const activeIndex = ref(null);

        const updateActiveIndex = (index) => {
            activeIndex.value = index;
        };

        const handleClickOutside = () => {
            // 将activeIndex设置为null，表示没有子组件被激活  
            activeIndex.value = null;
        };

        return {
            activeIndex,
            updateActiveIndex,
            handleClickOutside
        };
    }
};  
</script>
<style scoped>
.main {
    height: 100vh;
    position: relative;
    background: url("../assets/bg.jpg") no-repeat fixed;
    background-size: 100% 100%;
    padding: 1px;
    box-sizing: border-box;
    position: relative;
}

.main:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    filter: blur(5px);
    z-index: 1;
}

.center {
    display: flex;
    justify-content: start;
    width: 100%;
    height: 100%;
}
</style>