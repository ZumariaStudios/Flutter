import React from 'react';
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
  }

  render() {
    // get bmi results
    let retrievedBmiResults = localStorage.getItem('bmiResults');
    let bmiResults = JSON.parse(retrievedBmiResults);
    console.log('bmiResults: ' + bmiResults);

    //check for empty values
    if (bmiResults.length === 0) {
      bloodPressResults = 'noVals';
    }

    // get cholesterol
    let totalChol = calcTotalChol();
    console.log('totalChol: ' + totalChol);

    //check for empty values
    if (!totalChol) {
      bloodPressResults = 'noVals';
    }

    let totalCholResults;

    if (totalChol >= 180 && totalChol <= 200) {
      totalCholResults = 'ideal';
    } else if (totalChol > 200 && totalChol <= 239) {
      totalCholResults = 'elevated';
    } else {
      totalCholResults = 'high';
    }

    // Resing heart rate
    let retrievedBpmresults = localStorage.getItem('bpmResults');
    let bpmResults = JSON.parse(retrievedBpmresults);
    console.log('bpmResults: ' + bpmResults);

    //check for empty values
    if (bpmResults.length === 0) {
      bloodPressResults = 'noVals';
    }

    // blood pressure
    let retrievedSbp = localStorage.getItem('sbp');
    let sbp = JSON.parse(retrievedSbp);

    let retrievedDbp = localStorage.getItem('dbp');
    let dbp = JSON.parse(retrievedDbp);

    let bloodPressResults;

    //check for empty values
    if (sbp.length === 0 || dbp.length === 0) {
      bloodPressResults = 'noVals';
    }

    if (sbp <= 120 && dbp <= 80) {
      bloodPressResults = 'normal';
    } else if (sbp <= 140 && dbp <= 90) {
      bloodPressResults = 'prehypertension';
    } else if (sbp <= 160 && dbp <= 100){
      bloodPressResults = 'stage 1 prehypertension';
    } else {
      bloodPressResults = 'stage 2 prehypertension';
    }

    return(
      <div className ="ResultsBackground">
          <FinalResultsGraph bmiResults={bmiResults}
                              totalCholResults={totalCholResults}
                              bpmResults={bpmResults}
                              bloodPressResults={bloodPressResults}
                              finalAverage={this.state.finalAverage}/></div>
    );
  }
}

export default withRouter(FinalResultsPage);
