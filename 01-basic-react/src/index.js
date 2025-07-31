import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
//create a root in virtual dom with element with id root from main dom as reference and store its vdom reference in root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//render <App/> inside root - and then in actual dom

