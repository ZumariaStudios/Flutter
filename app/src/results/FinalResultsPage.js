import React from 'react';
import AppConstants from '../results/AppConstants.js';
import FinalResultsGraph from '../visualization/FinalResultsGraph.js';
import {withRouter} from 'react-router-dom';

class FinalResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {FraminghamLipidModelRisk: ''};
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

  render() {
    return(
      <div><FinalResultsGraph/></div>
    );
  }
}

export default withRouter(FinalResultsPage);
