import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
  }),
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={4}>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <div>{props.pokemon.name.toUpperCase()}</div>
          <img src={props.pokemon.sprites.front_default} alt="pokemon" />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container>
            <Grid item xs={6} sm={3}>
              <span>id: {props.pokemon.id}</span>
            </Grid>
            <Grid item xs={6} sm={3}>
              <span>height: {props.pokemon.height}</span>
            </Grid>
            <Grid item xs={6} sm={3}>
              <span>weight: {props.pokemon.weight}</span>
            </Grid>
            <Grid item xs={6} sm={3}>
              <span>
                type:{' '}
                {props.pokemon.types.map(item => item.type.name).join(', ')}
              </span>
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: 20 }}>
            <Grid item xs={6} sm={3}>
              <span>order: {props.pokemon.order}</span>
            </Grid>
            <Grid item xs={6} sm={3}>
              <span>moves: {props.pokemon.moves.length}</span>
            </Grid>
            <Grid item xs={6} sm={3}>
              <span>abilities: {props.pokemon.abilities.length}</span>
            </Grid>
            <Grid item xs={6} sm={3}>
              <span>experience: {props.pokemon.base_experience}</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
  pokemon: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
