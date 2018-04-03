import React from 'react';
import Radial from '../visualization/Radial.js';
import Button from '../interactiveResults/Button.js';
import InteractiveChol from '../interactiveResults/InteractiveChol.js';
import InteractiveBMI from '../interactiveResults/InteractiveBMI.js';
import {calcTotalChol, calcFraminghamBMIModel, calcFraminghamLipidModel, calcReynoldsModel} from '../results/Calculator.js';
import {withRouter} from 'react-router-dom';
import AppConstants from '../results/AppConstants.js';
import Toggle from 'react-toggle';

class InteractiveResultsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tempResults: '',
      active: '',
      triglycerides: '',
      goodChol: '',
      badChol: '',
      cReactiveProteins: '',
      weight: '',
      weightMes: 'lbs',
      heightFst: '',
      heightFstMes: 'ft',
      heightSnd: '',
      heightSndMes: 'in',
      bmi: '',
      smoker: false,
    };

    this.reCalculateFormulas = this.reCalculateFormulas.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  selectHandler(category) {
    this.setState({active: category});
  }

  handleChange(name, value) {
    this.setState({[name]: value});
    console.log(name + ': ' + value);
  }

  handleToggle(name, value) {
    const newValue = value.target.checked;
    this.setState({[name]: newValue});
    console.log(name + ': ' + newValue);
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
    this.selectHandler('cholesterol');

    //get tryglycerides value
    let retrievedTrig = localStorage.getItem('triglycerides');
    let triglycerides = JSON.parse(retrievedTrig);
    this.handleChange('triglycerides', triglycerides);

    //get goodChol value
    let retrievedGoodChol = localStorage.getItem('goodChol');
    let goodChol = JSON.parse(retrievedGoodChol);
    this.handleChange('goodChol', goodChol);

    //get badChol value
    let retrievedBadChol = localStorage.getItem('badChol');
    let badChol = JSON.parse(retrievedBadChol);
    this.handleChange('badChol', badChol);

    //get c Reactive Proteins value
    let retrievedCReact = localStorage.getItem('cReactiveProteins');
    let cReactiveProteins = JSON.parse(retrievedCReact);
    this.handleChange('cReactiveProteins', cReactiveProteins);

    //get weight
    let retrievedWeight = localStorage.getItem('weight');
    let weight = JSON.parse(retrievedWeight);
    this.handleChange('weight', weight);

    //get weightMes
    let retrievedWeightMes = localStorage.getItem('weightMes');
    let weightMes = JSON.parse(retrievedWeightMes);
    this.handleChange('weightMes', weightMes);

    //get heightFst
    let retrievedHeightFst = localStorage.getItem('heightFst');
    let heightFst = JSON.parse(retrievedHeightFst);
    this.handleChange('heightFst', heightFst);

    //get heightSnd
    let retrievedHeightSnd = localStorage.getItem('heightSnd');
    let heightSnd = JSON.parse(retrievedHeightSnd);
    this.handleChange('heightSnd', heightSnd);

    //get heightFstMes
    let retrievedheightFstMes = localStorage.getItem('heightFstMes');
    let heightFstMes = JSON.parse(retrievedheightFstMes);
    this.handleChange('heightFstMes', heightFstMes);

    //get heightSndMes
    let retrievedheightSndMes = localStorage.getItem('heightSndMes');
    let heightSndMes = JSON.parse(retrievedheightSndMes);
    this.handleChange('heightSndMes', heightSndMes);

    // get smoker
    let retrievedSmoker = localStorage.getItem('smoker');
    let smoker = JSON.parse(retrievedSmoker);
    this.handleChange('smoker', smoker);
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

    let details = null;

    if (this.state.active === "cholesterol") {
      details = <InteractiveChol tryglycerides={this.state.tryglycerides}
                                 goodchol={this.state.goodChol}
                                 badChol={this.state.badChol}
                                 cReactiveProteins={this.state.cReactiveProteins}
                                 handleChange={this.handleChange}/>
    } else if (this.state.active === "bmi") {
      details = <InteractiveBMI weight={this.state.weight}
                                weightMes={this.state.weightMes}
                                heightFst={this.state.heightFst}
                                heightFstMes={this.state.heightFstMes}
                                heightSnd={this.state.heightSnd}
                                heightSndMes={this.state.heightSndMes}
                                bmiResults={bmiResults}
                                handleChange={this.handleChange}
                                handleToggle={this.handleToggle}
                                smoker={this.state.smoker}/>
    }

    return(
      <div className="interactiveBkg">
          <div className="interactiveTopArea">
              <div className="interacH4"><h4>Your heart risk:</h4></div>
              <div className ="radialGraph"><Radial completed={this.state.tempResults}/></div>
          </div>
          <div className="grayLine"></div>
          <div className="navContainer">
              <div className="interactiveButton" onClick={()=>{this.setState({active: 'cholesterol'})}}>
                  <Button results={cholResults} xValue="60" label='Cholesterol' selected={this.state.active === 'cholesterol' ? true : false}/>
              </div>
              <div className="interactiveButton" onClick={()=>{this.setState({active: 'bloodPress'})}}>
                  <Button results={bloodPressResults} xValue="30" label='Blood Pressure' selected={this.state.active === 'bloodPress' ? true : false}/>
              </div>
              <div className="interactiveButton" onClick={()=>{this.setState({active: 'bpm'})}}>
                  <Button results={bpmResults} label="Resting Heart Rate" selected={this.state.active === 'bpm' ? true : false}/>
              </div>
              <div className="interactiveButton" onClick={()=>{this.setState({active: 'bmi'})}}>
                  <Button results={bmiResults} xValue="110" label="BMI" selected={this.state.active === 'bmi' ? true : false}/>
              </div>
          </div>
          {details}
      </div>
    );
  }
}

export default withRouter(InteractiveResultsPage);
