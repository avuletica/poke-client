import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormControlLabel, FormLabel } from 'material-ui/Form';
import utils from '../../../utils/utils';
import {connect} from "react-redux";
import {FilterLinks} from "../FilterLinks";
import {bindActionCreators} from "redux/index";
import * as pokemonActions from "../../../redux/actions/pokemons";

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
    console.log('this.props.actions: ', this.props.actions);
    this.setState({ value });
    switch (value) {
        case value === utils.experienceGroup.value.all:
          return;

    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl
          component="fieldset"
          required
          className={classes.formControl}
        >
          <FormLabel component="legend">Experience</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender"
            className={classes.group}
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

ExperienceGroupFilter.propTypes = {
  classes: PropTypes.object.isRequired,
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceGroupFilter);
