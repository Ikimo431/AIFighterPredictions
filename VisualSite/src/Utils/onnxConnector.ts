  import * as ort from 'onnxruntime-node'
  import jsonData from '../../config.json' with { type: 'json' };

  type InputVector = {
      distance: number,
      angle: number,
      arenaWidth: number,
      arenaHeight: number,
      playerHealth: number,
      AIHealth: number,
      AI_timesinceHit: number,
      AI_Actioncooldown: number,
      Player_ActionCooldown: number
  }
  export default async function runModel(inputVector: InputVector){
    try{
        const session = await ort.InferenceSession.create('../Models/CautiousAggro_Reward_AggressionComplete.onnx')

    
        const normalizedVector = Float32Array.from([
          inputVector.distance/Math.sqrt(inputVector.arenaHeight**2+inputVector.arenaWidth**2),
          inputVector.angle/(Math.PI*2),
          inputVector.playerHealth/100,
          inputVector.AIHealth/100,
          Math.exp(-inputVector.AI_timesinceHit/2.0), 
          inputVector.AI_Actioncooldown/Math.max(jsonData.FighterSettings.AttackActionCooldown, 
            jsonData.FighterSettings.BlockActionCooldown), 
          inputVector.Player_ActionCooldown/Math.max(jsonData.FighterSettings.AttackActionCooldown, 
            jsonData.FighterSettings.BlockActionCooldown)
        ])
    }
    catch(error){

    }
  }