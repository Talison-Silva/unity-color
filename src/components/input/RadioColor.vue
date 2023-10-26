<script setup>
    import { onMounted,defineEmits, defineProps, reactive, inject } from 'vue';

    const emits=defineEmits(['Checked'])
    const props=defineProps({
        index:Number,
        default:Number,
        color:String
    })




    const radiocss=inject('test').register({
        width:'20px',
        height:'20px',
        backgroundColor:String(props.color),
        borderRadius:'50%',
        transition:'transform 1s'
    })




    function onChecked(){
        emits('Checked',props.index)
    }

    function Checked(){
        const unique=document.getElementsByClassName('colletion!radio')[props.index]
        unique.value=!Boolean(unique.value)

        radiocss.set(radiocss.unique,{
            transform:'scale(1.4)'
        })
    }

    function Unique(){
        const colletion=document.getElementsByClassName('colletion!radio')
        for(const unique in colletion){
            if(Boolean(colletion[unique].value)){
                colletion[unique].value=false
                radiocss.set(unique,{
                    transform:'scale(1)'
                })
            }
        }
    }

    onMounted(()=>{
        if(props.index===props.default){
            Checked()
        }
    })
</script>

<template>
    <div 
        @click="onChecked(),Unique(),Checked()"
        :style="radiocss.get(radiocss.unique)"
        class="colletion!radio
         flex 
         justify-center
         items-center
         select-none"
        type="checkbox"
        :value="false"
    >

    <p :style="{
            fontSize:'8px',
            color:'black'
        }">{{ props.index+1 }}</p>

    </div>
</template>