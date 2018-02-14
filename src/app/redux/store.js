// global
import { createStore, applyMiddleware } from 'redux';
// middlewares
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// local
import reducers from './reducers';

// mount the middlewares
const middlewares = [];
// add teh thunk based middleware
middlewares.push(thunk);
// only add the log if running on development
if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
}
// create the store to be used in the app
export default createStore(reducers, applyMiddleware(...middlewares));
