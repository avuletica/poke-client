import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pokemonActions from '../../redux/actions/pokemons';
import PaperSheet from '../common/PaperSheet';

export class HomePage extends Component {
  componentDidMount() {
    this.props.actions.loadPokemons();
  }

  render() {
    if (this.props.pokemons.length > 0) {
      return (
        <div>
          {this.props.pokemons.map(pokemon => (
            <PaperSheet key={pokemon.id} pokemon={pokemon} />
          ))}
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
