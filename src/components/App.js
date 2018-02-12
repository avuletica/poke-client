import React, {Component} from 'react';
import './App.css';
import HomePage from "./home/HomePage";
import Sidebar from "./sidebar/Sidebar";
import Grid from 'material-ui/Grid';
import Header from "./common/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Grid container spacing={24}>
              <Grid item xs={4}>
                  <Sidebar />
              </Grid>
              <Grid item xs={8}>
                  <Header xs={12}/>
                  <HomePage xs={12}/>
              </Grid>
          </Grid>
      </div>
    );
  }
}

export default App;
