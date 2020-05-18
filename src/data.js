// En esta sección van las funciones de manipulación de la Data
//Primero scribimos la función para mostrar a todos los Pokemones

// document.addEventListener('DOMContentLoaded', () => {
//   const { pokemones, renderPokemon, renderTypeOfPokemonOptions } = window

//   // DECLARAMOS ESTADO
//   const store = {
//       prevState: pokemones,
//       currentState: []
//   }

//   window.store = store

//   console.log("renderPokemon" in window)
//   const mainDiv = document.getElementById('pokemonList')
//   const mainSelect = document.getElementById('typesOfPokemons')
//   const orderSelect = document.getElementById('order')
//   renderPokemon(mainDiv)
//   renderTypeOfPokemonOptions(pokemones, mainSelect)
//   createOrderOptions(orderSelect)

//   // FILTRANDO POKEMONES
//   mainSelect.addEventListener('click', function(event){
//       window.applyFilter(event.target.value, mainDiv)
//   })

//   // FILTRANDO POR OPCIONES
//   orderSelect.addEventListener('click', function(event) {
//       window.filterBy(event.target.value, mainDiv)
//   })
// })















export const filterByType = (pokeDatos, type) => {
  const newDataArray = []; //declara variable con array
  for (let i = 0; i < pokeDatos.length; i += 1) { //loop que va recorriendo la data
    newDataArray.push(pokeDatos[i]);
    
  }
  return newDataArray.filter(pokemon => pokemon.type.includes(type))
};





    //console.log(data);
    //console.log(condition);
    //Le vamos a pedir que recorra la Data, la data es un ARRAY que contiene Objetos, para eso utilizamos: For hasta el largo de la data y uno por
    
    




//   //console.log(condition);
//   //Le vamos a pedir que recorra la Data, la data es un ARRAY que contiene Objetos, para eso utilizamos: For hasta el largo de la data y uno por
  
//   const pokeData = [];
  
//   for (let i = 0; i < pokeData.length; i++) {
//       pokeData.push(pokeData[i].name);

//   }
// // // export const allPokemon = (dataSet) => {
// //       const newDataArray = [];
// //       for (let i = 0; i < dataSet.length; i += 1) {
// //         newDataArray.push(dataSet[i]);
// //       }
// //       return newDataArray;
// //     };






















//console.log(data);
//console.log(condition);
//Le vamos a pedir que recorra la Data, la data es un ARRAY que contiene Objetos, para eso utilizamos: For hasta el largo de la data y uno por




// //Ordena Pokemones por nombre de la A a la Z
// export const orderPokemonAz = (dataSet)=> {
//   const newDataArray = [];
//   for (let i = 0; i < dataSet.length; i++) {
//     newDataArray.push(dataSet[i]);
//   }
//   newDataArray.sort((a, b) => {
//     if (a.name > b.name) {
//       return 1;
//     }
//     if (a.name < b.name) {
//       return -1;
//     }
//     return 0;
//   });
//   return newDataArray;
// };

// //Ordena Pokemones por nombre de la Z a la A
// export const orderPokemonZa = (dataSet)=>{
//   const newDataArray = [];
//   for (let i = 0; i < dataSet.length; i ++) {
//     newDataArray.push(dataSet[i]);
//   }
//   newDataArray.sort((a, b) => {
//     if (a.name > b.name) {
//       return -1;
//     }
//     if (a.name < b.name) {
//       return 1;
//     }
//     return 0;
//   });
//   return newDataArray;
// };
