import React, { Component } from 'react';
import GenderGroupFilter from '../common/filters/ExperienceGroupFilter';
import TypeGroupFilter from '../common/filters/TypeGroupFilter';
import SizeGroupFilter from '../common/filters/SizeGroupFilter';

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
