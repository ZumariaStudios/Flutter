import React from 'react';
import BMIGraph from '../visualization/BMIGraph.js';
import { scaleLinear } from 'd3-scale';


class BMIResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bmi: '',
                  bmiResults: '',
                  slightlyTextext: '',
                  rotationDegree: '',
                  };
    this.calcBMI = this.calcBMI.bind(this);
    this.setStateVals = this.setStateVals.bind(this);
    this.getResults = this.getResults.bind(this);
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

  localStore(name, value) {
    const cachedHits = localStorage.getItem(value);
    if (cachedHits) {
      this.setState({[name]: JSON.parse(cachedHits)});
      return;
    }

    localStorage.setItem(name, JSON.stringify(value));
  }

  calcBMI() {
    let weight = this.weightInMetric();
    let height = this.heightInMetric();

    let results = (Number(weight)/Number(height)).toFixed(2);
    this.setState({bmi: results}, function() {
      console.log('bmi state: ' + this.state.bmi);
    });

    this.localStore('bmi', results);
    return results;
  }

  setStateVals(name, value) {
    this.setState({[name]: value});

    if (name === 'bmiResults' || name === 'rotationDegree')
        this.localStore(name, value);
  }

  getResults(results) {
    if (results <= 17.5) {
        this.setStateVals('bmiResults', 'underweight');
    } else if (results <= 19.5){
        this.setStateVals('bmiResults', 'underHealthy');
        this.setStateVals('slightlyTextext', 'Slightly underweight');
    } else if (results <= 25) {
        this.setStateVals('bmiResults', 'healthy');
    } else if (results <= 26) {
        this.setStateVals('bmiResults', 'healthyOver');
        this.setStateVals('slightlyTextext', 'Slightly overweight');
    }else if (results <= 29) {
        this.setStateVals('bmiResults', 'overweight');
    } else if (results <= 31){
        this.setStateVals('bmiResults', 'overObese');
        this.setStateVals('slightlyTextext', 'Slightly obese');
    } else {
        this.setStateVals('bmiResults', 'obese');
    }
  }

  componentDidMount() {
    let bmi = this.calcBMI();

    //set rotation animation
    const rotationDegrees = scaleLinear().domain([15, 36]).range([0, 180]);
    let r = rotationDegrees(bmi);
    const rotationDegree = `rotate(${r})`;
    this.setStateVals('rotationDegree', rotationDegree);

    if (bmi)
      this.getResults(bmi);
  }

  render() {
    return (
      <div className ="bmiGraph">
          <div className="bmiSVG"><BMIGraph results={this.state.bmiResults}
                          rotation={this.state.rotationDegree}
                          bmi={this.state.bmi}
                          slightly={this.state.slightlyTextext}/></div>
      </div>
    )
  }
}

export default BMIResults;
