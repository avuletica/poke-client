import React, { Component } from 'react';
import './App.css';
import HomePage from './content/HomePage';
import Sidebar from './sidebar/Sidebar';
import Grid from 'material-ui/Grid';
import FilterLinks from './common/FilterLinks';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ marginTop: 20 }}>
        <Grid container spacing={0}>
          <Grid item xs={2} />
          <Grid item xs={1}>
            <Sidebar />
          </Grid>
          <Grid item xs={7}>
            <FilterLinks />
            <HomePage xs={12} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
