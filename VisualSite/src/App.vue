<script setup lang="ts">
  import { ref, watch } from 'vue';



  type Point = {
        x: number,
        y: number
    }
  const AI_Bot_Pos = ref<Point>({x: 4, y: 6})
  const Player_Pos = ref<Point>({x: 4, y: 2})
  const distance = ref<number>(0)
  const angle = ref<number>(0) //in radians
  const playerhealth = ref<number>(100)
  const aibothealth = ref<number>(100)
  const playercooldown = ref<number>(0)
  const aibotcooldown = ref<number>(0)
  const ai_timeSinceHit = ref<number>(0)

  watch([AI_Bot_Pos, Player_Pos], ()=> {
    const Delta: Point = {x: AI_Bot_Pos.value.x-Player_Pos.value.x, y: AI_Bot_Pos.value.y-Player_Pos.value.y}
    distance.value = Math.sqrt((Delta.x*Delta.x)+(Delta.y*Delta.y))
    angle.value = Math.atan2(Delta.y, Delta.x)
    console.log("Angle is " + angle.value)
  })


  import PositionSelector from './components/PositionSelector.vue';
</script>

<template id = "main">
  <div id="main">
    <form>
      <div className="InputRow">
        <label for="PlayerHealth">Player Health</label>
        <input type="number" name="PlayerHealth" v-model="playerhealth">
        <label for="PlayerCooldown">Player Cooldown</label>
        <input type="number" name="PlayerCooldown" v-model="playercooldown">
      </div>
      <div className="InputRow">
        <label for="AIHealth">AI Health</label>
        <input type="number" name="AIHealth" v-model="aibothealth">
        <label for="AICooldown">AI Cooldown</label>
        <input type="number" name="AICooldown" v-model="aibotcooldown">
      </div>
      <label for="AItsh" :style="{marginTop: '1rem'}">Time since AI last landed a hit (in seconds)</label>
      <input type="number" name="AItsh" v-model="ai_timeSinceHit">
      
      <PositionSelector :aibotpos=AI_Bot_Pos :playerpos = Player_Pos :width=8 :height=8
      @update:ai="AI_Bot_Pos=$event" @update:player="Player_Pos=$event"
      ></PositionSelector>
      
    </form>
  </div>
  
</template>

<style scoped>
  
</style>
