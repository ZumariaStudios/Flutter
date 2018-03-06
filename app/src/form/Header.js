import React from 'react';
import '../defaults/_header.scss';

const Header = (props) => {
  return (
    <div>
       <div class="headerComponenet">
        <img alt="FPO Image" src={props.src} />
       </div>
          <h1>{props.header}</h1>
    </div>
);
}
export default Header;
