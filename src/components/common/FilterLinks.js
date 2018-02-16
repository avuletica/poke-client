import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as pokemonActions from '../../redux/actions/pokemons';
import { connect } from 'react-redux';
import { Button } from 'material-ui';
import * as types from '../../redux/actions/types';

const buttonStyle = {
  margin: 5,
  backgroundColor: '#54d213',
  color: '#fff',
};

export class FilterLinks extends Component {
  handleGroupOneFilter = () => {
    const payload = {
      type: types.SHOW_GROUP_ONE_POKEMONS,
      experience: 'high',
      abilities: 3,
    };
    this.props.actions.setVisibilityFilter(payload);
  };

  handleGroupTwoFilter = () => {
    const payload = {
      type: types.SHOW_GROUP_TWO_POKEMONS,
      experience: 'low',
    };
    this.props.actions.setVisibilityFilter(payload);
  };

  handleGroupThreeFilter = () => {
    this.props.actions.setVisibilityFilter({
      type: types.SHOW_GROUP_THREE_POKEMONS,
    });
  };

  handleGroupFourFilter = () => {
    const payload = {
      type: types.SHOW_GROUP_FOUR_POKEMONS,
      abilityTypes: ['ice', 'flying'],
    };
    this.props.actions.setVisibilityFilter(payload);
  };

  handleResetFilter = () => {
    const payload = {
      type: types.SHOW_ALL_POKEMONS,
      abilities: 'all',
      experience: 'all',
      abilityTypes: 'all',
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
