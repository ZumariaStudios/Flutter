import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../form/Header.js';
import img1 from '../img/Neck.png';
import img2 from '../img/Wrist.png';

class PulseInstructionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.nextSection = this.nextSection.bind(this);
  }

  nextSection() {
    this.props.history.push('/BPMTimerPage');
  }

  render() {
    return (
      <div className = 'pulseInstructions'>
      <h1>Where to find your pulse</h1>
      <div className='images'>
          <img className='pulse' alt = "img1" src = {img1} / >
          <h4 className='or'>OR</h4>
          <img className='pulse'alt = "img2" src = {img2} / >
      </div>
      <input className="continueButton"
         type='submit'
         value='Continue'
         onClick={this.nextSection}/>
      </div>
    );
  }
}

export default withRouter(PulseInstructionsPage);
