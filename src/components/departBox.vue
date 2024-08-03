<template>
    <div :class="['container', { 'expanded': isExpanded }]" @click="handleClick"
        :style="{ backgroundImage: 'url(' + url + ')' }">
        <div :class="['head', { 'headup': isExpanded }]">{{ title }}</div>
        <div :class="['big', { 'bigup': isExpanded }]">{{ title }}</div>
        <div :class="['main', { 'mainup': isExpanded }]" v-html="intro"></div>
    </div>
</template>

<script>
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
.container {
    position: relative;
    z-index: 100;
    width: 160px;
    height: 75vh;

    background-position: center;
    border-radius: 80px;
    transition: width 0.5s;
    margin-left: 20px;
}

.expanded {
    width: 75vh;
}

.head {
    color: aliceblue;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    font-family: "Microsoft New Tai Lue";
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 50px;
    width: 400px;
    position: absolute;
    bottom: 180px;
    right: -140px;
    transition: 0.1s ease-in-out;
}

.headup {
    opacity: 0;
}

.big {
    color: aliceblue;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
    font-family: "Microsoft New Tai Lue";
    font-size: 76px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: absolute;
    top: 50px;
    left: 100px;
    margin: 0px;
    opacity: 1;
    opacity: 0;
    transition: 0.3s ease-in-out;
}

.bigup {
    color: aliceblue;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
    font-family: "Microsoft New Tai Lue";
    font-size: 76px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: absolute;
    top: 50px;
    left: 100px;
    margin: 0px;
    opacity: 1;
}

.main {
    color: aliceblue;
    backdrop-filter: blur(5px);
    border: 10px solid transparent;
    border-radius: 10px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
    font-family: "Microsoft New Tai Lue";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 50px;
    position: absolute;
    bottom: 10px;
    right: 30px;
    overflow: hidden;
    display: block;
    opacity: 0;
    width: 0px;
    transition: opacity 1s ease-in-out;
}

.mainup {
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
    margin: 50px;
    position: absolute;
    bottom: 10px;
    right: 30px;
    overflow: hidden;
    display: block;
    opacity: 0;
    width: 400px;
    opacity: 1;
}
</style>