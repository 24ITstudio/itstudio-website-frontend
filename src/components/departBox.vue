<template>
    <div :class="['container', { 'expanded': isExpanded }]" @click="handleClick">
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
.container {
    z-index: 100;
    width: 160px;
    height: 700px;
    background-color: white;
    border-radius: 80px;
    transition: width 0.5s;
    margin-left: 20px;
}

.expanded {
    width: 700px;
}
</style>