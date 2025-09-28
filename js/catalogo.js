
let cont_productosBlock_base = document.getElementById("cont_productosBlock_base")
let fragmentCatalogo = document.createDocumentFragment()
let templateCatalogo = document.getElementById("templateCatalogo").content


document.addEventListener("DOMContentLoaded", () =>{
    catalogoPincipal()
})

const catalogoPincipal = async () =>{
    try{
        const res = await fetch("catalogo.json")
        const data = await res.json()
        //console.log(data)
        pintarElementos(data)



    }catch(error){
        console.log(" ERROR EN LA DEPURACION ")
    }
}


const pintarElementos = (data) => {
   //console.log(data)
   data.forEach( element => {
    
        // Clonar el template
        let clone = templateCatalogo.cloneNode(true)

        // Rellenar los campos
        clone.querySelector("#cuadroFigura").setAttribute("src", element.imagen)
        clone.querySelector("#cuadroFigura").setAttribute("alt", element.titulo)
        clone.querySelector("#cuadroTitle").textContent = element.titulo
        clone.querySelector("#cuadroDesc").textContent = element.descripcion
        clone.querySelector("#cuadroPrecio").textContent = element.precio


         // Agregar al fragmento
        fragmentCatalogo.appendChild(clone)
   });
    // Insertar todo en el contenedor
    cont_productosBlock_base.appendChild(fragmentCatalogo)
}