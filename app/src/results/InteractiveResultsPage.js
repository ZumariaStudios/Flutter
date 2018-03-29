import React from 'react';
import Radial from '../visualization/Radial.js';
import {calcTotalChol, calcFraminghamBMIModel, calcFraminghamLipidModel, calcReynoldsModel} from '../results/Calculator.js';
import {withRouter} from 'react-router-dom';

class InteractiveResultsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tempResults: '',
    };

    this.reCalculateFormulas = this.reCalculateFormulas.bind(this);
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
    return(
      <div className ="radialGraph">
          <div><Radial completed={this.state.tempResults}/></div>
      </div>
    );
  }
}

export default withRouter(InteractiveResultsPage);
