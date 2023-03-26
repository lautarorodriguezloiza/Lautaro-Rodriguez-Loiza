// let nombre= prompt("Escriba su nombre y apellido")
// let fechaDeNacimiento = prompt("Fecha de nacimiento")
// let dni = prompt("DNI")




// let seleccioneProducto = Number(prompt("Seleccione una opcion: \n 1 - playstation \n 2 - xboxSeriesX \n 3 - nvidiaRtx \n 4 - nintendoSwitch \n 5 - sillaGamer"))

// const precioPlay = 400000
// const precioxboxSeriesX = 300000
// const precionvidiaRtx   = 1000000
// const precionintentoSwitch = 100000
// const preciosillaGamer    = 50000


// let seleccionCuotasTres = 3
// let seleccionCuotasSeis = 6
// let seleccionCuotasDoce = 12



// numeroDeCuotas(seleccioneProducto)



// function numeroDeCuotas(productos ){
    
//     let numeroIngresado = parseInt(prompt("Tenemos de 3 ,6 , 12 cuotas sin interes fijate cuanto deberias pagar dependiendo las cuotas"))
    
//             switch(productos){
//                 case 1:
//                     if(numeroIngresado==3) {
//                         let resultado = precioPlay/seleccionCuotasTres
//                             alert(precioPlay  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }else if(numeroIngresado==6){
//                         let resultado = precioPlay/seleccionCuotasSeis
//                             alert(precioPlay  + " por " + numeroIngresado   + " meses es =" + resultado);
//                     }else if(numeroIngresado==12){
//                         let resultado = precioPlay/seleccionCuotasDoce
//                             alert(precioPlay  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }
//                     break;
                    


//                 case 2:
//                     if(numeroIngresado==3) {
//                         let resultado = precioxboxSeriesX/seleccionCuotasTres
//                             alert(precioxboxSeriesX  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }else if(numeroIngresado==6){
//                         let resultado = precioxboxSeriesX/seleccionCuotasSeis
//                             alert(precioxboxSeriesX  + " por " + numeroIngresado   + " meses es =" + resultado);
//                     }else if(numeroIngresado==12){
//                         let resultado = precioxboxSeriesX/seleccionCuotasDoce
//                             alert(precioxboxSeriesX + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }
//                     break;
                            
//                 case 3:

//                     if(numeroIngresado==3) {
//                         let resultado = precionvidiaRtx/seleccionCuotasTres
//                             alert(precionvidiaRtx  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }else if(numeroIngresado==6){
//                         let resultado = precionvidiaRtx/seleccionCuotasSeis
//                             alert(precionvidiaRtx  + " por " + numeroIngresado   + " meses es =" + resultado);
//                     }else if(numeroIngresado==12){
//                         let resultado = precionvidiaRtx/seleccionCuotasDoce
//                             alert(precionvidiaRtx  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }
//                     break;
//                 case 4:
//                     if(numeroIngresado==3) {
//                         let resultado = precionintentoSwitch/seleccionCuotasTres
//                             alert(precionintentoSwitch  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }else if(numeroIngresado==6){
//                         let resultado = precionintentoSwitch/seleccionCuotasSeis
//                             alert(precionintentoSwitch  + " por " + numeroIngresado   + " meses es =" + resultado);
//                     }else if(numeroIngresado==12){
//                         let resultado = precionintentoSwitch/seleccionCuotasDoce
//                             alert(precionintentoSwitch  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }
//                     break;

//                 case 5:
//                     if(numeroIngresado==3) {
//                         let resultado = preciosillaGamer/seleccionCuotasTres
//                             alert(preciosillaGamer  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }else if(numeroIngresado==6){
//                         let resultado = preciosillaGamer/seleccionCuotasSeis
//                             alert(preciosillaGamer  + " por " + numeroIngresado   + " meses es =" + resultado);
//                     }else if(numeroIngresado==12){
//                         let resultado = preciosillaGamer/seleccionCuotasDoce
//                             alert(preciosillaGamer  + " por " +   numeroIngresado + " meses es =" + resultado);
//                     }
//                     break;
// }
// }



// alert("Espero que le haya servido! :D")

// alert("Elija los productos que desea comprar")



// class Producto{
//     constructor(){
//         this.seleccion = prompt("Seleccione un producto que vio anteriormente \n 1 - playstation: 400000 \n 2 - xboxSeriesX: 300000 \n 3 - nvidiaRtx: 1000000 \n 4 - nintendoSwitch: 100000 \n 5 - sillaGamer: 50000")
//         this.precio = parseInt(prompt("Ponga el precio porfavor"))
//     }
// }
// const arrayDeProducto= []
// let seguirAgregandoAlCarrito= true
// while(seguirAgregandoAlCarrito){
//     let seguirAgregando= new Producto ()
//     arrayDeProducto.push(seguirAgregando)

//     let finalizaCompra= parseInt(prompt("Elija 1 si quiere seguir agregando productos al carrito, elija 2 si no quiere agregar mas "))
//     if(finalizaCompra===2){
//     break}
// }
// function mostrarTotal(){
//     let precioTotal = 0
//     for(productos of  arrayDeProducto){
//         precioTotal = precioTotal+ productos.precio
//     }
//     return precioTotal
// }

// alert("El total de la compra es = " + mostrarTotal())

// alert("Muchas Gracias por su compra!!!")


/* Informacion del Usuario*/

let informacionUsuario = document.getElementById("informacion");
informacionUsuario.addEventListener("submit", agregarInformacion);

function  agregarInformacion(e){
    e.preventDefault()
    let nombreUsuario = e.target[0].value
    let edad = e.target[1].value
    let nombreEdad = document.createElement ("div")
    nombreEdad.innerHTML= `Su nombre de usuario es:  ${nombreUsuario}su edad es: ${edad}` 
    document.body.appendChild(nombreEdad)
    localStorage.setItem('nombreEdad',JSON.stringify(nombreEdad))
}


/*CARRITO*/
//     class Producto{
//         constructor(){
//             this.seleccion = prompt("Seleccione un producto que vio anteriormente \n 1 - playstation: 400000 \n 2 - xboxSeriesX: 300000 \n 3 - nvidiaRtx: 1000000 \n 4 - nintendoSwitch: 100000 \n 5 - sillaGamer: 50000")
//             this.precio = parseInt(prompt("Ponga el precio porfavor"))
//     }
// }
//     const arrayDeProducto= []
//     let seguirAgregandoAlCarrito= true
//         while(seguirAgregandoAlCarrito){
//             let seguirAgregando= new Producto ()
//                 arrayDeProducto.push(seguirAgregando)

//     let finalizaCompra= parseInt(prompt("Elija 1 si quiere seguir agregando productos al carrito, elija 2 si no quiere agregar mas "))
//         if(finalizaCompra===2){
//             break}
//     }
//     function mostrarTotal(){
//         let precioTotal = 0
//             for(productos of  arrayDeProducto){
//                 precioTotal = precioTotal+ productos.precio
// }
//         return precioTotal
//     }


const productos = [
    {id:1,nombre:'Xbox Series X',precio:250000},
    {id:2,nombre:'Playstation 5',precio:400000},
    {id:3,nombre:'Nvidia 4060',precio:3000000},
]
const carrito = []

function agregarProductos(){
    for (const producto of productos){
        let crearElemnto  = document.createElement('div')
        crearElemnto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <h3>$ ${producto.precio}</h3>
            <button class="button" id=${producto.id} >Agregar al carrito</button>
        `
        cardProducto.className = 'card'
        let lista = document.getElementById('listProductos')
        lista.append(cardProducto)
        let botonParaAgregar = document.getElementById(`${producto.id}`)
        botonParaAgregar.addEventListener('click',agregarAlCarrito)
    }
}
function agregarAlCarrito(e){
    let id = Number(e.target.getAttribute('id'))
    let productoAAgregar = productos.find((producto)=>producto.id === id)
    if(existeEnCarrito(productoAAgregar)){
        let productoEnCarrito = carrito.find((producto)=>producto.id === productoAAgregar.id)
        let indiceDelProducto = carrito.indexOf(productoEnCarrito)
        carrito[indiceDelProducto].cantidad+=1
        let productoAnterior = document.getElementById(`producto${productoAAgregar.id}`)
        productoAnterior.innerHTML = `
            <h3>${productoAAgregar.nombre}</h3>
            <h3>$ ${productoAAgregar.precio}</h3>
            <h3>Cantidad: ${carrito[indiceDelProducto].cantidad}</h3>
            <h3>Total de ${productoAAgregar.nombre} : $ ${carrito[indiceDelProducto].cantidad*productoAAgregar.precio}</h3>
        `
    }else{
        let productoConCantidad = {...productoAAgregar,cantidad:1}
        carrito.push(productoConCantidad)
        let cardCarrito = document.createElement('div')
        cardCarrito.innerHTML = `
            <h3>${productoConCantidad.nombre}</h3>
            <h3>$ ${productoConCantidad.precio}</h3>
            <h3>Cantidad: 1</h3>
        `
        cardCarrito.setAttribute('id',`producto${productoConCantidad.id}`)
        let carritoContendor = document.getElementById('carrito')
        carritoContendor.append(cardCarrito)
    }
}
function existeEnCarrito(productoAChequear){
    // if(carrito.find((producto)=>producto.id === productoAChequear))return true
    // else return false
    return(carrito.some((producto)=>producto.id === productoAChequear.id))
    // for (producto of carrito){
    //     if(productoAChequear.id === producto.id){
    //         return true
    //     }
    // }
    // return false
}

listarProductos()




