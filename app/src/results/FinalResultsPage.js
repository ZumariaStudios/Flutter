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


    let framinghamBMIRisk = calcFraminghamBMIModel(gender, age, bmi, smoker, diabetic, treatingBP, sbp, triglycerides, goodChol, badChol, crp, famHistory);
    console.log('framinghamBMIRisk: ' + framinghamBMIRisk);

    this.updateValues('framinghamBMIModelRisk', framinghamBMIRisk);

    let framinghamLipidRisk = calcFraminghamLipidModel(gender, age, bmi, smoker, diabetic, treatingBP, sbp, triglycerides, goodChol, badChol, crp, famHistory);
    this.updateValues('framinghamLipidModelRisk', framinghamLipidRisk);

    let reynoldsRisk = calcReynoldsModel(gender, age, bmi, smoker, diabetic, treatingBP, sbp, triglycerides, goodChol, badChol, crp, famHistory);
    this.updateValues('reynoldsRisk', reynoldsRisk);

    let finalAverage = Math.round((framinghamBMIRisk + framinghamLipidRisk + reynoldsRisk)/3);
    this.updateValues('finalAverage', finalAverage);

    console.log('framinghamBMIRisk: ' + framinghamBMIRisk);
    console.log('framinghamLipidRisk: ' + framinghamLipidRisk);
    console.log('reynoldsRisk: ' + reynoldsRisk);
    console.log('finalAverage: ' + finalAverage);
  }

  nextSection() {
    this.props.history.push('/InteractiveResultsPage');
  }

  render() {
    // get bmi results
    let retrievedBmiResults = localStorage.getItem('bmiResults');
    let bmiResults = JSON.parse(retrievedBmiResults);

    //check for empty values
    if (bmiResults.length === 0) {
      bmiResults = 'noVals';
    }

    // get cholesterol
    let totalChol = calcTotalChol();
    console.log('totalChol: ' + totalChol);

    //check for empty values
    let totalCholResults;

    if (!totalChol) {
      totalCholResults = 'noVals';
    }

    if (totalChol >= 180 && totalChol <= 200) {
      totalCholResults = 'ideal';
    } else if (totalChol > 200 && totalChol <= 239) {
      totalCholResults = 'elevated';
    } else {
      totalCholResults = 'high';
    }

    if (totalCholResults)
      this.localStore('cholResults', totalCholResults);

    // Resing heart rate
    let retrievedBpmresults = localStorage.getItem('bpmResults');
    let bpmResults = JSON.parse(retrievedBpmresults);
    console.log('bpmResults: ' + bpmResults);

    //check for empty values
    let bloodPressResults;
    if (bpmResults.length === 0) {
      bloodPressResults = 'noVals';
    }

    // blood pressure
    let retrievedSbp = localStorage.getItem('sbp');
    let sbp = JSON.parse(retrievedSbp);

    let retrievedDbp = localStorage.getItem('dbp');
    let dbp = JSON.parse(retrievedDbp);

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

    if (bloodPressResults)
      this.localStore('bloddPressResults', bloodPressResults);

    return(
      <div className ="ResultsBackground">
          <h4 className="topSpacing">Your heart risk is...</h4>
          <FinalResultsGraph bmiResults={bmiResults}
                              totalCholResults={totalCholResults}
                              bpmResults={bpmResults}
                              bloodPressResults={bloodPressResults}
                              finalAverage={this.state.finalAverage}/>
         <h4 className="topSpacing">What can you do better?</h4>
         <form><input
            type='submit'
            value='Continue'
            onClick={this.nextSection}/>
         </form>
      </div>
    );
  }
}

export default withRouter(FinalResultsPage);
