import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

const styles = {};

class TypeGroupFilter extends React.Component {
  state = {
    fire: true,
    water: false,
    earth: true,
  };

  handleChange = name => (event, checked) => {
    this.setState({ [name]: checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <FormControl component="fieldset" style={{marginLeft: 24}}>
        <FormLabel component="legend">Type</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.fire}
                onChange={this.handleChange('fire')}
                value="fire"
              />
            }
            label="Fire"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.water}
                onChange={this.handleChange('water')}
                value="water"
              />
            }
            label="Water"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.earth}
                onChange={this.handleChange('earth')}
                value="Earth"
              />
            }
            label="Earth"
          />
        </FormGroup>
      </FormControl>
    );
  }
}

TypeGroupFilter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TypeGroupFilter);
