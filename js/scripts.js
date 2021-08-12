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

  function add(pokemon) {
    pokemon.push(pokemon);
  }

  function getAll() {
    return pokemon;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
const poke = `<div>${pokemon.name} is ${pokemon.types} pokemon</div>`
document.write (poke)
console.log (poke);

});
