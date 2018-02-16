import React, { Component } from 'react';
import './App.css';
import Wrapper from './content/Wrapper';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ marginTop: 20 }}>
        <Wrapper />
      </div>
    );
  }
}

export default App;
