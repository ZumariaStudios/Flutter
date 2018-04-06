import React from 'react';

const Footer = (props) => {
let pageID = props.pageID;
let beatCounter = props.beatCounter;
let beatID = "beat" + beatCounter;

console.log('page ID is: ' + pageID);
console.log('beat ID is: ' + beatID);

  return (
       <footer className="footer" id={props.pageID}>

  
    </footer>
);
}
export default Footer;
