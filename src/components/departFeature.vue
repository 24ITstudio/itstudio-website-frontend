<template>
    <navHead></navHead>
    <div class="main" @click="handleClickOutside">
        <div class="center">
            <deBox class="debox" v-for="depart in departs" :key="depart.id" :index="depart.id"
                :activeIndex="activeIndex" :url="depart.bgi" :title="depart.title" :intro="depart.intro"
                @update:activeIndex="updateActiveIndex" @click.stop="" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import deBox from './departBox.vue';
import navHead from './nav-head.vue'
export default {
    components: {
        deBox,
        navHead
    },
    data() {
        return {
            departs: [
                {
                    id: 1, title: "程序部", intro: "程序部门主要职能为基于Django, ASP.NET, PHP, JSP等技术，应用Python, c#, Java， c++等语言开发应用程序，完成与SQLServer，MySQL等数据库的交互，设计对外API接口等。<br />程序部，所谓之程序，乃是后端开发的意思，并非常规意义上常见的桌面应用程序，而是更加偏向计算机网络方向的学习核心。主要能够学到的内容有后端接口、数据库以及服务器的相关一系列操作，这也是每一个互联网应用中必要的部分，会比较有挑战性喔，请做好无限学习的准备！", bgi: require('../assets/application.webp')
                },
                {
                    id: 2, title: "Web部", intro: "Web开发部门利用html, CSS,JavaScript为主要语言来对网站表现层与结构层等前台部分做出完关构造，在实现设计师要带给用户上的视觉冲击以外还能保证与后台交互实现网站对用户功能，从而让网站突破实用性和吸引力。<br />Web开发可以暂时理解成写网页，例如你现在浏览的网页，你所能看到的部分（网页上的文字图片、各种动画效果）都是我们的成员在Web开发部门学习后的作品。写网页，我们这里需要用到三部分知识：Html、CSS、JavaScript。大家可以看到没有涉及到C语言、Python等，因此对零基础的同学较为友好。在进入社团前，我们期望你们预习基础的Html知识，掌握基本的标签。在进入社团后，我们每周都会组织授课，按照上述的顺序讲课，在课下我们会布置相关的练习", bgi: require('../assets/web.webp')
                },
                {
                    id: 3, title: "游戏部", intro: "爱特游戏部门是2018年新成立的部门。专注于2D游戏的开发。游戏以游戏性为本，以社交性为辅，以商业性为底。他们用心为自己的理想开辟道路。<br />大一秋季学期期间会交给新生Unity的一些简单的使用，包括场景实例搭建和脚本代码编写，让新生具备自主开发简单的小游戏的能力。期间会有三次项目作业，难度逐步提升。大一春季学期期间则分组安排进行团队项目开发，每组成员在一学期内多人合作完成一个大型游戏项目的开发。", bgi: require('../assets/game.webp')
                },
                {
                    id: 4, title: "APP部", intro: "爱特工作室APP应用部门是在移动端高速发展下，于2017年成立的部门。<br />Android应用开发基于Java等语言，负责编写应用客户端界面，完成客户端与服务端的信息应用开发部门扩展了社团的变量，使工作室的技术力量多样化。<br />APP部门主要负责移动APP和微信小程序的设计与制作，在一年的学习你将动手实现5个不同类型的APP，拥有自主设计开发APP的能力，加入我们让我们一起设计一款属于你自己的APP吧。", bgi: require('../assets/app.webp')
                },
                {
                    id: 5, title: "UI部", intro: "UI设计部门主要使用Photoshop、Illustrator等软件,对网页、APP等界面进行设计，并负责各类视频制作、剪辑、特效制作的工作。<br />UI设计是什么？这或许是每一个萌新都好奇的问题。（不会就百——）通俗来讲，UI就是决定APP界面、网页等长啥样的部门，重在【设计】（包括人机交互、操作逻辑、界面美观的整体设计）。那就不得不说设计师们与Adobe全家桶等不得不说的故事了。（想听吗？想听就来！报！名！）来UI部门，你可以畅游在Adobe的海洋，你可以体会格式塔心理的美学，你可以c以感受设计之道......（反正来就vans加入我们吧！）", bgi: require('../assets/UI.webp')
                }
            ]
        };
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