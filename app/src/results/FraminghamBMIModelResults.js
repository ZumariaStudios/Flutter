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

    return(
      <div className ="radialGraph">
          <div>
            {this.state.heartRisk >= 40 && this.state.heartRisk <= 80 ?
              <Radial completed={this.state.heartRisk} pathClass="intermediate"/>
              : null}

              {this.state.heartRisk >= 80 ?
                <Radial completed={this.state.heartRisk} pathClass="high_risk"/>
                : null}

                {this.state.heartRisk < 40 ?
                  <Radial completed={this.state.heartRisk} pathClass="low_risk"/>
                  : null}
          </div>
      </div>
    );
  }
}

export default FraminghamBMIModelResults;
