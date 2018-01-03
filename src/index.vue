<template>
    <div><img src="./logo.png" alt="">
        Hello {{ World }}! <ComponentA /></div>
</template>

<script lang="ts">
import ComponentA from './ComponentA.vue';
import World from './World';

export default {
    data() {
        return {
            World
        };
    },
    components: {
        ComponentA
    }
};
</script>


<style lang="less">
    @color: blue;

    div {
        color: @color;
    }
</style>

<style scoped>
    div {
        font-size: 32px;
    }
</style>
