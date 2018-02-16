import * as types from './types';
import axios from 'axios';
import utils from '../../utils/utils';

export function fetchPokemonsSuccess(pokemons) {
  return { type: types.FETCH_POKEMONS_SUCCESS, pokemons };
}

export function fetchPokemonsFailure(error) {
  return { type: types.FETCH_POKEMONS_FAILURE, error };
}

export function setVisibilityFilter(payload) {
  let actionCreator = {
    type: types.SET_VISIBILITY_FILTER,
    multiFilterType: payload.type,
  };

  if (payload.numberOfAbilities)
    actionCreator = {
      ...actionCreator,
      numberOfAbilities: payload.numberOfAbilities,
    };
  if (payload.experience)
    actionCreator = { ...actionCreator, experience: payload.experience };
  if (payload.abilityTypes)
    actionCreator = { ...actionCreator, abilityTypes: payload.abilityTypes };

  return actionCreator;
}

function getRandomIntFromInterval(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
}

export function loadPokemons() {
  return function(dispatch) {
    let url = utils.endpoints.pokemons.getPokemonById;
    let randomIds = [];
    let promises = [];

    for (let i = 0; i < 15; i++) {
      let id = getRandomIntFromInterval(1, 802);
      if (!randomIds.includes(id)) randomIds.push(id);
      else i--;
    }

    randomIds.forEach(id => promises.push(axios.get(url + id)));

    return axios
      .all(promises)
      .then(
        axios.spread((...data) => {
          const pokemons = data.map(data => data.data);
          dispatch(fetchPokemonsSuccess(pokemons));
        }),
      )
      .catch(error => fetchPokemonsFailure(error));
  };
}
