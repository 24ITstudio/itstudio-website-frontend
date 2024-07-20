<template>
    <nav class="homenav">
        <div class="navtitle"><img src="../assets/Home.svg" alt=""></div>
        <router-link to="/intro">基本概况</router-link>
        <router-link to="/feature">部门特色</router-link>
        <a href="album.html">成员组成</a>
        <a href="join.html">项目成果</a>
        <div class="navanim home"></div>
        <div class="none"></div>
    </nav>
</template>

<style scoped>
a {

    text-decoration: none;
    color: rgba(212, 220, 226);
}

body {
    margin: 0;
    padding: 0;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow-x: hidden;
}

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-thumb {
    background: rgba(91, 105, 136, 0.8);
}

::-webkit-scrollbar-track {
    background: rgb(194, 213, 241);
}

nav {
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 70px;
    top: 0px;
    background-color: rgba(43, 51, 77, .6);
    overflow: hidden;
    font-size: 20px;
    color: white;
    z-index: 1000;
}

.homenav {
    animation: load2 1s linear;
}

nav .navtitle {
    padding-left: 50px;
    width: 25%;
    margin-right: 1.2%;
}

nav .navtitle strong {
    font-size: 50px;
    font-weight: bolder;
}

nav a {
    display: block;
    justify-content: center;
    text-decoration: none;
    z-index: 1;
    height: inherit;
    line-height: 70px;
    width: 180px;
    text-align: center;
    font-weight: bolder;
    color: white;
    opacity: 1;
    transition: 0.5s;
    padding-left: 100px;
}

nav .navanim {
    position: absolute;
    height: inherit;
    z-index: 0;
    background: rgb(155, 200, 240);
    border-radius: 5px;
    opacity: 0.5;
    left: 0px;
    transition: all .5s ease 0s;
    width: 120px;
}

nav .home,
a:nth-child(2):hover~.navanim {
    width: 120px;
    left: 540px;
}

nav .about,
a:nth-child(3):hover~.navanim {
    width: 120px;
    left: 786px;
}

nav .blog,
a:nth-child(4):hover~.navanim {
    width: 120px;
    left: 1037px;
}

nav .album,
a:nth-child(5):hover~.navanim {
    width: 120px;
    left: 1290px;
}

nav .join,
a:nth-child(6):hover~.navanim {
    width: 120px;
    left: 1190px;
}

nav .none {
    width: 20%;
}
</style>