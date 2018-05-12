import React from 'react';
import ReactDOM from 'react-dom';
import VCode from './VCode';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<VCode />, document.getElementById('root'));
registerServiceWorker();
