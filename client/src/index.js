//Load our root component into the DOM

import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App.js';

ReactDom.render(<App />, document.querySelector('#root'));
