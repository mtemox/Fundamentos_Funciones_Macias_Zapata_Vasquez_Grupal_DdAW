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