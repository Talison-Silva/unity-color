import { reactive } from "vue";


export const controllerStyle=()=>{
    let Privado=reactive({
        unique:0,
        colletion:[]
    })

    /*function unique(style){
        let privado=reactive({
            Style:style
        })
    
        function get(){
            return(privado.Style)
        }
    
        function set(properties){
            Object.entries(properties).forEach((entry)=>{
                const [props,value]=entry
                privado.Style[props]=value
            })
        }
    
        return {
            get,
            set,
            colletion:Privado.colletion
        }
    }*/
    function get(unique){
        return(Privado.colletion[unique])
    }

    function set(unique,properties){
        Object.entries(properties).forEach((entry)=>{
            const [props,value]=entry
            Privado.colletion[unique][props]=value
        })
    }

    function register(properties){
        Privado.colletion.push(properties)
        return({
            get,
            set,
            unique:(Privado.colletion.length-1),
            lenght:Privado.colletion.length
        })
    }

    return {
        register   
    }
}