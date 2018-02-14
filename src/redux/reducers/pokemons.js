import * as types from '../actions/types';

export const pokemons = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_POKEMONS_SUCCESS:
      return action.pokemons;
    default:
      return state;
  }
};

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export const getVisiblePokemons = (
  pokemons = types.SHOW_ALL_POKEMONS,
  filter,
) => {
  switch (filter) {
    case types.SHOW_ALL_POKEMONS:
      return pokemons;
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
        pokemon.types.some(word => word.type.name === 'fire'),
      );
    default:
      return pokemons;
  }
};
