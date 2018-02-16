import * as types from '../actions/types';

export const pokemons = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_POKEMONS_SUCCESS:
      return action.pokemons;
    case types.FETCH_POKEMONS_FAILURE:
      return [];
    default:
      return state;
  }
};

const initialFilter = {
  type: types.SHOW_ALL_POKEMONS,
  multiFilterType: '',
  numberOfAbilities: 'all',
  experience: 'all',
  abilityTypes: 'all',
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

      if (action.numberOfAbilities !== 'all' && visiblePokemons.length > 0) {
        visiblePokemons = visiblePokemons.filter(
          pokemon => pokemon.abilities.length === action.numberOfAbilities,
        );
      }

      if (action.abilityTypes !== 'all') {
        visiblePokemons = visiblePokemons.filter(pokemon =>
          pokemon.types.some(
            word => action.abilityTypes.indexOf(word.type.name) >= 0,
          ),
        );
      }

      return visiblePokemons;
    }
    default:
      return pokemons;
  }
};
