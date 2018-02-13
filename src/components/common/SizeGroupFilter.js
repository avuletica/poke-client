import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

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

class SizeGroupFilter extends React.Component {
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
      <form className={classes.root} autoComplete="off" style={{marginLeft: 16}}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="size-simple">Size</InputLabel>
          <Select
            value={this.state.size}
            onChange={this.handleChange}
            inputProps={{
              name: 'size',
              id: 'size-simple',
            }}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={10}>Tall</MenuItem>
            <MenuItem value={20}>Short</MenuItem>
            <MenuItem value={30}>Heavy</MenuItem>
            <MenuItem value={30}>Thin</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

SizeGroupFilter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SizeGroupFilter);

/*
* <MenuItem value={1}>All</MenuItem>
            <MenuItem value={2}>Tall</MenuItem>
            <MenuItem value={3}>Small</MenuItem>
            <MenuItem value={4}>Heavy</MenuItem>
            <MenuItem value={5}>Light</MenuItem>
            */
