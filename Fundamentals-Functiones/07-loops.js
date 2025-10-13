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