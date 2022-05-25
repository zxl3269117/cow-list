import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import requests from './requests.js';

ReactDOM.render(<App requests={requests}/>, document.getElementById('app'));