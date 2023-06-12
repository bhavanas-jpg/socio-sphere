import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import { makeServer } from "./server";
import { Provider } from 'react-redux';
import {store} from "./store/store";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
    <App />
    </Provider>
    </Router> 
  </React.StrictMode>
);


