<script setup>
import { defineProps, onMounted, reactive } from 'vue';

const style=reactive({
    block:{
        width:'40px',
        height:'40px',
        backgroundColor:'#7ff0d6'
    },
    down:{
        width:'0',
        height:'0',
        borderLeft:'20px solid transparent',
        borderRight:'20px solid transparent',
        borderTop:'24px solid #7ff0d6'
    },
    footer:{
        backgroundColor:'#201824'
    }
})

const props=defineProps({
    index:Number,
    data:Object,
    color:String
})

onMounted(()=>{
    style.block.backgroundColor=props.color
    style.down.borderTopColor=props.color
    style.footer.backgroundColor=props.color
})
</script>

<template>
    <section class="relative card">
        <div class="w-full h-10 bg-[#201824]"></div>


        <div class="w-24 h-24 rounded-full bg-[#201824] flex justify-center items-center">
            <a :href="data.href">
                <IColor :dinamic="true" :size="60" :rounded="10"/>
            </a>
        </div>
        <div class="arrow flex flex-col w-min h-min">
            <div :style="style.block"></div>
            <div :style="style.down"></div>
        </div>
        <div class="text-center">
            <h3 class="text-xl font-ubuntu uppercase font-bold tracking-widest">{{ data.name }}</h3>
            <p class="w-36 text-xs font-ubuntu opacity-80">{{ data.description }}</p>
        </div>

        <div class="w-full h-10" :style="style.footer"></div>
        
    </section>
</template>


<style scoped>
.card{
    width:220px;
    height: 300px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 0px 12px #888888;
    user-select: none;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.arrow{
    position: absolute;
    top: 0;
    left: 0;
}
#block{
    width:40px;
    height: 40px;
    background-color: #7ff0d6;
}
</style>