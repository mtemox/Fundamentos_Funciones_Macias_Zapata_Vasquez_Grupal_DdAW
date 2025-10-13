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