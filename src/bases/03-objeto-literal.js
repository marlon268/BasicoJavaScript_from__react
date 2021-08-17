const persona = {
   nombre: "Tony",
   apellido: "Stark",
   edad: "45",
   direccion: {
      ciudad: "New York",
      zip: 646515565,
      lat: 14.245,
      long: 34.9233,
   },
};

/* console.table({ persona }); */
console.log(persona);

const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona2);
