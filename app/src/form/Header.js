import React from 'react';
import '../defaults/_header.scss';

const Header = (props) => {
let img = new Image();
  return (
       <div id="headerComponenet">
        <img alt="FPO Image" src={props.imgSrc} />
        <h1>{props.header}</h1>
       </div>

);
}
export default Header;
