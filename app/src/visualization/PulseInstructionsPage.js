import React from 'react';
import {withRouter} from 'react-router-dom';
import img1 from '../img/Neck.png';
import img2 from '../img/Wrist.png';

class PulseInstructionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.nextSection = this.nextSection.bind(this);
  }

  nextSection() {
    this.props.history.push('/InputHeartRateTimerPage');
  }

  render() {
    return (
      <div className="inputPage">
      <div className="top_half">
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
      </div>
    </div>
    );
  }
}

export default withRouter(PulseInstructionsPage);
