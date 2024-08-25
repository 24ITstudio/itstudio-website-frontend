<template>
    <navHead></navHead>
    <div class="main" @click="handleClickOutside">
        <div class="center">
            <deBox class="debox" v-for="depart in departs" :key="depart.id" :index="depart.id"
                :activeIndex="activeIndex" :url="depart.bgi" :title="depart.title" :intro="depart.intro"
                :eng="depart.eng" :tag="depart.tag" @update:activeIndex="updateActiveIndex" @click.stop="" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import deBox from './departBox.vue';
import navHead from './nav-head.vue';
import { useRoute } from 'vue-router';

export default {
    components: {
        deBox,
        navHead
    },
    data() {
        return {
            departs: [
                { id: 1, title: "程序部", intro: "程序部主要负责社团的网站开发、应用程序设计、技术支持、技术培训等工作。在这里，你可以学习使用Python开发服务器后端，亲手打造网站。", bgi: require('../assets/application.webp'), eng: "Program", tag: "#后端开发<br>#技术支持<br>#Python" },
                { id: 2, title: "Web部", intro: "Web部是一个致力于网页前端开发的部门，集结了对技术充满热情的开发者，在这里你可以学习前沿网页开发知识，使用HTML、CSS、JS和Vue搭建自己的网站。", bgi: require('../assets/web.webp'), eng: "Web Based", tag: "#网页开发<br>#HTML CSS JS<br>#vue2/3" },
                { id: 3, title: "游戏部", intro: "探索游戏世界的奥秘，学习Unity游戏引擎，使用Unity2D制作简单的2D游戏，亲手打造属于自己的游戏作品。<br>如果你对软件开发充满热情或满怀好奇，渴望在实践中提升自己的技能，那么，爱特工作室就是你梦想起航的地方！", bgi: require('../assets/game.webp'), eng: "Game", tag: "#2D<br>#Unity" },
                { id: 4, title: "APP部", intro: "APP部门是在移动端高速发展背景下成立的部门。在这里，你会使用React Native技术开发手机应用，编写应用的客户端界面。", bgi: require('../assets/app.webp'), eng: "Application", tag: "#编写应用<br>#技术开发<br>#React Native技术" },
                { id: 5, title: "UI部", intro: "发挥创意，学习界面设计，打造美观、易用的用户界面。使用Photoshop Illustrator等软件来设计网页和APP界面，还负责视频制作，剪辑和特效，是决定界面外观和用户体验的部门，重在设计和操作逻辑。", bgi: require('../assets/UI.webp'), eng: "Design", tag: "#界面设计<br>#Ps Ai Ae<br>#交互设计<br>#设计网页，APP" },
                { id: 6, title: "iOS部", intro: "iOS部专注于基于Swift语言的iOS APP开发。在这里，你将获得专属Mac mini的使用权（社团期间免费），有资格参加移动应用创新赛和WWDC，还有机会获得加入Apple的免试工作机会。加入我们，开启你的iOS开发之旅吧！", bgi: require('../assets/iOS.webp'), eng: "iOS Club", tag: "#Swift语言开发<br>#IOS开发" }
            ]
        };
    },
    setup() {
        const route = useRoute()

        const activeIndex = ref(1)

        activeIndex.value = Number(route.query.id)

        console.log(activeIndex.value)

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
@media (min-width: 1025px) {
    .main {
        height: 100vh;
        width: auto;
        position: relative;
        background: url("../assets/bg.webp") no-repeat fixed;
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
        margin-top: 150px;
        margin-left: 0px;
        width: auto;
    }

    .debox {
        cursor: pointer;
    }
}

@media (max-width: 1024px) {
    * {
        padding: 0;
        margin: 0;
    }

    .main {
        background: url("../assets/bg.webp") no-repeat fixed;
        background-size: 100% 100%;
        position: relative;
        border: 1px;
        height: 170vh;
        width: 100vw;
        padding-top: 100px;
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
        flex-direction: column;
        justify-content: start;
        align-items: start;
        padding-top: 40px;
        width: 100%;
        margin-left: 2%;
    }

    .debox {
        cursor: pointer;
    }
}
</style>