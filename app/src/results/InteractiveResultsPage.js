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
      bpmOn: false,
      bmiOn: false,
    };

    this.reCalculateFormulas = this.reCalculateFormulas.bind(this);
    this.selectHandlerChol = this.selectHandlerChol.bind(this);
    this.selectHandlerBloodPress = this.selectHandlerBloodPress.bind(this);
    this.selectHandlerBpm = this.selectHandlerBpm.bind(this);
    this.selectHandlerBmi = this.selectHandlerBmi.bind(this);
  }

  selectHandlerChol() {
    this.setState({cholOn: true});
    this.setState({bloodPressOn: false});
    this.setState({bmiOn: false});
    this.setState({bpmOn: false});
  }

  selectHandlerBloodPress() {
    this.setState({bloodPressOn: true});
    this.setState({cholOn: false});
    this.setState({bmiOn: false});
    this.setState({bpmOn: false});
  }

  selectHandlerBpm() {
    this.setState({bpmOn: true});
    this.setState({cholOn: false});
    this.setState({bloodPressOn: false});
    this.setState({bmiOn: false});
  }

  selectHandlerBmi() {
    this.setState({bmiOn: true});
    this.setState({bpmOn: false});
    this.setState({cholOn: false});
    this.setState({bloodPressOn: false});
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
    this.selectHandlerChol()
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
      <div>
          <div className ="radialGraph"><Radial completed={this.state.tempResults}/></div>
          <div className="navContainer">
              <div className="interactiveButton" onClick={this.selectHandlerChol}>
                  <Button results={cholResults} label='Cholesterol' selected={this.state.cholOn}/>
              </div>
              <div className="interactiveButton" onClick={this.selectHandlerBloodPress}>
                  <Button results={bloodPressResults} label='Blood Pressure' selected={this.state.bloodPressOn}/>
              </div>
              <div className="interactiveButton" onClick={this.selectHandlerBpm}>
                  <Button results={bpmResults} label="Resting Heart Rate" selected={this.state.bpmOn}/>
              </div>
              <div className="interactiveButton" onClick={this.selectHandlerBmi}>
                  <Button results={bmiResults} label="BMI" selected={this.state.bmiOn}/>
              </div>
          </div>
      </div>
    );
  }
}

export default withRouter(InteractiveResultsPage);
