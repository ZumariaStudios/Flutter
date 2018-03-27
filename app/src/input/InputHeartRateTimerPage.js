import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../form/Header.js';
import BPMTimer from '../visualization/BPMTimer.js';

class InputHeartRateTimerPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bpmRaw: '',
      bpmRawError: false,
      timerOn: true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.nextSection = this.nextSection.bind(this);
    this.validate = this.validate.bind(this);
    this.handler = this.handler.bind(this);
  }

  handleChange (event, name){
    const value = event.target.value;

    this.setState({[name]: value});
    this.validate(value);

    let beatsPerMinute = value * 4;
    this.localStore('bpm', beatsPerMinute);
  }

  localStore(name, value) {
    const cachedHits = localStorage.getItem(value);
    if (cachedHits) {
      this.setState({[name]: JSON.parse(cachedHits)});
      return;
    }

    localStorage.setItem(name, JSON.stringify(value));
  }

  validate(value) {
    if (value.length === 0) {
      this.setState({bpmError: true});
    } else {
      this.setState({bpmError: false});
    }
  }

  nextSection() {
    this.props.history.push('/InputBloodPressurePage');
  }

  componentDidMount() {
    if (this.state.count === 0)
    this.setState({timerOn: false});
  }

  handler() {
    this.setState({timerOn: false});
  }


  render () {
    return (
      <div>
          <Header header = "Press the button to begin the countdown" />
          <BPMTimer handler={this.handler}/>
          <form className ="form">
<<<<<<< HEAD
<<<<<<< HEAD
              {!this.state.timerOn ?
=======

            <div className="timerSection">
              {this.state.count === 0 ?

>>>>>>> Begin working on timer count display
=======
          <div className="BPMinput" >
>>>>>>> end of Tues
              <label className="inputBottomPage">I counted
                    <input
                        className={this.state.bpmRawError ? 'error' : null}
                        name="bpmRaw"
                        type="number"
                        value={this.state.bpmRaw}
                        onChange={(e) => {
                          this.handleChange(e, 'bpmRaw')
                        }}>
                    </input>
<<<<<<< HEAD
<<<<<<< HEAD
              </label>: null }

=======
              </label> : null}
            </div>
>>>>>>> Begin working on timer count display
=======
              </label>
              </div>
>>>>>>> end of Tues
              {!this.state.bpmRawError &&
                this.state.bpmRaw.length !== 0 ?
                <input
                 type='submit'
                 value='Continue'
                 onClick={this.nextSection}/>
                : null}

           </form>
      </div>
    );
  }
}

export default withRouter(InputHeartRateTimerPage);
