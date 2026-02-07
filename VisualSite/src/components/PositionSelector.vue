<script setup lang="ts">
    import {ref} from 'vue'
    const props = defineProps<{width: number, height: number}>()
    type Point = {
        x: number,
        y: number
    }

    const AI_Bot_Pos = ref<Point>({x: props.width/2, y: props.height-(props.height/10)})
    const Player_Pos = ref<Point>({x: props.width/2, y: (props.height/10)})
    const selectedButton = ref<'AI_Bot' | 'Player'>('AI_Bot')

    const handleBoxClick = (event: MouseEvent) => {
        const box = event.currentTarget as HTMLElement
        const rect = box.getBoundingClientRect()
        const left = event.clientX - rect.left
        const bottom = rect.height - (event.clientY - rect.top)
        console.log({left, bottom})
        if(selectedButton.value === 'AI_Bot'){
            AI_Bot_Pos.value = {x: left, y: bottom}
        } else {
            Player_Pos.value = {x: left, y: bottom}
        }
    }
</script>

<template>
    <div class = "selectorButtons">
        <label for="AI_Bot">AI Bot</label>
        <input type="radio" id="AI_Bot" value="AI_Bot" v-model="selectedButton">
        <label for="Player">Player</label>
        <input type ="radio" id="Player" value="Player" v-model="selectedButton">
    </div>
    <div class="box" @click="handleBoxClick">
        <div class="dot" :style="{left: AI_Bot_Pos.x + 'px', bottom: AI_Bot_Pos.y + 'px'}"></div>
        <div class="dot" :style="{left: Player_Pos.x + 'px', bottom: Player_Pos.y + 'px'}"></div>
    </div>
</template>
<style scoped>
    .box{
        border: 5px solid black;
        width:500px;
        height: 500px;
        position: relative;
    }
    .dot{
        position: absolute;
        width:10px;
        height:10px;
        border: 10px solid blue;
        background-color: blue;
    }
</style>

