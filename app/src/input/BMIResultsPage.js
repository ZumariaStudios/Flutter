import React from 'react';
import {withRouter} from 'react-router-dom';
import InputBMIPage from './InputBMIPage.js';
import HalfCircle from '../visualization/HalfCircle.js';


class BMIResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        finalWeight: '',
        finalHeight: '',
        bmi: '',
      }

    this.calcBMI = this.calcBMI.bind(this);
  }

  weightInMetric() {
    let retrievedWeight = localStorage.getItem('weight');
    let originalWeight = JSON.parse(retrievedWeight);

    let retrievedWeightMes = localStorage.getItem('weightMes');
    let weightMes = JSON.parse(retrievedWeightMes);

    var fWeight = 0;
    weightMes === "lbs" ?
        fWeight = (Number(originalWeight) * 0.45) :
        fWeight = originalWeight;

    return fWeight;
    // console.log('finalWeight: ' + fWeight);
    // this.setState({finalWeight: fWeight});
    // console.log('updated weight state: ' + this.state.finalWeight);
  }

  heightInMetric() {
    let retrievedHeightFst = localStorage.getItem('heightFst');
    let originalHeightFst = JSON.parse(retrievedHeightFst);
    console.log('originalHeightFst: ' + originalHeightFst);

    let retrievedHeightMs = localStorage.getItem('heightFstMes');
    let heightFstMes = JSON.parse(retrievedHeightMs);
    console.log('heightFstMes: ' + heightFstMes);

    let retrievedHeightSnd = localStorage.getItem('heightSnd');
    let originalHeightSnd = JSON.parse(retrievedHeightSnd);
    console.log('originalHeightSnd: ' + originalHeightSnd);

    var fHeight = 0;
    heightFstMes === 'ft' ?
        fHeight = Math.pow(
              ((Number(originalHeightFst) * 12 + Number(
              originalHeightSnd)) * 0.025), 2) :
        fHeight = Math.pow((Number(
              originalHeightFst) + Number(
              originalHeightSnd)/100),2);

    return fHeight;
    // console.log('finalHeight: ' + finalHeight);
    // this.setState({finalHeight: finalHeight});
  }

  calcBMI() {
    let weight = this.weightInMetric();
    this.setState({finalWeight: weight});

    let height = this.heightInMetric();


    console.log('final weight state: ' + this.state.finalWeight);
    console.log('final height state: ' + this.state.finalHeight);

    let results = Number(this.state.finalWeight)/Number(this.state.finalHeight);
    console.log('bmi: ' + results);
    this.setState({bmi: results});
  }

  // componentWillMount() {
  //   this.calcBMI();
  // }

  render() {
    return (
      <div>
      <div><HalfCircle/></div>
      </div>
    )
  }
}

export default withRouter(BMIResultsPage);
