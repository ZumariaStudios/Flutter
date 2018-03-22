import React from 'react';
import AppConstants from '../results/AppConstants.js';
import Radial from '../visualization/Radial.js';

class FraminghamLipidModelResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {FraminghamLipidModelRisk: ''};
    this.calcFraminghamLipidModel = this.calcFraminghamLipidModel.bind(this);
    this.localStore = this.localStore.bind(this);
  }

  localStore(name, value) {
    const cachedHits = localStorage.getItem(value);
    if (cachedHits) {
      this.setState({[name]: JSON.parse(cachedHits)});
      return;
    }
}

export default FraminghamLipidModelResults;
