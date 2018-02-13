import { combineReducers } from 'redux';
import pokemons from './pokemons';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  pokemons,
  visibilityFilter,
});

export default rootReducer;
