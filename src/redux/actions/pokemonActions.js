import * as types from './actionTypes';
import axios from 'axios';

export function loadPokemonsSucess(pokemons) {
    return {type: types.LOAD_POKEMONS_SUCCESS, pokemons}
}

export function loadPokemons() {
    return function (dispatch) {
        return (
            axios.get('https://pokeapi.co/api/v2/pokemon/1')
                .then(pokemons => dispatch(loadPokemonsSucess(pokemons.data)))
                .catch(error => console.log(error))
        )
    }
}
