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
// 2. travesing - recorrido de arreglos (for...in y for...of)
// ----------------------------------------------------------------
console.log("--- Recorrido con for...of ---");
// for...of recorre los VALORES de un arreglo. Es la forma recomendada.
for (const persona of personas) {
    console.log(`Sugerencia encontrada: ${persona.nombre}`);
}
console.log("\n");

console.log("--- Recorrido con for...in ---");
// for...in recorre los ÍNDICES (las claves) de un arreglo.
for (const index in personas) {
    console.log(`En el índice ${index} está: ${personas[index].nombre}`);
}
console.log("\n");