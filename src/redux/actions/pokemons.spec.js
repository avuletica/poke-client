import * as actions from './pokemons';
import * as types from './types';

describe('actions', () => {
  it('should set experience to all', () => {
    const payload = {
      type: types.SET_MULTIPLE_FILTERS,
      experience: 'all',
    };
    const expectedAction = {
      type: types.SET_VISIBILITY_FILTER,
      multiFilterType: types.SET_MULTIPLE_FILTERS,
      experience: 'all',
    };
    expect(actions.setVisibilityFilter(payload)).toEqual(expectedAction);
  });

  it('should set number of abilities to 3', () => {
    const payload = {
      type: types.SET_MULTIPLE_FILTERS,
      numberOfAbilities: 3,
    };
    const expectedAction = {
      type: types.SET_VISIBILITY_FILTER,
      multiFilterType: types.SET_MULTIPLE_FILTERS,
      numberOfAbilities: 3,
    };
    expect(actions.setVisibilityFilter(payload)).toEqual(expectedAction);
  });

  it('should set multi filter', () => {
    const payload = {
      type: types.SET_MULTIPLE_FILTERS,
      experience: 'low',
      numberOfAbilities: 'all',
      abilityTypes: ['electric', 'bug'],
    };
    const expectedAction = {
      type: types.SET_VISIBILITY_FILTER,
      multiFilterType: types.SET_MULTIPLE_FILTERS,
      experience: 'low',
      numberOfAbilities: 'all',
      abilityTypes: ['electric', 'bug'],
    };
    expect(actions.setVisibilityFilter(payload)).toEqual(expectedAction);
  });
});
