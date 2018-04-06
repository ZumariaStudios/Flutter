import React from 'react';
import Radial from '../visualization/Radial.js';
import Button from '../interactiveResults/Button.js';
import InteractiveChol from '../interactiveResults/InteractiveChol.js';
import InteractiveBMI from '../interactiveResults/InteractiveBMI.js';
import {calcBMI, calcTotalChol, calcFraminghamBMIModel, calcFraminghamLipidModel, calcReynoldsModel} from '../results/Calculator.js';
import {withRouter} from 'react-router-dom';
import AppConstants from '../results/AppConstants.js';
import Toggle from 'react-toggle';

class InteractiveResultsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: '',
      triglycerides: '',
      goodChol: '',
      badChol: '',
      crp: '',
      weight: '',
      weightMes: 'lbs',
      heightFst: '',
      heightFstMes: 'ft',
      heightSnd: '',
      heightSndMes: 'in',
      bmi: '',
      smoker: false,
      cholResults: '',
      bpmResults: '',
      bloodPressResults: '',
      bmiResults: '',
      gender: '',
      age: '',
      bmi: '',
      diabetic: '',
      treatingBP: '',
      sbp: '',
      famHistory: '',
      finalAverage: '',
    };

    this.reCalculateFormulas = this.reCalculateFormulas.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChangeHandleChange = this.onChangeHandleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  selectHandler(category) {
    this.setState({active: category});
  }

  handleChange(name, value) {
    this.setState({[name]: value}, function () {
      console.log(name + ': ' + value);
    });
  }

  handleToggle(name, value) {
    const newValue = !value.target.checked;
    console.log('newValue: ' + newValue);
    this.setState({smoker: newValue}, function () {
        console.log('smoker: ' + this.state.smoker)});
    // this.setState({smoker: newValue});
    console.log('smoker new value: ' + this.state.smoker);
  }

  reCalculateFormulas() {
    console.log('Im in re calculate formulas');
    console.log('new weight: ' + this.state.weight);

    let bmi = calcBMI(this.state.weight, this.state.weightMes,
    this.state.heightFst, this.state.heightFstMes, this.state.heightSnd);
    this.setState({bmi: bmi}, function () {
        console.log('new bmi: ' + this.state.bmi)});
    // this.setState({bmi: bmi});

    console.log('smoker before calculating framinghamBMIRisk: ' + this.state.smoker);

    let framinghamBMIRisk = calcFraminghamBMIModel(
      this.state.gender, this.state.age, this.state.bmi, this.state.smoker, this.state.diabetic, this.state.treatingBP,
      this.state.sbp,this.state.triglycerides, this.state.goodChol, this.state.badChol,
      this.state.crp, this.state.famHistory);
    console.log('framinghamBMIRisk: ' + framinghamBMIRisk);

    let framinghamLipidRisk = calcFraminghamLipidModel(this.state.gender, this.state.age, this.state.bmi, this.state.smoker, this.state.diabetic, this.state.treatingBP, this.state.sbp, this.state.triglycerides, this.state.goodChol, this.state.badChol, this.state.crp, this.state.famHistory);
    let reynoldsRisk = calcReynoldsModel(this.state.gender, this.state.age, this.state.bmi, this.state.smoker, this.state.diabetic, this.state.treatingBP, this.state.sbp, this.state.triglycerides, this.state.goodChol, this.state.badChol, this.state.crp, this.state.famHistory);

    let tempAverage = Math.round((framinghamBMIRisk + framinghamLipidRisk + reynoldsRisk)/3);
    this.setState({finalAverage: tempAverage});
    console.log('re calculated final Average: ' + this.state.finalAverage);
  }

  onChangeHandleChange(name, value) {
    if (name === 'smoker') {
      console.log('im in smoker handle change');
      this.handleToggle(name, value);
    } else {
      this.handleChange(name, value);
    }
    this.reCalculateFormulas();
  }

  componentDidMount() {

    this.selectHandler('cholesterol');

    const vars = ['gender',
                  'age',
                  'bmi',
                  'diabetic',
                  'treatingBP',
                  'sbp',
                  'famHistory',
                  'triglycerides',
                  'goodChol',
                  'badChol',
                  'crp',
                  'weight',
                  'weightMes',
                  'heightFst',
                  'heightSnd',
                  'heightFstMes',
                  'heightSndMes',
                  'smoker',
                  'cholResults',
                  'bpmResults',
                  'bloodPressResults',
                  'bmiResults',
                  'finalAverage'];
    let i;
    for (i = 0; i < vars.length; i++) {
      let retrieved = localStorage.getItem(vars[i]);
      let actualVal = JSON.parse(retrieved);
      this.handleChange(vars[i], actualVal);
    }
  }

  render() {

    let details = null;

    if (this.state.active === "cholesterol") {
      details = <InteractiveChol tryglycerides={this.state.tryglycerides}
                                 goodchol={this.state.goodChol}
                                 badChol={this.state.badChol}
                                 cReactiveProteins={this.state.cReactiveProteins}
                                 handleChange={this.onChangeHandleChange}/>
    } else if (this.state.active === "bmi") {
      details = <InteractiveBMI weight={this.state.weight}
                                weightMes={this.state.weightMes}
                                heightFst={this.state.heightFst}
                                heightFstMes={this.state.heightFstMes}
                                heightSnd={this.state.heightSnd}
                                heightSndMes={this.state.heightSndMes}
                                bmiResults={this.state.bmiResults}
                                onChangeHandleChange={this.onChangeHandleChange}
                                smoker={this.state.smoker}/>
    }


    return(
      <div className="interactiveBkg">
          <div className="interactiveTopArea">
              <div className="interacH4"><h4>Your heart risk:</h4></div>
              <div className ="radialGraph"><Radial completed={this.state.finalAverage}/></div>
          </div>
          <div className="grayLine"></div>
          <div className="navContainer">
              <div className="interactiveButton" onClick={()=>{this.setState({active: 'cholesterol'})}}>
                  <Button results={this.state.cholResults} xValue="60" label='Cholesterol' selected={this.state.active === 'cholesterol' ? true : false}/>
              </div>
              <div className="interactiveButton" onClick={()=>{this.setState({active: 'bloodPress'})}}>
                  <Button results={this.state.bloodPressResults} xValue="30" label='Blood Pressure' selected={this.state.active === 'bloodPress' ? true : false}/>
              </div>
              <div className="interactiveButton" onClick={()=>{this.setState({active: 'bpm'})}}>
                  <Button results={this.state.bpmResults} label="Resting Heart Rate" selected={this.state.active === 'bpm' ? true : false}/>
              </div>
              <div className="interactiveButton" onClick={()=>{this.setState({active: 'bmi'})}}>
                  <Button results={this.state.bmiResults} xValue="110" label="BMI" selected={this.state.active === 'bmi' ? true : false}/>
              </div>
          </div>
          {details}
      </div>
    );
  }
}

export default withRouter(InteractiveResultsPage);
