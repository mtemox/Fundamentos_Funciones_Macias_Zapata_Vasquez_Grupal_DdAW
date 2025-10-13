// ----------------------------------------------------------------
// Base de datos de perfiles (Perfiles sugeridos en facebook)
// ----------------------------------------------------------------

let personas = [
    { nombre: "Emi Ugh", edad: 21, fotoPerfil: false, amigosComun: 0, addres: { ciudad: "Quito", sector: "Chillogallo" }, nacionalidad: "Ecuatoriana" },
    { nombre: "Abigail Vela", edad: 31, fotoPerfil: true, amigosComun: 6, addres: { ciudad: "Quito", sector: "Llano Grande" }, nacionalidad: "Colombiana" },
    { nombre: "Guste Zapate", edad: 42, fotoPerfil: true, amigosComun: 4, addres: { ciudad: "Quito", sector: "Cotocollao" }, nacionalidad: "Colombiana" },
    { nombre: "Anyelin Gnz'lz", edad: 43, fotoPerfil: true, amigosComun: 4, addres: { ciudad: "Quito", sector: "Carapungo" }, nacionalidad: "Ecuatoriana" },
    { nombre: "Heii Dii", edad: 24, fotoPerfil: true, amigosComun: 4, addres: { ciudad: "Quito", sector: "Pomasqui" }, nacionalidad: "Ecuatoriana" },
    { nombre: "Javier Casas", edad: 29, fotoPerfil: true, amigosComun: 5, addres: { ciudad: "Quito", sector: "Guamaní" }, nacionalidad: "Ecuatoriana" },
    { nombre: "Melany Monserrate", edad: 26, fotoPerfil: true, amigosComun: 14, addres: { ciudad: "Quito", sector: "Iñaquito" }, nacionalidad: "Ecuatoriana" },
    { nombre: "Abi Daam", edad: 15, fotoPerfil: true, amigosComun: 2, addres: { ciudad: "Quito", sector: "Mitad del Mundo" }, nacionalidad: "Ecuatoriana" },
    { nombre: "David Stalyn Rebutti", edad: 32, fotoPerfil: true, amigosComun: 5, addres: { ciudad: "Quito", sector: "Carcelén" }, nacionalidad: "Ecuatoriana" },
    { nombre: "Danne Lemarie", edad: 25, fotoPerfil: true, amigosComun: 10, addres: { ciudad: "Guayaquil", sector: "Urdesa" }, nacionalidad: "Ecuatoriana" }
];

// ----------------------------------------------------------------
// 3. methods - métodos de arreglos
// ----------------------------------------------------------------

// --- push() y unshift() (Agregar elementos) ---
console.log("--- Métodos push() y unshift() ---");
const nuevaSugerenciaFinal = { nombre: "David Rebutti", edad: 32, amigosComun: 5, addres: { ciudad: "Quito", sector: "Carcelén" } };
personas.push(nuevaSugerenciaFinal); // push() agrega al FINAL
console.log(`Se agregó a '${nuevaSugerenciaFinal.nombre}' al final. Nuevo total: ${personas.length}`);

const nuevaSugerenciaInicio = { nombre: "Danne Lemarie", edad: 25, amigosComun: 10, addres: { ciudad: "Guayaquil", sector: "Urdesa" } };
personas.unshift(nuevaSugerenciaInicio); // unshift() agrega al INICIO
console.log(`Se agregó a '${nuevaSugerenciaInicio.nombre}' al inicio. Nuevo total: ${personas.length}`);
console.log("Lista de nombres actualizada:", personas.map(p => p.nombre));
console.log("\n");

// --- pop() y shift() (Remover elementos) ---
console.log("--- Métodos pop() y shift() ---");
const ultimaPersonaRemovida = personas.pop(); // pop() remueve del FINAL
console.log(`Se eliminó la última sugerencia: '${ultimaPersonaRemovida.nombre}'. Quedan ${personas.length} sugerencias.`);

const primeraPersonaRemovida = personas.shift(); // shift() remueve del INICIO
console.log(`Se eliminó la primera sugerencia: '${primeraPersonaRemovida.nombre}'. Quedan ${personas.length} sugerencias.`);
console.log("Lista de nombres final:", personas.map(p => p.nombre));
console.log("\n");

// --- Array.isArray() (Verificar si es un arreglo) ---
console.log("--- Método Array.isArray() ---");
let objetoEjemplo = { nombre: "Test", edad: 99 };
console.log("¿La variable 'personas' es un arreglo?", Array.isArray(personas)); // Devolverá true
console.log("¿La variable 'objetoEjemplo' es un arreglo?", Array.isArray(objetoEjemplo)); // Devolverá false
console.log("\n");

// --- slice() (Copiar una parte del arreglo) ---
console.log("--- Método slice() ---");
// Crea una copia de una porción del arreglo, sin modificar el original.
// slice(inicio, fin-1)
const top3Sugerencias = personas.slice(0, 3); // Copia los elementos desde el índice 0 hasta el 2.
console.log("Tus 3 sugerencias principales son:");
top3Sugerencias.forEach(p => console.log(`- ${p.nombre}`));
console.log("El arreglo original no se modificó, sigue teniendo:", `${personas.length} elementos.`);
console.log("\n");

// --- findIndex ---
console.log("--- Método findIndex ---");
// Devuelve el ÍNDICE del primer elemento que cumple una condición. Si no lo encuentra, devuelve -1.
const indicePersonaGuayaquil = personas.findIndex(persona => persona.addres.ciudad === "Guayaquil");
console.log(`La primera persona de Guayaquil está en el índice: ${indicePersonaGuayaquil}`);
console.log("\n");

// --- includes ---
console.log("--- Método includes ---");
// Verifica si un valor existe en un arreglo. Devuelve true o false.
// Es más útil con arrays de valores primitivos (strings, números).
const arrayNombres = personas.map(persona => persona.nombre);
const existeJavier = arrayNombres.includes("Javier Casas");
console.log(`¿Existe 'Javier Casas' en las sugerencias? ${existeJavier}`);
console.log("\n");

// --- some ---
console.log("--- Método some ---");
// Verifica si AL MENOS UN elemento del arreglo cumple una condición.
const hayMenoresDeEdad = personas.some(persona => persona.edad < 18);
console.log(`¿Hay algún menor de edad en las sugerencias? ${hayMenoresDeEdad}`);
console.log("\n");

// --- every ---
console.log("--- Método every ---");
// Verifica si TODOS los elementos del arreglo cumplen una condición.
const todosTienenFoto = personas.every(persona => persona.fotoPerfil === true);
console.log(`¿Todos los perfiles sugeridos tienen foto de perfil? ${todosTienenFoto}`);
console.log("\n");

// --- reverse ---
console.log("--- Método reverse ---");
// Invierte el orden de los elementos del arreglo. ¡Este método modifica el array original!
console.log("Nombres en orden original:", personas.map(p => p.nombre));
personas.reverse();
console.log("Nombres en orden inverso:", personas.map(p => p.nombre));
// Lo volvemos a invertir para dejarlo como estaba para los siguientes ejemplos
personas.reverse();
console.log("\n");

// --- sort ---
console.log("--- Método sort ---");
// Ordena los elementos de un arreglo. Para objetos, necesita una función de comparación.
// Ordenar por edad, de menor a mayor.
const personasOrdenadasPorEdad = [...personas].sort((a, b) => a.edad - b.edad);
console.log("Sugerencias ordenadas por edad (menor a mayor):");
personasOrdenadasPorEdad.forEach(p => console.log(`- ${p.nombre} (${p.edad} años)`));
console.log("\n");

// --- reduce ---
console.log("--- Método reduce ---");
// Reduce el arreglo a un único valor, aplicando una función acumuladora.
// Vamos a sumar todos los "amigos en común" de las sugerencias.
const totalAmigosComun = personas.reduce((acumulador, persona) => {
    return acumulador + persona.amigosComun;
}, 0); // El 0 es el valor inicial del acumulador.
console.log(`En total, tienes ${totalAmigosComun} amigos en común con todas tus sugerencias.`);
console.log("\n");

// ----------------------------------------------------------------
// Método filter()
// ----------------------------------------------------------------
// 'filter' crea un NUEVO arreglo con todas las personas que cumplen una condición.
// En este caso, creamos una lista solo con las personas que son mayores de 30 años.

const personasMayoresDe30 = personas.filter(persona => persona.edad > 30);

console.log("Resultado de filter (personas mayores de 30):", personasMayoresDe30);


// ----------------------------------------------------------------
// Método find()
// ----------------------------------------------------------------
// 'find' busca en el arreglo y devuelve el PRIMER objeto que encuentra que cumple la condición.
// En este caso, buscamos a la primera persona que vive en "Guayaquil".

const primeraPersonaDeGuayaquil = personas.find(persona => persona.addres.ciudad === "Guayaquil");

console.log("Resultado de find (primera persona de Guayaquil):", primeraPersonaDeGuayaquil);
