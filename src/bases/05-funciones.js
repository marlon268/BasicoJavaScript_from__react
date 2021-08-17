// Funciones en JS
/* const saludar = function (nombre) {
   return `hola, ${nombre}`;
}; */

const saludar2 = (nombre) => {
   return `hola, ${nombre}`;
};
const saludar3 = (nombre) => `hola, ${nombre}`;
const saludar4 = (nombre) => `hola Mundo`;

/* console.log(saludar("Kakaroto")); */

console.log(saludar2("Vegeta"));
console.log(saludar3("Kakaroto"));
console.log(saludar4());

const getUser = () => ({
   id: "ABCD123",
   username: "El_Papi1502",
});

const user = getUser();
console.log(user);

// Tarea
// 1. Tranformar a funcion flecha
// 2. Retornar un objeto implicito
// 3. Pruebas
function getUsuarioActivo(nombre) {
   return {
      uid: "abc457",
      username: nombre,
   };
}

const getUsuarioActivo2 = (nombre) => ({
   uid: "abc457",
   username: nombre,
});

const usuarioActivo = getUsuarioActivo("Marlon");
const usuarioActivo2 = getUsuarioActivo2("Marlon");

console.log(usuarioActivo);
console.log(usuarioActivo2);
