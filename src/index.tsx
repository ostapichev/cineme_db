import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import App from './App';
import {setupStore} from "./redux";


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

