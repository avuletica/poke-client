import React, { Component } from 'react';
import GenderGroupFilter from '../common/filters/ExperienceGroupFilter';
import TypeGroupFilter from '../common/filters/TypeGroupFilter';
import AbilitiesGroupFilter from '../common/filters/AbilitiesGroupFilter';

export class Sidebar extends Component {
  render() {
    return (
      <div style={{ borderRightStyle: 'groove', borderWidth: 1 }}>
        <GenderGroupFilter />
        <TypeGroupFilter />
        <AbilitiesGroupFilter />
      </div>
    );
  }
}

export default Sidebar;
