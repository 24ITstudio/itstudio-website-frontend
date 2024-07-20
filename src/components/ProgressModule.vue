<template>
    <div class="line-container">
        <div class="line highlight-line">
            <div class="point highlight-point"></div>
        </div>
        <div class="line common-line">
            <div class="point common-point"></div>
        </div>
        <div class="line common-line">
            <div class="point common-point"></div>
        </div>
        <div class="line common-line">
            <div class="point common-point"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProgressModule'
}
</script>

<style>
.line-container {
    width: 76%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
}

.line {
    position: relative;
    width: 365px;
    height: 5px;
    margin: 20px 0;
}

.highlight-line {
    background-color: #fff;
}

.common-line {
    background-color: #808DA5;
}

.point {
    position: absolute;
    top: -7px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
}

.highlight-point {
    background-color: #fff;
}

.common-point {
    background-color: #808DA5;
}
</style>