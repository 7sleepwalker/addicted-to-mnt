import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'
import Routes from './js/routes';

const pageContent = {
  heroBanner: {
    videoURL: "sdsad"
  }
};

const App = () => (
  <BrowserRouter>
    <Routes content={pageContent}/>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
