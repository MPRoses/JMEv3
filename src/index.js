import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Fonts.css'
import reportWebVitals from './reportWebVitals';
import butter from './butter.js';

let App;
if (window.location.pathname.startsWith('/projects/')) {
  App = require('./AppProjects.js').default;
} else {
  App = require('./AppPCLow.js').default;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

butter.cleanup();
butter.init({
  wrapperDamper: .05
});



root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
