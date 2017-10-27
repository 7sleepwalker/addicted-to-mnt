import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {Routes} from './js/routes';
import store from './js/store';
import './styles/index.css';

const App = () => (
  <Provider store={store}>
    <Routes store={store} />
  </Provider>
)

function render () {
  ReactDOM.render(<App />, document.getElementById('root'));
}

registerServiceWorker();
store.subscribe(render);
render();
