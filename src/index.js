import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'
import Routes from './js/routes';

const pageContent = {
  HeroBanner: {
    coverURL: "asdasd",
    videoURL: "sdsad"
  },
  Blog: [{
        id: '0',
        title: 'Week in alps',
        createdAt: '15.10.2017 13:23',
        tags: ['hiking', 'train', 'duo', 'high-moutains', 'autumn'],
        places: [{
          date: '10.10',
          place: 'googlemap?'
        }],
        coverURL: 'www.google.pl',
        gallery: [
          'url',
          'url',
          'url',
          'url'
        ]
  }],
  About: {
    content: 'I like traveling and this is my journal.'
  },
  Error404: {
    content: 'Error404'
  }
};

const App = () => (
  <BrowserRouter>
    <Routes content={pageContent}/>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
