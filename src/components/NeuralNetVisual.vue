<script setup lange="ts">
import { Tensor } from 'onnxruntime-web'
import * as protobuf from 'protobufjs'
    const response = await fetch('CautiousAggro_RewardChaseEntropy64Complete.onnx')
    const buffer = await response.arrayBuffer()
    //console.log("PARSING ONNX OUTPUT")
    //console.log(buffer)

    const root = await protobuf.load('onnx.proto')
    const ModelProto = root.lookupType('onnx.ModelProto')

    const model = ModelProto.decode(new Uint8Array(buffer))
   

    console.log("Initializer count")
    console.log(model.graph.initializer.length)


    let prevLayerName = "input"
    const tensors = model.graph.initializer //stores all the weights in raw bytes
    for (const tensor of tensors){
        console.log("NAME: " + tensor.name)
        console.log("DIMS: " + tensor.dims) //shape, ie [16,7] fpr 7 neurons input, 16 neurons hidden layer

        //console.log(tensor.rawData) //raw weights

        const raw = tensor.rawData
        const copy = new Uint8Array(raw.byteLength)
        copy.set(raw)
        let floatWeights = undefined
        try{
             floatWeights = new Float32Array(copy.buffer, copy.byteOffset, copy.byteLength/4)
        }
        catch(e){
            console.log("ERROR making float array: " + e)
        }
        
        const inFeatures = tensor.dims[1]
        const outFeatures = tensor.dims[0]

        for (let outNeuron = 0; outNeuron<outFeatures; outNeuron++){
            for (let inNeuron = 0; inNeuron<inFeatures; inNeuron++){
                const weight = floatWeights[outNeuron*inFeatures + inNeuron]
                console.log(`Weight for ${prevLayerName} neuron ${inNeuron} to ${tensor.name} neuron ${outNeuron} is ${weight}`)
            }
        }
        prevLayerName = tensor.name
        
       
       
    }

    
</script>

<template>
    <div></div>
</template>