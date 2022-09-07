let compraTotal = 0
let nombreCliente = prompt('Bienvenido, ingresa tu nombre')
let compraDeInstrumento = parseInt(prompt('Hola '+nombreCliente+ ' selecciona tu instrumento: 1.Guitarra - 2.Bajo - 3.Bateria - 4.Teclado'))
let agregarInstrumento = true

let instrumentos = []
let carrito = []

// objetos

class Instrumentos{
    constructor(instrumento, precio, id){
        this.instrumento = instrumento
        this.precio = precio
        this.id = id
    }
} 

const guitarra = new Instrumentos('guitarra', 26000, 1)
const bajo = new Instrumentos('bajo', 40700, 2)
const bateria = new Instrumentos('bateria', 120000, 3)
const teclado = new Instrumentos('teclado', 97000, 4)

// Arrays instrumentos

instrumentos.push(guitarra)
instrumentos.push(bajo)
instrumentos.push(bateria)
instrumentos.push(teclado)

console.log(instrumentos)

// arrays carrito y calculo total compra en ciclo while

while(agregarInstrumento===true){
    if(compraDeInstrumento===1){
        carrito.push(instrumentos[0])
    } else if(compraDeInstrumento===2){
        carrito.push(instrumentos[1])
    }  else if(compraDeInstrumento===3){
    carrito.push(instrumentos[2])
    }  else if(compraDeInstrumento===4){
    carrito.push(instrumentos[3])
    } 
    //funcionea de orden superior
    const productoElegido = instrumentos.find(Instrumentos=>Instrumentos.id===compraDeInstrumento)
    if(productoElegido){
        compraTotal = compraTotal + productoElegido.precio
    }
    else {
        compraDeInstrumento = parseInt(prompt('Hola '+nombreCliente+ 'selecciona tu instrumento: 1.Guitarra - 2.Bajo - 3.Bateria - 4.Teclado')) 
        continue
    }
    opciones = parseInt(prompt('comprar mas instrumentos? 1.si - 2.no'))
    if(opciones===1){
        compraDeInstrumento = parseInt(prompt('Selecciona tu instrumento: 1.Guitarra - 2.Bajo - 3.Bateria - 4.Teclado'))
    } else if(opciones===2){
        agregarInstrumento = false
    }
}
console.log(carrito)

alert('El total a pagar es de: '+compraTotal)
