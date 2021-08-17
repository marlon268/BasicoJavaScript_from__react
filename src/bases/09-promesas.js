import { getHeroeById } from "./08-import-export";

// const promesa = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       // Tarea
//       // importen
//       const heroe = getHeroeById(2);
//       resolve(heroe);
//       // reject("No se pudo encontrar el heroe");
//    }, 2000);
// });

// promesa
//    .then((heroe) => {
//       console.log("heroe", heroe);
//    })
//    .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         getHeroeById(id)
            ? resolve(getHeroeById(id))
            : reject("No se pudo encontrar el heroe");
      }, 2000);
   });
};

getHeroeByIdAsync(1).then(console.log).catch(console.warn);
