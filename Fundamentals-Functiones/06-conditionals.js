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