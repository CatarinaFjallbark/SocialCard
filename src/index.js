import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './Store.js'

const target = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
      <div>
        <App />
      </div>
  </Provider>,
  document.querySelector('#root')
);

registerServiceWorker();
