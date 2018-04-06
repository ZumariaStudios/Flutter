import React from 'react';
import {withRouter} from 'react-router-dom';
import BMIReader from '../visualization/BMIReader.js';
import {calcBMI} from '../results/Calculator.js';


class BMIResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bmi: ''};
    this.calcBMI = this.calcBMI.bind(this);
    this.getVals = this.getVals.bind(this);
  }

  getVals(name) {
    let retrieved = localStorage.getItem(name);
    let actualVal = JSON.parse(retrieved);
    return actualVal;
  }

  calcBMI() {
    let weight = getVals('weight');
    let weightMes = getVals('weightMes');
    let heightFst = getVals('heightFst');
    let heightFstMes = getVals('heightFstMes');
    let heightSnd = getVals('heightSnd');

    let results = calcBMI(weight, weightMes,
        heightFst, heightFstMes, heightSnd);

    this.setState({bmi: results}, function() {
      console.log('bmi state: ' + this.state.bmi);
    });

  }

  componentDidMount() {
    this.calcBMI();
  }

  render() {
    return (
      <div>
          <div><BMIReader bmi={this.state.bmi}/></div>
          <h4>These are your Body Mass Index results!</h4>
          <h4>Now lets keep going...</h4>
      </div>

    )
  }
}

export default withRouter(BMIResultsPage);
