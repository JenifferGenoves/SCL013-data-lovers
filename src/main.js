import pokeData from './data/pokemon/pokemon.js';
import {} from './data.js';


//Ver los Pokemones
// Objet.values devuelve un arreglo con los objetos pokemon (cada pokemon)
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

//Top 10
const pokeDatos2 = pokeData.pokemon;
let arrData2 = Object.values(pokeDatos2)
const pokemonesObj2 = document.getElementById('tableOne');
for (let i = 0; i <= 9; i++) {
  pokemonesObj2.innerHTML +=
    '<div class=\'root\'> <h3 class=\'pokeNumber2\'>' +
    arrData2[i].num + '</h3> <h4 class=\'pokeName2\'>' +
    arrData2[i].name + '</h4> <img src=\'' +
    arrData2[i].img + '\' class=\'pokeImg2\'> </div>';
}

//Al hacer click en la tarjeta te lleva a ver más info


//Filtrar Pokemon
const menu = document.querySelector('.selectorType');
menu.addEventListener('change', (event) => {
  pokemonesObj.innerHTML = '';
  if (event.target.value == 0) {
    for (let i = 0; i < arrData.length; i++) {
      pokemonesObj.innerHTML +=
        '<div class=\'cardP\'> <h3 class=\'pokeNumber\'>' +
        arrData[i].num + '</h3> <img src=\'' +
        arrData[i].img + '\' class=\'pokeImg\'> <h4 class=\'pokeName\'>' +
        arrData[i].name + '</h4> </div>';
    }
  } else {

    for (let i = 0; i < arrData.length; i++) {
      for (let j = 0; j < arrData[i].type.length; j++) {
        if (event.target.value == arrData[i].type[j]) {
          pokemonesObj.innerHTML +=
            '<div class=\'cardP\'> <h3 class=\'pokeNumber\'>' +
            arrData[i].num + '</h3> <img src=\'' +
            arrData[i].img + '\' class=\'pokeImg\'> <h4 class=\'pokeName\'>' +
            arrData[i].name + '</h4> </div>';
        }
      }
    }
  }
})

//Ordenar Pokemon
let arrDataOrder = Object.values(pokeDatos)
const menuOrder = document.querySelector('#selectorOrder');
menuOrder.addEventListener('change', (event) => {
  pokemonesObj.innerHTML = '';
  if (event.target.value == 0) {
    for (let i = 0; i < arrData.length; i++) {
      pokemonesObj.innerHTML +=
        '<div class=\'cardP\'> <h3 class=\'pokeNumber\'>' +
        arrData[i].num + '</h3> <img src=\'' +
        arrData[i].img + '\' class=\'pokeImg\'> <h4 class=\'pokeName\'>' +
        arrData[i].name + '</h4> </div>';
    }
  } else if (event.target.value == 1) { //ordenando de A - Z
    arrDataOrder.sort(function (a, b) {
      const nameA = a.name.toLocaleLowerCase(),
        nameB = b.name.toLocaleLowerCase();
      if (nameA < nameB)
        return -1;
      if (nameB < nameA)
        return 1;
      return 0;
    });
    for (let i = 0; i < arrDataOrder.length; i++) {
      pokemonesObj.innerHTML +=
        '<div class=\'cardP\'> <h3 class=\'pokeNumber\'>' +
        arrDataOrder[i].num + '</h3> <img src=\'' +
        arrDataOrder[i].img + '\' class=\'pokeImg\'> <h4 class=\'pokeName\'>' +
        arrDataOrder[i].name + '</h4> </div>';
    }
  } else if (event.target.value == 2) { //ordenando de Z - A
    arrDataOrder.sort(function (a, b) {
      const nameA = a.name.toLocaleLowerCase(),
        nameB = b.name.toLocaleLowerCase();
      if (nameA < nameB)
        return 1;
      if (nameB < nameA)
        return -1;
      return 0;
    });
    for (let i = 0; i < arrDataOrder.length; i++) {
      pokemonesObj.innerHTML +=
        '<div class=\'cardP\'> <h3 class=\'pokeNumber\'>' +
        arrDataOrder[i].num + '</h3> <img src=\'' +
        arrDataOrder[i].img + '\' class=\'pokeImg\'> <h4 class=\'pokeName\'>' +
        arrDataOrder[i].name + '</h4> </div>';
    }
  } else if (event.target.value == 3) { //ordenando de 1 - 151
    for (let i = 0; i < arrData.length; i++) {
      pokemonesObj.innerHTML +=
        '<div class=\'cardP\'> <h3 class=\'pokeNumber\'>' +
        arrData[i].num + '</h3> <img src=\'' +
        arrData[i].img + '\' class=\'pokeImg\'> <h4 class=\'pokeName\'>' +
        arrData[i].name + '</h4> </div>';
    }
  } else if (event.target.value == 4) { //ordenando de 151 - 1
    arrDataOrder.sort(function (a, b) {
      return parseInt(b.num, 10) - parseInt(a.num, 10)
    });
    for (let i = 0; i < arrDataOrder.length; i++) {
      pokemonesObj.innerHTML +=
        '<div class=\'cardP\'> <h3 class=\'pokeNumber\'>' +
        arrDataOrder[i].num + '</h3> <img src=\'' +
        arrDataOrder[i].img + '\' class=\'pokeImg\'> <h4 class=\'pokeName\'>' +
        arrDataOrder[i].name + '</h4> </div>';
    }
  }
})
//Busqueda Pokemon
// A medida que uno vaya escribiendo vaya filtrando
// formulario.addEventListener('input', filtrar);