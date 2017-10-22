import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducers from './js/Reducers';

import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'
import Routes from './js/routes';

let store = createStore(reducers);



const App = () => (
  <BrowserRouter>
    <Routes store={store} />
  </BrowserRouter>
)

function render () {
  ReactDOM.render(<App />, document.getElementById('root'));
}

registerServiceWorker();
store.subscribe(render);
render();
