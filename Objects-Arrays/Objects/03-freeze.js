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