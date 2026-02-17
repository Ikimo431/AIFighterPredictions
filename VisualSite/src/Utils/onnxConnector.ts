  import * as ort from 'onnxruntime-web'
  import jsonData from '../../config.json' with { type: 'json' };
  //ort.env.wasm.wasmPaths = '/ort/';

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
        const session = await ort.InferenceSession.create('/CautiousAggro_Reward_AggressionComplete.onnx', {
          executionProviders: ['wasm']
        })

    
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

        const inputTensor = new ort.Tensor('float32', normalizedVector, [1, 7])
        console.log(session.inputNames)
        
        const feeds = {'observation': inputTensor}
        const results = await session.run(feeds)

        const outputName = (session.outputNames[1] || session.outputNames[0]) as string
        const outputTensor = results[outputName];
        if (!outputTensor){
          throw new Error(`Output name "${outputName}" not found in results.`);
        }


        const outputData = outputTensor.data as Float32Array

        console.log('Output Probabilities:', outputData);
        return outputData
      

        

    }
    catch(e){
      console.error(`Failed to run inference; ${e}`)
    }
  }