import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import InputBasicPage from './input/InputBasicPage';
import InputBMIPage from './input/InputBMIPage';
import InputSpecificPage from './input/InputSpecificPage';
import InputBPMPage from './input/BMIResultsPage';
import registerServiceWorker from './registerServiceWorker';
import PulseInstructionsPage from './visualization/PulseInstructionsPage';
import BPMTimerPage from './visualization/BPMTimerPage.js';

import './index.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter><span>
        <Route exact path='/' component={InputBasicPage}/>
        <Route path='/InputBMIPage' component={InputBMIPage}/>
        <Route path='/InputSpecificPage' component={InputSpecificPage}/>
        <Route path='/BMIResultsPage' component={InputBPMPage}/>
        <Route path='/PulseInstructionsPage' component={PulseInstructionsPage}/>
        <Route path='/BPMTimerPage' component={BPMTimerPage}/>
      </span></BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
