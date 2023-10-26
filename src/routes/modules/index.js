
function modules(){
    var colletion=import.meta.globEager('./*.js')

    let modules=[]
    for(const Imodule in colletion){
        modules.push(colletion[Imodule].default)
    }

    return(modules)
}

export default modules