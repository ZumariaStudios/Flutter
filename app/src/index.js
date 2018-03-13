import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import InputBasicPage from './input/InputBasicPage';
import InputBMIPage from './input/InputBMIPage';
import InputSpecificPage from './input/InputSpecificPage';
import InputHeartRatePage from './input/InputHeartRatePage';
import InputBloodPressurePage from './input/InputBloodPressurePage';
import InputBloodChemistryPage from './input/InputBloodChemistryPage';
import SetReminderPage from './input/SetReminderPage';
import PulseInstructionsPage from './visualization/PulseInstructionsPage';
import BPMTimerPage from './visualization/BPMTimerPage.js';

import registerServiceWorker from './registerServiceWorker';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter><span>
        <Route exact path='/' component={InputBasicPage}/>
        <Route path='/InputBMIPage' component={InputBMIPage}/>
        <Route path='/InputSpecificPage' component={InputSpecificPage}/>
        <Route path='/InputHeartRatePage' component={InputHeartRatePage}/>
        <Route path='/InputBloodPressurePage' component={InputBloodPressurePage}/>
        <Route path='/PulseInstructionsPage' component={PulseInstructionsPage}/>
        <Route path='/BPMTimerPage' component={BPMTimerPage}/>
        <Route path='/InputBloodChemistryPage' component={InputBloodChemistryPage}/>
        <Route path='/SetReminderPage' component={SetReminderPage}/>
      </span></BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
