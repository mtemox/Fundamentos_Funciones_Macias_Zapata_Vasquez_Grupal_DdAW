// ----------------------------------------------------------------
// Creación de Objetos (Perfiles sugeridos en facebook)
// ----------------------------------------------------------------

let persona1 = {
    nombre: "Emi Ugh",
    edad: 21,
    fotoPerfil: false,
    amigosComun: 0,
    addres: {
        ciudad: "Quito",
        sector: "Chillogallo",
    },
    nacionalidad: "Ecuatoriana",
}

let persona2 = {
    nombre: "Abigail Vela",
    edad: 31,
    fotoPerfil: true,
    amigosComun: 6,
    addres: {
        ciudad: "Quito",
        sector: "Llano Grande",
    },
    nacionalidad: "Colombiana",
}

let persona3 = {
    nombre: "Guste Zapate",
    edad: 42,
    fotoPerfil: true,
    amigosComun: 4,
    addres: {
        ciudad: "Quito",
        sector: "Cotocollao",
    },
    nacionalidad: "Colombiana",
}

let persona4 = {
    nombre: "Anyelin Gnz'lz",
    edad: 43,
    fotoPerfil: true,
    amigosComun: 4,
    addres: {
        ciudad: "Quito",
        sector: "Carapungo",
    },
    nacionalidad: "Ecuatoriana",
}

let persona5 = {
    nombre: "Heii Dii",
    edad: 24,
    fotoPerfil: true,
    amigosComun: 4,
    addres: {
        ciudad: "Quito",
        sector: "Pomasqui",
    },
    nacionalidad: "Ecuatoriana",
}

let persona6 = {
    nombre: "Javier Casas",
    edad: 29,
    fotoPerfil: true,
    amigosComun: 5,
    addres: {
        ciudad: "Quito",
        sector: "Guamaní",
    },
    nacionalidad: "Ecuatoriana",
}

let persona7 = {
    nombre: "Melany Monserrate",
    edad: 26,
    fotoPerfil: true,
    amigosComun: 14,
    addres: {
        ciudad: "Quito",
        sector: "Iñaquito",
    },
    nacionalidad: "Ecuatoriana",
}

// ----------------------------------------------------------------
// 1. fundamentals - acceder a sus claves (propiedades)
// ----------------------------------------------------------------
console.log("--- Acceso a Propiedades ---");
// Usando la notación de punto (la más común)
console.log("Nombre de persona1:", persona1.nombre);
console.log("Ciudad de persona2:", persona2.addres.ciudad);

// Usando la notación de corchetes (útil para claves con espacios o dinámicas)
console.log("Edad de persona1:", persona1['edad']);
let clave = 'nacionalidad';
console.log(`La ${clave} de persona2 es:`, persona2[clave]);
console.log("\n");


// ----------------------------------------------------------------
// 2. fundamentals - agregar y eliminar propiedades al objeto
// ----------------------------------------------------------------
console.log("--- Agregar y Eliminar Propiedades ---");
console.log("Persona1 original:", persona1);
// Agregar una nueva propiedad (por ejemplo, si ahora tiene un trabajo)
persona1.profesion = "Estudiante";
console.log("Persona1 con nueva propiedad 'profesion':", persona1);

// Eliminar una propiedad (por ejemplo, ya no queremos mostrar su nacionalidad)
delete persona1.nacionalidad;
console.log("Persona1 sin la propiedad 'nacionalidad':", persona1);
console.log("\n");


// ----------------------------------------------------------------
// 3. destructuring - destructuración de objetos
// ----------------------------------------------------------------
console.log("--- Destructuración de Objetos ---");
// Extraer propiedades de un objeto a variables
const { nombre, edad, amigosComun } = persona2;
console.log(`Sugerencia: ${nombre}, de ${edad} años. Tienen ${amigosComun} amigos en común.`);

// Destructuración anidada para acceder a la dirección
const { addres: { sector } } = persona3;
console.log(`${persona3.nombre} vive en el sector de: ${sector}.`);
console.log("\n");


// ----------------------------------------------------------------
// 4. freeze - Uso de freeze (Congelar un objeto)
// ----------------------------------------------------------------
console.log("--- Object.freeze ---");
// Object.freeze hace que un objeto sea inmutable. No se pueden agregar, eliminar ni cambiar propiedades.
console.log("Edad original de persona3:", persona3.edad);
Object.freeze(persona3);

// Intentamos modificar una propiedad (no funcionará)
persona3.edad = 50;
// Intentamos agregar una nueva propiedad (tampoco funcionará)
persona3.hobby = "Cantar";

console.log("Edad de persona3 después de intentar modificar:", persona3.edad);
console.log("Persona3 completa (sin cambios):", persona3);
console.log("\n");


// ----------------------------------------------------------------
// 5. freeze - uso de seal (Sellar un objeto)
// ----------------------------------------------------------------
console.log("--- Object.seal ---");
// Object.seal permite modificar propiedades existentes, pero no permite agregar ni eliminar nuevas.
console.log("Persona4 original:", persona4);
Object.seal(persona4);

// Intentamos modificar una propiedad (esto sí funcionará)
persona4.amigosComun = 7;
// Intentamos agregar una nueva propiedad (no funcionará)
persona4.estadoCivil = "Soltera";

console.log("Persona4 después de intentar cambios:", persona4);
console.log("\n");


// ----------------------------------------------------------------
// 6. spread-operator - spread operator (Copiar y combinar objetos)
// ----------------------------------------------------------------
console.log("--- Spread Operator ---");
// Crear una copia superficial de un objeto
const copiaPersona5 = { ...persona5 };
console.log("Copia de persona5:", copiaPersona5);

// Combinar dos objetos en uno nuevo.
// Supongamos que tenemos información de contacto separada para persona5
const infoContacto = {
    email: "heii.dii@email.com",
    telefono: "0991234567"
};

const perfilCompletoPersona5 = { ...persona5, ...infoContacto };
console.log("Perfil combinado de persona5:", perfilCompletoPersona5);
console.log("\n");


// ----------------------------------------------------------------
// 7. this - uso del 'this' en objetos
// ----------------------------------------------------------------
console.log("--- Uso de 'this' ---");
// 'this' se refiere al objeto que está ejecutando el método.
// Agregamos una función (método) a persona6 para que se presente.
persona6.presentarse = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.amigosComun} amigos en común contigo.`);
};

// Ahora llamamos al método
persona6.presentarse();
console.log("\n");


// ----------------------------------------------------------------
// 8. methods - métodos para trabajar con objetos (keys, values, entries)
// ----------------------------------------------------------------
console.log("--- Métodos de Object ---");
console.log("Perfil de persona7:", persona7);

// Object.keys() devuelve un array con las claves (nombres de las propiedades)
console.log("Claves del perfil 7:", Object.keys(persona7));

// Object.values() devuelve un array con los valores de las propiedades
console.log("Valores del perfil 7:", Object.values(persona7));

// Object.entries() devuelve un array de arrays, donde cada subarray es un par [clave, valor]
console.log("Entradas (clave-valor) del perfil 7:", Object.entries(persona7));
console.log("\n");


// ----------------------------------------------------------------
// 9. abbreviated-names - (ES6) Nombres abreviados de propiedades
// ----------------------------------------------------------------
console.log("--- Nombres Abreviados de Propiedades (Shorthand) ---");
// Si tienes una variable que se llama igual que la clave del objeto, puedes ponerla una sola vez.

const nombreUsuario = "Alex Cardenas";
const edadUsuario = 25;
const amigosComunUsuario = 8;

// En lugar de hacer { nombre: nombreUsuario, edad: edadUsuario, ... }
const nuevaSugerencia = {
    nombre: nombreUsuario,
    edad: edadUsuario,
    amigosComun: amigosComunUsuario
};
console.log("Nueva sugerencia (forma larga):", nuevaSugerencia);

// La forma abreviada de ES6
const nombreAbreviado = "Maria Paz";
const edadAbreviada = 22;

const sugerenciaAbreviada = {
    nombre: nombreAbreviado,
    edad: edadAbreviada,
    amigosComun: 12 // Se pueden mezclar
};
console.log("Nueva sugerencia (forma abreviada):", sugerenciaAbreviada);

