import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from '../src/components/clock';
import Weather from '../src/components/weather';

ReactDOM.render(
  <React.StrictMode>
    <Clock />
    <Weather />
  </React.StrictMode>,
  document.getElementById('root')
);




