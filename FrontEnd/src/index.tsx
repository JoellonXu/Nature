import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index'

const root = document.getElementById('root');
if(root) {
    createRoot(root).render(
     <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
     </React.StrictMode>

    )
}