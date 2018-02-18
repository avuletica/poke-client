import React from 'react';
import * as types from '../../../redux/actions/types';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormControlLabel, FormLabel } from 'material-ui/Form';
import utils from '../../../utils/utils';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pokemonActions from '../../../redux/actions/pokemons';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class Experience extends React.Component {
  state = {
    value: utils.experienceGroup.value.all,
  };

  handleChange = (event, value) => {
    this.setState({ value });

    switch (value) {
      case utils.experienceGroup.value.all: {
        const payload = {
          type: types.SET_MULTIPLE_FILTERS,
          experience: 'all',
        };
        return this.props.actions.setVisibilityFilter(payload);
      }

      case utils.experienceGroup.value.low: {
        const payload = {
          type: types.SET_MULTIPLE_FILTERS,
          experience: 'low',
        };
        return this.props.actions.setVisibilityFilter(payload);
      }

      case utils.experienceGroup.value.high: {
        const payload = {
          type: types.SET_MULTIPLE_FILTERS,
          experience: 'high',
        };
        return this.props.actions.setVisibilityFilter(payload);
      }
      default:
        return;
    }
  };

  render() {
    return (
      <div className={styles.root} style={{ marginLeft: 15 }}>
        <FormControl
          component="fieldset"
          required
          className={styles.formControl}
        >
          <FormLabel component="legend">Experience</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender"
            className={styles.group}
            value={this.props.visibilityFilter.experience}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value={utils.experienceGroup.value.all}
              control={<Radio />}
              label={utils.experienceGroup.label.all}
            />
            <FormControlLabel
              value={utils.experienceGroup.value.low}
              control={<Radio />}
              label={utils.experienceGroup.label.low}
            />
            <FormControlLabel
              value={utils.experienceGroup.value.high}
              control={<Radio />}
              label={utils.experienceGroup.label.high}
            />
          </RadioGroup>
        </FormControl>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
