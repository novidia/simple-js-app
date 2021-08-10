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

for (let i=0; i < pokemon.length; i++) {
  if (pokemon[i].speed > 95) {
     console.log(pokemon[i].name + " is one of the fast Psychic Pokemon.");
  } else if (pokemon[i].speed < 75) {
     console.log(pokemon[i].name + " is one of the slow Psychic Pokemon.");
  } else {
     console.log(pokemon[i].name + " is one of the Psychic Pokemon with average speed.");
  }
}

for (let i=0; i < pokemon.length; i++) {
  if (pokemon[i].speed < 75) {
      document.write(`<p> ${pokemon[i].name} (speed: ${pokemon[i].speed}") - I am the slowest Psychic Pokemon on the list! </p>`);
  } else {
      document.write(`<p> ${pokemon[i].name} (speed: ${pokemon[i].speed}")</p>`);
  }
}

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
