import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormControlLabel, FormLabel } from 'material-ui/Form';
import utils from '../../../utils/utils';

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

export default withStyles(styles)(ExperienceGroupFilter);
