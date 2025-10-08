// ========Variables========
var cantidadProductos = 2
let stockproducto = true
const numeroSerie = 1050281441


// =========Strings=========

let nombreProducto = "TeckNet Pro M003 mouse inalámbrico";
let colorProducto = "Azul";
let conectividadProducto = "USB";
let tecnologíaDteccionMovimiento = "Óptico";
let frecuencia = "2.4 GHz";
console.log(`El ${nombreProducto.toUpperCase()} es un mouse inalámbrico de color ${colorProducto.toLocaleLowerCase()} que utiliza conectividad ${conectividadProducto.trim()} y tecnología de detección de movimiento ${tecnologíaDteccionMovimiento} con una frecuencia de ${frecuencia}.`);


//========numbers========

let precio = "11.99"
let precio2 = 11.99
console.log(+precio + 4)
console.log((+precio).toFixed(1))
console.log(2 * 2 ** 2 + 3)
console.log(precio==precio2)
console.log(precio===precio2)
console.log(precio!=precio2)
console.log(precio!==precio2)


//========Booleans========
let esNuevo = true;
let esUsado = false;
console.log(esNuevo);
console.log(esUsado);

//Valores truthy y falsy
let stockMouse = null;
console.log(stockMouse ?? "No hay mouses disponibles actualmente");


//=========Condicionales========
//Operador ternario
let calificacion = true
let descuento = true

console.log(calificacion && descuento ? "Tiene un descuento del 10%" : "No tiene descuento, califique el producto para obtener uno")

let ColorMouse = ["Azul"];
ColorMouse.length === 0 ? console.log("El producto está en stock" ) : console.log( "El producto no está en stock");

//If
if (calificacion && descuento) {
    console.log("Tiene un descuento del 10%");
} else {
    console.log("No tiene descuento, califique el producto para obtener uno");
}

//switch
let metodoPago = "Tarjeta de crédito";  
switch (metodoPago) {
    case "Tarjeta de crédito":
        console.log("Pago con tarjeta de crédito seleccionado");
        break;
    case "PayPal":
        console.log("Pago con PayPal seleccionado");
        break;
    case "Transferencia bancaria":
        console.log("Pago con transferencia bancaria seleccionado");
        break;
    default:
        console.log("Método de pago no válido");
        break;
}

// Datos compuestos
// Arreglos
let carritoProductos = ["TeckNet Pro M003 mouse inalámbrico", "Logitech MX Master 3 mouse inalámbrico", "Microsoft Surface Precision Mouse"];
if (carritoProductos.length != 0) {
    console.log(`El carrito tiene los siguientes productos: ${carritoProductos}`);}
else {
    console.log("El carrito está vacío");
}


//=========Funciones========
//Funcion declarada
function validarStock() {
  console.log("Stock validado");
}
validarStock();

//Funcion expresada
const validarStock2 = function () {
  console.log("Stock validado");
};
validarStock2();

// Funcion flecha
const validarStock3 = () => {
  return console.log("Stock validado");
};

const validarStock4 = () => "Stock validado";

const validarStock5 = () => ("Stock validado");


console.log(validarStock3());
console.log(validarStock4());
console.log(validarStock5());


//========Bucles============
//for

const contadorMouse = 2

for (let i = contadorMouse; i >= 0; i--) {
    
    i <=0 ? console.log("Producto listo para su entrega"):console.log(i);
}

//ForEach
const PasosCompraMouse = ['Elegir Color','Agregar al Carrito','Proceder Pago','Ingresar sus datos ','Pagar']

PasosCompraMouse.forEach((t,i)=> console.log(`${i} - ${t}`))

//Forof
for (const t of PasosCompraMouse) {
    console.log(`${t}`)
}

//Forin
const compradorMouse ={
    nombre:"Comprador",
    apellido:"ApellidoC",
}
for (const clave in compradorMouse) {
    console.log(`${compradorMouse[clave]}`)
}

//Map
const nuevasPasos = PasosCompraMouse.map((t)=> t)
console.log(nuevasPasos);


//while
let finContador = 10;
let contador01 = 0;
while (contador01 <= finContador) {
    console.log(contador01);
    contador01++;
}
console.log("Fin del conteo con while");

//do while
let contador02 = 0;
do {
    console.log(contador02);
    contador02++;
} while (contador02 <= finContador);
console.log("Fin del conteo con do while");

