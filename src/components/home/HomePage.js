import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pokemonActions from '../../redux/actions/pokemonActions';

export class HomePage extends Component {
  pokemonRow = pokemon => {
    return <div key={pokemon.id}>{pokemon.name}</div>;
  };

  render() {
    if (this.props.pokemons.length > 0) {
      return (
        <div>
          {this.props.pokemons.map(pokemon => this.pokemonRow(pokemon))}
        </div>
      );
    } else return <div>Loading pokemons @ home</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    pokemons: state.pokemons,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
