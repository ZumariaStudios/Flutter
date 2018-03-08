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
  }

  weightInMetric() {
    let originalWeight = localStorage.getItem('weight');
    console.log('originalWeight: ' + originalWeight);

    let weightMes = localStorage.getItem('weightMes');
    console.log('weightMes: ' + weightMes);

    let finalWeight;
    if (originalWeight) {
      weightMes === 'lbs' ?
          finalWeight = originalWeight * 0.45 :
          finalWeight = originalWeight;

      console.log('finalWeight: ' + finalWeight);
      this.setState({finalWeight: finalWeight});
    }
  }

  heightInMetric() {
    let originalHeightFst = localStorage.getItem('heightFst');
    console.log('originalHeightFst: ' + originalHeightFst);

    let heightFstMes = localStorage.getItem('heightFstMes');
    console.log('heightFstMes: ' + heightFstMes);

    let originalHeightSnd = localStorage.getItem('heightSnd');
    console.log('originalHeightSnd: ' + originalHeightSnd);

    let finalHeight;
    if (originalHeightFst && originalHeightSnd) {
      heightFstMes === 'ft' ?
          finalHeight = Math.pow((originalHeightFst * 12 + originalHeightSnd) * 0.025) :
          finalHeight = Math.pow(originalHeightFst + originalHeightSnd/100);

      console.log('finalHeight: ' + finalHeight);
      this.setState({finalHeight: finalHeight});
    }
  }

  componentWillMount() {
    this.weightInMetric();
    this.heightInMetric();

    let results = this.finalWeight/this.finalHeight;
    console.log('bmi: ' + results);
    this.setState({bmi: results});
  }

  render() {
    return (
      <div>
      <div><HalfCircle/></div>
      </div>
    )
  }
}

export default withRouter(BMIResultsPage);
