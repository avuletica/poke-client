import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as pokemonActions from '../../../redux/actions/pokemons';
import { connect } from 'react-redux';
import { Button } from 'material-ui';

const buttonStyle = {
  margin: 5,
  backgroundColor: '#54d213',
  color: '#fff',
};

export class FilterLinks extends Component {
  handleFilter = () => {
    console.log('test');
  };

  render() {
    return (
      <div style={{ marginLeft: 20 }}>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          style={buttonStyle}
          onClick={this.handleFilter}
        >
          1
        </Button>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          style={buttonStyle}
          onClick={this.handleFilter}
        >
          2
        </Button>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          style={buttonStyle}
          onClick={this.handleFilter}
        >
          3
        </Button>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          style={buttonStyle}
          onClick={this.handleFilter}
        >
          4
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
