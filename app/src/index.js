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
import InputHeartRateTimerPage from './input/InputHeartRateTimerPage.js';
import FinalResultsPage from './results/FinalResultsPage.js';
import InteractiveResultsPage from './results/InteractiveResultsPage.js';

import registerServiceWorker from './registerServiceWorker';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter><span className = "desktop">
        <Route exact path='/' component={InputBasicPage}/>
        <Route path='/InputBMIPage' component={InputBMIPage}/>
        <Route path='/InputSpecificPage' component={InputSpecificPage}/>
        <Route path='/InputHeartRatePage' component={InputHeartRatePage}/>
        <Route path='/InputBloodPressurePage' component={InputBloodPressurePage}/>
        <Route path='/PulseInstructionsPage' component={PulseInstructionsPage}/>
        <Route path='/InputHeartRateTimerPage' component={InputHeartRateTimerPage}/>
        <Route path='/InputBloodChemistryPage' component={InputBloodChemistryPage}/>
        <Route path='/SetReminderPage' component={SetReminderPage}/>
        <Route path='/FinalResultsPage' component={FinalResultsPage}/>
        <Route path='/InteractiveResultsPage' component={InteractiveResultsPage}/>
      </span></BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
