<script setup lang="ts">
    import {ref, type Ref} from 'vue'

    const props = defineProps<{properties: {name: string, num: Ref<number>}[]}>()

    const pixelHeight = .50*window.innerHeight
    console.log(pixelHeight)
    for(let property of props.properties){
        console.log(property.num.value*pixelHeight)
    }

    function calcHeight(num: number) {
        return pixelHeight*num;
    }
</script>


<template>
    <div class="graphContainer">
        <div v-for="bar in properties" class="bar" :style="{height: calcHeight(bar.num.value)+'px'}"></div>
        <p :style="{ position: 'absolute', left: '0px', bottom: '48vh', transform: 'translateX(-100%)'}">1</p>
        <p :style="{ position: 'absolute', left: '0px', bottom: '-3rem', transform: 'translateX(-100%)'}">0</p>
    </div>
</template>

<style scoped>
    .graphContainer{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 35vw;
        height: 50vh;
        padding: 0 2vw 0 2vw;
        border-left: .5rem solid black;
        border-bottom: .5rem solid black;
        border-color: black;
        position: relative;
        gap: .5em;
    }
    .bar{
        background-color: red;
        width: 2rem;

    }


</style>