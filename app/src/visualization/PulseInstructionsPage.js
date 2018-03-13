import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../form/Header.js';
import img1 from '../img/darkblueneck.png';
import img2 from '../img/darkbluewrist.png';

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
      <Header header = "Where to find your pulse" / >
      <img className='pulse' alt = "img1" src = {img1} / >
      <img className='pulse'alt = "img2" src = {img2} / >
      <input className="continueButton"
         type='submit'
         value='Continue'
         onClick={this.nextSection}/>
      </div>
    );
  }
}

export default withRouter(PulseInstructionsPage);
