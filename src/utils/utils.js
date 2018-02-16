const api = 'https://pokeapi.co/api/v2';

export const utils = {
  experienceGroup: {
    label: {
      all: 'All',
      high: 'High',
      low: 'Low',
    },
    value: {
      all: 'all',
      high: 'high',
      low: 'low',
    },
  },
  typeGroup: {
    label: {
      fire: 'Fire',
      water: 'Water',
      ground: 'Ground',
      electric: 'Electric',
      flying: 'Flying',
    },
    value: {
      fire: 'fire',
      water: 'water',
      ground: 'ground',
      electric: 'electric',
      flying: 'flying',
    },
  },
  abilityGroup: {
    label: {
      all: 'All',
      one: 'One',
      two: 'Two',
      three: 'Three',
    },
    value: {
      all: '0',
      one: '1',
      two: '2',
      three: '3',
    },
  },
  endpoints: {
    pokemons: {
      getPokemonById: api + '/pokemon/',
    },
  },
};

export default utils;
