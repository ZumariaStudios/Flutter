import React from 'react';
import Radial from '../visualization/Radial.js';
import Button from '../interactiveResults/Button.js';
import {calcTotalChol, calcFraminghamBMIModel, calcFraminghamLipidModel, calcReynoldsModel} from '../results/Calculator.js';
import {withRouter} from 'react-router-dom';

class InteractiveResultsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tempResults: '',
      cholOn: true,
      bloodPressOn: false,
      bpm: false,
      bmi: false,
    };

    this.reCalculateFormulas = this.reCalculateFormulas.bind(this);
    this.selectSection = this.selectSection.bind(this);
  }

  selectSection(name, value) {
    this.setState({[name]: true});
  }

  reCalculateFormulas() {
    let framinghamBMIRisk = calcFraminghamBMIModel();
    let framinghamLipidRisk = calcFraminghamLipidModel();
    let reynoldsRisk = calcReynoldsModel();

    let tempAverage = Math.round((framinghamBMIRisk + framinghamLipidRisk + reynoldsRisk)/3);
    this.setState({tempResults: tempAverage});
  }

  componentDidMount() {
    this.reCalculateFormulas();
  }

  render() {
    //get cholesterol results
    let retrievedCholResults = localStorage.getItem('cholResults');
    let cholResults = JSON.parse(retrievedCholResults);

    //get bpm results
    let retrievedBpmResults = localStorage.getItem('bpmResults');
    let bpmResults = JSON.parse(retrievedBpmResults);

    //get blood pressure results
    let retrievedBloodpressResults = localStorage.getItem('bloodPressResults');
    let bloodPressResults = JSON.parse(retrievedBloodpressResults);

    //get bmi results
    let retrievedBmiResults = localStorage.getItem('bmiResults');
    let bmiResults = JSON.parse(retrievedBmiResults);

    return(
      <div className ="radialGraph">
          <Radial completed={this.state.tempResults}/>
          <Button results={cholResults} label='Cholesterol' selected={this.state.cholOn}/>
      </div>
    );
  }
}

export default withRouter(InteractiveResultsPage);
