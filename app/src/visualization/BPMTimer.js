import React from 'react';
import Timer from '../visualization/Timer.js';

class BPMTimer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 16,
      on: true,
    }

    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    if (this.state.count !== 0 && this.state.on === true) {
    this.setState({count: (this.state.count - 1)}) };

    if (this.state.count === 0) {
      this.props.handler();
    }
  }

  startTimer () {

    clearInterval(this.timer);
    this.timer = setInterval(this.tick.bind(this), 1000);
    this.setState({on: true});
    if (this.state.count === 0) {
          this.resetTimer();
    }
    console.log('startTime has run');
  }

  resetTimer(){
    this.setState({count: 16})
    this.setState({on: true})
  }

  render () {
    return (
      <div>
        {this.state.on ?
            <div className="timer" onClick={(e) => this.startTimer (e)}>
                 <Timer dire='Start' counter={this.state.count}/></div>
        : null }
      </div>
    );
  }
}



export default BPMTimer;
