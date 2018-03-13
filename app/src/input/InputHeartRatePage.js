import React from 'react';
import {withRouter} from 'react-router-dom';
import BMIResults from '../results/BMIResults.js';

class InputHeartRatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            bpm: '',
            bpmErrorMessage: '',
            bpmError: false,
    };
  }

  handleChange (event, name){
    const value = event.target.value;

    this.localStore(name, value);
    this.setState({[name]: value});
    this.validate(value);

    this.setState({inputSizeBpm: value.length });
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
    if (value.length === 0 || value < 25 || value > 74) {
      this.setState({bpmError: true});
      this.setState({bpmErrorMessage: '*Enter a number in between 25 and 74'})
    } else {
      this.setState({bpmError: false});
    }
  }

  nextSection() {
    this.props.history.push('/InputBloodPressurePage');
    // if (this.state.bpmError) {
    //   this.props.history.push('/PulseInstructionsPage');
    // } else {
    //   this.props.history.push('/InputBloodPressurePage');
    // }
  }

  render() {
    return(
      <div className ="inputBottomPage">
          <div><BMIResults/></div>
          <span>
              <h4>This is your Body Mass Index result!</h4>
              <h4>Now lets keep going...</h4>
          </span>
          <form className ="form">
              <label>My resting heart rate (BPM) is
                    <input
                        className={this.state.bpmError ? 'error' : null}
                        name="bpm"
                        type="number"
                        value={this.state.bpm}
                        onChange={(e) => {
                          this.handleChange(e, 'bpm')
                        }}>
                    </input>
                    <div className="errorMessage">{this.state.bpmError ?
                          this.state.bpmErrorMessage : null}</div>
              </label>
              <input
               type='submit'
               value='Continue'
               onClick={this.nextSection}/>
          </form>
      </div>
    );
  }
}

export default withRouter(InputHeartRatePage);
