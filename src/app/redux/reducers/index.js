// global
import { combineReducers } from 'redux';
// local
import controller from './controller';

const appReducer = combineReducers({
    controller,
});

export default (state, action) => {
    if (action.type === 'RESET') {
        state = undefined;
    }
    return appReducer(state, action);
};
