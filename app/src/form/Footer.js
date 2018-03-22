import React from 'react';
import Minty from '../visualization/Minty.js';

const Footer = (props) => {

  return (
       <div className="footer">
        <div className="progressTracker">
          <svg className="progressMonitor" x="0px" y="0px" viewBox="0 0 800 100" xmlSpace="preserve">

          <g id="Heart">
          	<path className="st0" d="M34.5,34.5"/>
          	<path className="st1" d="M58.6,32.3c-2.9-4.8-8.2-7-13.7-6.1c-5.5,0.9-10,4.4-13.5,8.5c-3.5-4.1-8-7.6-13.5-8.5 c-5.4-0.9-10.7,1.3-13.6,6.1S1.4,43,3.3,48.1c2.1,5.9,6.4,10.7,10.8,15c5.5,5.4,11.2,10.6,16.8,15.9c0.5,0.5,0.8,0.5,1.3,0 c5.6-5.3,11.2-10.6,16.8-15.9c4.4-4.3,8.7-9.1,10.8-15C61.6,43,61.6,37.1,58.6,32.3z"/>
          </g>
          <g id="Baseline">
          	<line className="st2" x1="58.8" y1="49.5" x2="295" y2="49.5"/>
          </g>
          <g id="Beat_1">
          	<g>
          		<polyline className="st3" points="92.5,49.5 100,49.5 102,58 106.5,31.5 109.5,73.5 114.5,41.5 117.5,56.5 119.5,49.5 125,49.5 		"/>
          	</g>
          </g>
          <g id="Beat_2">
          	<g>
          		<polyline className="st3" points="59.5,49.5 67,49.5 69,58 73.5,31.5 76.5,73.5 81.5,41.5 84.5,56.5 86.5,49.5 92,49.5 		"/>
          	</g>
          </g>
          <g id="Beat_3">
          	<g>
          		<polyline className="st3" points="125.5,49.5 133,49.5 135,58 139.5,31.5 142.5,73.5 147.5,41.5 150.5,56.5 152.5,49.5 158,49.5 		"/>
          	</g>
          </g>
          <g id="Beat_4">
          	<g>
          		<polyline className="st3" points="157.5,49.5 165,49.5 167,58 171.5,31.5 174.5,73.5 179.5,41.5 182.5,56.5 184.5,49.5 190,49.5 		"/>
          	</g>
          </g>
          <g id="Beat_5">
          	<polyline className="st3" points="190.5,49.5 198,49.5 200,58 204.5,31.5 207.5,73.5 212.5,41.5 215.5,56.5 217.5,49.5 223,49.5 	"/>
          </g>
          <g id="Last_Beat_1_">
          	<polyline className="st3" points="223.5,49.5 231,49.5 233,58 237.5,31.5 240.5,73.5 245.5,41.5 248.5,56.5 250.5,49.5 256,49.5 	"/>
          </g>
          <g id="Extra_Beat">
          	<polyline className="st3" points="255.5,49.5 263,49.5 265,58 269.5,31.5 272.5,73.5 277.5,41.5 280.5,56.5 282.5,49.5 288,49.5 	"/>
          </g>

          </svg>
        <h1>{props.header}</h1>
      </div>
    </div>
);
}
export default Footer;
