import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './style/app.css';

import {PostContainer} from './containers/PostContainer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render
  (
    <React.StrictMode>
      <PostContainer/>
    </React.StrictMode>
  );

reportWebVitals();