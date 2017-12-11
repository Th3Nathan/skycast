export const SET_LOCATION = 'SET_LOCATION';
const RECEIVE_DATA = 'RECEIVE_DATA';

const defaultState = {
    location: {
        latitude: 42.3601,
        longitude: 71.0589,
        name: 'Boston',
    }, 
    data: null
};

const homeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LOCATION:
        return {...state, location: action.location}
        case RECEIVE_DATA:
        debugger
        return {...state, data: action.data, location: action.query}
        default:
        return {...state};
    }
};

export default homeReducer;
