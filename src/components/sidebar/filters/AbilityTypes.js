import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import utils from '../../../utils/utils';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pokemonActions from '../../../redux/actions/pokemons';
import * as types from '../../../redux/actions/types';

class AbilityTypes extends React.Component {
  handleChange = type => () => {
    let payload = {
      type: types.SET_MULTIPLE_FILTERS,
      abilityTypes: [...this.props.visibilityFilter.abilityTypes],
    };

    if (payload.abilityTypes.includes(type)) {
      payload.abilityTypes = payload.abilityTypes.filter(item => item !== type);
    } else {
      payload.abilityTypes.push(type);
    }

    return this.props.actions.setVisibilityFilter(payload);
  };

  render() {
    return (
      <FormControl component="fieldset" style={{marginLeft: 10}}>
        <FormLabel component="legend">Type</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.props.visibilityFilter.abilityTypes.includes(
                  'fire',
                )}
                onChange={this.handleChange(utils.typeGroup.value.fire)}
                value={utils.typeGroup.value.fire}
              />
            }
            label={utils.typeGroup.label.fire}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.props.visibilityFilter.abilityTypes.includes(
                  'water',
                )}
                onChange={this.handleChange(utils.typeGroup.value.water)}
                value={utils.typeGroup.value.water}
              />
            }
            label={utils.typeGroup.label.water}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.props.visibilityFilter.abilityTypes.includes(
                  'ground',
                )}
                onChange={this.handleChange(utils.typeGroup.value.ground)}
                value={utils.typeGroup.value.ground}
              />
            }
            label={utils.typeGroup.label.ground}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.props.visibilityFilter.abilityTypes.includes(
                  'electric',
                )}
                onChange={this.handleChange(utils.typeGroup.value.electric)}
                value={utils.typeGroup.value.electric}
              />
            }
            label={utils.typeGroup.label.electric}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.props.visibilityFilter.abilityTypes.includes(
                  'flying',
                )}
                onChange={this.handleChange(utils.typeGroup.value.flying)}
                value={utils.typeGroup.value.flying}
              />
            }
            label={utils.typeGroup.label.flying}
          />
        </FormGroup>
      </FormControl>
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

export default connect(mapStateToProps, mapDispatchToProps)(AbilityTypes);
