import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import utils from '../../../utils/utils';

const styles = {};

class typeGroup extends React.Component {
  state = {
    fire: false,
    water: false,
    ground: false,
    electric: false,
    flying: false,
  };

  handleChange = name => (event, checked) => {
    this.setState({ [name]: checked });
  };

  render() {
    return (
      <FormControl component="fieldset" style={{ marginLeft: 24 }}>
        <FormLabel component="legend">Type</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.fire}
                onChange={this.handleChange(utils.typeGroup.value.fire)}
                value={utils.typeGroup.value.fire}
              />
            }
            label={utils.typeGroup.label.fire}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.water}
                onChange={this.handleChange(utils.typeGroup.value.water)}
                value={utils.typeGroup.value.water}
              />
            }
            label={utils.typeGroup.label.water}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.ground}
                onChange={this.handleChange(utils.typeGroup.value.ground)}
                value={utils.typeGroup.value.ground}
              />
            }
            label={utils.typeGroup.label.ground}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.electric}
                onChange={this.handleChange(utils.typeGroup.value.electric)}
                value={utils.typeGroup.value.electric}
              />
            }
            label={utils.typeGroup.label.electric}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.flying}
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

typeGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(typeGroup);