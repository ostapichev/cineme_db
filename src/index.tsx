import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./redux";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={setupStore}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

