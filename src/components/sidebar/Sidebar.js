import React, { Component } from 'react';
import Experience from './filters/Experience';
import AbilityTypes from './filters/AbilityTypes';
import NumberOfAbilities from './filters/NumberOfAbilities';

export class Sidebar extends Component {
  render() {
    return (
      <div style={{ borderRightStyle: 'groove', borderWidth: 1 }}>
        <Experience />
        <AbilityTypes />
        <NumberOfAbilities />
      </div>
    );
  }
}

export default Sidebar;
