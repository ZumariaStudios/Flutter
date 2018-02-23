import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import InputBasicPage from './InputBasicPage';
import InputBMIPage from './InputBMIPage';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter><span>
        <Route exact path='/' component={InputBasicPage}/>
        <Route path='/InputBMIPage' component={InputBMIPage}/>
      </span></BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
