import { RECEIVE_USER } from '../actions';

const defaultState = {
    error: '',
};

const sessionFormReducer = (state = defaultState, action) => {
    let newState = {...state};
    switch (action.type) {
        case RECEIVE_USER: 
        newState.error = action.user.error || '';
        return newState;
        default:
        return newState;
    }
};

export default sessionFormReducer;