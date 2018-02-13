import React, { Component } from 'react';
import GenderGroupFilter from '../common/ExperienceGroupFilter';
import TypeGroupFilter from '../common/TypeGroupFilter';
import SizeGroupFilter from '../common/SizeGroupFilter';

export class Sidebar extends Component {
  render() {
    return (
      <div style={{ borderRightStyle: 'groove', borderWidth: 1 }}>
        <GenderGroupFilter />
        <TypeGroupFilter />
        <SizeGroupFilter />
      </div>
    );
  }
}

export default Sidebar;
