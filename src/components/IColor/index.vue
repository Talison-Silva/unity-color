<script setup>
import { defineProps ,onMounted ,ref } from 'vue';

const face=ref(null)
const props=defineProps({
    dinamic:Boolean,
    size:Number,
    rounded:Number
})

function settings(){
    if(props.size){
        face.value.style.width=`${props.size}px`
        face.value.style.height=`${props.size}px`
    }
    if(props.rounded){
        face.value.style.borderRadius=`${props.rounded}px`
    }
}

function format(variable,before){
    const prefixo=before.indexOf('px')
    const after=Number(before.slice(0,prefixo))+variable
    return after;
}

onMounted(()=>{
    settings()
    if(!props.dinamic){return('')}

    face.value.addEventListener('mouseover',()=>{
        face.value.style.width=`${format(16,face.value.style.width)}px`;
        face.value.style.height=`${format(16,face.value.style.height)}px`;
    })
    face.value.addEventListener('mouseout',()=>{
        face.value.style.width=`${format(-16,face.value.style.width)}px`;
        face.value.style.height=`${format(-16,face.value.style.height)}px`;
    })
})
</script>

<template>
    <div ref="face" id="back-face">
        <div class="frame">
            <div id="face">
                <div class="eyes left"></div>
                <div class="eyes right"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

#back-face
{
    position: relative;
    width: 96px;
    height: 96px;
    border-radius: 30px;
    transition: width 0.625s ,height 0.625s;

    background-color: #201824;

    display: flex;
    justify-content: center;
    align-items: center;
}
#face {
    height: 80%;
    width: 80%;
    border-radius: 20px;
    border-top: 45px solid #F5E9A2;
    border-right: 45px solid #B9F2F5;
    border-bottom: 45px solid #F5D3E8;
    border-left: 45px solid #F5E9A2;
}

.frame {
    width: 80%;
    height: 80%;
    border-radius: 20px;
    overflow: hidden;
}

.eyes
{
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: #101010;
}

.left{
    top: 45%;
    left: 25%;
}
.right{
    top: 45%;
    left: 75%;
}


</style>