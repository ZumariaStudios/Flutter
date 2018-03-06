import React from 'react';
import logo from './NewBlue.jpg';

const Header = (props) => {

  return (
       <div className="headerComponenet">
       <img alt="hold" src={logo}/>
        <h1>{props.header}</h1>
       </div>

);
}
export default Header;
