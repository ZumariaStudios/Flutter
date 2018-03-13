import React from 'react';
import {withRouter} from 'react-router-dom';
import BMIResults from '../results/BMIResults.js';

class InputHeartRatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            bpm: '',
            inputSizeBpm: 10,
            bpmError: false,
    };
  }

  handleChange (event, name, num){
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
    value.length === 0 ?
    this.setState({bpmError: true}) :
    null;
  }

  nextSection() {
    this.props.history.push('/PulseInstructionsPage');
  }

  render() {
    return(
      <div className ="inputBottomPage">
          <div><BMIResults/></div>
          <h4>This is your Body Mass Index result!</h4>
          <h4>Now lets keep going...</h4>
      </div>
    );
  }
}

export default withRouter(InputHeartRatePage);
