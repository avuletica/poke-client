import React, { Component } from 'react';
import GenderGroupFilter from '../common/GenderGroupFilter';
import TypeGroupFilter from '../common/TypeGroupFilter';
import SizeGroupFilter from '../common/SizeGroupFilter';

export class Sidebar extends Component {
  render() {
    return (
      <div>
        <GenderGroupFilter />
        <TypeGroupFilter />
        <SizeGroupFilter />
      </div>
    );
  }
}

export default Sidebar;
