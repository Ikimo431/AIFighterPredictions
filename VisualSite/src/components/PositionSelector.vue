<script setup lang="ts">

import {onBeforeUnmount, onMounted, ref, type Ref} from 'vue'
import runModel from '../Utils/onnxConnector';
    type Point = {
        x: number,
        y: number
    }
    const props = defineProps<{width: number, height: number, 
        aibotpos: Point, playerpos: Point}>()
    const emit = defineEmits<{
        (e: 'update:ai', value: Point): void,
        (e: 'update:player', value:Point): void
    }>()
    const aiPixelPos = ref<Point>({x: 0, y: 0})
    const playerPixelPos = ref<Point>({x: 0, y: 0})
    

    
    const selectedButton = ref<'AI_Bot' | 'Player'>('AI_Bot')

    const handleBoxClick = (event: MouseEvent) => {
        event.preventDefault()
        const box = event.currentTarget as HTMLElement
        const rect = box.getBoundingClientRect()
        const left = event.clientX - rect.left
        const bottom = rect.height - (event.clientY - rect.top)
       
    
        const pixelWidth = 30 * window.innerWidth/100
        const coordPoint: Point = {x: left/pixelWidth*props.width, y: bottom/pixelWidth*props.height}
        console.log("COORD POINT IS " + JSON.stringify(coordPoint))
        if(selectedButton.value === 'AI_Bot'){
            emit('update:ai', coordPoint)
            aiPixelPos.value = {x: left-10, y: bottom-10}
        } else {
            playerPixelPos.value = {x: left-10, y: bottom-10}
            emit('update:player', coordPoint)
        }
       
    }

    function onResize(){
        const pixelWidth = 30*window.innerWidth/100
        aiPixelPos.value = {x: (props.aibotpos.x/props.width)*pixelWidth, y: (props.aibotpos.y/props.width)*pixelWidth}
        playerPixelPos.value = {x: (props.playerpos.x/props.width)*pixelWidth, y: (props.playerpos.y/props.width)*pixelWidth}
    }

    onMounted(()=>{
        

        window.addEventListener('resize', onResize)
        onResize()

    })

    onBeforeUnmount(()=>{
        window.removeEventListener('resize', onResize)
    })
        
  
</script>

<template>
 

    <section class="posSelectorContainer">

   
    <p :style="{marginTop:'1rem'}">Position</p>
    <div class = "selectorButtons">
        <div class = 'InputRow'>
            <label for="AI_Bot">AI Bot</label>
            <input type="radio" id="AI_Bot" value="AI_Bot" v-model="selectedButton">
            <label for="Player">Player</label>
            <input type ="radio" id="Player" value="Player" v-model="selectedButton">
        </div>
        <div :style ="{margin:'1.5rem'}" class = 'InputRow'>
            <input type="text" v-if="selectedButton=='AI_Bot'" v-model="aibotpos.x"></input>
            <input type="text" v-if="selectedButton=='AI_Bot'" v-model="aibotpos.y"></input>
            <input type="text" v-if="selectedButton=='Player'" v-model="playerpos.x"></input>
            <input type="text" v-if="selectedButton=='Player'" v-model="playerpos.y"></input>
        </div>
    </div>
    <div class="box" @click="handleBoxClick">
        <div class="dot ai" :style="{left: aiPixelPos.x+ 'px', bottom: aiPixelPos.y + 'px'}"></div>
        <div class="dot player" :style="{left: playerPixelPos.x + 'px', bottom: playerPixelPos.y + 'px'}"></div>
        <p :style ="{ position: 'absolute', left: '30.5vw', bottom: '0px', transform: 'translateY(100%)'}">{{ props.width }}</p>
        <p :style ="{ position: 'absolute', bottom: '30vw', left: '0px', transform: 'translateX(-100%)'}">{{ props.height }}</p>
    </div>
    </section>
   
</template>
<style scoped>
    .box{
        border: 5px solid black;
        width:  30vw;
        height: 30vw;
        position: relative;
        margin: 0;
    }
    .dot{
        position: absolute;
        width:10px;
        height:10px;
        
    }
    .player{
        background-color: blue;
    }
    .ai{
        background-color: red;
    }
    p{
        margin:0%
    }
    .selectorButtons{
        display: flex;
        flex-direction: column;
    }
    .InputRow{
        width: 100vw;
        display: flex;
        justify-content: center;
    }
    .posSelectorContainer{
        width: 30vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

