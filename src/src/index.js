import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from "./redux/redux-store"
import * as serviceWorker from './serviceWorker';


import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



export let renderDrow = (options) => {

    ReactDOM.render(
        <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
    serviceWorker.unregister();

};

renderDrow(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    renderDrow(state)
}
);
