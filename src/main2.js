// EN ESTA SECCIÓN VARIABLES PARA MANIPULAR EL DOM
// DENTRO DE LAS LLAVES DE CADA FUNCIÓN ESCRIBO LAS FUNCIONES QUE DECLARO EN EL DATA.

import pokeData from './data/pokemon/pokemon.js';
//console.log(pokeData);
import {filterByType} from './data.js';

// VER A TODOS LOS POKEMON
const pokeDatos = pokeData.pokemon;
let arrData = Object.values(pokeDatos)
const pokemonesObj = document.getElementById('containerPokemon');
for (let i = 0; i < arrData.length; i++) {
  pokemonesObj.innerHTML +=
    '<div class=\'cardP\'> <h3 class=\'pokeNumber\'>' +
    arrData[i].num + '</h3> <img src=\'' +
    arrData[i].img + '\' class=\'pokeImg\'> <h4 class=\'pokeName\'>' +
    arrData[i].name + '</h4> </div>';
}
// Filtrar por tipos de Pokemon

const type= pokeDatos;
const selectorType = document.querySelector("[name='selector']");

function filterPoke (type) { 
  selectorType.addEventListener ("change", (event) => {
    let typePokemon =selectorType.value; 
    if (typePokemon === "") { 
      filterPoke(type);
      pokePrint(pokeDatos);
     
    } 

    else {
          let bug = selectorType.options[selectorType.selectedIndex].value;
          console.log(selectorType.options[selectorType.selectedIndex].value);
          let resultType = filterByType (type,bug);
          let arrData3 = Object.values(resultType); // devuelve un array con los valores correspondientes de un objeto en el orden en el que estan

          // filterPoke(resultType);
          
          const pokemonesObj = document.getElementById("containerPokemon");
          pokemonesObj.innerHTML= "";
          for(let i=0; i<arrData3.length; i++){
          console.log(pokemonesObj);
          pokemonesObj.innerHTML +=
          '<div class=\'cardP\'> <h3 class=\'pokeNumber\'>' +
          arrData3[i].num + '</h3> <img src=\'' +
          arrData3[i].img + '\' class=\'pokeImg\'> <h4 class=\'pokeName\'>' +
          arrData3[i].name + '</h4> </div>'; 
          } 
           console.log(type);
          console.log(arrData3);
      }
  });
}

filterPoke(type);

function pokePrint (pokeDatos, type) {
console.log("pokePrint");
for(let i=0; i<arrData.length; i++){
   if (type==="selectorType") {
     pokePrint
   }
  let resultType = filterByType (pokeDatos,type);
       filterPoke(resultType);
   pokemonesObj.innerHTML+= 
   '<div class=\'cardP\'> <h3 class=\'pokeNumber\'>' +
    arrData[i].num + '</h3> <img src=\'' +
    arrData[i].img + '\' class=\'pokeImg\'> <h4 class=\'pokeName\'>' +
    arrData[i].name + '</h4> </div>';
}
//Top 10
const pokeDatos2 = pokeData.pokemon;
let arrData2 = Object.values(pokeDatos2);
const pokemonesObj2 = document.getElementById('tableOne');
for (let i = 0; i <= 9; i++) {
  pokemonesObj2.innerHTML +='<div class=\'root\'> <h3 class=\'pokeNumber2\'>' + 
  arrData2[i].num + '</h3> <h4 class=\'pokeName2\'>' +
  arrData2[i].name + '</h4> <img src=\'' +
  arrData2[i].img + '\' class=\'pokeImg2\'> </div>';
}
}

