import React from 'react';

const Footer = (props) => {
let pageID = props.pageID;
let beatID = props.pageID;
console.log('page ID is: ' + pageID);

  return (
       <footer className="footer" id={props.pageID}>

        <div className="progressTracker">
          <svg className="heartPart" x="0px" y="0px" viewBox="0 0 822 100" xmlSpace="preserve">
          <g id="Heart">
          	<path className="heart" d="M60.5,28.8c-2.5-4.1-6.9-5.9-11.6-5.2s-8.5,3.7-11.4,7.2c-3-3.5-6.8-6.4-11.4-7.2c-4.6-0.8-9,1.1-11.5,5.2 s-2.5,9-0.8,13.4c1.8,5,5.4,9,9.1,12.7c4.7,4.6,9.5,9,14.2,13.4c0.4,0.4,0.7,0.4,1.1,0c4.7-4.5,9.5-9,14.2-13.4 c3.7-3.6,7.4-7.7,9.1-12.7C63.1,37.9,63.1,32.9,60.5,28.8z"/>
          </g>
          <g>
          <polyline className={beatID} points="56,43.1 74.1,43.1 78.4,61.2 88,4.7 94.4,94.3 105.1,26 111.5,58 115.7,43.1 127.5,43.1 "/>
          </g>
          <g>
          <polyline className="beat_1" transform="translate(60,0)" points="56,43.1 74.1,43.1 78.4,61.2 88,4.7 94.4,94.3 105.1,26 111.5,58 115.7,43.1 127.5,43.1 "/>
          </g>
          <g>
          <polyline className="beat4" transform="translate(120,0)" points="56,43.1 74.1,43.1 78.4,61.2 88,4.7 94.4,94.3 105.1,26 111.5,58 115.7,43.1 127.5,43.1 "/>
          </g>
          </svg>
      </div>
    </footer>
);
}
export default Footer;
