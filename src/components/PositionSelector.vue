<script setup lang="ts">

import {onBeforeUnmount, onMounted, ref} from 'vue'
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
    const boxHeightPx = ref<number>(30*window.innerWidth/100)
    const boxWidthPx = ref<number>(30*window.innerWidth/100)
    const labelOffset = ref<string>('30.5vw')

    
    const selectedButton = ref<'AI_Bot' | 'Player'>('AI_Bot')

    const handleBoxClick = (event: MouseEvent) => {
        event.preventDefault()
        const box = event.currentTarget as HTMLElement
        const rect = box.getBoundingClientRect()
        const left = event.clientX - rect.left
        const bottom = rect.height - (event.clientY - rect.top)
       
    
   
        let pixelWidth = 0
        if (window.innerWidth<=850) {
            pixelWidth = 50*window.innerWidth/100
        }
        else {
            pixelWidth = 30*window.innerWidth/100
        }
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
        let pixelHeight = 0
        let pixelWidth = 0
        if (window.innerWidth<=850) {
            pixelHeight= 50*window.innerWidth/100
            pixelWidth = 50*window.innerWidth/100
        }
        else {
            pixelHeight = 30*window.innerWidth/100
            pixelWidth = 30*window.innerWidth/100
        }
        aiPixelPos.value = {x: (props.aibotpos.x/props.width)*pixelWidth, y: (props.aibotpos.y/props.height)*pixelHeight}
        playerPixelPos.value = {x: (props.playerpos.x/props.width)*pixelWidth, y: (props.playerpos.y/props.height)*pixelHeight}
        //NOTE no dynamic height is implemented in this component, all dimensions for display is a fixed vw
       
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

    <h3 :style="{marginTop:'1rem'}">Position</h3>
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
        <p class='label bottom'>{{ props.width }}</p>
        <p class='label top'>{{ props.height }}</p>
    </div>
    </section>
   
</template>
<style scoped>
    .posSelectorContainer{
        background-color: var(--card-bg-light);
        padding: 0px 2vw 2rem 2vw;
        border-radius: 1rem;
        box-shadow: 5px 5px .5rem var(--card-bg-light);
    }
    .box{
        border: 5px solid black;
        width:  30vw;
        height: 30vw;
        position: relative;
        margin: 0;
        --label-offset :30.5vw;
    }
    .label{
        position: absolute;
    }
    .label.bottom{
        bottom: 0px;
        transform: translateY(100%);
        left: var(--label-offset)
    }
    .label.top{
        left: 0px;
        transform: translateX(-100%);
        bottom: var(--label-offset)
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
 

    @media screen and (max-width: 850px) {
        .box{
            width: 50vw;
            height: 50vw;
            --label-offset: 50vw;
        }
        .label.top{
            transform: translateX(-200%);
        }
        .posSelectorContainer{
             padding: 0px 20vw 2rem 20vw;
        }
    }
    @media (prefers-color-scheme: dark){
        .posSelectorContainer{
            background-color: var(--card-bg-dark);
            box-shadow: 5px 5px .5rem var(--card-bg-dark);

        }
        .box{
            border: 5px solid var(--line-color-dark);
        }
    }
</style>

