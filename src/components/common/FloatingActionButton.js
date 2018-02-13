import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#54d213',
    color: '#fff',
  },
});

function FloatingActionButton(props) {
  const { classes } = props;
  // TODO: refactor
  return (
    <div style={{marginLeft: 20}}>
      <Button
        variant="fab"
        color="primary"
        aria-label="add"
        className={classes.button}
      >
        1
      </Button>
      <Button
        variant="fab"
        color="primary"
        aria-label="add"
        className={classes.button}
      >
        2
      </Button>
      <Button
        variant="fab"
        color="primary"
        aria-label="add"
        className={classes.button}
      >
        3
      </Button>
      <Button
        variant="fab"
        color="primary"
        aria-label="add"
        className={classes.button}
      >
        4
      </Button>
    </div>
  );
}

FloatingActionButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButton);
