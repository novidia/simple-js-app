let pokemonRepository = (function () {
  let pokemon = [

{name: 'Lunatone',
 speed: 70,
 types: ['psychic', 'rock']},

{name: 'Celebi',
 speed: 100,
 types: ['psychic', 'grass']},
  
{name: 'Sigilyph',
 speed: 97,
 types: ['psychic', 'flying']},

{name: 'Meloetta',
 speed: 90,
 types: ['psychic', 'normal']}, 
  
{name: 'Jirachi',
 speed: 100,
 types: ['psychic', 'steel']}
]

pokemon.forEach(function(pokemon) {
  console.log(pokemon.name + ' is ' + pokemon.types + ' pokemon.');
});

function addListItem(pokemon){
  let list = document.querySelector('.pokemon-list');
  let listItem = document.createElement ('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('button');
  listItem.appendChild(button);
  list.appendChild(listItem);
    button.addEventListener('click', function(pokemon){
      showDetails(pokemon);
  });
}

function showDetails(pokemon){
  console.log(pokemon);
}

function add(pokemon){
  pokemon.push(pokemon);
}

function getAll() {
  return pokemon;
}

function removeLast() {
  pokemonList.pop();
}

return {
  add: add,
  getAll: getAll,
  removeLast:removeLast,
  addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(function(pokemon){
pokemonRepository.addListItem(pokemon);
})
