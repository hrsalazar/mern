//Load our root component into the DOM
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
/*ReduxThunk is a lib that allow us to send an action to the store.dispatch 
reaching all the reducers */
import reduxThunk from 'redux-thunk';

import App from './components/App.js';
import reducers from './reducers';

const store = createStore( reducers, {}, applyMiddleware(reduxThunk));

ReactDom.render(
    <Provider store={store}><App /></Provider>,
     document.querySelector('#root')
);
