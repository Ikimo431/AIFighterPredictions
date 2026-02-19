<script setup lang="ts">
    import {type Ref, ref, onMounted} from 'vue'

    const props = defineProps<{properties: {name: string, num: Ref<number>}[]}>()

    const graphHeightPx = ref(0);
    const labelOffset = ref('3rem');

    onMounted(() => {
        const updateHeight = () => {
            const container = document.querySelector('.graphContainer') as HTMLElement;
            if (container) {
                graphHeightPx.value = container.offsetHeight;
                // Adjust label offset based on graph size
                labelOffset.value = `${Math.max(2, graphHeightPx.value * 0.07)}px`;
            }
        };
        
        updateHeight();
        window.addEventListener('resize', updateHeight);
    });

    function calcHeight(num: number) {
        return graphHeightPx.value * num;
    }
    
</script>


<template>
    <div class = 'card':style="{display: 'flex', flexDirection: 'column', alignItems: 'center'}">
    <h3>Model Output Probabilities</h3>
    
    <div class="graphContainer" :style="{'--label-offset': labelOffset}">
        <div v-for="bar in properties" class="bar" :style="{height: calcHeight(bar.num.value)+'px'}">
            <p class="label bottom-label">{{ bar.name }}</p>
            <p class="label top-label">{{ parseFloat(bar.num.value.toFixed(2))*100 }}%</p>
        </div>
        <p class="axisLabel" style="top: 0">100%</p>
        <p class="axisLabel" style="bottom: 0">0%</p>
    </div>
    </div>
</template>

<style scoped>
    .graphContainer{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 35vw;
        height: 50vh;
        padding: 0 2vw 0 2vw;
        border-left: .5rem solid var(--line-color-light);
        border-bottom: .5rem solid var(--line-color-light);
        border-color: var(--line-color-light);
        position: relative;
        gap: .5em;
        --label-offset: 3rem;

       
    }
    .card{
        background-color: var(--card-bg-light);
        padding: 0px 1vw 2rem 8vw;
        border-radius: 1rem;
        box-shadow: 5px 5px .5rem var(--card-bg-light);
    }

    .bar{
        background-color: var(--bar-color-light);
        width: 10rem;
        position: relative;
    }

    .label {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        margin: 0;
        overflow: hidden;
    }

    .top-label {
        top: calc(-1 * var(--label-offset));
    }

    .bottom-label {
        bottom: calc(-1 * var(--label-offset));
    }

    .axisLabel {
        position: absolute;
        left: calc(-1 * var(--label-offset));
        transform: translateX(-100%);
        margin: 0;
    }

    @media screen and (max-width: 850px) {
        .graphContainer{
            width: 55vw;
            --label-offset: 2rem;
        }
        .card{
            padding: 0px 1vw 2rem 9vw;
        }
    }
    @media (prefers-color-scheme: dark){
        .bar{
            background-color: var(--bar-color-dark);
        }
        .graphContainer{
            border-left: .5rem solid var(--line-color-dark);
            border-bottom: .5rem solid var(--line-color-dark);
            border-color: var(--line-color-dark);
        }
        .card{
            background-color: var(--card-bg-dark);
            box-shadow: 5px 5px .5rem var(--card-bg-dark);
        }
    }

</style>