import React, { Component } from 'react';
import './App.css';
import HomePage from './home/HomePage';
import Sidebar from './sidebar/Sidebar';
import Grid from 'material-ui/Grid';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <div className="App" style={{marginTop: 20}}>
        <Grid container spacing={0}>
          <Grid item xs={2} />
          <Grid item xs={1}>
            <Sidebar />
          </Grid>
          <Grid item xs={6}>
            <Header xs={12} />
            <HomePage xs={12} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
