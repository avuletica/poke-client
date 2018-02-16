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
  multiFilter: {
    abilities: 'all',
    experience: 'all',
    type: 'all',
  },
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
    case types.SHOW_LOW_EXPERIENCE_POKEMONS:
      return pokemons.filter(pokemon => pokemon.base_experience < 200);
    case types.SHOW_HIGH_EXPERIENCE_POKEMONS:
      return pokemons.filter(pokemon => pokemon.base_experience >= 200);
    case types.SHOW_GROUP_ONE_POKEMONS:
      return pokemons.filter(
        pokemon =>
          pokemon.base_experience > 100 && pokemon.abilities.length > 2,
      );
    case types.SHOW_GROUP_TWO_POKEMONS:
      return pokemons.filter(
        pokemon => pokemon.base_experience < 100 && pokemon.weight > 100,
      );
    case types.SHOW_GROUP_THREE_POKEMONS:
      return pokemons.filter(
        pokemon =>
          pokemon.abilities.length < 3 &&
          pokemon.moves.length > 50 &&
          pokemon.height > 10,
      );
    case types.SHOW_GROUP_FOUR_POKEMONS:
      return pokemons.filter(pokemon =>
        pokemon.types.some(
          word => action.multiFilter.type.indexOf(word.type.name) >= 0,
        ),
      );
    default:
      return pokemons;
  }
};
