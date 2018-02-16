import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import utils from '../../../utils/utils';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class NumberOfAbilities extends React.Component {
  state = {
    size: '',
    name: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form
        className={classes.root}
        autoComplete="off"
        style={{ marginLeft: 16 }}
      >
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="abilities-simple">Abilities</InputLabel>
          <Select
            value={this.state.size}
            onChange={this.handleChange}
            inputProps={{
              name: 'numberOfAbilities',
              id: 'numberOfAbilities-simple',
            }}
          >
            <MenuItem value={utils.abilityGroup.value.all}>
              {utils.abilityGroup.label.all}
            </MenuItem>
            <MenuItem value={utils.abilityGroup.value.one}>
              {utils.abilityGroup.label.one}
            </MenuItem>
            <MenuItem value={utils.abilityGroup.value.two}>
              {utils.abilityGroup.label.two}
            </MenuItem>
            <MenuItem value={utils.abilityGroup.value.three}>
              {utils.abilityGroup.label.three}
            </MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

NumberOfAbilities.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NumberOfAbilities);
