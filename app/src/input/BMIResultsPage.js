import React from 'react';
import {withRouter} from 'react-router-dom';
import InputBMIPage from './InputBMIPage.js';
import HalfCircle from '../visualization/HalfCircle.js';


class BMIResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {result: ''}
  }

  // weightInKg() {
  //   let originalWeight = props.weight;
  //   let finalWeight;
  //   if (originalWeight !== 0) {
  //     props.weightMes === 'lbs' ?
  //         finalWeight = originalWeight * 0.45 :
  //         finalWeight = originalWeight;
  //   }
  // }

  render() {
    return (
      <div><HalfCircle/></div>
    )
  }
}

export default withRouter(BMIResultsPage);
