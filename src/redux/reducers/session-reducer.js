const RECEIVE_USER = 'RECEIVE_USER';
const SIGN_UP = 'SIGN_UP';
const SIGN_IN = 'SIGN_IN';
const defaultState = {
    username: null,
    id: null,
};

const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case RECEIVE_USER:
        return  {...state, username: action.user.username };

        default:
        return {...state};
    }
};

export default usersReducer;