const RECEIVE_QUERIES = 'RECEIVE_STORIES';
const RECEIVE_USER = 'RECEIVE_USER';
const ADD_QUERY = 'ADD_QUERY';
const defaultState = {
    userQueries: [], 
};

const queriesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case RECEIVE_QUERIES:
        return  {...state, userQueries: action.queries};
        case RECEIVE_USER:
        return {...state, userQueries: action.user.queries}
        case ADD_QUERY:
        return {...state, userQueries: [...(state.userQueries || []), action.query]}
        default:
        return {...state};
    }
};

export default queriesReducer;