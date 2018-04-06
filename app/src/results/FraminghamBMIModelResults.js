import React from 'react';
import Radial from '../visualization/Radial.js';
import {calcFraminghamBMIModel} from '../results/Calculator.js';

class FraminghamBMIModelResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {heartRisk: ''};
    this.localStore = this.localStore.bind(this);
  }

  localStore(name, value) {
    const cachedHits = localStorage.getItem(value);
    if (cachedHits) {
      this.setState({[name]: JSON.parse(cachedHits)});
      return;
    }

    localStorage.setItem(name, JSON.stringify(value));
  }

  componentDidMount() {
    const getVal = (name) => {
      let retrieved = localStorage.getItem(name);
      let actualVal = JSON.parse(retrieved);
      return actualVal;
    }

    let gender = getVal('gender');
    let age = getVal('age');
    let bmi = getVal('bmi');
    let smoker = getVal('smoker');
    let diabetic = getVal('diabetic');
    let treatingBP = getVal('treatingBP');
    let sbp = getVal('sbp');
    let triglycerides = getVal('triglycerides');
    let goodChol = getVal('goodChol');
    let badChol = getVal('badChol');
    let crp = getVal('crp');
    let famHistory = getVal('famHistory');

    let riskStatus = calcFraminghamBMIModel(gender, age, bmi, smoker, diabetic, treatingBP, sbp, triglycerides, goodChol, badChol, crp, famHistory);
    console.log('riskStatus: ' + riskStatus);
    this.setState({heartRisk: riskStatus});
    this.localStore('FraminghamBMIModelRisk', riskStatus);
  }

  render() {
    return(
      <div className ="radialGraph">
          <div>
              <Radial completed={this.state.heartRisk}/>
          </div>
      </div>
    );
  }
}

export default FraminghamBMIModelResults;
