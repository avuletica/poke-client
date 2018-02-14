import { combineReducers } from 'redux';
import { getVisiblePokemons, pokemons, visibilityFilter } from './pokemons';

const rootReducer = combineReducers({
  pokemons,
  visibilityFilter,
  getVisiblePokemons,
});

export default rootReducer;
