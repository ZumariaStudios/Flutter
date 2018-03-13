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
    this.handleChange = this.handleChange.bind(this);
    this.nextSection = this.nextSection.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChange (event, name){
    const value = event.target.value;

    this.localStore(name, value);
    this.setState({[name]: value});
    this.validate(value);
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
    if (this.state.bpmError || this.state.bpm.length === 0) {
      this.props.history.push('/PulseInstructionsPage');
    } else {
      this.props.history.push('/InputBloodPressurePage');
    }
  }

  render() {
    return(
      <div className ="inputBottomPage">
          <div className ="bmiResultsArea">
              <h4 className="topSpacing">Your BMI result!</h4>
              <BMIResults/>
              <div className="grayLine"></div>
          </div>
          <h4 className="topSpacing">Now lets keep going...</h4>
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
              </label>
              <div className="errorMessage">{this.state.bpmError ?
                    this.state.bpmErrorMessage : null}</div>
              <input
                     type='submit'
                     value={this.state.bpmError || this.state.bpm.length === 0 ? 'Find out' : 'continue'}
                     onClick={this.nextSection}/>
           </form>
      </div>

    );
  }
}

export default withRouter(InputHeartRatePage);
