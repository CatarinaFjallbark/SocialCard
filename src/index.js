import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './Store.js'

ReactDOM.render(

    <App />
    , document.getElementById('root')

);
registerServiceWorker();
