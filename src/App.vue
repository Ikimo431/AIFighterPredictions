<script setup lang="ts">
  import { ref, watch } from 'vue';
  import runModel from './Utils/onnxConnector';
  import jsonData from '../config.json' with { type: 'json' };
  const maxHealth = ref<number>(jsonData.FighterSettings.Health)
  const blockCooldown = ref<number>(jsonData.FighterSettings.BlockActionCooldown)
  const attackCooldown = ref<number>(jsonData.FighterSettings.AttackActionCooldown)
  const meterConversion = (1/jsonData.UnitRatios.UnitsToMeters)
  const arenaHeight = jsonData.ArenaSettings.Height*meterConversion
  const arenaWidth = jsonData.ArenaSettings.Length*meterConversion

  type Point = {
        x: number,
        y: number
    }

  const selectedModel = ref<string>('CautiousAggro_Reward_AggressionComplete')
  const selectedModelType = ref<string | undefined>(undefined)
  const InputTensorScaler = ref<number>(1);
  const selectedModelVersion = ref<string | undefined>(undefined)
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
        aibothealth, playercooldown, aibotcooldown, ai_timeSinceHit, selectedModel, InputTensorScaler], 
      async ()=>{
         const outputProbs = await runModel(selectedModel.value, {
          distance: distance.value,
          angle: angle.value,
          playerHealth: playerhealth.value,
          AIHealth: aibothealth.value,
          AI_timesinceHit: ai_timeSinceHit.value,
          AI_Actioncooldown: aibotcooldown.value,
          Player_ActionCooldown: playercooldown.value,
          IncludeInRange: selectedModelVersion.value=="V1"? false : true
        }, InputTensorScaler.value)
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
  import GraphNetVisual from './components/GraphNetVisual.vue';
</script>

<template id = "main">
  <div id="main">
    <form>
      <div class="stateInputs">

      <label for = "ModelVersion">
      <select v-model="selectedModelVersion" name="ModelVersion">
        <option value = "V1">V1</option>
        <option value = "V2">V2</option>
      </select>
      </label>

      
      <label for="ModelType" :style="{marginBottom: '0.5rem'}">Model Category</label>
      <p v-if="!selectedModelVersion">Please Select a Model Version</p>
      <select v-if="selectedModelVersion" v-model="selectedModelType" name="ModelType">
        <option value="Berserker">Berserker</option>
        <option value="CautiousAggro">CautiousAggro</option>
        <option value="Coward">Coward</option>
        <option value="Balance">Balance</option>
      </select>

      <label for="Selected model" :style="{marginBottom: '0.5rem'}">AI Model</label>
      <p v-if="!selectedModelType">Please Select a Model Type</p>
      <select v-model="selectedModel" v-if="selectedModelType=='Berserker' && selectedModelVersion=='V1'" name="SelectedModel">
         <option value="Beserker_Reward_AggressionComplete">Beserker_Reward_AggressionComplete</option>
      </select>
      <select v-model="selectedModel" v-if="selectedModelType=='Balance' && selectedModelVersion=='V1'">
        <option value="Balance_Reward_AggressionBaseCandidateComplete30">Balance_Reward_AggressionBaseCandidateComplete30</option>
      </select>

      <select v-model="selectedModel" v-if="selectedModelType=='CautiousAggro' && selectedModelVersion=='V1'" name="SelectedModel">
          <option value="CautiousAggro_BasicComplete">CautiousAggro_BasicComplete</option>
          <option value="CautiousAggro_Reward_AggressionComplete">CautiousAggro_Reward_AggressionComplete</option>

          <option value="CautiousAggro_BasicCompletev2">CautiousAggro_BasicCompletev2</option>
          <option value="CautiousAggro_Reward_AggressionCompletev2">CautiousAggro_Reward_AggressionCompletev2</option>
          <option value="CautiousAggro_RewardChaseCompletev2">CautiousAggro_RewardChaseCompletev2</option>

          <option value="CautiousAggro_BasicEntropyCompletev3">CautiousAggro_BasicEntropyCompletev3</option>
          <option value="CautiousAggro_RewardAgressionEntropyCompletev3">CautiousAggro_RewardAgressionEntropyCompletev3</option>
          <option value="CautiousAggro_RewardChaseEntropyCompletev3">CautiousAggro_RewardChaseEntropyCompletev3</option>

          <option value="CautiousAggro_BasicEntropy64Complete">CautiousAggro_BasicEntropy64Complete</option>
          <option value="CautiousAggro_RewardAgressionEntropy64Complete">CautiousAggro_RewardAgressionEntropy64Complete</option>
          <option value="CautiousAggro_RewardChaseEntropy64Complete">CautiousAggro_RewardChaseEntropy64Complete</option>


          <option value="CautiousAggro_BasicBaseCandidateComplete">CautiousAggro_BasicBaseCandidateComplete</option>
          <option value="CautiousAggro_RewardAgressionBaseCandidateComplete">CautiousAggro_RewardAgressionBaseCandidateComplete</option>
          <option value="CautiousAggro_RewardChaseBaseCandidateComplete">CautiousAggro_RewardChaseBaseCandidateComplete</option>

          <option value="CautiousAggro_BasicBaseCandidate2Complete">CautiousAggro_BasicBaseCandidate2Complete</option>
          <option value="CautiousAggro_RewardAgressionBaseCandidate2Complete">CautiousAggro_RewardAgressionBaseCandidate2Complete</option>
          <option value="CautiousAggro_RewardChaseBaseCandidate2Complete">CautiousAggro_RewardChaseBaseCandidate2Complete</option>

          <option value="CautiousAggro_BaseCandidate30">CautiousAggro_BaseCandidate30</option>
          <option value="CautiousAggro_RewardAgressionBaseCandidateComplete30">CautiousAggro_RewardAgressionBaseCandidateComplete30</option>
          <option value="CautiousAggro_RewardChaseBaseCandidate2Complete30">CautiousAggro_RewardChaseBaseCandidate2Complete30</option>
          

          

      </select>
      <select v-model="selectedModel" v-if="selectedModelType=='Coward' && selectedModelVersion=='V1'" name="SelectedModel">
        <option value="Coward_BasicComplete">Coward_BasicComplete</option>
        <option value="Coward_Reward_ChaseComplete">Coward_Reward_ChaseComplete</option>
        <option value="Coward_Reward_AggressionComplete">Coward_Reward_AggressionComplete</option>

        <option value="Coward_Reward_ChaseCompletev2">Coward_Reward_ChaseCompletev2</option>

        <option value="Coward_Reward_ChaseCompletev3">Coward_Reward_ChaseCompletev3</option>
        <option value="Coward_Reward_AggressionCompletev3">Coward_Reward_AggressionCompletev3</option>

        
        <option value="Coward_Reward_AggressionBaseCandidateComplete">Coward_Reward_AggressionBaseCandidateComplete</option>
        <option value="Coward_Reward_ChaseBaseCandidateComplete">Coward_Reward_ChaseBaseCandidateComplete</option>
        <option value="Coward_Reward_AggressionBaseCandidate2Complete">Coward_Reward_AggressionBaseCandidate2Complete</option>
        <option value="Coward_Reward_ChaseBaseCandidate2Complete">Coward_Reward_ChaseBaseCandidate2Complete</option>

        <option value="Coward_Reward_AggressionBaseCandidateComplete30">Coward_Reward_AggressionBaseCandidateComplete30</option>

      </select>
      <select v-model="selectedModel" v-if="selectedModelType=='CautiousAggro' && selectedModelVersion=='V2'" name="SelectedModel">
        <option value="InRangeFeatureTestComplete">InRangeFeatureTestComplete</option>
        <option value="FC_8CautiousAggroComplete">FC_8CautiousAggroComplete</option>
        <option value="FC_8CautiousAggroAdamWComplete">FC_8CautiousAggroAdamWComplete</option>
        <option value="FC_8RevisedCautiousAggro_AdamComplete">FC_8RevisedCautiousAggro_AdamComplete</option>
        <option value="FC_8RevisedCautiousAggro_AdamWComplete">FC_8RevisedCautiousAggro_AdamWComplete</option>

        <option value="FC_8RevisedCautiousAggro_Adam64Complete">FC_8RevisedCautiousAggro_Adam64Complete</option>
        <option value="FC_8RevisedCautiousAggro_AdamW64Complete">FC_8RevisedCautiousAggro_AdamW64Complete</option>

        <option value="FC_8RevisedCautiousAggro_Adam4LayerComplete">FC_8RevisedCautiousAggro_Adam4LayerComplete</option>
        <option value="FC_8RevisedCautiousAggro_AdamW4LayerComplete">FC_8RevisedCautiousAggro_AdamW4LayerComplete</option>

        <option value="FC_8ExportChanges_CA1_8HSComplete">FC_8ExportChanges_CA1_8HSComplete</option>
        <option value="FC_8ExportChanges_CA2_8HSComplete">FC_8ExportChanges_CA2_8HSComplete</option>
        <option value="FC_8ExportChanges_CA3_8HSComplete">FC_8ExportChanges_CA3_8HSComplete</option>
        <option value="FC_8ExportChanges_CA4_8HSComplete">FC_8ExportChanges_CA4_8HSComplete</option>

        
      </select>
      <select v-model="selectedModel" v-if="selectedModelType=='Coward' && selectedModelVersion=='V2'" name="SelectedModel">
        <option value="FC_8CowardAdamWComplete">FC_8CowardAdamWComplete</option>
        <option value="FC_8RevisedCowardAdamComplete">FC_8RevisedCowardAdamComplete</option>
        <option value="FC_8RevisedCowardAdamWomplete">FC_8RevisedCowardAdamWomplete</option>

        <option value="FC_8ExportChanges_Coward_8HSComplete">FC_8ExportChanges_Coward_8HSComplete</option>
      </select>





      <label for="InputTensorScaler">Input Vector Multiplier</label>
      <input name="InputTensorScaler" type="number" min=1 v-model="InputTensorScaler">
      
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
        <PositionSelector :aibotpos=AI_Bot_Pos :playerpos = Player_Pos :width=arenaWidth :height=arenaHeight
        @update:ai="AI_Bot_Pos=$event" @update:player="Player_Pos=$event"
        ></PositionSelector>
        <PercentBargraph :properties="[advanceProb, retreatProb, slProb, srProb, attackProb, blockProb]"></PercentBargraph>
        
      </div>
      
    </form>
    <GraphNetVisual :model="selectedModel"></GraphNetVisual>
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
