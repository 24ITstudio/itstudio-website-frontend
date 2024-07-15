<!-- 临时用于router的homePage页面！ -->
<template>
    <nav class="homenav">
        <div class="navtitle"><strong>爱特</strong>|OUR PROJECT</div>
        <a href="home.html">基本概况</a>
        <a href="about.html">部门特色</a>

        <a href="album.html">成员组成</a>
        <a href="join.html">项目成果</a>
        <div class="navanim home"></div>
        <div class="none"></div>

    </nav>

    <main class="main">
        <section class="sec">
            <div class="titleimg">
                <div class="title3">
                    <div class="title">

                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 62 62" fill="none"
                            id="one">
                            <g clip-path="url(#clip0_158_23)">
                                <path
                                    d="M56.8075 20.6667C56.8075 18.8067 55.8516 17.1792 54.3791 16.275L31 2.58334L7.62079 16.275C6.14829 17.1792 5.16663 18.8067 5.16663 20.6667V46.5C5.16663 49.3417 7.49163 51.6667 10.3333 51.6667H51.6666C54.5083 51.6667 56.8333 49.3417 56.8333 46.5L56.8075 20.6667ZM31 33.5833L9.66163 20.2533L31 7.75001L52.3383 20.2533L31 33.5833Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_158_23">
                                    <rect width="58" height="55" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div><router-link to="/signUp">报名入口</router-link></div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 62 62" fill="none"
                            id="two">
                            <path
                                d="M25.8727 26.4191C22.5816 26.4191 19.7643 25.2521 17.4206 22.9182C15.077 20.5843 13.9051 17.7786 13.9051 14.5012C13.9051 11.2238 15.077 8.41812 17.4206 6.0842C19.7643 3.75029 22.5816 2.58333 25.8727 2.58333C29.1638 2.58333 31.9812 3.75029 34.3249 6.0842C36.6685 8.41812 37.8404 11.2238 37.8404 14.5012C37.8404 17.7786 36.6685 20.5843 34.3249 22.9182C31.9812 25.2521 29.1638 26.4191 25.8727 26.4191ZM56.9886 58.5973L49.5088 51.1486C48.4616 51.7445 47.3397 52.2411 46.1429 52.6384C44.9461 53.0356 43.6746 53.2343 42.3282 53.2343C38.5883 53.2343 35.4089 51.9312 32.79 49.3252C30.1731 46.7172 28.8646 43.551 28.8646 39.8267C28.8646 36.1023 30.1731 32.9362 32.79 30.3281C35.4089 27.7221 38.5883 26.4191 42.3282 26.4191C46.0681 26.4191 49.2475 27.7221 51.8664 30.3281C54.4833 32.9362 55.7918 36.1023 55.7918 39.8267C55.7918 41.1674 55.5923 42.4337 55.1934 43.6255C54.7945 44.8173 54.2958 45.9346 53.6975 46.9774L61.1772 54.4261C61.7257 54.9723 62 55.6675 62 56.5117C62 57.3559 61.7257 58.0511 61.1772 58.5973C60.6287 59.1435 59.9306 59.4167 59.0829 59.4167C58.2352 59.4167 57.5371 59.1435 56.9886 58.5973ZM42.3282 47.2753C44.4226 47.2753 46.1928 46.5553 47.6389 45.1152C49.0849 43.6751 49.808 41.9123 49.808 39.8267C49.808 37.741 49.0849 35.9782 47.6389 34.5381C46.1928 33.098 44.4226 32.378 42.3282 32.378C40.2339 32.378 38.4637 33.098 37.0176 34.5381C35.5715 35.9782 34.8485 37.741 34.8485 39.8267C34.8485 41.9123 35.5715 43.6751 37.0176 45.1152C38.4637 46.5553 40.2339 47.2753 42.3282 47.2753ZM7.92131 50.2548C6.27576 50.2548 4.86657 49.6718 3.69375 48.5059C2.52292 47.3379 1.9375 45.9346 1.9375 44.2959V41.9868C1.9375 40.2984 2.36135 38.7342 3.20906 37.2941C4.05677 35.854 5.2286 34.7616 6.72455 34.0167C9.26767 32.7256 12.1349 31.6331 15.3263 30.7393C18.5176 29.8454 22.0581 29.3985 25.9475 29.3985C24.9502 30.9379 24.1893 32.5885 23.6647 34.3504C23.1421 36.1142 22.8808 37.9397 22.8808 39.8267C22.8808 41.664 23.1421 43.4636 23.6647 45.2255C24.1893 46.9893 24.9502 48.6657 25.9475 50.2548H7.92131Z"
                                fill="white" />
                        </svg>
                        <div><router-link to="/log">进度查询</router-link></div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 62 62" fill="none"
                            id="three">
                            <g clip-path="url(#clip0_15_58)">
                                <path
                                    d="M56.8333 18.0317V41.3333C56.8333 44.175 54.5083 46.5 51.6666 46.5H15.5L5.16663 56.8333V10.3333C5.16663 7.49167 7.49163 5.16667 10.3333 5.16667H36.425C36.27 5.99333 36.1666 6.87167 36.1666 7.75C36.1666 14.88 41.9533 20.6667 49.0833 20.6667C52.0025 20.6667 54.6633 19.6592 56.8333 18.0317ZM41.3333 7.75C41.3333 12.0383 44.795 15.5 49.0833 15.5C53.3716 15.5 56.8333 12.0383 56.8333 7.75C56.8333 3.46167 53.3716 0 49.0833 0C44.795 0 41.3333 3.46167 41.3333 7.75Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_15_58">
                                    <rect width="58" height="55" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div><router-link to="/letter">留言板</router-link></div>


                    </div>


                </div>
                <div class="title2">爱特工作室</div>





            </div>
        </section>
    </main>
</template>

<style scoped>
.titleimg {
    background-image: url(../assets/bg.jpg);
    height: 100%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    background-attachment: fixed;
    width: 100vw;
    transition: 1s ease 0s;
    animation: load 1s;
}

.titleimg .title {
    width: 1540px;
    margin-left: 300px;
    padding-top: 250px;
    line-height: 20px;
    font-size: 30px;
    font-weight: bolder;
    color: white;


}

.titleimg .title2 {
    transform: translate(240px, -330px);
    font-size: 130px;
    font-weight: 700;
    line-height: 28px;

    color: white;
    margin-top: 100px;


}

#one {
    transform: translate(-70px, 40px);
}

#two {
    transform: translate(-70px, 35px);
}

svg {
    transform: translate(-70px, 40px);
}

.title3 {
    background-color: #04132D;
    width: 30vw;
    height: 100%;
}

.button {
    width: 10%;
    height: 5%;

    color: rgb(212, 220, 226);
    border: 1px solid rgba(212, 220, 226);
    border-radius: 15px;
    text-align: center;
    font-size: 24px;
    font-style: italic;
    line-height: 40px;
    transform: translate(340px, -180px);
}

a {

    text-decoration: none;
    color: rgba(212, 220, 226);
}

.buttona:hover,
.button:hover {
    text-decoration: none;
    background-color: rgba(70, 73, 75);
    border: 1px solid rgba(70, 73, 75);
    color: white;
}

.main {
    scroll-snap-type: y mandatory;
    overflow: scroll;
    overflow-x: hidden;
    height: 100vh;
    width: 100%;
}

.sec {
    height: 100vh;
    width: 100%;
    scroll-snap-align: start;
}

.pt {
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 250px;
    float: left;
    margin: 150px 0px 0px 105px;
    background: rgba(219, 235, 241, 0.8);
    box-shadow: 0 0 15px rgb(59, 73, 95);
    border-radius: 15px;
    overflow: hidden;
    scroll-snap-align: start;
    transition: all 0.5s ease 0s;
}

.pt:hover {
    cursor: pointer;
    transform: scale(1.05);
}

.imghid {
    overflow: hidden;
}


.pt .img {
    height: 190px;
    width: 250px;
    background-size: cover;
    background-position: center 0px;
    transition: all 0.5s ease 0s;
    opacity: 0.8;
}

.pt .img:hover {
    transform: scale(1.1);
}

.pt .txt {
    height: 310px;
    width: 200px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin: auto;

}

.pt .txt h1 {
    text-align: center;
    font-size: 3em;
    color: rgb(28, 44, 68);
    height: 30px;
    line-height: 30px;
}

.pt .txt p {
    margin-top: -2px;
    word-wrap: break-word;
    color: rgb(114, 182, 202);
}

@keyframes load {
    0% {
        background-position-y: 50px;
        opacity: 0;
    }

    100% {
        background-position-y: -134px;
        opacity: 1;
    }
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

.foot {
    margin-top: 0px;
    width: 100%;
    height: 100px;
    float: left;
    clear: both;
    text-align: center;
    margin-bottom: 0px;
    background-color: rgba(84, 132, 161, 0.8);
}

.foot p {
    line-height: 10px;
    color: rgb(28, 43, 43);
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

@keyframes load2 {
    0% {
        top: -80px;
        opacity: 0;
    }

    100% {
        top: 0px;
        opacity: 0.8;
    }
}
</style>