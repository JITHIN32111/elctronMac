// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { HashRouter, BrowserRouter } from 'react-router-dom';
// import App from './App';
// import './index.css';

// // Detect if running in Electron
// const isElectron = navigator.userAgent.toLowerCase().includes('electron');
// console.log(isElectron);

// // Use HashRouter for Electron and BrowserRouter otherwise
// const Router = isElectron ? HashRouter : BrowserRouter;

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Router>
//     <App />
    
//   </Router>
// );
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import  store  from './redux/store'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
</Provider>,
)
