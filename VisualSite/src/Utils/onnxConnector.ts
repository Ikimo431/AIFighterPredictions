  import * as ort from 'onnxruntime-web'
  import jsonData from '../../config.json' with { type: 'json' };
  //ort.env.wasm.wasmPaths = '/ort/';

  type InputVector = {
      distance: number,
      angle: number,
      playerHealth: number,
      AIHealth: number,
      AI_timesinceHit: number,
      AI_Actioncooldown: number,
      Player_ActionCooldown: number
  }
  export default async function runModel(model: string, inputVector: InputVector){
    try{
        const tickConversion = (1/jsonData.UnitRatios.TickToSeconds)
        const meterConversion = (1/jsonData.UnitRatios.UnitsToMeters)
        const AttackActionCooldown = jsonData.FighterSettings.AttackActionCooldown*tickConversion
        const BlockActionCooldown = jsonData.FighterSettings.BlockActionCooldown*tickConversion
        

        const XLimit = jsonData.ArenaSettings.Length*meterConversion
        const YLimit = jsonData.ArenaSettings.Width*meterConversion
        const session = await ort.InferenceSession.create(`/${model}.onnx`, {
          executionProviders: ['wasm']
        })

    
        const normalizedVector = Float32Array.from([
          (inputVector.distance*meterConversion)/Math.sqrt(XLimit**2+YLimit**2),
          inputVector.angle/(Math.PI*2),
          inputVector.playerHealth/100,
          inputVector.AIHealth/100,
          Math.exp(-inputVector.AI_timesinceHit*tickConversion/2.0), 
          inputVector.AI_Actioncooldown*tickConversion/Math.max(AttackActionCooldown, BlockActionCooldown), 
          inputVector.Player_ActionCooldown*tickConversion/Math.max(AttackActionCooldown, BlockActionCooldown)
        ])
        console.log("INPUT TENSOR: " + normalizedVector)

        const inputTensor = new ort.Tensor('float32', normalizedVector, [1, 7])
        console.log(session.inputNames)
        
        const feeds = {'observation': inputTensor}
        const results = await session.run(feeds)

        const outputName = (session.outputNames[0]) as string
        console.log("outputs: ", session.outputNames)
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