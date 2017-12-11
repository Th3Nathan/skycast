export const SET_LOCATION = 'SET_LOCATION';

const defaultState = {
    location: {
        latitude: 42.3601,
        longitude: 71.0589,
        name: 'Boston',
    }, 
};

const homeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LOCATION:
        return {...state, location: action.location}
        default:
        return {...state};
    }
};

export default homeReducer;