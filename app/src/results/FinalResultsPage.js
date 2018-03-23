import React from 'react';
import AppConstants from '../results/AppConstants.js';
import FinalResultsGraph from '../visualization/FinalResultsGraph.js';
import {calcTotalChol, calcFraminghamBMIModel, calcFraminghamLipidModel, calcReynoldsModel} from '../results/Calculator.js';
import {withRouter} from 'react-router-dom';

class FinalResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      framinghamBMIModelRisk: '',
      framinghamLipidModelRisk: '',
      reynoldsRisk: '',
      finalAverage: '',
    };
    this.localStore = this.localStore.bind(this);
    this.updateValues = this.updateValues.bind(this);
  }

  localStore(name, value) {
    const cachedHits = localStorage.getItem(value);
    if (cachedHits) {
      this.setState({[name]: JSON.parse(cachedHits)});
      return;
    }

    localStorage.setItem(name, JSON.stringify(value));
  }

  updateValues(name, value) {
    this.setState({[name]: value});
    this.localStore(name, value);
  }

  componentDidMount() {
    let framinghamBMIRisk = calcFraminghamBMIModel();
    this.updateValues('framinghamBMIModelRisk', framinghamBMIRisk);

    let framinghamLipidRisk = calcFraminghamLipidModel();
    this.updateValues('framinghamLipidModelRisk', framinghamLipidRisk);

    let reynoldsRisk = calcReynoldsModel();
    this.updateValues('reynoldsRisk', reynoldsRisk);

    let finalAverage = Math.round((framinghamBMIRisk + framinghamLipidRisk + reynoldsRisk)/3);
    this.updateValues('finalAverage', finalAverage);

    console.log('framinghamBMIRisk: ' + framinghamBMIRisk);
    console.log('framinghamLipidRisk: ' + framinghamLipidRisk);
    console.log('reynoldsRisk: ' + reynoldsRisk);
    console.log('finalAverage: ' + finalAverage);

    // get bmi results
    let retrievedBmiResults = localStorage.getItem('bmiResults');
    let bmiResults = JSON.parse(retrievedBmiResults);
    console.log('bmiResults: ' + bmiResults);

    // get cholesterol
    let totalChol = calcTotalChol();
    console.log('totalChol: ' + totalChol);

    // Resing heart rate
    let retrievedBpmresults = localStorage.getItem('bpmResults');
    let bpmResults = JSON.parse(retrievedBpmresults);
    console.log('bpmResults: ' + bpmResults);

    // blood pressure
    let retrievedSbp = localStorage.getItem('sbp');
    let sbp = JSON.parse(retrievedSbp);

    let retrievedDbp = localStorage.getItem('dbp');
    let dbp = JSON.parse(retrievedDbp);
  }

  render() {
    return(
      <div><FinalResultsGraph/></div>
    );
  }
}

export default withRouter(FinalResultsPage);
