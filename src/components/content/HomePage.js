import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVisiblePokemons } from '../../redux/reducers/pokemons';
import * as pokemonActions from '../../redux/actions/pokemons';
import PaperSheet from '../common/PaperSheet';

export class HomePage extends Component {
  render() {
    if (this.props.pokemons.length === 0) return <div>Loading pokemons...</div>;

    if (this.props.visiblePokemons.length === 0)
      return <div>No pokemons found with this filter</div>;

    return (
      <div>
        {this.props.visiblePokemons.map(pokemon => (
          <PaperSheet key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    visiblePokemons: getVisiblePokemons(state.pokemons, state.visibilityFilter),
    pokemons: state.pokemons,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
