import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
  
const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    const {createLogger} = require('redux-logger');
    middlewares.push(createLogger());
}

// preloaded state can be what's read from local storage?

const configureStore = (preloadedState = {}) => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(...middlewares)
    );
};

export default configureStore;