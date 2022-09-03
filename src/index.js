import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
//Have to wrap in {} aka destructure because not a default export, good for exporting multiple objects


//Using react DOM first from the <App /> function RETRIEVED from app.js, and rendering it inside of the div with id="root" in index.html. index.JS is the medium between app.js and index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
