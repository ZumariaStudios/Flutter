import React from 'react';

const CircularArrow = (props) => {
  let turnArrow = props.turnArrow;
  return(
    <div>
        <svg viewBox="0 0 50.2 50" preserveAspectRatio='none'>
            {turnArrow === 'originalPos' ?
              <g>
                <circle className="circleBack" cx="25.5" cy="25" r="22.8"/>
                <path className="triangleArrow" d="M25.5,14h10.4c3.1,0,5.1,3.4,3.5,6.1l-5.2,9l-5.2,9c-1.6,2.7-5.5,2.7-7.1,0l-5.2-9l-5.2-9C9.9,17.4,11.9,14,15,14H25.5z"/>
              </g> : null }
            {turnArrow === 'upPos' ?
              <g className="turnUpAni">
                <defs>
                  <mask id="circularArrowMask">
                      <g>
                        <circle className="circleBack" cx="25.5" cy="25" r="22.8"/>
                      </g>
                  </mask>
                </defs>
                <g id="circularArrowReveal">
                    <circle className="circleBack" cx="25.5" cy="25" r="22.8"/>
                    <path className="triangleArrow" d="M25.5,14h10.4c3.1,0,5.1,3.4,3.5,6.1l-5.2,9l-5.2,9c-1.6,2.7-5.5,2.7-7.1,0l-5.2-9l-5.2-9C9.9,17.4,11.9,14,15,14H25.5z"/>
                </g>
              </g> : null }
            {turnArrow === 'downPos' ?
              <g className="turnDownAni">
                <defs>
                  <mask id="circularArrowMask">
                      <g>
                        <circle className="circleBack" cx="25.5" cy="25" r="22.8"/>
                      </g>
                  </mask>
                </defs>
                <g id="circularArrowReveal">
                    <circle className="circleBack" cx="25.5" cy="25" r="22.8"/>
                    <path className="triangleArrow" d="M25.5,14h10.4c3.1,0,5.1,3.4,3.5,6.1l-5.2,9l-5.2,9c-1.6,2.7-5.5,2.7-7.1,0l-5.2-9l-5.2-9C9.9,17.4,11.9,14,15,14H25.5z"/>
                </g>
              </g> : null }


        </svg>
    </div>);
}

export default CircularArrow;
