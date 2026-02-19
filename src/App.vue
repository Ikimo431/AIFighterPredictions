<script setup lang="ts">
  import { ref, watch } from 'vue';
  import runModel from './Utils/onnxConnector';
  import jsonData from '../config.json' with { type: 'json' };
  const maxHealth = ref<number>(jsonData.FighterSettings.Health)
  const blockCooldown = ref<number>(jsonData.FighterSettings.BlockActionCooldown)
  const attackCooldown = ref<number>(jsonData.FighterSettings.AttackActionCooldown)

  type Point = {
        x: number,
        y: number
    }

  const selectedModel = ref<string>('CuatiousAggro_reward_AggressionComplete')

  //input values
  const AI_Bot_Pos = ref<Point>({x: 4, y: 6})
  const Player_Pos = ref<Point>({x: 4, y: 2})
  const distance = ref<number>(0)
  const angle = ref<number>(0) //in radians
  const playerhealth = ref<number>(100)
  const aibothealth = ref<number>(100)
  const playercooldown = ref<number>(0)
  const aibotcooldown = ref<number>(0)
  const ai_timeSinceHit = ref<number>(0)
  //outputvalues 
  const advanceProb = {name: 'advance', num: ref<number>(0)}
  const retreatProb = {name: 'retreat', num: ref<number>(0)}
  const slProb = {name: 'strafe left', num: ref<number>(0)}
  const srProb = {name: 'strafe right', num: ref<number>(0)}
  const attackProb = {name: 'attack', num: ref<number>(0)}
  const blockProb = {name: 'block', num: ref<number>(0)}



  watch([AI_Bot_Pos, Player_Pos], ()=> {
    const Delta: Point = {x: AI_Bot_Pos.value.x-Player_Pos.value.x, y: AI_Bot_Pos.value.y-Player_Pos.value.y}
    distance.value = Math.sqrt((Delta.x*Delta.x)+(Delta.y*Delta.y))
    angle.value = Math.atan2(Delta.y, Delta.x)
    console.log("Angle is " + angle.value)

   
  })
  watch([AI_Bot_Pos, Player_Pos, distance, angle, playerhealth, 
        aibothealth, playercooldown, aibotcooldown, ai_timeSinceHit, selectedModel], 
      async ()=>{
         const outputProbs = await runModel(selectedModel.value, {
          distance: distance.value,
          angle: angle.value,
          playerHealth: playerhealth.value,
          AIHealth: aibothealth.value,
          AI_timesinceHit: ai_timeSinceHit.value,
          AI_Actioncooldown: aibotcooldown.value,
          Player_ActionCooldown: playercooldown.value
        })
        if (!outputProbs){
          throw new Error('Failed to get output probabilities')
        }
        advanceProb.num.value=outputProbs[0] as number
        retreatProb.num.value=outputProbs[1] as number
        slProb.num.value=outputProbs[2] as number
        srProb.num.value=outputProbs[3] as number
        attackProb.num.value = outputProbs[4] as number
        blockProb.num.value = outputProbs[5] as number

  
      }
  )


  import PositionSelector from './components/PositionSelector.vue';
import PercentBargraph from './components/PercentBargraph.vue';
</script>

<template id = "main">
  <div id="main">
    <form>
      <div class="stateInputs">
      <label for="Selected model" :style="{marginBottom: '0.5rem'}">AI Model</label>
      <select v-model="selectedModel" name="SelectedModel">
        <option value="CautiousAggro_Reward_AggressionComplete">CautiousAggro_Reward_AggressionComplete</option>
        <option value="Coward_Reward_ChaseComplete">Coward_Reward_ChaseComplete</option>
        <option value="Smart_BasicComplete">Smart_BasicComplete</option>
      </select>
      <div className="InputRow">
        <label for="PlayerHealth">Player Health</label>
        <input type="number" :max="maxHealth" min="0" name="PlayerHealth" v-model="playerhealth">
        <label for="PlayerCooldown">Player Cooldown</label>
        <input type="number" name="PlayerCooldown" :max="Math.max(blockCooldown, attackCooldown)" min="0" v-model="playercooldown">
      </div>
      <div className="InputRow">
        <label for="AIHealth">AI Health</label>
        <input type="number" name="AIHealth" :max="maxHealth" min="0" v-model="aibothealth">
        <label for="AICooldown">AI Cooldown</label>
        <input type="number" name="AICooldown" :max="Math.max(blockCooldown, attackCooldown)" min="0" v-model="aibotcooldown">
      </div>
      <label for="AItsh" :style="{marginTop: '1rem'}">Time since AI last landed a hit (in seconds)</label>
      <input type="number" min="0"name="AItsh" v-model="ai_timeSinceHit" :style="{marginBottom: '5rem'}">
      </div>
      <div class="PosAndGraph">
        <PositionSelector :aibotpos=AI_Bot_Pos :playerpos = Player_Pos :width=8 :height=8
        @update:ai="AI_Bot_Pos=$event" @update:player="Player_Pos=$event"
        ></PositionSelector>
        <PercentBargraph :properties="[advanceProb, retreatProb, slProb, srProb, attackProb, blockProb]"></PercentBargraph>
      </div>
     
    </form>
  </div>
  
</template>

<style scoped>
  .PosAndGraph{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    width: 100vw;

  }
  .InputRow{
    margin-top: .5rem;
  }
  .stateInputs{
      background-color: var(--card-bg-light);
      padding: 2rem 8vw 0px 8vw;
      border-radius: 1rem;
      box-shadow: 5px 5px .5rem var(--card-bg-light);
      margin-bottom: 2rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  @media screen and (max-width: 850px){
    .PosAndGraph{
      flex-direction: column;
      gap: 10vh;
    }
  }
  @media (prefers-color-scheme: dark){
    .stateInputs{
      background-color: var(--card-bg-dark);
       box-shadow: 5px 5px .5rem var(--card-bg-dark);
    }
  }
</style>
