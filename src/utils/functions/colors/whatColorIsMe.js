import palleteColors from './palleteOfColor';

export const whatColorIsMe=()=>{
    let choice,placeholder;
    choice=Math.floor(Math.random() * (palleteColors.length - 0) + 0)

    while(true){
        choice=Math.floor(Math.random() * (palleteColors.length - 0) + 0)

        if(palleteColors[choice].register){
            placeholder=choice
            palleteColors[choice].register=false
            continue
        }
        if(choice===placeholder){
            continue
        }

        palleteColors[choice].register=true

        break
    }
    return(palleteColors[choice].code)
    /*while(true){
        choice=Math.floor(Math.random() * (palleteColors.length - 0) + 0)
        if(palleteColors[choice].register){
            placeholder=choice
            continue
        }

        if(placeholder){palleteColors[placeholder].register=false}
        palleteColors[choice].register=true
        break
    }

    return(palleteColors[choice].code)*/
}