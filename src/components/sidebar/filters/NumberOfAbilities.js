import React from 'react';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pokemonActions from '../../../redux/actions/pokemons';
import * as types from '../../../redux/actions/types';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class NumberOfAbilities extends React.Component {
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      let payload = {
        type: types.SET_MULTIPLE_FILTERS,
        numberOfAbilities: event.target.value,
      };

      return this.props.actions.setVisibilityFilter(payload);
    });
  };

  render() {
    return (
      <form
        className={styles.root}
        style={{ marginLeft: 15 }}
        autoComplete="off"
      >
        <FormControl className={styles.formControl}>
          <InputLabel htmlFor="numberOfAbilities-simple">Abilities</InputLabel>
          <Select
            value={this.props.visibilityFilter.numberOfAbilities}
            onChange={this.handleChange}
            inputProps={{
              name: 'numberOfAbilities',
              id: 'numberOfAbilities-simple',
            }}
          >
            <MenuItem value={'all'}>
              <em>All abilities</em>
            </MenuItem>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    visibilityFilter: state.visibilityFilter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NumberOfAbilities);
