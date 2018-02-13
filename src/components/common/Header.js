import React from 'react';
import {FilterLinks} from './filters/FilterLinks';

const Header = () => {
  return (
    <div style={{ marginBottom: 30 }}>
      <FilterLinks />
      <hr />
    </div>
  );
};

export default Header;
