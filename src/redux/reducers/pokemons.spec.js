import * as types from '../actions/types';
import { pokemons, visibilityFilter } from './pokemons';

describe('pokemon reducer', () => {
  it('should return the initial state of pokemons', () => {
    expect(pokemons(undefined, {})).toEqual([]);
  });

  it('should return the initial state of visibility filter', () => {
    expect(visibilityFilter(undefined, {})).toEqual({
      type: types.SHOW_ALL_POKEMONS,
      multiFilterType: '',
      numberOfAbilities: 'all',
      experience: 'all',
      abilityTypes: [],
    });
  });

  it('should return the initial state of visible pokemons', () => {
    expect(pokemons(undefined, {})).toEqual([]);
  });
});
