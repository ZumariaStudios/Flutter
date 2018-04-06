import React from 'react';
import Radial from '../visualization/Radial.js';
import {calcFraminghamBMIModel} from '../results/Calculator.js';

class FraminghamBMIModelResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {heartRisk: ''};
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

  componentDidMount() {
    let riskStatus = calcFraminghamBMIModel();
    console.log('riskStatus: ' + riskStatus);
    this.setState({heartRisk: riskStatus});
    this.localStore('FraminghamBMIModelRisk', riskStatus);
  }

  render() {
    let className = 'low_risk';
    if (this.state.heartRisk > 40 && this.state.heartRisk < 80) {
      className = 'intermediate';
    }
    if (this.state.heartRisk >= 80) {
      className = 'high_risk';
    }

    return(
      <div className ="radialGraph">
          <div className="radialGraph_desktop">
              <Radial completed={this.state.heartRisk} statusClass={className} />
          </div>
      </div>
    );
  }
}

export default FraminghamBMIModelResults;
