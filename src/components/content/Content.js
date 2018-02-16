import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVisiblePokemons } from '../../redux/reducers/pokemons';
import * as pokemonActions from '../../redux/actions/pokemons';
import PaperSheet from '../common/PaperSheet';

export class Content extends Component {
  render() {
    console.log(this.props);
    if (this.props.pokemons.length === 0)
      return <div>Loading pokémons ...</div>;

    if (this.props.visiblePokemons.length === 0)
      return <div>No pokémons found with this filter</div>;

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

export default connect(mapStateToProps, mapDispatchToProps)(Content);
