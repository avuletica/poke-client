import React, { Component } from 'react';
import GenderGroupFilter from '../common/GenderGroupFilter';
import TypeGroupFilter from '../common/TypeGroupFilter';
import SizeGroupFilter from '../common/SizeGroupFilter';

const sideBarStyle = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

export class Sidebar extends Component {
  render() {
    return (
      <div style={{borderRightStyle: 'groove', borderWidth: 1}}>
        <GenderGroupFilter />
        <TypeGroupFilter />
        <SizeGroupFilter />
      </div>
    );
  }
}

export default Sidebar;
