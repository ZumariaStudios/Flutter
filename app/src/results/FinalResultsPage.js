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
    this.nextSection = this.nextSection.bind(this);
    this.getVal = this.getVal.bind(this);
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

  getVal(name) {
    let retrieved = localStorage.getItem(name);
    let actualVal = JSON.parse(retrieved);
    return actualVal;
  }

  componentDidMount() {
    let gender = this.getVal('gender');
    let age = this.getVal('age');
    let bmi = this.getVal('bmi');
    let smoker = this.getVal('smoker');
    let diabetic = this.getVal('diabetic');
    let treatingBP = this.getVal('treatingBP');
    let sbp = this.getVal('sbp');
    let triglycerides = this.getVal('triglycerides');
    let goodChol = this.getVal('goodChol');
    let badChol = this.getVal('badChol');
    let crp = this.getVal('crp');
    let famHistory = this.getVal('famHistory');

    let results;
    if (crp) {
      results = calcReynoldsModel(gender, age, smoker, sbp,
          triglycerides, goodChol, badChol, crp, famHistory);
      this.updateValues('reynoldsRisk', results);
    } else if (triglycerides && goodChol && badChol){
      results = calcFraminghamLipidModel(gender, age, smoker,
          diabetic, treatingBP, sbp, triglycerides, goodChol, badChol);
      this.updateValues('framinghamLipidModelRisk', results);
    } else {
      results = calcFraminghamBMIModel(gender, age, bmi, smoker,
          diabetic, treatingBP, sbp);
      this.updateValues('framinghamBMIModelRisk', results);
    }

    this.updateValues('finalAverage', results);
  }

  nextSection() {
    this.props.history.push('/InteractiveResultsPage');
  }

  render() {
    // get bmi results
    let bmiResults = this.getVal('bmiResults');

    //check for empty values
    if (bmiResults.length === 0) {
      bmiResults = 'noVals';
    }

    // get cholesterol
    let triglycerides = this.getVal('triglycerides');
    let goodChol = this.getVal('goodChol');
    let badChol = this.getVal('badChol');
    let totalChol = calcTotalChol(goodChol, badChol, triglycerides);

    //check for empty values
    let totalCholResults;

    if (totalChol.length === 0) {
      totalCholResults = 'noVals';
    } else if (totalChol >= 180 && totalChol <= 200) {
      totalCholResults = 'ideal';
    } else if (totalChol > 200 && totalChol <= 239) {
      totalCholResults = 'elevated';
    } else {
      totalCholResults = 'high';
    }

    this.localStore('cholResults', totalCholResults);

    // Resing heart rate
    let bpmResults = this.getVal('bpmResults');

    //check for empty values
    if (bpmResults.length === 0) {
      bpmResults = 'noVals';
    }

    // blood pressure
    let bloodPressResults;
    let sbp = this.getVal('sbp');
    let dbp = this.getVal('dbp');

    //check for empty values
    if (sbp.length === 0 || dbp.length === 0) {
      bloodPressResults = 'noVals';
    } else if (sbp <= 120 && dbp <= 80) {
      bloodPressResults = 'normal';
    } else if (sbp <= 140 && dbp <= 90) {
      bloodPressResults = 'prehypertension';
    } else if (sbp <= 160 && dbp <= 100){
      bloodPressResults = 'stage 1 prehypertension';
    } else {
      bloodPressResults = 'stage 2 prehypertension';
    }

    this.localStore('bloddPressResults', bloodPressResults);

    return(
      <div className="inputPage">
      <div className="top_half">
      <div className ="ResultsBackground">
          <h2>Your heart risk is...</h2>
          <FinalResultsGraph bmiResults={bmiResults}
                              totalCholResults={totalCholResults}
                              bpmResults={bpmResults}
                              bloodPressResults={bloodPressResults}
                              finalAverage={this.state.finalAverage}/>
         <h4>What can you do better?</h4>
        </div>
        </div>
        <div className="bottom_half">
         <form><input
            type='submit'
            value='Continue'
            onClick={this.nextSection}/>
         </form>
        </div>
    </div>
    );
  }
}

export default withRouter(FinalResultsPage);
