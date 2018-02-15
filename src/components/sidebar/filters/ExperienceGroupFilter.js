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

class ExperienceGroupFilter extends React.Component {
  state = {
    value: utils.experienceGroup.value.all,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    switch (value) {
      case utils.experienceGroup.value.all:
        return this.props.actions.setVisibilityFilter(types.SHOW_ALL_POKEMONS);
      case utils.experienceGroup.value.low:
        return this.props.actions.setVisibilityFilter(
          types.SHOW_LOW_EXPERIENCE_POKEMONS,
        );
      case utils.experienceGroup.value.high:
        return this.props.actions.setVisibilityFilter(
          types.SHOW_HIGH_EXPERIENCE_POKEMONS,
        );
    }
  };

  render() {
    return (
      <div className={styles.root}>
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
            value={this.state.value}
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
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ExperienceGroupFilter,
);