import * as types from '../actions/actionTypes';

export default function pokemonReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_POKEMONS_SUCCESS:
      return action.pokemons;
    default:
      return state;
  }
}
