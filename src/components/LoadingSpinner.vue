<template>
    <div id="container">
        <div class="stick"></div>
        <div class="stick"></div>
        <div class="stick"></div>
        <div class="stick"></div>
        <div class="stick"></div>
        <div class="stick"></div>
        <h1>Loading...</h1>
    </div>
</template>

<script>
export default {
    name: 'LoadingSpinner'
}
</script>

<style scoped>
/* html { */
    /* background-color: #DC554F; */
/* } */


#container {
    width: 180px;
    /* 30px * 6 = 180px */
    /* padding-top: 200px; */
    padding-top: 20%;
    /* padding-left: 100px; */
    padding-left: 5%;
    margin: auto;
    vertical-align: middle;
}

.stick {
    width: 35px;
    /* 固定的棒子长度 */
    height: 3px;
    background: white;
    /* 替换为实际的棒子颜色 */
    display: inline-block;
    margin-left: -8px;
    /* 固定的棒子间距 */
}

.stick:nth-child(odd) {
    transform: rotate(30deg);
    animation: fall 2s infinite;
}

.stick:nth-child(even) {
    transform: rotate(-30deg);
    animation: rise 2s infinite;
}

h1 {
    /* border: 1px, solid, rgb(187, 60, 60); */
    font-family: 'Lato', sans-serif;
    color: white;
    /* 替换为实际的文本颜色 */
    text-transform: uppercase;
    font-size: 1em;
    letter-spacing: 1.5px;
    text-align: center;
    width: 155px;
    margin-top: 20px;
    animation: fade 2s infinite;
}

@keyframes rise {
    50% {
        transform: rotate(30deg);
    }
}

@keyframes fall {
    50% {
        transform: rotate(-30deg);
    }
}

@keyframes fade {
    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}
</style>