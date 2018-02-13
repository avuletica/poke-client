import React, { Component } from 'react';
import GenderGroupFilter from "../common/GenderGroupFilter";
import TypeGroupFilter from "../common/TypeGroupFilter";

export class Sidebar extends Component {
  render() {
    return <div>
      <GenderGroupFilter />
      <TypeGroupFilter />
    </div>;
  }
}

export default Sidebar;
