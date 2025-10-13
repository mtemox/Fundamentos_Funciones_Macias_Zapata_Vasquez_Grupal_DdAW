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
