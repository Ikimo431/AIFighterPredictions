<script setup lang="ts">
  import { ref } from 'vue';

  type Point = {
        x: number,
        y: number
    }
  const AI_Bot_Pos = ref<Point>({x: 0, y: 0})
  const Player_Pos = ref<Point>({x: 0, y: 0})
  const playerhealth = ref<number>(100)
  const aibothealth = ref<number>(100)
  const playercooldown = ref<number>(0)
  const aibotcooldown = ref<number>(0)
  const ai_tsh = ref<number>(0)
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
      <label for="AItsh" :style="{marginTop: '1rem'}">Time since AI last landed a hit</label>
      <input type="number" name="AItsh" v-model="ai_tsh">
      
      <PositionSelector :aibotpos=AI_Bot_Pos :playerpos = Player_Pos :width=100 :height=100
      @update:ai="AI_Bot_Pos=$event" @update:player="Player_Pos=$event"
      ></PositionSelector>
      
    </form>
  </div>
  
</template>

<style scoped>
  
</style>
