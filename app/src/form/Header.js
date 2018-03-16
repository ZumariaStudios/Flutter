import React from 'react';
import Minty from '../visualization/Minty.js';

const Header = (props) => {

  return (
       <div className="header">
<<<<<<< HEAD
<<<<<<< HEAD
        <Minty />
        <h1>{props.header}</h1>

=======
          <img className="minty" alt="hold" src={Minty}/>
=======
        <Minty />
        <div className="progressTracker">
>>>>>>> Fixed timer issue
          <svg  className="progressMonitor" x="0px" y="0px" viewBox="0 0 400 100" style={{enableBackground: "new 0 0 400 100"}} xmlSpace="preserve">
          <g>
          	<path className="st0" d="M90,40.5"/>
          	<path className="st1" d="M397.5,40.5"/>
          	<path className="heart" d="M92.4,15.5C88.1,8.3,80,5,71.8,6.3c-8.3,1.3-15,6.6-20.3,12.8c-5.3-6.2-12-11.5-20.3-12.8 C23.1,5,15.1,8.3,10.7,15.5c-4.4,7.2-4.5,16-1.7,23.8c3.2,8.9,9.6,16.1,16.3,22.6c8.3,8.1,16.8,16,25.3,24c0.8,0.7,1.2,0.7,2,0 c8.4-8,16.9-15.9,25.3-24c6.7-6.5,13.1-13.7,16.3-22.6C96.9,31.5,96.9,22.7,92.4,15.5z"/>
          </g>
          <polyline className="beat" points="400,35.5 127,34.5 128,34.5 122.5,34.5 120.5,41.5 117.5,26.5 112.5,58.5 109.5,16.5 105,43 103,34.3 95.5,34.3 "/>
          </svg>
        <h1>{props.header}</h1>
<<<<<<< HEAD


>>>>>>> Merged with Milu
=======
>>>>>>> Fixed timer issue
      </div>
    </div>
);
}
export default Header;
