import React, { Component } from 'react';
import ExperienceGroupFilter from './filters/ExperienceGroupFilter';
import TypeGroupFilter from './filters/TypeGroupFilter';
import AbilitiesGroupFilter from './filters/AbilitiesGroupFilter';

export class Sidebar extends Component {
  render() {
    return (
      <div style={{ borderRightStyle: 'groove', borderWidth: 1 }}>
        <ExperienceGroupFilter />
        <TypeGroupFilter />
        <AbilitiesGroupFilter />
      </div>
    );
  }
}

export default Sidebar;
