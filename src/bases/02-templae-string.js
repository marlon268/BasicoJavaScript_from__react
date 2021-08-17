// Template string

const nombre = "Marlon";
const apellido = "Varon";

/* const nombreCompleto = nombre + " " + apellido; */
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(nombre, apellido) {
   return `Hola ${nombre} ${apellido}, Como estas`;
}

console.log(`${getSaludo(nombre, apellido)}`);
