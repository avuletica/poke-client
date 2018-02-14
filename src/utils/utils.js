export default function utils() {
  const api = 'https://pokeapi.co/api/v2';
  return {
    experienceGroupFilter: {
      all: 'all',
      high: 'high',
      low: 'low',
    },
    typeGroupFilter: {
      fire: 'fire',
      water: 'water',
      ground: 'ground',
      electric: 'normal',
      flying: 'flying',
    },
    abilityGroupFilter: {
      all: 'all',
      one: 'one',
      two: 'two',
      three: 'three',
    },
    endpoints: {
      pokemons: {
        getPokemonById: api + '/pokemon/',
      },
    },
  };
}
