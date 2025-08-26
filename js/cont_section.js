let base_sectionCards = document.querySelector("#base_sectionCards")
let template_target = document.querySelector("#template_target").content
let fragmentTarget = document.createDocumentFragment()



document.addEventListener("DOMContentLoaded", ()=>{
    funcionPrincipal()
})



const funcionPrincipal = async ()=>{
    try{
        const data = await fetch("pasteles.json")
        const res = await data.json()
        //console.log(res)
        pintarTarjetas(res)

    }catch(error){
        console.log(" Error al cargar el archivo JSON ")
    }
}


const pintarTarjetas = (res)=>{
    //console.log(res)
    res.forEach( element => {
        console.log(element)

        template_target.querySelector("#target_legend").textContent = element.legend
        template_target.querySelector("#figureTarget").setAttribute("src",element.figure)
        template_target.querySelector("#figureTarget").setAttribute("alt",element.legend)

        template_target.querySelector("#target_fondo").style.background = element.color
        template_target.querySelector("#blockTarget").style.borderBottom = `8px solid ${element.color}`



        
        const clonarTarget = template_target.cloneNode(true)
        fragmentTarget.appendChild(clonarTarget)
        
    });
    base_sectionCards.appendChild(fragmentTarget)

}