import * as types from '../actions/types';

export const pokemons = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_POKEMONS_SUCCESS:
      return state.concat(action.pokemon);
    case types.FETCH_POKEMONS_FAILURE:
      return state;
    default:
      return state;
  }
};

const initialFilter = {
  type: types.SHOW_ALL_POKEMONS,
  multiFilterType: '',
  numberOfAbilities: 'all',
  experience: 'all',
  abilityTypes: [],
};

export const visibilityFilter = (state = initialFilter, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return Object.assign({}, state, action);
    default:
      return state;
  }
};

export const getVisiblePokemons = (pokemons = [], action) => {
  switch (action.multiFilterType) {
    case types.SHOW_ALL_POKEMONS:
      return pokemons;
    case types.SET_MULTIPLE_FILTERS: {
      if (pokemons.length === 0) return pokemons;

      let visiblePokemons = [...pokemons];

      if (action.experience === 'low') {
        visiblePokemons = pokemons.filter(
          pokemon => pokemon.base_experience < 200,
        );
      } else if (action.experience === 'high') {
        visiblePokemons = pokemons.filter(
          pokemon => pokemon.base_experience > 200,
        );
      }

      if (action.numberOfAbilities !== 'all') {
        visiblePokemons = visiblePokemons.filter(
          pokemon => pokemon.abilities.length === action.numberOfAbilities,
        );
      }

      if (action.abilityTypes.length !== 0) {
        visiblePokemons = visiblePokemons.filter(pokemon => {
          let pokemonTypes = [];
          pokemon.types.map(item => pokemonTypes.push(item.type.name));
          return action.abilityTypes.every(
            elem => pokemonTypes.indexOf(elem) > -1,
          );
        });
      }

      return visiblePokemons;
    }
    default:
      return pokemons;
  }
};
