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