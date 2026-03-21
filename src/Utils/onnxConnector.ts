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
      Player_ActionCooldown: number,
      IncludeInRange: boolean
  }
  export default async function runModel(model: string, inputVector: InputVector, inputTensorScaler: number){
    try{
      console.log("IncludeInRange is: " + inputVector.IncludeInRange)
        const tickConversion = (1/jsonData.UnitRatios.TickToSeconds)
        const meterConversion = (1/jsonData.UnitRatios.UnitsToMeters)
        const AttackActionCooldown = jsonData.FighterSettings.AttackActionCooldown*tickConversion
        const BlockActionCooldown = jsonData.FighterSettings.BlockActionCooldown*tickConversion
        const AttackRangeMeters = jsonData.FighterSettings.AttackRange;
        

        const XLimit = jsonData.ArenaSettings.Length*meterConversion
        const YLimit = jsonData.ArenaSettings.Height*meterConversion
        const session = await ort.InferenceSession.create(`${model}.onnx`, {
          executionProviders: ['wasm']
        })

        const arr =  [(inputVector.distance*meterConversion)/Math.sqrt(XLimit**2+YLimit**2)*inputTensorScaler,
          (inputVector.angle/(Math.PI*2))*inputTensorScaler,
          (inputVector.playerHealth/100)*inputTensorScaler,
          (inputVector.AIHealth/100)*inputTensorScaler,
          (Math.exp(-inputVector.AI_timesinceHit*tickConversion/2.0)*inputTensorScaler), 
          (inputVector.AI_Actioncooldown*tickConversion/Math.max(AttackActionCooldown, BlockActionCooldown))*inputTensorScaler, 
          (inputVector.Player_ActionCooldown*tickConversion/Math.max(AttackActionCooldown, BlockActionCooldown))*inputTensorScaler]
        if (inputVector.IncludeInRange){
          arr.push((inputVector.distance*meterConversion>AttackRangeMeters*meterConversion? 1 : 0))
        }
        const normalizedVector = Float32Array.from(
          arr
          // (inputVector.distance*meterConversion)/Math.sqrt(XLimit**2+YLimit**2)*inputTensorScaler,
          // (inputVector.angle/(Math.PI*2))*inputTensorScaler,
          // (inputVector.playerHealth/100)*inputTensorScaler,
          // (inputVector.AIHealth/100)*inputTensorScaler,
          // (Math.exp(-inputVector.AI_timesinceHit*tickConversion/2.0)*inputTensorScaler), 
          // (inputVector.AI_Actioncooldown*tickConversion/Math.max(AttackActionCooldown, BlockActionCooldown))*inputTensorScaler, 
          // (inputVector.Player_ActionCooldown*tickConversion/Math.max(AttackActionCooldown, BlockActionCooldown))*inputTensorScaler,
          
        )
        console.log("INPUT TENSOR: " + normalizedVector)

        const inputTensor = new ort.Tensor('float32', normalizedVector, [1, inputVector.IncludeInRange? 8 : 7])
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