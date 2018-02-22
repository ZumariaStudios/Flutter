import React from 'react';
import ReactDOM from 'react-dom';

import UserInput from './UserInput';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UserInput />, document.getElementById('root'));
registerServiceWorker();
