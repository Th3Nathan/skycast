export const UPDATE_SESSION_FORM_USERNAME = 'UPDATE_SESSION_FORM_USERNAME';
export const UPDATE_SESSION_FORM_PASSWORD = 'UPDATE_SESSION_FORM_PASSWORD';
export const UPDATE_SESSION_FORM_ERROR = 'UPDATE_SESSION_FORM_ERROR';
export const RECEIVE_USER = 'RECEIVE_USER';
const defaultState = {
    error: '',
    username: '',
    password: '',
    ready: false,
};

const readyCheck = (state)  => {
    if (state.username && state.password){
        return {...state, ready: true};
    } else {
        return {...state, ready: false};
    }
}

const sessionFormReducer = (state = defaultState, action) => {
    let newState = {...state};
    switch (action.type) {
        case UPDATE_SESSION_FORM_USERNAME:
        newState.username = action.username;
        return readyCheck(newState);

        case UPDATE_SESSION_FORM_PASSWORD:
        newState.password = action.password;
        return readyCheck(newState);

        case UPDATE_SESSION_FORM_ERROR:
        newState.error = action.error;
        return readyCheck(newState);

        case RECEIVE_USER: 
        newState.error = action.user.error || '';
        newState.ready = false;
        return newState;
        default:
        return newState;
    }
};

export default sessionFormReducer;