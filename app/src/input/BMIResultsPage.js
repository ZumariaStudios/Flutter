import React from 'react';
import {withRouter} from 'react-router-dom';
import HalfCircle from '../visualization/HalfCircle.js';


class BMIResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bmi: ''};
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
  }

  heightInMetric() {
    let retrievedHeightFst = localStorage.getItem('heightFst');
    let originalHeightFst = JSON.parse(retrievedHeightFst);

    let retrievedHeightMs = localStorage.getItem('heightFstMes');
    let heightFstMes = JSON.parse(retrievedHeightMs);

    let retrievedHeightSnd = localStorage.getItem('heightSnd');
    let originalHeightSnd = JSON.parse(retrievedHeightSnd);

    var fHeight = 0;
    heightFstMes === 'ft' ?
        fHeight = Math.pow(
              ((Number(originalHeightFst) * 12 + Number(
              originalHeightSnd)) * 0.025), 2) :
        fHeight = Math.pow((Number(
              originalHeightFst) + Number(
              originalHeightSnd)/100),2);

    return fHeight;
  }

  calcBMI() {
    let weight = this.weightInMetric();
    let height = this.heightInMetric();

    let results = Number(weight)/Number(height);
    this.setState({bmi: results}, function() {
      console.log('bmi state: ' + this.state.bmi);
    });

  }

  componentDidMount() {
    this.calcBMI();
  }

  render() {
    return (
      <div>
      <div><HalfCircle bmi={this.state.bmi}/></div>
      </div>
    )
  }
}

export default withRouter(BMIResultsPage);
