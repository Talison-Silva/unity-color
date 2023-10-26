<script setup>
import { whatColorIsMe } from '@/utils/functions/colors/whatColorIsMe'; 
import { ref ,onMounted } from 'vue';
import { cards } from '@/utils/data/cards'

const carrosel= ref(null)
const push= ref(null)

let Icolor=[]
for(var i=0;i<cards.length;++i){
    Icolor.push(whatColorIsMe())
}

function numberOfScrollCarrosel(number,width=220,gap=48,metade=683){
    return ((metade-((width+gap)*number))-(width/2))
}

function eventActiveScroll(element){
    push.value.style.left=`${(10+(cards.length*20)+((cards.length-1)*8))/2-(10+(element*20)+((element-1)*8))-10}px`
    carrosel.value.style.left=`${numberOfScrollCarrosel(element)}px`
}

onMounted(()=>{
    carrosel.value.style.left=`${numberOfScrollCarrosel(Math.round(cards.length/2-1))}px`
    push.value.style.left=`${(10+(cards.length*20)+((cards.length-1)*8))/2-(10+(Math.round(cards.length/2-1)*20)+((Math.round(cards.length/2-1)-1)*8))-12}px`
})
</script>



<template>
    <section class="w-full h-full flex flex-col justify-between items-center">

        <div class="flex flex-col items-center border-2 bg-[#201824] select-none">
            <div class="w-full pt-1.5 flex justify-center item-center bg-slate-200 rounded-t-lg">
                <h1 class="text-5xl font-ubuntu">UNITY</h1>
            </div>
            <div class="flex items-center text-8xl text-white border-2 bg-[#201824] font-ubuntu rounded-b-lg pl-1.5 pr-1.5">
                <span class="text-[#f07f90]">C</span>
                <IColor :dinamic="true" :size="70" :rounded="10"/>
                <span class="text-[#7ff0d6]">L</span>
                <IColor :dinamic="true" :size="70" :rounded="10"/>
                <span class="text-[#f0ca7f]">R</span>
            </div>
        </div>


        <div class="relative p-6 w-full h-300 flex flex-col overflow-hidden">
            <ul ref="carrosel" class="absolute top-3.5 left-0 w-min h-min flex items-center test gap-x-12">
                <li v-for="(card,index) in cards" :id="card.name" class="relative card" :key="index">
                    <ColorCard :data="card" :color="Icolor[index]" :index="index"/>
                </li>
            </ul>
        </div>


        <div class="w-full h-10 flex justify-center items-center">
            <div class="relative 
                pr-2 pl-2 rounded-2xl 
                w-2/3 h-full flex justify-center 
                items-center gap-x-2 bg-[#201824]">
                <ul ref="push" class="absolute test top-0 left-0 w-full h-full flex justify-center items-center gap-x-2">
                    <li v-for="(link,index) in cards" :key="index">
                            <InputRadioColor :index="index" :color="Icolor[index]" :default="Math.round(cards.length/2-1)" @Checked="(event)=>{eventActiveScroll(event)}"/>
                    </li>
                </ul>
            </div>
        </div>


        <footer class="w-4/5 h-10 flex flex-col justify-center items-center bg-[#201824] rounded-t-lg select-none">
            <h1 class="text-white font-ubuntu">
                project by <a class="hover:text-indigo-400 text-indigo-600 cursor-pointer" href="#">talison-silva</a>
            </h1>
        </footer>

    </section>
</template>



<style lang="scss" scoped>
.font-ubuntu{
    font-family: 'Ubuntu Mono', monospace;
}

.h-300{
    height:330px;
}

.test{
    transition: left 1s;
}
@keyframes sobe{
    0%{
        transform: translateY(-30px);
        opacity: .5;
    }
    100%{
        transform: translateY(-3000px);
        opacity: .2;
    }
}


.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>