import React from 'react';
import ReactDOM from 'react-dom';
import './netflix.css';
import Netflix from './netflixApp/Netflix';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Netflix />
  </BrowserRouter>,
  document.getElementById('root')
);

