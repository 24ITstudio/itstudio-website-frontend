<template>
    <div :class="['container', { 'expanded': isExpanded }]" @click="handleClick"
        :style="{ backgroundImage: 'url(' + url + ')' }">
        <div :class="['head', { 'headup': isExpanded }]">{{ title }}</div>
        <div :class="['big', { 'bigup': isExpanded }]">{{ title }}</div>
        <div :class="['eng', { 'engup': isExpanded }]">{{ eng }}</div>
        <div :class="['main', { 'mainup': isExpanded }]" v-html="intro"></div>
        <div :class="['tag', { 'tagup': isExpanded }]" v-html="tag"></div>
    </div>
</template>

<script>
import { String } from 'core-js';

export default {
    props: {
        index: {
            type: Number,
            required: true
        },
        activeIndex: {
            type: Number,
            default: null
        },
        title: {
            type: String,
        },
        intro: {
            type: String,
        },
        url: {
            type: String,
        },
        eng: {
            type: String,
        },
        tag: {
            type: String,
        }
    },
    computed: {
        isExpanded() {
            return this.index === this.activeIndex;
        }
    },
    methods: {
        handleClick() {
            this.$emit('update:activeIndex', this.index);
        }
    }
};  
</script>

<style scoped>
@media (min-width: 1025px) {
    .container {
        position: relative;
        z-index: 100;
        width: 160px;
        height: 75vh;
        background-position: center;
        border-radius: 80px;
        transition: width 0.5s;
        margin-left: 20px;
        background-size: auto 100%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        overflow: hidden;
    }

    .container:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        border-radius: 80px;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 2;
    }

    .expanded {
        width: 60vh;
    }

    .head {
        color: aliceblue;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
        font-family: "Microsoft New Tai Lue";
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position: absolute;
        bottom: 100px;
        left: 20px;
        transition: 0.1s ease-in-out;
        writing-mode: vertical-rl;
        z-index: 3;
        white-space: nowrap;
    }

    .headup {
        opacity: 0;
    }

    .big {
        opacity: 0;
        transition: 0.2s ease-in-out;
    }

    .bigup {
        color: aliceblue;
        text-shadow: 1vh 0.5vh 1vh rgb(0, 0, 0);
        font-family: "Microsoft New Tai Lue";
        font-size: 8vh;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position: absolute;
        top: 4vh;
        left: 6vh;
        margin: 0px;
        opacity: 1;
        z-index: 3;
        white-space: nowrap;
    }

    .eng {
        opacity: 0;
        transition: 0.2s ease-in-out;
    }

    .engup {
        display: block;
        color: #FFF;
        opacity: 1;
        text-align: right;
        text-shadow: 1vh 0.5vh 1vh rgba(255, 255, 255);
        font-family: "Montserrat Alternates";
        font-size: 4vh;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        z-index: 3;
        position: absolute;
        top: 16vh;
        left: 6vh;
        white-space: nowrap;
    }

    .tag {
        opacity: 0;
        transition: 0.2s ease-in-out;
    }

    .tagup {
        opacity: 1;
        flex: 0 0 auto;
        margin: 10px 40px 40px 40px;
        color: #FFF;
        font-family: "Montserrat Alternates";
        font-size: 3vh;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        z-index: 3;
    }

    .main {
        opacity: 0;
        /* transition: 0.2s; */
    }

    .mainup {
        /* transition-delay: 0.5s; */
        color: aliceblue;
        backdrop-filter: blur(5px);
        border: 10px solid transparent;
        border-radius: 20px;
        font-family: "Microsoft New Tai Lue";
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
        font-size: 2.5vh;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        overflow: hidden;
        display: block;
        opacity: 1;
        z-index: 3;
        /* flex: 0 0 auto; */
        width: 50vh;
        margin: 10px 40px 10px 40px;
        transform: translateY(-5vh);
    }
}

@media (max-width: 1024px) {
    .container {
        position: relative;
        z-index: 100;
        width: 86%;
        height: 120px;
        background-position: center;
        border-radius: 80px;
        transition: width 0.5s;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
    }

    .container:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        border-radius: 80px;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 2;
    }

    .expanded {
        height: 500px;
    }

    .head {
        color: aliceblue;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
        transform-origin: 50% 50%;
        font-family: "Microsoft New Tai Lue";
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        /* margin: 50px; */
        width: 200px;
        position: absolute;
        top: 10px;
        left: 40px;
        transition: 0.1s ease-in-out;
        z-index: 3;
    }

    .headup {
        opacity: 0;
    }

    .big {
        opacity: 0;
        transition: 0.2s ease-in-out;
    }

    .bigup {
        color: aliceblue;
        text-shadow: 1vh 0.5vh 1vh rgb(0, 0, 0);
        font-family: "Microsoft New Tai Lue";
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position: absolute;
        top: 20px;
        left: 60px;
        margin: 0px;
        opacity: 1;
        z-index: 3;
        white-space: nowrap;
    }

    .eng {
        opacity: 0;
        transition: 0.2s ease-in-out;
    }

    .engup {
        display: block;
        color: #FFF;
        opacity: 1;
        text-align: right;
        text-shadow: 1vh 0.5vh 1vh rgba(255, 255, 255);
        font-family: "Montserrat Alternates";
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        z-index: 3;
        position: absolute;
        top: 70px;
        left: 60px;
        white-space: nowrap;
    }

    .tag {
        opacity: 0;
        transition: 0.2s ease-in-out;
    }

    .tagup {
        opacity: 1;
        flex: 0 0 auto;
        margin: 10px 40px 40px 40px;
        color: #FFF;
        font-family: "Montserrat Alternates";
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        z-index: 3;
    }

    .main {
        opacity: 0;
        /* transition: 0.2s; */
    }

    .mainup {
        /* transition-delay: 0.5s; */
        color: aliceblue;
        backdrop-filter: blur(5px);
        border: 10px solid transparent;
        border-radius: 20px;
        font-family: "Microsoft New Tai Lue";
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        overflow: hidden;
        display: block;
        opacity: 1;
        z-index: 3;
        /* flex: 0 0 auto; */
        width: 80%;
        margin: 10px 40px 10px 40px;
        transform: translateY(-10px);
    }
}
</style>