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
  return {
    type: types.SET_VISIBILITY_FILTER,
    multiFilterType: payload.type,
    multiFilter: payload.multiFilter,
  };
}

function getRandomIntFromInterval(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
}

export function loadPokemons() {
  return function(dispatch) {
    let url = utils.endpoints.pokemons.getPokemonById;
    let promises = [];

    for (let i = 0; i < 5; i++) {
      let endpoint = url + getRandomIntFromInterval(1, 802);
      promises.push(axios.get(endpoint));
    }

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
