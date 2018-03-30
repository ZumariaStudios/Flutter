import React from 'react';
import BPMGraph from '../visualization/BPMGraph.js';

class BPMResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpmResults: '',
      bpm: '',
    };
    this.calcBPM = this.calcBPM.bind(this);
    this.getResultsMale = this.getResultsMale.bind(this);
    this.getResultsFemale = this.getResultsFemale.bind(this);
    this.localStore = this.localStore.bind(this);
  }

  localStore(name, value) {
    const cachedHits = localStorage.getItem(value);
    if (cachedHits) {
      this.setState({[name]: JSON.parse(cachedHits)});
      return;
    }

    localStorage.setItem(name, JSON.stringify(value));
  }

  getResultsMale(bpm, age, possibleRes) {
    if (age >= 18 && age <= 25) {
      if (bpm >= 49 && bpm <= 61)
        return possibleRes[0];
      else if (bpm > 61 && bpm <= 65)
        return possibleRes[1];
      else if (bpm > 65 && bpm <= 81)
        return possibleRes[2];
      else
        return possibleRes[3];
    } else if (age <= 35){
      if (bpm >= 49 && bpm <= 61)
        return possibleRes[0];
      else if (bpm > 61 && bpm <= 65)
        return possibleRes[1];
      else if (bpm > 65 && bpm <= 81)
        return possibleRes[2];
      else
        return possibleRes[3];
    } else if (age <= 45) {
      if (bpm >= 49 && bpm <= 62)
        return possibleRes[0];
      else if (bpm > 62 && bpm <= 66)
        return possibleRes[1];
      else if (bpm > 66 && bpm <= 82)
        return possibleRes[2];
      else
        return possibleRes[3];
    } else if (age <= 55) {
      if (bpm >= 49 && bpm <= 63)
        return possibleRes[0];
      else if (bpm > 63 && bpm <= 67)
        return possibleRes[1];
      else if (bpm > 67 && bpm <= 83)
        return possibleRes[2];
      else
        return possibleRes[3];
    } else if (age <= 65) {
      if (bpm >= 49 && bpm <= 61)
        return possibleRes[0];
      else if (bpm > 61 && bpm <= 67)
        return possibleRes[1];
      else if (bpm > 67 && bpm <= 81)
        return possibleRes[2];
      else
        return possibleRes[3];
    } else {
      if (bpm >= 49 && bpm <= 61)
        return possibleRes[0];
      else if (bpm > 61 && bpm <= 65)
        return possibleRes[1];
      else if (bpm > 65 && bpm <= 79)
        return possibleRes[2];
      else
        return possibleRes[3];
    }
  }

  getResultsFemale(bpm, age, possibleRes) {
    if (age >= 18 && age <= 25) {
      if (bpm >= 54 && bpm <= 65)
        return possibleRes[0];
      else if (bpm > 65 && bpm <= 69)
        return possibleRes[1];
      else if (bpm > 69 && bpm <= 84)
        return possibleRes[2];
      else
        return possibleRes[3];
    } else if (age <= 35){
      if (bpm >= 49 && bpm <= 64)
        return possibleRes[0];
      else if (bpm > 64 && bpm <= 68)
        return possibleRes[1];
      else if (bpm > 68 && bpm <= 82)
        return possibleRes[2];
      else
        return possibleRes[3];
    } else if (age <= 45) {
      if (bpm >= 49 && bpm <= 64)
        return possibleRes[0];
      else if (bpm > 64 && bpm <= 69)
        return possibleRes[1];
      else if (bpm > 69 && bpm <= 84)
        return possibleRes[2];
      else
        return possibleRes[3];
    } else if (age <= 55) {
      if (bpm >= 49 && bpm <= 65)
        return possibleRes[0];
      else if (bpm > 65 && bpm <= 69)
        return possibleRes[1];
      else if (bpm > 69 && bpm <= 83)
        return possibleRes[2];
      else
        return possibleRes[3];
    } else if (age <= 65) {
      if (bpm >= 49 && bpm <= 64)
        return possibleRes[0];
      else if (bpm > 64 && bpm <= 68)
        return possibleRes[1];
      else if (bpm > 68 && bpm <= 83)
        return possibleRes[2];
      else
        return possibleRes[3];
    } else {
      if (bpm >= 49 && bpm <= 64)
        return possibleRes[0];
      else if (bpm > 64 && bpm <= 68)
        return possibleRes[1];
      else if (bpm > 68 && bpm <= 84)
        return possibleRes[2];
      else
        return possibleRes[3];
    }
  }

  calcBPM() {
    let retrievedSex = localStorage.getItem('sex');
    let sex = JSON.parse(retrievedSex);

    let retrievedAge = localStorage.getItem('age');
    let age = JSON.parse(retrievedAge);

    let retrievedBpm = localStorage.getItem('bpm');
    let bpm = JSON.parse(retrievedBpm);
    this.setState({bpm: bpm});

    let possibleRes = [
      'Excellent',
      'Good',
      'Average',
      'Poor'
    ];

    if (sex === 'gentleman') {
      return this.getResultsMale(bpm, age, possibleRes);
    } else {
      return this.getResultsFemale(bpm, age, possibleRes);
    }
  }

  componentDidMount() {
    let res = this.calcBPM();
    console.log('res: ' +  res);
    this.setState({bpmResults: res}, function() {
      console.log('results state: ' + this.state.results);
      });
    this.localStore('bpmResults', res);
  }

  render() {
    return (
      <div>
        <BPMGraph results={this.state.bpmResults} bmi={this.state.bpm}/>
      </div>
    );
  }
}

export default BPMResults;
