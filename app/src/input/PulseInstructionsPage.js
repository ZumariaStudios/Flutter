import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../form/Header.js';

import logo from '../img/Pulse_hold.jpg';

class PulseInstructionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.nextSection = this.nextSection.bind(this);
  }

  nextSection() {
    this.props.history.push('/InputBPMPage');
  }

  render() {
    return ( <div class = 'pulseInstructions'>
      <img alt = "img1" src = "../img/pulse_hold.jpg" / >
      <img alt = "img2" src = "../img/pulse_hold_two.jpg" / >
      <Header header = "Where to find your pulse" / >
      <input
         type='submit'
         value='Continue'
         onClick={this.nextSection}/>
      </div>


    );
  }
}

export default withRouter(PulseInstructionsPage);
