import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../form/Header.js';

class BPMTimerPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 16,
      on: true,
    }

    this.startTimer.bind(this);
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  tick () {
    if (this.state.count !== 0 && this.state.on == true) {
    this.setState({count: (this.state.count - 1)}) };
    console.log('tick has run');
  }
  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
    this.setState({on: (this.state.on = true)})
    console.log('startTime has run');
    //ADD +1 to count here so user gets 15 seconds
  }

  resetTimer(){
    this.setState({count: (this.state.count = 16)})
    console.log('resetTimer has run');
    this.setState({on: (this.state.on = false)})

  }

  nextSection() {
    this.props.history.push(null);
  }

  render () {
    return (
      <div className='timer'>
        <Header header = "Press the button to begin the countdown" />

        {(this.state.count > 0) ?
          <input className="startTimer"
           type='submit'
           value={this.state.count === 16 ? 'Start' : this.state.count}
           onClick={(e) => this.startTimer (e)}/>
           : null}
        {(this.state.count === 0 )?
            <input className="startTimer"
             type='submit'
             value='Reset'
             onClick={(e) => this.resetTimer(e)}/>
           : null}
           {this.state.count === 0 ?
               <input className="continueButton"
                type='submit'
                value='Continue'
                onClick={null}/>
              : null}
      </div>
    );
  }
}



export default withRouter(BPMTimerPage);
