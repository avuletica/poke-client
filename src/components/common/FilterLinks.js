import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as pokemonActions from '../../redux/actions/pokemons';
import { connect } from 'react-redux';
import { Button } from 'material-ui';
import * as types from '../../redux/actions/types';

const buttonStyle = {
  margin: 5,
};

export class FilterLinks extends Component {
  handleGroupOneFilter = () => {
    const payload = {
      type: types.SET_MULTIPLE_FILTERS,
      experience: 'high',
      numberOfAbilities: 3,
    };
    this.props.actions.setVisibilityFilter(payload);
  };

  handleGroupTwoFilter = () => {
    const payload = {
      type: types.SET_MULTIPLE_FILTERS,
      experience: 'low',
      numberOfAbilities: 'all',
    };
    this.props.actions.setVisibilityFilter(payload);
  };

  handleGroupThreeFilter = () => {
    const payload = {
      type: types.SET_MULTIPLE_FILTERS,
      experience: 'all',
      numberOfAbilities: 'all',
      abilityTypes: ['fire', 'ground', 'flying'],
    };
    this.props.actions.setVisibilityFilter(payload);
  };

  handleGroupFourFilter = () => {
    const payload = {
      type: types.SET_MULTIPLE_FILTERS,
      experience: 'all',
      abilityTypes: ['water', 'electric', 'flying'],
    };
    this.props.actions.setVisibilityFilter(payload);
  };

  handleResetFilter = () => {
    const payload = {
      type: types.SHOW_ALL_POKEMONS,
      numberOfAbilities: 'all',
      experience: 'all',
      abilityTypes: [],
    };
    this.props.actions.setVisibilityFilter(payload);
  };

  render() {
    return (
      <div style={{ marginLeft: 20 }}>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          style={buttonStyle}
          onClick={this.handleGroupOneFilter}
        >
          1
        </Button>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          style={buttonStyle}
          onClick={this.handleGroupTwoFilter}
        >
          2
        </Button>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          style={buttonStyle}
          onClick={this.handleGroupThreeFilter}
        >
          3
        </Button>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          style={buttonStyle}
          onClick={this.handleGroupFourFilter}
        >
          4
        </Button>
        <Button
          variant="fab"
          color="secondary"
          aria-label="add"
          onClick={this.handleResetFilter}
        >
          R
        </Button>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterLinks);
