import React from 'react';
import logo from '../img/NewBlue.jpg';

const Header = (props) => {

  return (
       <div className="header">
          <img className="minty" alt="hold" src={logo}/>
          <h1>{props.header}</h1>
      </div>
);
}
export default Header;
