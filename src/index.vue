<template>
    <div>Hello {{ World }}! <ComponentA /></div>
</template>

<script lang="tts">
import Component from 'vue-class-component';
import ComponentA from './ComponentA.vue';
import World from './World';

@Component();
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
