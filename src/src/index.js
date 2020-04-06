import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/Options.";
import * as serviceWorker from './serviceWorker';


export let renderDrow = (options) => {
    ReactDOM.render(<App options={options}
                         dispatch={store.dispatch.bind(store)}

    />, document.getElementById('root'));
    serviceWorker.unregister();

};

renderDrow(store.getOptions());
store.subscribe(renderDrow);
