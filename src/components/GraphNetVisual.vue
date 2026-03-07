<script setup lang="ts">
import * as protobuf from 'protobufjs'
import { onMounted, watch, ref, nextTick} from 'vue'
const props = defineProps<{model: string}>()

//--------TYPES-----
type Point = {
    x: number,
    y: number
}
type Neuron = {
    layer: number,
    index: number
}
type Connection = {
    from: Neuron,
    to: Neuron,
    weight: number
}
//----------REFS AND WATCH-----------
const neurons = ref<number[]>([])
const sFactor = ref<number>(1)
const rendering = ref<boolean>(true)
let connections: Connection[] = []

watch(()=>props.model, async ()=>{
    rendering.value=true
    await renderVisual()
    rendering.value=false

})
watch([sFactor], async()=>{
    rendering.value=true
    await renderVisual()
    rendering.value=false
})

onMounted(async()=> {
    rendering.value = true
    await renderVisual()
    rendering.value= false
})

//---------------PARSE THE ONNX FILE AND STORE WEIGHTS-----------------
async function GetWeights(){
    neurons.value = []
    connections=[]
    const response = await fetch(`${props.model}.onnx`)
    const buffer = await response.arrayBuffer()
    //console.log("PARSING ONNX OUTPUT")
    //console.log(buffer)

    const root = await protobuf.load('onnx.proto')
    const ModelProto = root.lookupType('onnx.ModelProto')

    const model = ModelProto.decode(new Uint8Array(buffer)) as any
   

    console.log("Initializer count")
    console.log(model.graph.initializer.length)

    const sf = sFactor.value ?? 1
    let prevLayerName = "input"
    let prevLayerIndex = 0

    //stores all the weights in raw bytes
    const tensors = model.graph.initializer.filter((t:any) => t.dims.length === 2 && t.name.toLowerCase().includes("weight"))
    .sort((a:any, b:any) => a.name.localeCompare(b.name)) 
    //local compare sorts alphabetically, which works for how layers are named (fc1, fc2,..., output)
    let outFeatures: number = 0
    for (const [index, tensor] of tensors.entries()){
        if (tensor.dims.length!==2 ||!tensor.name.includes("weight")){
            continue
        }
       
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
        if (!floatWeights){
            break;
        }
        const inFeatures = tensor.dims[1]
        outFeatures = tensor.dims[0]
        if (inFeatures!=null){
            neurons.value = [...neurons.value, index!=0?Math.ceil(inFeatures/sf) : inFeatures]
            //neurons.value = [...neurons.value, Math.ceil(inFeatures/sFactor.value)]
        }
        // let shownInputs = index!=0?Math.ceil(inFeatures/sFactor.value) : inFeatures
        // let shownOutputs =   index!=0?Math.ceil(outFeatures/sFactor.value) : outFeatures
        // for (let outNeuron = 0; outNeuron<outFeatures; outNeuron++){
        //     for (let inNeuron = 0; inNeuron<inFeatures; inNeuron++){
        //         const weight = floatWeights[outNeuron*inFeatures + inNeuron]
        //         console.log(`Weight for ${prevLayerName} neuron ${inNeuron} to ${tensor.name} neuron ${outNeuron} is ${weight}`)
        //         weightSum+=weight? weight : 0
        //         weightCount++
        //         if ((inNeuron+1)%sFactor.value==0){
        //             let from: Neuron = {
        //                 layer: prevLayerIndex,
        //                 index: Math.min(Math.floor(inNeuron/sFactor.value), shownInputs-1)
        //             }
        //             let to: Neuron = {
        //                 layer: prevLayerIndex+1,
        //                 index: Math.floor(outNeuron)
        //             }
        //             let weight = weightSum/weightCount
        //             connections.push({from, to, weight})
                    
        //             weightSum = 0
        //             weightCount = 0
        //         }
        //     }
       
        const shownInputs = index != 0 ? Math.ceil(inFeatures / sf) : inFeatures
        const shownOutputs = index===tensors.length-1? outFeatures : Math.ceil(outFeatures / sf)
        for (let vOut = 0; vOut < shownOutputs; vOut++) { //vOut is output neuron, but only the visual ones shown
            for (let vIn = 0; vIn < shownInputs; vIn++) {

                const inStart = vIn * sf //the start of the group to take averages of
                const inEnd = Math.min(inStart + sf, inFeatures) //the end index of the group to average

                const outStart = vOut * sf
                const outEnd = Math.min(outStart + sf, outFeatures)

                let weightSum = 0
                let weightCount = 0

                for (let outNeuron = outStart; outNeuron < outEnd; outNeuron++) {
                    for (let inNeuron = inStart; inNeuron < inEnd; inNeuron++) {

                        const weight = floatWeights[outNeuron * inFeatures + inNeuron]

                        weightSum += weight ?? 0
                        weightCount++
                    }
                }

                const avgWeight = weightSum / weightCount

                connections.push({
                    from: {
                        layer: prevLayerIndex,
                        index: vIn
                    },
                    to: {
                        layer: prevLayerIndex + 1,
                        index: vOut
                    },
                    weight: avgWeight
                })
            }
        }
                    
            
        // }
        prevLayerName = tensor.name
        prevLayerIndex++
    }
    neurons.value=[...neurons.value, outFeatures]
    
    
}


//----------DRAWING FUNCTIONS----------
async function renderVisual(){
    await GetWeights() //neurons rendered in here 
    await nextTick()
    const canvas = document.getElementById("graphlines") as HTMLCanvasElement
    canvas.width=canvas.offsetWidth
    canvas.height=canvas.offsetHeight
    for (const connection of connections){
        const n1 = getNeuronElement(connection.from)
        const n2 = getNeuronElement(connection.to)
        if (!n1 || !n2) continue
        console.log(JSON.stringify(connection))
        console.log(n1)
        drawLine(n1, n2, connection.weight)
    }
}

function getNeuronElement(n: Neuron): HTMLElement {
  return document.querySelector(
    `.Neuron[data-layer="${n.layer}"][data-row="${n.index}"]`
  ) as HTMLElement
}

function getCenter(el: HTMLElement): Point{
    const rect = el.getBoundingClientRect()

    return {
        x: rect.width/2 + rect.left,
        y: rect.height/2 + rect.top
    }
}

function toCanvasCoords(p: Point, canvas: HTMLCanvasElement){
    const rect = canvas.getBoundingClientRect()

    return {
        x: p.x-rect.left,
        y: p.y-rect.top
    }
}

function drawLine(n1: HTMLElement, n2: HTMLElement, weight: number){
    const canvas = document.getElementById("graphlines") as HTMLCanvasElement
    console.log("WEIGHT TO DRAW LINE IS " + weight)
    const weightNormalized = (weight+1)/2
    const gb = Math.floor(255*(1-weightNormalized))
    
    const context = canvas.getContext("2d")! //! asserts element not null

    const p1 = toCanvasCoords(getCenter(n1), canvas)
    const p2 = toCanvasCoords(getCenter(n2), canvas)


    context.beginPath()
    context.moveTo(p1.x, p1.y)
    context.lineTo(p2.x, p2.y)
    context.strokeStyle=`rgb(255,${gb},${gb})`
    context.stroke()
    console.log("DREW LINE: " + JSON.stringify(p1) + "," + JSON.stringify(p2))
}

    
</script>



<template>
    <section class="NNVisualCard">
       
        <h3>Nueral Network Visual</h3>
        <label for = sFactor>Simplification Factor</label>
        <input v-model="sFactor" name ='sFactor' type="number" min=1 value=1 placeholder="1"/>
        <h3 v-if="rendering">Loading...</h3>
        <div class="Layers">
            <canvas id="graphlines"></canvas>
            <div class="Layer" v-for="(layer, colIdx) in neurons">
                <div class="Neuron" v-for="(neuron, rowIdx) in layer" :key="neuron"
                :data-layer = "colIdx" :data-row="rowIdx">

                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .Layers{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 10rem;
        margin-top: .5rem;
        z-index: 1;
        position: relative
        
    }
    #graphlines{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height:100%;
        z-index:0
    }
    .NNVisualCard{
        background-color: var(--card-bg-light);
        border-radius: 1rem;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        
    }
    .Layer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:.25rem
    }
    .Neuron{
        height: 2rem;
        width: 2rem;
        border-radius: 2rem;
        border: 2px solid black;
    }
    @media (prefers-color-scheme: dark){
        .NNVisualCard{
            background-color: var(--card-bg-dark);
        }
    }
</style>