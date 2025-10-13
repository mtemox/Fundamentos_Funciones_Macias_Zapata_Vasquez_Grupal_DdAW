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