import React from 'react';
import ReactDOM from 'react-dom';
/*import './index.css';*/
import App from './App';
import store from "./redux/redux-store"
import * as serviceWorker from './serviceWorker';


export let renderDrow = (options) => {
    ReactDOM.render(<App options={options}
                         dispatch={store.dispatch.bind(store)}

    />, document.getElementById('root'));
    serviceWorker.unregister();

};

renderDrow(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    renderDrow(state)
}
);
