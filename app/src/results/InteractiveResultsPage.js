import React from 'react';
import Radial from '../visualization/Radial.js';
import {withRouter} from 'react-router-dom';

class InteractiveResultsPage extends React.Component {
  render() {

    // get final percentage
    let retrievedFinalAverage = localStorage.getItem('finalAverage');
    let finalAverage = JSON.parse(retrievedFinalAverage);

    console.log('finalAverage:' + finalAverage);

    return(
      <div className ="radialGraph">
          <div><Radial completed={finalAverage} showPercentage={finalAverage}/></div>
      </div>
    );
  }
}

export default withRouter(InteractiveResultsPage);
