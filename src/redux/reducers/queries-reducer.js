const RECEIVE_QUERIES = 'RECEIVE_STORIES';
const RECEIVE_USER = 'RECEIVE_USER'
const defaultState = {
    userQueries: [],
};

const queriesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case RECEIVE_QUERIES:
        return  {userQueries: action.queries};
        case RECEIVE_USER:
        return {userQueries: action.user.queries}

        default:
        return {userQueries: []};
    }
};

export default queriesReducer;