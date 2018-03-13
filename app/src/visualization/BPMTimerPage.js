import React from 'react';
import Toggle from 'react-toggle';
import {withRouter} from 'react-router-dom';
import Header from '../form/Header.js';

class BPMTimerPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 15,
      show: false,
    }

    this.startTimer.bind(this);
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  tick () {
    if (this.state.count !== 0) {
    this.setState({count: (this.state.count - 1)}) };
  }
  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }
  stopTimer () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div className='timer'>
        <Header header = "Press start when you're ready" />

        <h1>{this.state.count}</h1>
        {(this.state.count > 0) ?
          <input class="startTimer"
           type='submit'
           value='Start'
           onClick={(e) => this.startTimer(e)}/>
           : null}
        {this.state.count === 0 ?
            <input class="startTimer"
             type='submit'
             value='Continue'
             onClick={this.nextSection}/>
           : null}
      </div>
    );
  }
}



export default withRouter(BPMTimerPage);
