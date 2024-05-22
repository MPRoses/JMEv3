import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Fonts.css'
import reportWebVitals from './reportWebVitals';
import butter from './butter.js';

let App;
if (1) {
  App = require('./AppPCLow.js').default;
} else {
  App = require('./AppPCThree.js').default;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

butter.cleanup();
butter.init({
  wrapperDamper: .016
});



root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
