import { createStore } from 'redux'
import reducer from '../reducers'
import throttle from 'lodash/throttle'

// save the state on the local storage html5
const saveState = () => {
    try {
        localStorage.setItem(
            "state", 
            JSON.stringify(store.getState()));
    } catch (e) {
        console.error("error while saving the state on the local storage");
    }
}

// load the state from the local storate html5
const loadState = () => {
    try {
        return JSON.parse(localStorage.getItem("state"));
    } catch (e) {
        console.error("error while loading the state from the local storage");
    }

    return { sessions: {}};
}

// create the store
const store = createStore(
    reducer,
    loadState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// save the state when it changes, at most once every second
store.subscribe(throttle(saveState, 1000));

export default store;