import React from 'react';
import Minty from '../visualization/Minty.js';

const Header = (props) => {






  return (
       <div className="header">
        <Minty />
        <h1>{props.header}</h1>
      </div>
);
}
export default Header;
