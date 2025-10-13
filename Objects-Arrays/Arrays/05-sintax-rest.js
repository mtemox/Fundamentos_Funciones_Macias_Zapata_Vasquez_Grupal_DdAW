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
// 5. sintax-rest - Rest Operator vs Spread Operator
// ----------------------------------------------------------------
console.log("--- Rest Operator (...) en Arreglos ---");
// Se usa en la destructuración para agrupar el "resto" de los elementos en un nuevo arreglo.
const [mejorSugerencia, ...otrasSugerencias] = personas;
console.log("La mejor sugerencia es:", mejorSugerencia.nombre);
console.log("Y aquí están las otras sugerencias:", otrasSugerencias.map(p => p.nombre));
console.log("\n");

console.log("--- Spread Operator (...) en Arreglos ---");
// "Esparce" los elementos de un arreglo en otro lugar (otro arreglo, argumentos de función, etc.).
// Útil para hacer copias o combinar arreglos sin modificar los originales.
const nuevasSugerenciasVIP = [
    { nombre: "Carlos Mora", edad: 35, amigosComun: 20 },
    { nombre: "Lucía Fernández", edad: 28, amigosComun: 18 }
];

// Combinar el array original con las nuevas sugerencias en un nuevo array
const todasLasSugerencias = [...nuevasSugerenciasVIP, ...personas];
console.log(`Ahora tienes un total de ${todasLasSugerencias.length} sugerencias.`);
console.log("Lista completa de nombres:", todasLasSugerencias.map(p => p.nombre));
