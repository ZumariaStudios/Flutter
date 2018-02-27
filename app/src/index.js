import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import InputBasicPage from './input/InputBasicPage';
import InputBMIPage from './input/InputBMIPage';
import InputSpecificPage from './input/InputSpecificPage';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter><span>
        <Route exact path='/' component={InputBasicPage}/>
        <Route path='/InputBMIPage' component={InputBMIPage}/>
        <Route path='/InputSpecificPage' component={InputSpecificPage}/>
      </span></BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
